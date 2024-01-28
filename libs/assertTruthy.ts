type AssertTruthy<Type> = (value: Type) => asserts value is NonNullable<Type>;

const ERROR_MESSAGE_NULLABLE =
  'Expected value should not be falsy (undefined, false, 0, "", NaN).';

export const assertTruthy: AssertTruthy<unknown> = (value) => {
  if (!value) {
    throw new Error(ERROR_MESSAGE_NULLABLE);
  }
};
