document.addEventListener("DOMContentLoaded", (e) => {
  toggleButton();
  display_back_to_img();
  displayLimit();
});
let linksContainer = document.querySelector(".links-container");

let toggleButton = () => {
  let contactBtn = document.querySelector(".contacts-btn");
  contactBtn.addEventListener("click", (event) => {
    event.stopPropagation();
    linksContainer.classList.toggle("visible");
  });
};
const display_back_to_img = () => {
  document.addEventListener("scroll", () => {
    let backImg = document.querySelector(".send-back");
    let backDiv = document.querySelector(".back-experience");
    let topPosition = backDiv.getBoundingClientRect().height;
    let scrollHeight = window.scrollY;
    if (scrollHeight >= topPosition) {
      backImg.style.visibility = "visible";
    } else {
      backImg.style.visibility = "hidden";
    }
  });
};

document.addEventListener("click", () => {
  let contactBtn = document.querySelector(".substitue");
  if (contactBtn.classList.contains("visible")) {
    contactBtn.classList.remove("visible");
  }
});

let displayLimit = () => {
  let query = window.matchMedia("(width<=1234px)");
  console.log(query);
  if (query.matches === true) {
    window.location.href = "../redirect/redirect.html";
  }
};
