import {defineStore} from "pinia";

export const useTokenStore = defineStore("token", {
  state: () => ({
    _token: readFromCookie("token"),
    _refreshToken: readFromCookie("refreshToken"),
    _refreshTokenId: readFromCookie("refreshTokenId"),
    _accountId: readFromCookie("accountId")
  }),
  getters: {
    token(state) {
      return state._token;
    },
    refreshToken(state) {
      return state._refreshToken;
    },
    refreshTokenId(state) {
      return state._refreshTokenId;
    },
    accountId(state) {
      return state._accountId;
    }
  },
  actions: {
    setToken(token: string) {
      this._token = token;
      writeToCookie("token", token);
    },
    setRefreshToken(refreshToken: string) {
      this._refreshToken = refreshToken;
      writeToCookie("refreshToken", refreshToken);
    },
    setRefreshTokenId(refreshTokenId: string) {
      this._refreshTokenId = refreshTokenId;
      writeToCookie("refreshTokenId", refreshTokenId);
    },
    setAccountId(accountId: string) {
      this._accountId = accountId;
      writeToCookie("accountId", accountId);
    },
    clearToken() {
      this._token = null;
      this._refreshToken = null;
      this._refreshTokenId = null;
      this._accountId = null;
      writeToCookie("token", null);
      writeToCookie("refreshToken", null);
      writeToCookie("refreshTokenId", null);
      writeToCookie("accountId", null);
    }
  }
});

const MAX_AGE = 60 * 60 * 24 * 365 * 2; // 2 years, chrome is capped at 400 days

function readFromCookie(name: string) {
  return useCookie(name, {
    secure: true,
    maxAge: MAX_AGE,
  }).value;
}

function writeToCookie(name: string, value: string | null) {
  useCookie(name, {
    secure: true,
    maxAge: MAX_AGE,
  }).value = value;
}
