import { SignInFormType } from "@/schema/signIn";
import { SignUpFormType } from "@/schema/signUp";
import { User } from "@/types";
import * as Crypto from "expo-crypto";

async function registerUser({
  username,
  email,
  hashedPassword,
}: { username: string; email: string; hashedPassword: string }): Promise<
  { sessionId: string; user: User } | undefined
> {
  // register and return user from database
  return {
    sessionId: "123-xxxxx",
    user: {
      id: "1",
      username: "user",
      email: "mail",
      avatarUrl: "url",
    },
  };
}

async function getUser({
  email,
  password,
}: SignInFormType): Promise<{ sessionId: string; user: User } | undefined> {
  // get user from database
  return {
    sessionId: "123-xxxxx",
    user: {
      id: "1",
      username: "user",
      email: "mail",
      avatarUrl: "url",
    },
  };
}

async function checkUser(email: string): Promise<boolean | undefined> {
  // get user from database
  return;
}

async function signIn(credentials: SignInFormType) {
  try {
    const data = await getUser(credentials);
    if (!data) {
      throw new Error("ユーザが登録されていません");
    }
    return data;
  } catch (error: unknown) {
    throw new Error("Internal Server Error");
  }
}

async function signUp(credentials: SignUpFormType) {
  try {
    const { username, email, password } = credentials;

    const doesUserExist = await checkUser(username);
    if (doesUserExist) {
      throw new Error("このメールアドレスのユーザは既に登録されています.");
      // -> to sign in
    }

    const hashedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password,
    );
    const data = await registerUser({ username, email, hashedPassword });
    if (!data) {
      throw new Error("ユーザの登録に失敗しました");
    }
    return data;
  } catch (error: unknown) {
    throw new Error("Internal Server Error");
  }
}

export { signIn, signUp };
