import "./style.css";

const grid = document.querySelector(".container");
const topper = document.querySelector(".topper");
const content = document.querySelector(".content");
const drawer = document.querySelector(".drawer");
const toggleButton = document.querySelector("#toggle");

toggleButton.addEventListener("click", function () {
  // use the grid variable in line 3 and set its styling to:
  // grid-template-columns: 200px minmax(0, 1fr) 250px;
  console.log(drawer.style, drawer.style.overflow);
  if (!drawer.style.overflow || drawer.style.overflow === "auto") {
    grid.style.gridTemplateColumns = "200px minmax(0, 1fr) 25px";
    drawer.style.overflow = "hidden";
    toggleButton.innerHTML = "<";
  } else {
    grid.style.gridTemplateColumns = "200px minmax(0, 1fr) 250px";
    drawer.style.overflow = "auto";
    toggleButton.innerHTML = ">";
  }
});

content.addEventListener("scroll", function () {
  console.log("ye", content.scrollTop);
  if (content.scrollTop > 50) {
    topper.innerHTML = "28px";
    grid.style.gridTemplateRows = "28px 70px minmax(0, 1fr) 50px";
  } else {
    topper.innerHTML = "48px";
    grid.style.gridTemplateRows = "48px 70px minmax(0, 1fr) 50px";
  }
});
