import {
  StringSchema,
  blob,
  email,
  maxLength,
  maxSize,
  mimeType,
  minLength,
  regex,
  string,
} from "valibot";

const emailSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(255, "255文字以内で入力してください"),
  email("メールアドレスの形式で入力してください"),
]);

const userNameSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(20, "入力値が長すぎます"),
]);

const passwordSchema: StringSchema<string> = string([
  minLength(8, "8文字以上で入力してください"),
  maxLength(30, "入力値が長すぎます"),
  regex(/[a-z]/, "英字小文字が含まれていません"),
  regex(/[A-Z]/, "英字大文字が含まれていません"),
  regex(/[0-9]/, "数字が含まれていません"),
]);

const messageSchema: StringSchema<string> = string([
  minLength(1, "入力が必須の項目です"),
  maxLength(4098, "入力値が長すぎます"),
]);

const ImageSchema = blob("Please select an image file.", [
  mimeType(
    ["image/jpeg", "image/png"],
    "JPEG または PNG 形式の画像ファイルを選択してください",
  ),
  maxSize(1024 * 1024 * 10, "10MB 以下の画像ファイルを選択してください"),
]);

export {
  emailSchema,
  userNameSchema,
  passwordSchema,
  messageSchema,
  ImageSchema,
};
