import { ErrorStatus } from "./repository/error/http";

type AssertHttpError<Type extends ErrorStatus> = (
  value: Type | number,
) => asserts value is Type;

const ERROR_MESSAGE_HTTPERROR =
  "Expected http status code should be 400, 401, 403, 404, 405, 409, 500, or 520.";

export const assertHttpStatusCode: AssertHttpError<ErrorStatus> = (value) => {
  if (![400, 401, 403, 404, 405, 409, 500, 520].includes(value)) {
    throw new Error(ERROR_MESSAGE_HTTPERROR);
  }
};
