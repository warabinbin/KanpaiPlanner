# Azure App Drunk

React + Viteで構築されたモダンなWebアプリケーションです。

## 📸 スクリーンショット

![アプリケーション画面](./docs/1.png)
*メイン画面のスクリーンショット*

## 🚀 概要

Azure App Drunkは、React 19とVite 7を使用して開発されたモダンなWebアプリケーションです。高速な開発体験とパフォーマンスを重視した設計になっています。

### 主な特徴

- ⚡ **高速な開発環境** - Viteによる高速なHMR（Hot Module Replacement）
- 🎯 **モダンなReact** - React 19の最新機能を活用
- 📱 **レスポンシブデザイン** - モバイルファーストなUI設計
- 🛠️ **開発者体験** - ESLintによるコード品質管理
- 🎨 **柔軟なスタイリング** - CSSモジュールとカスタムプロパティ

## 🛠️ 技術スタック

| カテゴリ | 技術 | バージョン |
|---------|------|----------|
| **フロントエンド** | React | 19.1.0 |
| **ビルドツール** | Vite | 7.0.0 |
| **言語** | JavaScript (JSX) | ES2020 |
| **コード品質** | ESLint | 9.29.0 |
| **パッケージマネージャー** | npm | - |

## 📦 インストール

### 前提条件

以下がインストールされていることを確認してください：

- [Node.js](https://nodejs.org/) (推奨: v20.19.0以上または v22.12.0以上)
- npm (Node.jsに含まれます)

### セットアップ手順

1. **リポジトリのクローン**
   ```bash
   git clone https://github.com/your-username/azure-app-drunk.git
   cd azure-app-drunk
   ```

2. **依存関係のインストール**
   ```bash
   npm install
   ```

3. **開発サーバーの起動**
   ```bash
   npm run dev
   ```

4. **ブラウザでアクセス**
   ```
   http://localhost:5173
   ```

## 🎮 使用方法

### 開発モード

```bash
# 開発サーバーを起動（HMR有効）
npm run dev
```

### プロダクションビルド

```bash
# プロダクション用にビルド
npm run build

# ビルド結果をプレビュー
npm run preview
```

### コード品質チェック

```bash
# ESLintでコードをチェック
npm run lint
```

## 📁 プロジェクト構成

```
azure-app-drunk/
├── public/                 # 静的ファイル
│   └── vite.svg           # Viteロゴ
├── src/                   # ソースコード
│   ├── assets/            # アセット（画像、アイコンなど）
│   │   └── react.svg      # Reactロゴ
│   ├── App.jsx            # メインアプリケーションコンポーネント
│   ├── App.css            # アプリケーション固有のスタイル
│   ├── index.css          # グローバルスタイル
│   └── main.jsx           # エントリーポイント
├── .gitignore             # Git除外設定
├── eslint.config.js       # ESLint設定
├── index.html             # HTMLテンプレート
├── package.json           # プロジェクト設定
├── package-lock.json      # 依存関係ロック
├── vite.config.js         # Vite設定
└── README.md              # このファイル
```

## 📝 利用可能なスクリプト

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（HMR有効） |
| `npm run build` | プロダクション用にビルド |
| `npm run preview` | ビルド結果をローカルでプレビュー |
| `npm run lint` | ESLintでコードをチェック |

## 🔧 設定

### Vite設定

Viteの設定は `vite.config.js` で管理されています：

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### ESLint設定

コード品質は以下のルールで管理されています：
- React Hooks のベストプラクティス
- React Refresh との互換性
- 未使用変数の検出（大文字で始まる変数は除外）

## 🚀 デプロイ

### Azureへのデプロイ

1. **Azure Static Web Appsを使用する場合**
   ```bash
   npm run build
   # dist/ フォルダをAzure Static Web Appsにデプロイ
   ```

2. **Azure App Serviceを使用する場合**
   ```bash
   # Azure CLIでリソース作成とデプロイ
   az webapp up --name your-app-name --resource-group your-resource-group
   ```

---

**Made with ❤️ using React + Vite**