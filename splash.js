document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro-overlay");

  if (!intro) return;

  // Lock scrolling
  document.documentElement.classList.add("intro-active");
  document.body.classList.add("intro-active");

  let closed = false;

  function closeIntro() {
    if (closed) return;

    closed = true;

    intro.classList.add("hide");

    document.documentElement.classList.remove("intro-active");
    document.body.classList.remove("intro-active");

    setTimeout(function () {
      intro.remove();
    }, 800);
  }

  // Enter + Skip buttons

  document.addEventListener("click", function (e) {
    if (e.target.closest(".intro-enter") || e.target.closest(".intro-skip")) {
      e.preventDefault();

      closeIntro();
    }
  });

  // Auto close

  setTimeout(closeIntro, 13000);
});
