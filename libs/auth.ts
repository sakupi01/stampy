import { Repository } from "@/repository/api";
import { Err, Ok } from "@/repository/result";
import { SignInFormType } from "@/schema/signIn";
import { SignUpFormType } from "@/schema/signUp";
import { User } from "@/types";
import { hashString } from "./hash";

export async function getUser(): Promise<Err<Error> | Ok<User>> {
  // get user info
  // /user
  const repository = new Repository();
  const res = await repository.get("/user");
  return res;
}

async function registerUser({
  username,
  email,
  hashedPassword,
}: { username: string; email: string; hashedPassword: string }): Promise<
  Err<Error> | Ok<{ token: string }>
> {
  // register and return user from database
  // /signup
  const repository = new Repository();
  const res = await repository.post(
    "/signup",
    JSON.stringify({ username, email, password: hashedPassword }),
    false,
  );

  if (!res.ok) {
    return res;
  }

  return res;
}

async function login({
  email,
  hashedPassword,
}: { email: string; hashedPassword: string }): Promise<
  Err<Error> | Ok<{ token: string }>
> {
  // get user from database
  // /login
  const repository = new Repository();
  const res = await repository.post(
    "/login",
    JSON.stringify({ email, password: hashedPassword }),
    false,
  );

  if (!res.ok) {
    return res;
  }

  return res;
}

async function checkUser(
  email: string,
): Promise<Err<Error> | Ok<{ doesUserExist: boolean }>> {
  // get user from database
  // /check-user

  const repository = new Repository();
  const res = await repository.post(
    "/check-email",
    JSON.stringify({ email }),
    false,
  );

  if (!res.ok) {
    return res;
  }

  return res;
}

async function signIn(credentials: SignInFormType) {
  const { email, password } = credentials;
  const hashedPassword = await hashString(password);
  const res = await login({ email, hashedPassword });
  if (!res.ok) {
    return res;
  }
  return {
    ok: true,
    val: res.val.token,
    err: null,
  };
}

async function signUp(credentials: SignUpFormType) {
  const { username, email, password } = credentials;

  const doesUserExist = await checkUser(email);
  if (!doesUserExist.ok) {
    return doesUserExist;
  }
  if (doesUserExist.val.doesUserExist) {
    // -> to sign in
    return {
      ok: false,
      val: null,
      err: new Error("User already exists"),
    } as Err<Error>;
  }
  const hashedPassword = await hashString(password);
  const res = await registerUser({ username, email, hashedPassword });
  if (!res.ok) {
    return res;
  }
  return {
    ok: true,
    val: res.val.token,
    err: null,
  };
}

export { signIn, signUp };
