###　使える文リスト
option と ¥ で\がだせるよ

### for...of 文

for ( let 変数 of 配列){
}
でできる。
使い道がわからない。

##　配列の操作

配列の変更
const 変数 = ["要素１", "要素２", "要素３"];
変数[2] = "要素４";
console.log(変数);
変数の２番（要素３）が 要素４ に変わる

配列の追加
push、を使う
変数.push("要素");
console.log(変数);

一番上に持ってくる場合
unshift、を使う
変数.unshift("要素");
console.log(変数);

### for...in 文

for (let 変数 in オブジェクト) {
console.log(オブジェクト[変数]);
}
配列の中にあるオブジェクト

for (let 変数 in オブジェクト) {
console.log(オブジェクト[添字][変数]);
}

###　オブジェクト (大事)

console.log()で確認する方法 console.log(オブジェクト変数[キー]); //アメリががほしい
console.log(オブジェクト変数.キー);

.表記
変数名.キー = 値
ブラケット表記
変数名["キー"] =値
値を変更したいとき　
変数名["キー"] = 新値;

dict.orange = "おれんじ"
単語

dict が"変数名"
orange が"キー"
おれんじが"値"

よく覚えとく

オブジェクトは環境によってぐるぐる回るため順番にあてはめるのは難しい

## 引数・戻り値　について

関数というものは「なにか頼めば」なにか「かえってくる」という処理をしてくれるやつ

この「なにか頼めば」が「引数」で、「かえってくる」が「戻り値」

例）

りんご　　　翻訳する　　　　 apple
(引数)　 → 　関数 　 → 　　(戻り値)

これが関数を図にしたものらしい
function ( 引数１,引数 2){

//関数
ここで引数を使って処理をする
num = 引数１　＋　引数 2

return num //戻り値
　//結果　この num が表示される
}

### this

this はオブジェクトでメインで使う

this はオブジェクトが自分自身を指すこと
オブジェクトからしたら一人称

### フォーム

いつもの const 変数名 = document.querySelector(".sample")
の最後に.value を入れるとフォームの中身が取れる

・まずなんでも変数に入れること
・わからなくなったら console.log を使う
・変数名をきめるときにでるエラーはほとんど.か#のつけ忘れ

### console.log の追加知識 12 月 21 日

console.log(変数名[変数名.length])ができる
(変数名.[変数名.length - 1])を書くと length の全部の数から 1 引いた変数の数値の要素が取得される。

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
