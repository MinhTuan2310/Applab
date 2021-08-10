// header
const hambuger = document.querySelector(".hambuger");
const menu  = document.querySelector(".nav-menu");
const menuItems = document.querySelectorAll(".nav-item");

//show menu
hambuger.addEventListener("click", (e) => {
  console.log(e.target);
  menu.classList.toggle("is-show");
  hambuger.classList.toggle("active");
});
//hide menu when clicking inside menu
[...menuItems].forEach(menuItem => {
  menuItem.addEventListener("click", (e) => {
    menu.classList.remove("is-show");
    hambuger.classList.remove("active");
  });
});
// hide when clicking outside menu
document.body.addEventListener("click" , e => {
  if(!menu.contains(e.target) && !e.target.matches(".hambuger")) {
    menu.classList.remove("is-show");
    hambuger.classList.remove("active");
  }
});

// card
const buttons = document.querySelectorAll(".option-container > .btn");
const cards = document.querySelectorAll(".card");
// active box-shadow when clicking button;
[...buttons].forEach( button => {
  button.addEventListener("click", e => {
    e.target.parentNode.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    console.log(e.target.getAttribute("data"))
    console.log(cards[0]);
  
    if(e.target.getAttribute("data") === "charge") {
      cards[0].classList.remove("active");
      cards[1].classList.add("active");
    }
    if(e.target.getAttribute("data") === "free") {
      cards[1].classList.remove("active");
      cards[0].classList.add("active");
    }
  })
});
// accordion
const accordionSelectList = document.querySelectorAll(".accordion-select");
const accordionItemList = document.querySelectorAll(".accordion-item");
// clicking inside
[...accordionSelectList].forEach(accordionSelect => {
  accordionSelect.addEventListener("click", e => {
    e.currentTarget.nextElementSibling.classList.toggle("active"); 
    accordionSelect.querySelector("i").classList.toggle("fa-times");
    accordionSelect.querySelector("i").classList.toggle("fa-plus");
  });
})
// clicking outside
document.body.addEventListener("click", e => {
  accordionItemList.forEach( accordionItem => {
    if(!accordionItem.contains(e.target)) {
      accordionItem.lastElementChild.classList.remove("active");
    }
  })
});
// silder for client
const client = document.querySelector(".client");
const clientMain = document.querySelector(".client-main");
const clientItemList = document.querySelectorAll(".client-item");
const previousButton = document.querySelector(".arrow-left");
const nextButton = document.querySelector(".arrow-right");
const clientWidth = clientItemList[0].offsetWidth;
let position = 0;
previousButton.addEventListener("click", e => {
  handleChangeSlide(-1);
});

nextButton.addEventListener("click", e => {
  handleChangeSlide(1);
});

function handleChangeSlide(direction) {
  if(direction === 1) {
    if(position <=  (clientItemList.length - 1) * clientWidth * -1) return;

    position = position - clientWidth;
    clientMain.style = `transform: translateX(${position}px)`;
  }
  if(direction === -1) {
    if(position === 0) return;

    position = position + clientWidth;
    clientMain.style = `transform: translateX(${position}px)`;
  }
}



