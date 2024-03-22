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