window.addEventListener("scroll", function () {
  let header = document.querySelector("#header");
  header.classList.toggle("scrollY", window.scrollY > 0);
});
