const user = {
  id: "123stampy",
  username: "Stampy",
  email: "stampy@email.com",
  avatarUrl:
    "https://images.unsplash.com/photo-1531384441138-2736e62e0919?&w=100&h=100&dpr=2&q=80",
};
const listData = [
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

export { user, listData };
