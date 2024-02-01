# 2023 年後期「JavaScript 基礎」授業課題

##　授業内コード

1. 10 月５日（木）はじめの一歩
2. １０月５日（木）GitHub リポジトリ作成
3. 10 月 12 日
4. 10 月 19 日　 for 文
5. 10 月 26 日　 その他の document オブジェクトのメソッド
6. １１月 2 日
7. 11 月９日
8. １１月 30 日
9. １２月７日
10. 12 月１４日
11. 12 月 21 日
12. １月１１日
13. １月１８日
14. 2 月 1 日

## ※自分用に書いたやつは lesson.md に収納

##　２月１日

for...of 文
for..in 文　の復習とテンプレートリテラルの説明。
lesson.md にメモを記入
試験問 10 　日本語理解できなかった。
問 7 は後回しにしたらやる時間がなかった。

##　１月１８日

##　本日の覚える用語
for 文のネストの場合は、i の次は j を使う。
j の次は k を使う
※for 文のネストは３段階まで、４以上になる場合は、どこかおかしい。

for 文を使ったときの[i]とはなにか
[i]の i は添字(そえじ)という。

オブジェクトと配列の違いは[]と{}のカッコの違い
[]・・・配列
{}・・・オブジェクト

配列の操作
push、unshift

## for..of 　文

多重配列
for(let 変数 of 配列)

##　配列の操作

##　配列の追加

unshift
変数.unshift("要素");
console.log(変数);
push
変数.push("要素");
console.log(変数);

##　配列の変更
const 変数 = ["tako", "ika", "kurage"];
変数[2] = "sakana";
console.log(変数);
変数の２番（kurage）が sakana に変わる

配列に入ったオブジェクトの表示方法
const List = [
{ test: "こんにちは", }
{ text: "おやすみ", }
]
for (let i = 0 ; i < List.length; i++ ){
console.log(List[i])
}
for(let 変数 in 配列[i]){
console.log(配列[i][変数])
}
配列の中なので添字も一緒に書くこと

//for...in 文

for (let 変数 in オブジェクト) {
console.log(オブジェクト[変数]);
}
for 文なので繰り返しオブジェクトを変数の中に入れる。
それをコンソールに一つずつ表示している。

## １月１１日

## オブジェクト

.（ドット）表記でのアクセス
変数.キー = 111;
普通に変数の次に.を入れてやる

[]（ブラケット）表記でのアクセス
変数["222"] = "90 年";
//空白やダッシュを含んでいたり、数字で始まったりするプロパティ名にはブラケット表記が良い

変数名["キー"] = ""新しく入れたい値;
ブラケット表記のデータを変更するにはこのようにする

const person = {
none: "",
age: 0,
information: function () {
return "名前:" + this.name + "\n 年齢:" + this.age;
},
};
person.name = "山田太郎";
person.age = 18;

この文では person という変数？の中に情報を入れて、あとから変数.オブジェクト?に文字や数値を入れて、console.log をしたときに information が表示され、this.name の部分があとから入れた「山田太郎」という名前が表示される。

## form

※フォームは文字列になる

const numdata = document.querySelector(".num").value
いつもの querySelector の最後に value を使うことで input タグの要素に入った文字を取得することができる。

addEventLisner で[type="submit]が押されたらなにかがうごくようにする
一番最初にフォームの value を取得しているから console.log で入力した内容を取得できる

##　 12 月 21 日

###　 insertbefore
参照先ノードの前にこの親ノードの子としてノードを挿入します
(ネット情報
)
同じ要素(li)の一番上に表示される？詳しくは 12 月 21 日の
(1221/Mt.fiji/script/script.js)

##　１ 2 月 14 日

###　タイマー

setTimeout(function () {
ここに内容を入れる
}, 2000);

###　コールバック関数

const 関数式１ = function (func) {
内容
};
const 関数式２ = function () {
内容
};
関数式１(関数式２);

関数式１の中に関数式２を保存した状態で関数式１実行して func()で呼び出されたら関数式２を実行する

## １２月７日

###　関数式
''' js
const 関数名 = function(){
処理;
}
//関数の実行
関数名();
'''

'''戻り値

const 変数 = function (引数 1, 引数 2)
const 変数 2 = 引数 + 引数 \*引数 2;
return 変数 2;
'''

###

##　１１月９日

###

if 文をやった
if (true) {
document.body.insertAdjacentHTML("beforeEnd", "<p>num は 100 以上</p>");
} else if (num === 0) {
document.body.insertAdjacentHTML("beforeEnd", "<p>num は 0</p>");
}
こんなやつ
if（条件式）｛ここにいつものコードを入れる｝
if 以外の条件なら else を入れる

for 文

for(let i = 0; i < ここに変数.length; i++)
これ覚えとく

##　１１月２日

###

イベントと属性値の操作
デスクトップに js のメモを取った ##　 10 月 26 日

###

### その他の document オブジェクトのメソッド

querySelectorAll()
指定された CSS セレクターに一致する文書中の要素のリストを示す静的な NodeList
指定したやつが全部出てくるやつ
const nations_list = document.querySelectorAll("ul li");

要素単独の取得は、

document.querySelector(“セレクター”);

複数の要素を一度に取得する場合は、

document.querySelectorAll(“セレクター”);

ーーーーーーーーーーーーーーーーーーーーーーーー

for 文で個別に取得することもできる
for (let i = 0; i < nations_list.length; i++) {
console.log(nations_list[i]);
}

getElementById()
id プロパティ（id 属性）が指定された文字列に一致する要素を表す Element オブジェクト

ID の情報を入手する

getElementsByTagName(), getElementsByClassName()
指定されたタグ名を持つ要素や指定されたクラス名をすべて持つすべての子要素の動的オブジェクト HTMLCollection
const tag_element = document.getElementsByTagName("li");
console.log(tag_element);
const class_element = document.getElementsByClassName("pool_b");
console.log(class_element);
ーーーーーーーーーーーーーーーーーーーーーーーー
tag とか class 名を指定して情報を出す機能

これも for 文で個別で出すこともできる

for (let i = 0; i < tag_element.length; i++) {
console.log(tag_element[i]);
}
for (let i = 0; i < class_element.length; i++) {
console.log(class_element[i]);
}

###　予備知識

      //innerHTML
      sweetpotatos.innerHTML +=
        "<li>べにはるか</li> <li>シルクスイート</li> <li>なると金時<span>（高系14号）</span></li>";

React もこれ使うらしい(jsx)

## １０月１９日

- For 文
- 子要素の追加

### for 文

// for (let i = 0; i < 9; i++) {
// //この i を使って 7 の段をコンソールに表示させてください。
// console.log("7", "x", i + 1, "=", 7 \* (i + 1));
// }
上が計算のやり方
下が子要素を追加する for 文

      for (let i = 0; i < fruits.length; i++) {
        // liを創出する
        const lilast = document.createElement("li");

        // liに値（果物→配列fruitsの中にある）を代入
        console.log(fruits[i]);
        // りんご・もも・バナナが取れる
        //   創出したliのないように果物を代入
        lilast.textContent = fruits[i];
        // element(ul)の中に最後に追加
        element.appendChild(lilast);
      }

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

###　ドキュメント

// ul タグの要素を取得
const element = document.querySelector("ul");
// 新しく li タグの要素を作成
const liLast = document.createElement("li");
liLast.textContent = "メロン";
// リストの最後の子要素として追加
element.appendChild(liLast);

//新しい要素を作る
const lilast = document.createElement("li");
console.log(lilast);
lilast.textContent = "メロン";
console.log(lilast);

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
