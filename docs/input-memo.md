# Buttons library
.nextは立ち上げると生成され、キャッシュが残る

# Marketing Skeleton
layout.tsxは同ディレクトリのpage.tsx全てにかかる
ディレクトリ名を括弧で囲うとパスに表示されない

# Authentication
twitch cloneでやったことと大体かぶる

# Footer
https://flagpack.xyz/

# Main Layout
lgを使ってwindowが大きい時とそうでない時によってレイアウトを分ける

# Sidebar
use client

1 http~呼ぶ
2 serverにあるNext.jsがHTML,CSS,JS※ ect.を組み立ててclientに返す
3 client側で表示する
※ボタンクリックなどの状態はclientに必要

serverSideで動くJS
clientで動くJS+HTML

devToolのsourcesで中身が見れるので(全く同じものではないが)、client側に送られるコードは見られると思って書く
大事なkeyとかはclient側に書いてはいけない

# Learn Page Wrappers
Propsのところで
activeCourse: { imageSrc: string; title: string };
のような書き方ができる

使う時は
src={activeCourse.imageSrc}

# Drizzle $ Neon

## Neon
https://neon.tech/
Neon is fully managed serverless Postgres.

## Drizzle
https://orm.drizzle.team/
Drizzle ORM is a lightweight TypeScript ORM.

- ORM: オブジェクト関係マッピング(Object-Relational Mapping)
オブジェクト指向プログラミングと関係データベースの互換性を向上させるために設計されたプログラミング技術


### .tsxと.tsの違い
https://qiita.com/y-hira18/items/f67cfc45a70c7c25708a

# Courses Page

# User Progress

# Seed Script

## Bun
https://bun.sh/
新しいJavaScriptのランタイム
Node.jsやDenoと同じポジション
速くてAll in OneなJavaScriptランタイム

# Schema
データベースの構造を定義したもの

# Units

今更
npx drizzle-kit studio : 起動
npx drizzle-kit push:pg : schemaの変更をしたり

# Lesson Button

# Course Progress
ASC・・・昇順
DESC・・・降順

flatMap
flatMap()はmap()とflat()を合成したメソッド

flat()は配列のメソッドで、自身の配列の次元を1つ下げたものを返す

# Lesson Header

# Exit Modal