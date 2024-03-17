import { assertHttpStatusCode } from "../assertHttpStatusCode";
import { HttpError } from "./error/http";
import { statusCodeToError } from "./error/statusCodeToError";

export class Repository {
  async get(endpoint: string) {
    try {
      const response = await fetch(`http://localhost/${endpoint}`);
      const status = response.status;
      if (status !== 200) {
        // ステータスコードが仕様外の場合、例外
        assertHttpStatusCode(status);
        throw statusCodeToError(status);
      }

      return response; // 受け取ったデータの確認をしてから返却
    } catch (error) {
      if (error instanceof HttpError) {
        return {
          status: error.status,
          error: error.message,
        };
      }
    }
  }
}
