//クリックイベント内に記述していきます。
const guchokipaImg = ["janken_gu.png", "janken_choki.png", "janken_pa.png"];
const jankenpon = document.querySelector(".jankenBtn");
const pc1Area = document.querySelector(".pc_1");
const pc2Area = document.querySelector(".pc_2");
const result = document.querySelector("p");

jankenpon.addEventListener("click", function () {
  const pc1num = Math.round(Math.random() * 2);
  const pc2num = Math.round(Math.random() * 2);
  console.log(pc1num, pc2num);
  pc1Area.innerHTML = '<img src="images/' + guchokipaImg[pc1num] + '">';
  pc2Area.innerHTML = '<img src="images/' + guchokipaImg[pc2num] + '">';
  if (pc1num === pc2num) {
    result.innerText = "あいこ";
  } else if (
    (pc1num === 0 && pc2num === 1) ||
    (pc1num === 1 && pc2num === 2) ||
    (pc1num === 2 && pc2num === 0)
  ) {
    result.innerText = "PC①の勝ち";
  } else {
    result.innerText = "PC①の負け";
  }
});
