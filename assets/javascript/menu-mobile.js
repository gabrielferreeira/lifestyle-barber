function abrirMenu() {
  document.getElementById("menu-mobile").style.left = "0";
  document.querySelector(".overlay").style.display = "flex";
  document.body.style.overflowY = "hidden";
}

function fecharMenu() {
  document.getElementById("menu-mobile").style.left = "-100%";
  document.querySelector(".overlay").style.display = "none";
  document.body.style.overflowY = "auto";
}
