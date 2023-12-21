###　使える文リスト

### console.log の追加知識 12 月 21 日

console.log(変数名[変数名.length])ができる
(変数名.[変数名.length - 1])を書くと length の全部の数から 1 引いた変数の数値の要素が取得される。

###　忘れそうなもの

・まずなんでも変数に入れること
・わからなくなったら console.log を使う
・変数名をきめるときにでるエラーはほとんど.か#のつけ忘れ

### if 文

if(条件)
{ここにいつもの文を作る
}
else｛
ここには if 文の条件に当てはまらないときの文を作る

--下の文は Mt.Fuji の例文です。

        if (count === 2) {
          count = 0;
          // ２のときに次を0にする
          imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
        } else {
          // ２じゃないならカウントを増やす
          count++;
          imageArea.setAttribute("src", "images/" + fujiImg_list[count]);
        }

### For 文の作り方

--取得した変数を for 文でコンソールに表示する
const 変数名 = document.querySelectorAll("クラスなら最初に.を、ID なら# /要素なら何も入れない");
for (let i = 0; i < 変数名.length; i++) {
console.log(変数名[i]);
}

--For 文の別のやつ
変数名.length;を数字にすればその回数分内容が繰り返される
for (let i = 0; i < //9//; i++) {
console.log(変数名[i]);
}

###　変数を別の変数に入れる方法
const 変数名 1 =document.createElement("ul")

const 変数名 2 =document.createElement("li")

変数名 1.appendChild(変数名 2)
これで ul の中に li が入る

### 変数に新しく作った要素を入れる

const 変数名 =document.createElement("ul")

createElement を使う

### 変数に入れた数字で計算

const num1 = 32;
const num2 = 14;
console.log(num1 + num2);

###　要素に書かれたテキストだけ取得する
const 変数名 1 = document.querySelector("クラスなら最初に.を、ID なら# /要素なら何も入れない");
const 変数名２ = 変数名１.textContent;

textContent でできる。

      const 変数名 = document.querySelector(".sample").textContent;
      これでもまとめてできる

###　取得した変数をコンソールに表示する
console.log(変数名)

--全部取得した場合で全部表示する

console.log(変数名[i])
※i の部分は数字を入れたリする
数字の場合は 0 から

---変数を取得してなくてもコンソールに文字を入力する方法

""あり---文字や数字を入力できる
""なし---文字は入力できないが数字はできる
console.log("6"+6)
この場合は 12 にはならず 66 を表示される 　※　+だけこれになる -,\*,/,は普通の計算

---変数に文字が入っている場合は""なしで表示できる
console.log(変数名)
変数名の部分の変数に a と入っていれば a と表示される

### 変数を取得する

ーーひとつだけ要素を取得するやり方
const 変数名 = document.querySelector("クラスなら最初に.を、ID なら# /要素なら何も入れない")
--そのクラスや要素を全部取得する
const 変数名　=document.querySelectorAll("クラスなら最初に.を、ID なら# /要素なら何も入れない")
