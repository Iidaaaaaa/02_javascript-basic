# 2023 年後期「JavaScript 基礎」授業課題

##　授業内コード

1. 10 月５日（木）はじめの一歩
2. １０月５日（木）GitHub リポジトリ作成
3. 10 月 12 日

## 10 　月　１２　日

- リテラルと演算子

###　文字列の計算

```js
//文字列の連結
console.log("ABC" + "DEF");
console.log("円周率は" + 3.14 + "です"); //文字列　＋数値
console.log("計算結果は:" + 123 + 456); //文字列　＋　数値の計算
console.log(123 + 456 + "となりました"); //数値の計算 +文字列
console.log("計算結果は:" + (123 + 456)); //文字列　＋　(数値の計算)
console.log("2" - 1); //文字列 - 数値型
console.log("2" * 1); //2x1=2
console.log("2" / 4); //2÷4=0.5
```

###　定数の宣言
const PI = 3.14;
console.log(PI);

### 変数の宣言

let a;//変数の宣言
a = 10;//値の代入
console.log(a);

###　複合代入演算子とインクリメント

//複合演算子

let n = 5;
n = n + 2;
console.log(n); //7

let n2 = 5;
n2 += 2;//複合代入演算子 n2 = n2 + 2 と同じ
console.log(n2)

//インクリメント
let n3 = 5;
n3++ //インクリメント　１足す
console.log(n3);//6

## 10 月 5 日

- インターネットの基本について理解する。
- Web の基本的な仕組みを理解する。
- Web サーバーの役割について理解する。
- 開発環境の構築
- JavaScript を書く場所

### JavaScript を書く場所

1. HTML ファイルの中
1. 外部 JS ファイルの中
1. ブラウザのコンソール

基本は、外部 JS ファイルを読み込むが、HTML 内に各場合は、`</body>`の上に書く。

```html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>演習</title>
  </head>
  <body>
    <script></script>
  </body>
</html>
```

### フロントエンドロードマップ

フロントエンドエンジニアに必要なスキルの[ロードマップ](https://roadmap.sh/frontend)がある。
