## このアプリについて

このアプリは The New York Times API から取得した記事の一覧を表示するアプリです。
キーワード検索とフィルタリングによって記事をリアルタイムに検索できます。

## 使用技術

- [Next.js (15.3.3)](https://nextjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## パッケージインストール

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

## The New York Times APIキーの設定
1. The New York Times Developerアカウントを作成
https://developer.nytimes.com/get-started にてアカウントを作成し、ログインする

2. APIキーの発行  
アカウントIDのプルダウンからAppsを選択し、アプリを新しく登録してAPIキーをコピー

3. .env.localファイルを作成し、NEXT_PUBLIC_NYT_API_KEYを定義する

## 開発サーバー立ち上げ

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

[http://localhost:3000](http://localhost:3000) をブラウザで開くとアプリが表示されます。
