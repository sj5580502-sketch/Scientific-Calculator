let display = document.getElementById("display");

function insert(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

function percentage() {
  display.value = display.value / 100;
}

document.addEventListener("keydown", e => {
  if ("0123456789+-*/().".includes(e.key)) insert(e.key);
  if (e.key === "Enter") calculate();
  if (e.key === "Backspace") deleteLast();
});