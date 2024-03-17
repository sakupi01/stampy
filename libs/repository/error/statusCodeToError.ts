import {
  AlreadyExistError,
  BadRequestError,
  ErrorStatus,
  ForbiddenError,
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  UnAuthorizedError,
  UnknownError,
} from "./http";

export const statusCodeToError = (statusCode: ErrorStatus): Error => {
  switch (statusCode) {
    case 400:
      return new BadRequestError();
    case 401:
      return new UnAuthorizedError();
    case 403:
      return new ForbiddenError();
    case 404:
      return new NotFoundError();
    case 409:
      return new AlreadyExistError();
    case 405:
      return new MethodNotAllowedError();
    case 500:
      return new InternalServerError();
    default:
      return new UnknownError();
  }
};
