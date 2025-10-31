// CMPM 121 — Smelly Code Activity (refactored, minimal changes)

// ---------- Constants (IDs & copy) ----------
const ID_INCREMENT = "increment";
const ID_DECREMENT = "dec";
const ID_RESET = "reset";
const ID_COUNTER = "counter";
const HEADING_TEXT = "CMPM 121 Project";

// ---------- Game State ----------
let count = 0;

// ---------- DOM Setup ----------
function setup() {
  document.body.innerHTML = `
    <h1>${HEADING_TEXT}</h1>
    <p>Counter: <span id="${ID_COUNTER}">0</span></p>
    <button id="${ID_INCREMENT}">Click Me!</button>
    <button id="${ID_DECREMENT}">Decrement</button>
    <button id="${ID_RESET}">Reset</button>
  `;

  // Grab elements (fail fast if any are missing)
  const incBtn = document.getElementById(ID_INCREMENT);
  const decBtn = document.getElementById(ID_DECREMENT);
  const resetBtn = document.getElementById(ID_RESET);
  const counterEl = document.getElementById(ID_COUNTER);

  if (!incBtn || !decBtn || !resetBtn || !counterEl) return;

  // ---------- Rendering (single source of truth) ----------
  const render = () => {
    counterEl.textContent = String(count);
    document.title = `Clicked ${count}`;
    document.body.style.backgroundColor = count % 2 ? "pink" : "lightblue";
  };

  // ---------- Event Wiring (deduplicated) ----------
  const apply = (op: "inc" | "dec" | "reset") => {
    if (op === "inc") count += 1;
    else if (op === "dec") count -= 1;
    else count = 0;
    render();
  };

  incBtn.addEventListener("click", () => apply("inc"));
  decBtn.addEventListener("click", () => apply("dec"));
  resetBtn.addEventListener("click", () => apply("reset"));

  // initial paint
  render();
}

// ---------- App Start ----------
setup();
