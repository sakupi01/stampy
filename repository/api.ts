import { fetcher } from "./fetcher";

export class Repository {
  async get<T>(endpoint: string, body?: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken<T>(endpoint, {
          method: "GET",
          body: body,
        })
      : await fetcher.withoutToken<T>(endpoint, {
          method: "GET",
          body: body,
        });
    return res;
  }
  async put<T>(endpoint: string, body?: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken<T>(endpoint, {
          method: "PUT",
          body: body,
        })
      : await fetcher.withoutToken<T>(endpoint, {
          method: "PUT",
          body: body,
        });
    return res;
  }
  async post<T>(endpoint: string, body: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken<T>(endpoint, {
          method: "POST",
          body: body,
        })
      : await fetcher.withoutToken<T>(endpoint, {
          method: "POST",
          body: body,
        });
    return res;
  }
}
