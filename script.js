"use strict";

const container = document.querySelector("#container");

function animateObject() {
  let curPosition = 0;
  let direction = 1;

  function movement() {
    curPosition += direction;
    container.style.transform = `translateX(${curPosition}px)`;

    if (curPosition >= 300) {
      direction = -1;
    } else if (curPosition <= 0) {
      direction = 1;
    }

    //Request the next animation frame
    requestAnimationFrame(movement);
  }

  movement();
}

animateObject();
