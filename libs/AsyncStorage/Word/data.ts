export const WORD_DICTIONARY = {
  "stampy.word.setting": "設定",
  "stampy.word.cancel": "いいえ",
  "stampy.word.ok": "はい",
  "stampy.word.back": "戻る",
  "stampy.word.save": "保存",
  "stampy.word.delete": "削除",
  "stampy.word.add": "追加",
  "stampy.word.edit": "編集",
  "stampy.word.name": "名前",
  "stampy.word.password": "パスワード",
  "stampy.word.change.password": "パスワード変更",
  "stampy.word.email": "メールアドレス",
  "stampy.word.send.email": "メールを送信",
  "stampy.word.login": "ログイン",
  "stampy.word.logout": "ログアウト",
  "stampy.word.ready.stamp": "スタンプをもらう\n準備ができましたか？",
  "stampy.word.close": "閉じる",
  "stampy.word.given.stamp": "日目にもらったスタンプ",
} as const satisfies Record<string, string>;

export type WordDictionaryKeys = keyof typeof WORD_DICTIONARY;
