# ビルド環境について

## 特徴

- `gulp`を利用した build 環境。
- `sass`の書き出しのみのシンプルな設定にしています
- 利用には pc に `npm` または `yarn` のインストールが必要です

## 使い方

現在は`package.json`の`scripts`に以下のようなコマンドリストの記載があります。

```
"scripts": {
  "dev-build": "yarn gulp devScss",
  "build": "yarn gulp scss",
  "dev-build:w": "yarn gulp watchSass",
  "build:w": "yarn gulp watchSass"
},
```

利用するコマンドは以下のようになります。

```
npm run dev-build
npm run build
npm run dev-build:w
npm run build:w
```

build の際はターミナル（コマンドプロント）でこのディレクトリへ移動し、
いずれかのコマンドを実行してみてください。

`npm run build`は公開用の build コマンドです。

#### コマンドの説明

- `dev-build` : 非圧縮ファイルを書き出す build コマンド
- `build` : 圧縮ファイルを書き出す build コマンド
- `dev-build:w` : `:watch`をつけると変更/保存の度に build されます
- `build:w` : 同上

# 開発について

- パーツごとにファイルを分割して開発するイメージです。
- scss/js それぞれ `./scss` 内のファイルの変更を行い、ビルド後のファイルは `./assets/css` 内に書き出されます。
