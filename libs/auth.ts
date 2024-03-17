import { SignInFormType } from "@/schema/signIn";
import { SignUpFormType } from "@/schema/signUp";
import { User } from "@/types";
import * as Crypto from "expo-crypto";

async function getUser(token: string): Promise<User | undefined> {
  // get user info by token
  // /get/user
  const res = {
    id: "",
    username: "",
    email: "",
    avatarUrl: "",
  };
  return res;
}

async function registerUser({
  username,
  email,
  hashedPassword,
}: { username: string; email: string; hashedPassword: string }): Promise<
  { token: string } | undefined
> {
  // register and return user from database
  // /signup
  const res = {
    token: "123-xxxxx",
  };
  return res;
}

async function login({
  email,
  hashedPassword,
}: { email: string; hashedPassword: string }): Promise<
  { token: string } | undefined
> {
  // get user from database
  // /login
  const res = {
    token: "123-xxxxx",
  };
  return res;
}

async function checkUser(email: string): Promise<boolean | undefined> {
  // get user from database
  // /check-user
  const res = { doesUserExist: false };
  return res.doesUserExist;
}

async function signIn(credentials: SignInFormType) {
  try {
    const { email, password } = credentials;
    const hashedPassword = await Crypto.digestStringAsync(
      Crypto.CryptoDigestAlgorithm.SHA256,
      password,
    );
    const res = await login({ email, hashedPassword });
    if (!res) {
      throw new Error("ユーザが登録されていません");
    }
    const data = await getUser(res.token);
    if (!data) {
      throw new Error("ユーザ情報の取得に失敗しました");
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
    const res = await registerUser({ username, email, hashedPassword });
    if (!res) {
      throw new Error("ユーザの登録に失敗しました");
    }
    const data = await getUser(res.token);
    if (!data) {
      throw new Error("ユーザ情報の取得に失敗しました");
    }
    return data;
  } catch (error: unknown) {
    throw new Error("Internal Server Error");
  }
}

export { signIn, signUp };
