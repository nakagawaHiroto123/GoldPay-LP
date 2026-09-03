# GoldPay

架空の事業者向けオンライン決済サービスを紹介する、1ページ構成のWeb制作ポートフォリオです。実際の決済・申込み・個人情報送信機能はありません。

## 使用技術

- HTML5（セマンティックな要素）
- CSS3（Flexbox、CSS Grid、レスポンシブデザイン）
- JavaScript（ハンバーガーメニュー、FAQアコーディオン）

## ファイル構成

```text
.
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── assets/
    └── images/  # 必要になった画像を入れる場所
```

## 確認方法

`index.html` をブラウザで開いてください。スマートフォン幅では、右上のメニューボタンとFAQの開閉を確認できます。

## GitHub公開の基本手順

1. GitHubで空のリポジトリを作成する
2. このフォルダをGitで初期化し、ファイルを追加する
3. 変更内容をコミットする
4. GitHubのリポジトリを接続してプッシュする

```bash
git init
git add .
git commit -m "Create GoldPay landing page"
git branch -M main
git remote add origin https://github.com/ユーザー名/リポジトリ名.git
git push -u origin main
```
