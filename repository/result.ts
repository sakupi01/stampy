export type UsecaseResult<T, E extends Error | null> = Ok<T> | Err<E>;

export type Ok<T> = {
  readonly ok: true;
  readonly val: T;
  readonly err: null;
};

export type Err<E extends Error | null> = {
  readonly ok: false;
  readonly val: null;
  readonly err: E;
};

export const resultOk = <T>(val: T): Ok<T> => ({
  ok: true,
  val,
  err: null,
});

export const resultError = <E extends Error | null>(err: E): Err<E> => ({
  ok: false,
  val: null,
  err,
});
