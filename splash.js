document.addEventListener("DOMContentLoaded", function () {
  const intro = document.getElementById("intro-screen");

  if (!intro) return;

  // Lock scrolling
  document.documentElement.classList.add("intro-active");
  document.body.classList.add("intro-active");

  function closeIntro() {
    intro.classList.add("hide");

    document.documentElement.classList.remove("intro-active");
    document.body.classList.remove("intro-active");

    // Remove splash after animation
    setTimeout(function () {
      intro.remove();
    }, 600);
  }

  // ENTER button
  document.querySelectorAll(".intro-enter").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      closeIntro();
    });
  });

  // SKIP button
  document.querySelectorAll(".intro-skip").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      closeIntro();
    });
  });

  // Auto close after 8 seconds
  setTimeout(function () {
    closeIntro();
  }, 15000);
});
