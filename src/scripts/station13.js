function changeBackgroundColor(e) {
  // ここに背景色を変える処理を書く。
  let checkbox1 = document.getElementById("check");
  if (checkbox1.checked) {
    document.getElementById("text").style.backgroundColor = "red";
  } else document.getElementById("text").style.backgroundColor = "white";
}
