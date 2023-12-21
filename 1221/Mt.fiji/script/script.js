//初期化
const slide = document.querySelector(".slide");
const images = document.querySelectorAll(".slide img"); //グローバル変数
console.log(images[images.length - 1]); //４番目の画像がほしい
console.log(images); //初期値
slide.insertBefore(images[images.length - 1], images[0]);
//div="slide"の中の際おｇのぞう[images.length-1]を最初の画像[0]の前
// insertBeforeはappendChildの逆、前にいれる

const RightBtnStart = function () {
  const slideimages = document.querySelectorAll(".slide img");
  console.log(slideimages);
  slideimages[1].removeAttribute("style");
  slideimages[0].style.marginLeft = "0";
  slide.insertBefore(slideimages[slideimages.length - 1], slideimages[0]);
};

const leftBtnStart = function () {
  // ローカル変数 このブロックでしか使えない
  const sildeimages = document.querySelectorAll(".slide img");
  console.log(sildeimages);
  slide.appendChild(sildeimages[0]);
  sildeimages[1].removeAttribute("style");
};

// button 左
const leftBtn = document.querySelector(".leftBtn");
leftBtn.addEventListener("click", leftBtnStart);

// button　右
const rightBtn = document.querySelector(".rightBtn");

rightBtn.addEventListener("click", RightBtnStart);

window.setInterval(leftBtnStart, 4000);

rightBtn.addEventListener("mouseover", function () {
  rightBtn.style.opacity = "0.4";
});
rightBtn.addEventListener("mouseout", function () {
  rightBtn.style.opacity = "0";
});

leftBtn.addEventListener("mouseover", function () {
  leftBtn.style.opacity = "0.4";
});
leftBtn.addEventListener("mouseout", function () {
  leftBtn.style.opacity = "0";
});

const banana = document.querySelector(".banana");

rightBtn.addEventListener("click", function (event) {
  let count = event.detail;

  console.log(count);

  if (count === 2) {
    banana.classList.add("ido");
    console.log(banana);
    count == 0;
    setTimeout(reset, 3000);
  }
});

const reset = function () {
  banana.classList.remove("ido");
};
