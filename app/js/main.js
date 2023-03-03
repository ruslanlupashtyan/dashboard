const checkActive = function () {
  document.querySelector(".links a.active").classList.remove("active");
  this.classList.add("active");
};

const classHelper = function (selector, isToggle, clas) {
  if (isToggle) {
    document.querySelector(selector).classList.toggle(clas);
  } else {
    document.querySelector(selector).classList.remove(clas);
  }
};

// toggle sections
let links = document.querySelectorAll(".links a");
console.log(links);
links.forEach((el) => {
  el.addEventListener("click", checkActive, false);
});

// mobile menu
if (window.innerWidth <= 768) {
  document.querySelector("#hamburger").addEventListener("click", function () {
    classHelper(".aside", true, "active");
    classHelper(".main", true, "active");
    classHelper("body", true, "hidden");
  });
  document.querySelector(".main").addEventListener("click", function () {
    classHelper(".aside", false, "active");
    classHelper(".main", false, "active");
    classHelper("body", false, "hidden");
  });
}
