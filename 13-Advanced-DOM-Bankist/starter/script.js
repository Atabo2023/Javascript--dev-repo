"use strict";

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");
const nav = document.querySelector(".nav");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container");
const tabsContent = document.querySelectorAll(".operations__content");

///////////////////////////////////////
// Modal window

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function (e) {
  e.preventDefault();
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(btn => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// BUTTON SCROLLING
btnScrollTo.addEventListener("click", function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  console.log("current scroll (x/Y)", window.pageXOffset.pageYoffset);

  console.log(
    "height / width viewport",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: "smooth",
  // });

  // MORDERN WAYS OF DOING THE SCROLLING AND THAT IS THE BEST WAY

  section1.scrollIntoView({ behavior: "smooth" });
});

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// TUTORIAL #192 (EVENT DELEGATION: IMPLEMENTING PAGE NAVIGATION)

// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log(id);
//     document.querySelector(id).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });

// // NOW EVENT DELEGATION
// IN EVENNT DELEGATION WE NEED TWO STEPS
// 1) WE ADD THE EVENT LISTENER TO A COMMON PARENT ELEMENT OF ALL THE ELEMENT THAT WE ARE INSTERESTED IN.
// 2) DETERMINE WHAT ELEMENT ORINATED DROM EVENT

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // matching strategy
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    console.log(id);
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

// TUTORIAL #194 (TABBED COMPONENT)

tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");

  // GUARD CLAUSE
  if (!clicked) return;

  // Remove active classes for both the tabs and the content area
  tabs.forEach(t => t.classList.remove("operations__tab--active"));
  tabsContent.forEach(c => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // HOW TO ACTIVATES THE CONTENT AREA (ACTIVATE THE CONTENT AREA)
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// TUTORIAL #195 (MENU FADE ANIMATION WHEN HOVER ON THE NAViGATION LIST)

const handleHover = function (e) {
  console.log(this);

  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = link.closest(".nav");
    document.querySelectorAll("nav__link");
    const logo = link.closest(".nav").querySelector("img");

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));

nav.addEventListener("mouseout", handleHover.bind(1));

// TUTORIAL #196 (IMPLIMENTING A STICKY NAVIGATION)

// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// window.addEventListener("scroll", function () {
//   console.log(window.scrollY);

//   if (window.scrollY > initialCoords.top) nav.classList.add("sticky");
//   else nav.classList.remove("sticky");
// });

// TUTORIAL #197 (STICKY NAVIGATION: INTERSECTION OBSERVER API)

// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

// IMPLIMENTING THE INTERSECTION OBSERVER IN OUR PROJECT (USING OBSERVER API: STICKY NAVIGATION)

const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// TUTORIAL #198 (REVEALLING ELEMENTS ON SROLL)

const allSection = document.querySelectorAll(".section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSection.forEach(function (section) {
  // sectionObserver.observe(section);
  // section.classList.add("section--hidden");
});

// TUTORIAL #199 (LAZY LOADING IMAGES)

const imgTargets = document.querySelectorAll("img[data-src]");

// callback function
const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // REPLACE SRC WITH DATA-SRC
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", function () {
    entry.target.classList.remove("lazy-img");
  });

  observer.unobserve(entry.target);
};
//
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imgTargets.forEach(img => imgObserver.observe(img));

// TUTORIAL #200 (BUILDING A SLIDER COMPONENT)

const slider = function () {
  const slides = document.querySelectorAll(".slide");
  const btnLeft = document.querySelector(".slider__btn--left");
  const btnRight = document.querySelector(".slider__btn--right");
  const dotContainer = document.querySelector(".dots");

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector(".slider");
  // slider.style.transform = "scale(0.2) translateX(-800PX)";
  // slider.style.overflow = "visible";

  // FUNCTON
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };
  createDots();

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach(dot => dot.classList.remove("dots__dot--active"));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active");
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // GOING TO THE NEXT SLIDE
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // EVENT HANDLERS
  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);

  // curslide = 1: -100%, 0%, 100%, 200%

  // TUTORIAL #201 (BUILDING A SLIDER COMPONENT PART 2)

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") prevSlide();
    e.key === "ArroRight" && nextSlide();
  });

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////

// TUTORIAL #185 (OBJECTIVE: HOW TO SELECT, CREATE AND DELETE ELEMNETS WITH JAVASCRIPT)

// 1) HOW TO SELECT AN ELEMENT IN JAVASCRIPT
console.log(document.documentElement);
console.log(document.header);
console.log(document.body);

// const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

