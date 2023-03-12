import {useTokenStore} from "~~/stores/useTokenStore";

export const createApi = (host: string) => {
  const tokenStore = useTokenStore();
  const token = useToken();
  const refreshToken = useRefreshToken();
  const accountId = useAccountId();

  return {
    rawRequest(path: string, options: RequestInit, shouldRefreshToken = true): Promise<Response> {
      return fetch(host + path, {
        ...options,
        headers: {
          ...options.headers,
          ...this.getHeaders()
        }
      }).then((response) => {
        if (response.status === 401 && shouldRefreshToken) {
          return this.refreshToken().then(() => this.rawRequest(path, options, false));
        }
        return response;
      });
    },
    async get<T>(path: string, isPublic = false): Promise<T> {
      const response = await this.rawRequest(path, {
        method: "GET"
      }, !isPublic);
      if (!response.ok) {
        throw new ResponseError(await response.text(), response);
      }
      return await response.json();
    },
    async post<T>(path: string, body: any, isPublic = false): Promise<T> {
      const response = await this.rawRequest(path, {
        method: "POST",
        body: JSON.stringify(body)
      }, !isPublic);
      if (!response.ok) {
        throw new ResponseError(await response.text(), response);
      }
      return await response.json();
    },
    async refreshToken() {
      console.debug("Refreshing token");
      const response = await fetch(host + "/v1/public/refresh-token", {
        method: "POST",
        headers: this.getHeaders(),
        body: JSON.stringify({
          refreshToken: refreshToken.value,
          refreshTokenId: refreshToken.value,
          accountId: accountId.value
        })
      });
      if (response.status === 401) {
        // logout
        console.debug("Refresh token is invalid, clearing tokens");
        token.value = "";
        refreshToken.value = "";
        accountId.value = "";
        throw new UnauthorizedError("Refresh token is invalid");
      }
      if (!response.ok) {
        throw new ResponseError(await response.text(), response);
      }
      token.value = response.headers.get("X-Auth-Token") ?? "";
    },
    getHeaders() {
      console.log("token", token.value);
      return {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (token.value ?? ""),
      }
    }
  };
}

export type Api = ReturnType<typeof createApi>;

export class ResponseError extends Error {
  constructor(message: string, public response: Response) {
    super(message);
    this.name = "ResponseError";
  }

  get status() {
    return this.response.status;
  }
}

export class UnauthorizedError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "UnauthorizedError";
  }
}
