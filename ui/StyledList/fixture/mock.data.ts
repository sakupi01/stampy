import { Letter } from "@/types/Letter";
import { Notification } from "@/types/Notification";
export const DATA: Array<Notification | Letter> = [
  {
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
    id: "2",
    title:
      "ダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテムダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
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
    id: "3",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
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
    id: "4",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
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
    id: "5",
    title: "ダイアログアイテム",
    content:
      "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    stamp: "stamp",
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
