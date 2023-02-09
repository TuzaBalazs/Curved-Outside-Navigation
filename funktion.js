let buttons = document.querySelectorAll(".navigation li");
buttons.forEach((li) => {
  li.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
  });
});
