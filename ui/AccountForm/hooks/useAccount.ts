import { useAppSelector } from "@/libs/AsyncStorage/store";
import { assertNonNullable } from "@/libs/assertNonNullable";

export const useAccount = () => {
  const user = useAppSelector((state) => state.auth.user);
  assertNonNullable(user);
  const formData = [
    {
      id: "0",
      label: "プロフィール画像",
      data: user.avatarUrl,
      formLabel: "avatarUrl",
    },
    {
      id: "1",
      label: "ユーザID",
      data: user.id,
      formLabel: undefined,
    },
    {
      id: "2",
      label: "ユーザ名",
      data: user.username,
      formLabel: "username",
    },
    {
      id: "3",
      label: "メールアドレス",
      data: user.email,
      formLabel: "email",
    },
  ];
  return { formData };
};
