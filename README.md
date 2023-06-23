# <事前準備>

## 利用エディタ

VS CODE
## 演習用モジュール準備

* nodeの確認(v18が入っていない場合は入れる)
  * Node.jsのパッケージ管理ツールを入れてバージョンを18.0.0にする
    * volta記事のURL貼る
    * nodebrewの場合（記事のURL）

* 必要なモジュールのインストール
  * 適当な場所にディレクトリを作成し移動
    * わからない方向け

```
cd ~/Desktop
mkdir jest
cd jest
```

下記コマンドを実行

```
npm i
npx ts-jest config:init
```

準備完了！
