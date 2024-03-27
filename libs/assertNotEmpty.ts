export const isEmpty = (value: object) => {
  return Object.keys(value).length === 0;
};
type AssertNonEmpty = <Expected>(
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  value: Expected | {},
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
) => asserts value is (Expected | {}) & Expected;

export const assertNonEmpty: AssertNonEmpty = (value) => {
  if (Object.keys(value as object).length === 0) {
    throw new Error("Object cannot be empty");
  }
};
