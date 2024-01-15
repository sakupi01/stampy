import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
export const DATA: Array<Notification | Letter> = [
  {
    type: "notification",
    id: "1",
    title: "テキストアイテム",
    stamp: "🌟",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "text",
  },
  {
    type: "notification",
    id: "2",
    title:
      "ダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "dialog",
  },
  {
    type: "notification",
    id: "3",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "dialog",
  },
  {
    type: "notification",
    id: "4",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "dialog",
  },
  {
    type: "notification",
    id: "5",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
    currentDay: 1,
    hrefPrefix: "hrefPrefix",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "dialog",
  },
];

export const DATA_LETTER: Array<Notification | Letter> = [
  {
    type: "letter",
    id: "1",
    title: "「カードタイトル」への完走レター",
    stamp: "🌟",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "2",
    title: "「カードタイトル」への完走レター",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🌟",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "3",
    title: "「カードタイトル」への完走レター",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🌟",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "4",
    title: "「カードタイトル」への完走レター",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🌟",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: false,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
  {
    type: "letter",
    id: "5",
    title: "「カードタイトル」への完走レター",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "🌟",
    hrefPrefix: "/letter",
    sender: {
      id: "1",
      username: "username",
      email: "email",
    },
    receiver: {
      id: "1",
      username: "username",
      email: "email",
    },
    read: true,
    createdAt: "createdAt",
    sendAt: "sendAt",
    listType: "link",
  },
];
