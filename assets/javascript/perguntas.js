document.addEventListener("DOMContentLoaded", function () {
  const summaries = document.querySelectorAll(".perguntas-frequentes summary");

  summaries.forEach((summary) => {
    summary.addEventListener("click", function () {
      const icon = this.querySelector("i");
      if (icon) {
        icon.classList.toggle("rotate");
      }
    });
  });

  const details = document.querySelectorAll(".perguntas-frequentes details");

  details.forEach((detail) => {
    detail.addEventListener("click", function () {
      details.forEach((otherDetail) => {
        if (otherDetail !== detail && otherDetail.open) {
          otherDetail.open = false;
        }
      });
    });
  });
});
