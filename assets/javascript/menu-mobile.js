function abrirMenu() {
  document.getElementById("menu-mobile").style.left = "0";
  document.querySelector(".overlay").style.display = "flex";
  document.body.style.overflow = "hidden";

  document.querySelector(".overlay").addEventListener("click", fecharMenu);
}

function fecharMenu() {
  document.getElementById("menu-mobile").style.left = "-100%";
  document.querySelector(".overlay").style.display = "none";
  document.body.style.overflow = "auto";

  document.querySelector(".overlay").removeEventListener("click", fecharMenu);
}
