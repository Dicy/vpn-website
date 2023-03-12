export const createApi = (host: string) => {
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
    async get<T>(path: string): Promise<T> {
      const response = await this.rawRequest(path, {
        method: "GET"
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      return await response.json();
    },
    async post<T>(path: string, body: any): Promise<T> {
      const response = await this.rawRequest(path, {
        method: "POST",
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        throw new Error(await response.text());
      }
      return await response.json();
    },
    async refreshToken() {
      console.debug("Refreshing token");
      const response = await fetch(host + "/v1/refresh-token", {
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
        throw new Error("Refresh token is invalid");
      }
      if (!response.ok) {
        throw new Error("Server error");
      }
      token.value = response.headers.get("X-Auth-Token") ?? "";
    },
    getHeaders() {
      return {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + (token.value ?? ""),
      }
    }
  };
}

export type Api = ReturnType<typeof createApi>;
