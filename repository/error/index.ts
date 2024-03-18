import { MethodNotAllowedError, UnknownError } from "./http";
import {
  AlreadyExistError,
  BadRequestError,
  ForbiddenError,
  InternalServerError,
  NotFoundError,
  UnAuthorizedError,
} from "./http";

export const isBadRequestError = (e: unknown): e is BadRequestError =>
  e instanceof BadRequestError;
export const isUnAuthorizedError = (e: unknown): e is UnAuthorizedError =>
  e instanceof UnAuthorizedError;
export const isForbiddenError = (e: unknown): e is ForbiddenError =>
  e instanceof ForbiddenError;
export const isNotFoundError = (e: unknown): e is NotFoundError =>
  e instanceof NotFoundError;
export const isAlreadyExistError = (e: unknown): e is AlreadyExistError =>
  e instanceof AlreadyExistError;
export const isMethodNotAllowedError = (
  e: unknown,
): e is MethodNotAllowedError => e instanceof MethodNotAllowedError;
export const isInternalServerError = (e: unknown): e is InternalServerError =>
  e instanceof InternalServerError;
export const isUnknownError = (e: unknown): e is UnknownError =>
  e instanceof UnknownError;