document.getElementById("section--1");
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

console.log(document.getElementsByClassName("btn"));

// 2) CREATING AND INSERTING ELEMENTS

const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = `We use cookied for improved functionality and analytics.`;

// NOTE THIS: IF YOU WANT TO APPLY THE DOM ELEMENT IN UR HTML USE THE FOLLOWING (variable.innerHTML, then the message nd then you call the variable. either by append or prepend to the position you wants it to be. e.g header.append or header .prepend that footer and header respectful)
message.innerHTML = `We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!<button>`;

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// => 3) Delete elements from javascript by clicking the button ...

document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    message.remove();

    // message.parentElement.removeChild(message);
  });

// TUTORIAL #202 (LIFECYCLE OF DOM EVENT)

document.addEventListener("DOMContentLoaded", function () {
  console.log("HTML parsed and DOM tree built!", e);
});

window.addEventListener("load", function (e) {
  console.log("page fullly loadede", e);
});

// window.addEventListener("beforeunload", function (e) {
//   e.preventDefault();
//   console.log(e);
//   e.returnValue = "";
// });

// TUTORIAL #186 (STYLES, ATTRIBUTES AND CLASSES)

// 1) STYLE
message.style.background = "#37383d";
message.style.width = "120%";

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// document.documentElement.style.setProperty("--color-primary", "orangered");

// 2) ATTRIBUTES (ACCESS AND CHANGE OF ATTRIBUTES)
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);
// WE CAN CHANGE THE ALT TEXT AS WELL
logo.alt = "Beauty minimalist logo";

// NON-STANDARD, THEREFORE IT DID NOT WORK
console.log(logo.designer);
console.log(logo.getAttribute("designer"));
// logo.setAtttribute("company", "Bankist");

// ON link
console.log(logo.src);
console.log(logo.getAttribute("src"));

const link = document.querySelector("twitter-link");
// console.log(link.href);
// console.log(link.getAttribute("href"));

// 3) DATA ATTRIBUTES
console.log(logo.dataset.versionNumber);

// 4) CLASSES
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c"); // NOT INCLUDEs THAT IS CALLED IN THE ARRAYS

// TUTORIAL #188 (IMPLEMENTING SMOOTH SCROOLLING) => TWO WAYS OF DOING THAT BELOW✍
// =>OLD WAYS AND THE MODERN WAYS THAT WORK IN THE MODERN BROWSER

// const btnScrollTo = document.querySelector(".btn--scroll-to");
// const section1 = document.querySelector("#section--1");

// btnScrollTo.addEventListener("click", function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   console.log(e.target.getBoundingClientRect());

//   console.log("current scroll (x/Y)", window.pageXOffset.pageYoffset);

//   console.log(
//     "height / width viewport",
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

// window.scrollTo(
//   s1coords.left + window.pageXOffset,
//   s1coords.top + window.pageYOffset
// );

// window.scrollTo({
//   left: s1coords.left + window.pageXOffset,
//   top: s1coords.top + window.pageYOffset,
//   behavior: "smooth",
// });

// MORDERN WAYS OF DOING THE SCROLLING AND THAT IS THE BEST WAY

//   section1.scrollIntoView({ behavior: "smooth" });
// });

// TUTORIAL 189 (TYPES OF EVENTS AND EVENT HANDLERS)

// const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading :D");
};

// h1.addEventListener("mouseenter", alertH1);

setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading :D");
// };

// TUTORIAL #190 (EVENT PROPAGATION: BUBBLING AND CAPTURING)

// 1) EVENT BUBBLING
// RANDOM COLOR IS rgb b/w (0- 255, 255, 255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);
  console.log(e.currentTarget === this);

  // How TO STOP EVENT PROPERGATION
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

// TUTORIAL #193 (DOM TRAVERSING)

const h1 = document.querySelector("h1");

// Going downwards: child
console.log(h1.querySelectorAll(".highlight"));
console.log(h1.childNodes);
console.log(h1.children);

h1.firstElementChild.style.color = "white";
h1.lastElementChild.style.color = "orangered";

// GOING UPWARDS: BASICALLY SELECTING PARENTS

console.log(h1.parentNode);
console.log(h1.parentElement);

/////////////////////////////////////////
// CHANGE OF BACKGROUND COLOR HERE

// h1.closest(".header").style.background = "var(--gradient-secondary)";

// h1.closest("h1").style.background = "var(--gradient-primary)";
///////////////////////////////////////

// GOING SIDEWAYS: SELECTING SIBLINGS
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = "scale(0.5)";
});
