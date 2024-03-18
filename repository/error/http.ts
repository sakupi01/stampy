export const errors = {
  400: { message: "Invalid Request Error." },
  401: { message: "Unauthorized Error." },
  403: { message: "Forbidden Error." },
  404: { message: "Not Found Error." },
  405: { message: "Method Not Allowed Error." },
  409: { message: "Content Already Exists Error." },
  500: { message: "Internal Server Error." },
  520: { message: "Unknown Error." },
};

export type Errors = typeof errors;

export type ErrorStatus = keyof Errors;

export type ErrorMessage = {
  [K in ErrorStatus]: Errors[K]["message"];
}[ErrorStatus];

export type ErrorType = { message: ErrorMessage; status: ErrorStatus };

export class HttpError extends Error {
  message: ErrorMessage;
  status: ErrorStatus = 500;

  constructor(status: ErrorStatus) {
    super(errors[status].message);
    this.message = errors[status].message;
    this.status = status;
  }
}

export class BadRequestError extends HttpError {
  constructor() {
    super(400);
  }
}
export class UnAuthorizedError extends HttpError {
  constructor() {
    super(401);
  }
}
export class ForbiddenError extends HttpError {
  constructor() {
    super(403);
  }
}
export class NotFoundError extends HttpError {
  constructor() {
    super(404);
  }
}
export class AlreadyExistError extends HttpError {
  constructor() {
    super(409);
  }
}
export class MethodNotAllowedError extends HttpError {
  constructor() {
    super(405);
  }
}
export class InternalServerError extends HttpError {
  constructor() {
    super(500);
  }
}
export class UnknownError extends HttpError {
  constructor() {
    super(520);
  }
}
