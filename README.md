# Portfolio (atsuya × maya)

Next.js（静的エクスポート）製の個人ポートフォリオ。Cloudflare Pages でホストする。

> **⚠️ 重要: 日本語を含むパスでは動かない**
> Next.js のコンパイラ（SWC）が日本語を含むパス（例: `個人・共同プロジェクト`）でクラッシュする（exit code 0xC0000005）。
> ローカルで `npm run dev` / `npm run build` するときは、このフォルダを ASCII のみのパス（例: `C:\Users\cyber\homepage`）に移動またはクローンして作業すること。
> Cloudflare Pages 上のビルド（Linux）には影響しない。

## ローカルでの確認

```powershell
npm install
npm run dev   # http://localhost:3000
```

本番用ビルド（`out/` に静的ファイルが生成される）:

```powershell
npm run build
```

## コンテンツの編集

文章・業績・プロジェクトはすべて [data/content.ts](data/content.ts) にまとまっている。
`{ ja: '...', en: '...' }` の形式で日英併記される。`（要編集）` と書かれた箇所を自分の情報に置き換える。

## デプロイ手順（Cloudflare Pages + GitHub）

### 1. GitHub リポジトリを作成して push（このフォルダを単独リポジトリにする）

```powershell
cd このフォルダ
git init
git add -A
git commit -m "Initial commit"
gh repo create <repo-name> --private --source . --push
# または GitHub 上で空リポジトリを作って git remote add origin ... && git push
```

### 2. Cloudflare Pages と連携（ブラウザ操作）

1. Cloudflare Dashboard にログイン
2. **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. GitHub を認可し、上で作ったリポジトリを選択
4. 設定:
   - **Project name**: 好きな名前（`<name>.pages.dev` になる）
   - **Production branch**: `main`
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npx next build`
   - **Build output directory**: `out`
5. **Save and Deploy**

以後は `main` に push するだけで自動デプロイされる。

### 3. カスタムドメイン（maya + atsuya を含める）

候補例: `mayatsuya.com`（maya + atsuya が重なる）, `maya-atsuya.com`, `atsuya-maya.net` など。

1. Cloudflare Dashboard → **Domain Registration** でドメインを購入（または他社で購入して Cloudflare にネームサーバー移管）
2. Pages プロジェクト → **Custom domains** → **Set up a custom domain** でドメインを追加
3. DNS レコードは自動設定される（Cloudflare 管理のドメインなら数分で反映）

購入後、[data/content.ts](data/content.ts) の `site.url` を実ドメインに書き換える。
