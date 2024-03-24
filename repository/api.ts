import { fetcher } from "./fetcher";

export class Repository {
  async get(endpoint: string, body?: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken(endpoint, {
          method: "GET",
          body: body,
        })
      : await fetcher.withoutToken(endpoint, {
          method: "GET",
          body: body,
        });
    return res;
  }
  async put(endpoint: string, body?: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken(endpoint, {
          method: "PUT",
          body: body,
        })
      : await fetcher.withoutToken(endpoint, {
          method: "PUT",
          body: body,
        });
    return res;
  }
  async post(endpoint: string, body: BodyInit, withToken = true) {
    const res = withToken
      ? await fetcher.withToken(endpoint, {
          method: "POST",
          body: body,
        })
      : await fetcher.withoutToken(endpoint, {
          method: "POST",
          body: body,
        });
    return res;
  }
}
