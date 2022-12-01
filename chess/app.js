// function chess() {
//   let templateContainer = document.querySelector(".chess-template");
//   let containerWidth = templateContainer.clientWidth;
//   let num = 0;

//   for (let i = 1; i <= 8; i++) {
//     for (let j = 1; j <= 8; j++) {
//       if (num % 2 == 0) {
//         templateContainer.innerHTML += `<div class="chess-box bg-dark"></div>`;
//       } else {
//         templateContainer.innerHTML += `<div class="chess-box bg-light"></div>`;
//       }
// 	  num++
//     }
// 	num++
//   }
// }
// chess();

function chessBoard() {
  let templateContainer = document.querySelector(".chess-template");
  let containerWidth = templateContainer.clientWidth;
  let num = 0;

  for (let i = 1; i <= 8; i++) {
    for (let h = 1; h <= 8; h++) {
      let box = document.createElement("div");
      box.innerHTML = `${i}`;
      box.setAttribute(
        "class",
        "box d-flex justify-content-center align-items-center"
      );
      box.setAttribute(
        "style",
        `width: ${containerWidth / 8}px; height: ${containerWidth / 8}px`
      );
      templateContainer.appendChild(box);
      if (num % 2 == 0) {
        box.classList.add("bg-dark");
      } else {
        box.classList.add("bg-light");
      }
      num++;
    }
    num++;
  }
}
chessBoard();
