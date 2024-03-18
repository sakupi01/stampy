import { fetcher } from "./fetcher";

export class Repository {
  async get(endpoint: string, withToken?: boolean) {
    const res = withToken
      ? await fetcher.withToken(endpoint)
      : await fetcher.withoutToken(endpoint);
    return res;
  }
  async put(endpoint: string, body: BodyInit, withToken?: boolean) {
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
  async post(endpoint: string, body: BodyInit, withToken?: boolean) {
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
