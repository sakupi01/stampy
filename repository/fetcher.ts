/** @format */

import { assertNonNullable } from "@/libs/assertNonNullable";
import * as SecureStore from "expo-secure-store";
import { assertHttpStatusCode } from "./assertHttpStatusCode";
import { statusCodeToError } from "./error/statusCodeToError";
import { resultError, resultOk } from "./result";

function isStatusCode200Series(statusCode: number) {
  return /^2\d{2}$/.test(String(statusCode));
}

export type NoContent = {
  message: "no content";
};

const withToken = async <T>(endpoint: string, options?: RequestInit) => {
  const token = await SecureStore.getItemAsync("token");
  assertNonNullable(token);
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_BASE_URL}/auth${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );

  // 200番台以外のステータスコードの場合、例外
  const status = response.status;
  if (!isStatusCode200Series(status)) {
    assertHttpStatusCode(status);
    return resultError(statusCodeToError(status));
  }
  if (response.status === 204) {
    return resultOk<T>({} as T);
  }
  const data = await response.json();
  return resultOk<T>(data);
};

const withoutToken = async <T>(endpoint: string, options?: RequestInit) => {
  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_BASE_URL}${endpoint}`,
    {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  // 200番台以外のステータスコードの場合、例外
  const status = response.status;
  if (!isStatusCode200Series(status)) {
    assertHttpStatusCode(status);
    return resultError(statusCodeToError(status));
  }
  const data = await response.json();
  return resultOk<T>(data);
};

export const fetcher = {
  withToken,
  withoutToken,
};
