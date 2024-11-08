# ビルドツール

- Vite

# 言語・ライブラリ

- React
- javascript

# スタイル
- scss (FLOCSS設計)
### リセットcss
- normalize.scss
* リセットcssに関しては変更可

# 追加パッケージ
* react-router-dom
* sass

# 構造
* src/layout/Layout.jsx <br>
header・main・footerなどページのレイアウトを実装しています。レイアウトとなるコンポーネントはこの中で実装してください。

* src/pages <br>
mainの中のページコンポーネントを格納するフォルダになります。新規ページを作成するときはこちらに作成をしてから作業してください。

* src/Router.jsx <br>
ルーティングで`react-router-dom`を使用しているため、新規でページを作成した際はこのページで`path`と`element`を追加してください。
```javascript
const routingConfig = [
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    // 新たに追加する場所　開始
    {
        path: "/new-path",
        element: <NewComponent />
    },
    // 新たに追加する場所　終了
    { path: '/', element: <Navigate to="/login" /> }, // "/"でloginページに移行
    { path: '/*', element: <Error404 /> }
];
```


