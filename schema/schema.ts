import {
  BooleanSchema,
  StringSchema,
  UnionSchema,
  blob,
  boolean,
  email,
  maxLength,
  maxSize,
  mimeType,
  minLength,
  regex,
  string,
  union,
  value,
} from "valibot";

const emailSchema: StringSchema<string> = string(
  "メールアドレスを入力してください",
  [
    minLength(1, "入力が必須の項目です"),
    maxLength(255, "255文字以内で入力してください"),
    email("メールアドレスの形式で入力してください"),
  ],
);

const userNameSchema: StringSchema<string> = string(
  "ユーザ名を入力してください",
  [minLength(1, "入力が必須の項目です"), maxLength(20, "入力値が長すぎます")],
);

const passwordSchema: StringSchema<string> = string(
  "パスワードを入力してください",
  [
    minLength(8, "8文字以上で入力してください"),
    maxLength(30, "入力値が長すぎます"),
    regex(/[a-z]/, "英字小文字が含まれていません"),
    regex(/[A-Z]/, "英字大文字が含まれていません"),
    regex(/[0-9]/, "数字が含まれていません"),
  ],
);

const passwordConfirmSchema: StringSchema<string> = string(
  "確認用パスワードを入力してください",
  [minLength(1, "入力が必須の項目です")],
);

const messageSchema: StringSchema<string> = string(
  "メッセージを入力してください",
  [minLength(1, "入力が必須の項目です"), maxLength(4098, "入力値が長すぎます")],
);

const ImageSchema = blob("画像を選択してください", [
  mimeType(
    ["image/jpeg", "image/png"],
    "JPEG または PNG 形式の画像ファイルを選択してください",
  ),
  maxSize(1024 * 1024 * 10, "10MB 以下の画像ファイルを選択してください"),
]);

const stampSchema: StringSchema<string> = string("スタンプを選んでください", [
  minLength(1, "入力が必須の項目です"),
  // emoji("絵文字を選択してください"),
]);

const stampCardTitleSchema: StringSchema<string> = string(
  "タイトルを入力してください",
  [minLength(1, "入力が必須の項目です"), maxLength(20, "入力値が長すぎます")],
);

const startDateSchema: StringSchema<string> = string("日付を選択してください", [
  minLength(1, "入力が必須の項目です"),
]);
const endDateSchema: StringSchema<string> = string("日付を選択してください", [
  minLength(1, "入力が必須の項目です"),
]);

const themeSchema: StringSchema<string> = string("テーマを選択してください", [
  minLength(1, "入力が必須の項目です"),
]);

const isStampySchema: BooleanSchema<boolean> = boolean(
  "スタンプを押すかどうかを選択してください",
);

const receiverSchema: UnionSchema<
  (BooleanSchema<boolean> | StringSchema<string>)[],
  boolean | string
> = union([string([value("", "Stampyを選択していません")]), emailSchema]);

export {
  emailSchema,
  userNameSchema,
  passwordSchema,
  messageSchema,
  ImageSchema,
  stampSchema,
  stampCardTitleSchema,
  startDateSchema,
  endDateSchema,
  themeSchema,
  isStampySchema,
  receiverSchema,
  passwordConfirmSchema,
};
