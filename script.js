const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");
const play = document.querySelector(".play");
const stop = document.querySelector(".stop");
const adicionar = document.querySelector(".adicionar");
const diminuir = document.querySelector(".diminuir");
const cards = document.querySelectorAll(".card img");
const darkicon = document.querySelector(".button-dark");
const darklight = document.querySelector(".button-dark2");
const body = document.querySelector("body");

let stopTimerOut;

darkicon.addEventListener("click", () => {
  body.classList.toggle("dark");
  darkicon.classList.toggle("hiden");
  darklight.classList.toggle("show");
});

darklight.addEventListener("click", () => {
  body.classList.toggle("dark");
  darklight.classList.toggle("show");
  darkicon.classList.toggle("show");
});

function addCor() {
  play.addEventListener("click", () => {
    play.classList.add("modblue");
    stop.classList.remove("modblue");
  });
  stop.addEventListener("click", () => {
    stop.classList.add("modblue");
    play.classList.remove("modblue");
  });
  adicionar.addEventListener("mouseover", () => {
    adicionar.classList.add("modblue");
  });
  adicionar.addEventListener("mouseout", () => {
    adicionar.classList.remove("modblue");
  });
  diminuir.addEventListener("mouseover", () => {
    diminuir.classList.add("modblue");
  });
  diminuir.addEventListener("mouseout", () => {
    diminuir.classList.remove("modblue");
  });
}

cards.forEach((card) => {
  card.addEventListener("click", () => {
    card.classList.toggle("modblue");
  });
});

function decrease() {
  stopTimerOut = setTimeout(() => {
    let minu = minutos.textContent;
    let seconds = segundos.textContent;

    if (minu <= 0 && seconds <= 0) {
      alert("tempo esgotado");
      resete();
      return;
    }

    if (seconds <= 0) {
      seconds = 60;
      minutos.textContent = String(minu - 1).padStart(2, "0");
    }

    segundos.textContent = String(seconds - 1).padStart(2, "0");

    decrease();
  }, 1000);
}

function resete() {
  minutos.textContent = "25";
  segundos.textContent = "00";
}

function zerar() {
  minutos.textContent = "00";
  segundos.textContent = "00";
}

function add() {
  let minu = Number(minutos.textContent);
  if (minu >= 59) {
    zerar();
    return;
  }
  minutos.textContent = String(minu + 5).padStart(2, "0");
}

function men() {
  let minu = Number(minutos.textContent);
  if (minu <= 4) {
    zerar();
    return;
  }
  minutos.textContent = String(minu - 5).padStart(2, "0");
}

function parar() {
  clearTimeout(stopTimerOut);
}

function cardsmusic() {
  document.querySelector(".card1").addEventListener("click", () => {
    let button = new Audio("./music/floresta.wav");
    button.play();
  });

  document.querySelector(".card2").addEventListener("click", () => {
    let button = new Audio("./music/chuva.wav");

    return button.play();
  });
  document.querySelector(".card3").addEventListener("click", () => {
    let button = new Audio("./music/cafeteria.wav");

    return button.play();
  });
  document.querySelector(".card4").addEventListener("click", () => {
    let button = new Audio("./music/lareira.wav");

    return button.play();
  });
}

(window.onload = addCor()), cardsmusic();
play.addEventListener("click", () => {
  decrease();
});

stop.addEventListener("click", parar);
adicionar.addEventListener("click", add);
diminuir.addEventListener("click", men);
