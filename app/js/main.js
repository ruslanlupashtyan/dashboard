const checkActive = function () {
  document.querySelector(".asideLink.active").classList.remove("active");
  this.classList.add("active");
  console.log(this);
};

const classHelper = function (selector, isToggle, elem) {
  if (isToggle) {
    document.querySelector(selector).classList.toggle(elem);
  } else {
    document.querySelector(selector).classList.remove(elem);
  }
};

// toggle sections
let links = document.querySelectorAll(".asideLink");
console.log(links);
links.forEach((el) => {
  el.addEventListener("click", checkActive, false);
});

// mobile menu
if (window.innerWidth <= 768) {
  document
    .querySelector(".openMobileMenu")
    .addEventListener("click", function () {
      classHelper(".aside", true, "active");
      classHelper(".article", true, "active");
      classHelper("body", true, "hidden");
    });
  document
    .querySelector(".closeMobileMenu")
    .addEventListener("click", function () {
      classHelper(".aside", false, "active");
      classHelper(".article", false, "active");
      classHelper("body", false, "hidden");
    });
}
