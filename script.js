/* =========================
   Preguntas: 40 totales (20 CG + 20 Sistemas)
   ========================= */
const QUESTIONS = [
  // Cultura general
  { q: "¿Capital de Francia?", a: ["París","Lyon","Marsella","Niza"], correct: 0 },
  { q: "¿Río más largo del mundo?", a: ["Nilo","Amazonas","Yangtsé","Misisipi"], correct: 1 },
  { q: "¿Quién pintó la Mona Lisa?", a: ["Picasso","Leonardo da Vinci","Van Gogh","Miguel Ángel"], correct: 1 },
  { q: "¿En qué continente está Egipto?", a: ["África","Asia","Europa","Oceanía"], correct: 0 },
  { q: "¿Cuántos planetas tiene el sistema solar?", a: ["7","8","9","10"], correct: 1 },
  { q: "¿Quién escribió 'Don Quijote de la Mancha'?", a: ["Cervantes","Lope de Vega","García Márquez","Shakespeare"], correct: 0 },
  { q: "¿Cuál es el océano más grande?", a: ["Atlántico","Índico","Pacífico","Ártico"], correct: 2 },
  { q: "¿Dónde se originaron los Juegos Olímpicos?", a: ["Roma","Atenas","Esparta","Egipto"], correct: 1 },
  { q: "¿Cuál es el idioma más hablado en el mundo?", a: ["Inglés","Español","Chino mandarín","Árabe"], correct: 2 },
  { q: "¿Qué animal es conocido como 'el rey de la selva'?", a: ["León","Tigre","Elefante","Jaguar"], correct: 0 },
  { q: "¿Quién fue Albert Einstein?", a: ["Físico","Pintor","Político","Matemático"], correct: 0 },
  { q: "¿Cuál es la montaña más alta del mundo?", a: ["K2","Everest","Kangchenjunga","Makalu"], correct: 1 },
  { q: "¿Qué país tiene forma de bota?", a: ["España","Italia","Grecia","Portugal"], correct: 1 },
  { q: "¿Cuántos huesos tiene el cuerpo humano adulto?", a: ["206","201","210","180"], correct: 0 },
  { q: "¿Qué gas respiramos principalmente?", a: ["Oxígeno","Nitrógeno","Dióxido de carbono","Hidrógeno"], correct: 1 },
  { q: "¿En qué país se encuentra la Torre Eiffel?", a: ["Francia","Italia","España","Alemania"], correct: 0 },
  { q: "¿Quién fue Simón Bolívar?", a: ["Conquistador","Libertador","Rey","Explorador"], correct: 1 },
  { q: "¿Cuál es el metal más usado en la industria?", a: ["Aluminio","Oro","Hierro","Cobre"], correct: 2 },
  { q: "¿Qué instrumento mide la temperatura?", a: ["Barómetro","Microscopio","Termómetro","Telescopio"], correct: 2 },
  { q: "¿Cuál es la moneda oficial de Estados Unidos?", a: ["Euro","Peso","Dólar","Libra"], correct: 2 },

  // Sistemas
  { q: "¿Qué significa CPU?", a: ["Central Processing Unit","Control Program Unit","Computer Personal Unit","Central Program Utility"], correct: 0 },
  { q: "¿Qué es un algoritmo?", a: ["Un error de software","Una secuencia de pasos","Un lenguaje de programación","Un virus"], correct: 1 },
  { q: "¿Cuál es el sistema operativo de código abierto más popular?", a: ["Windows","Linux","MacOS","Unix"], correct: 1 },
  { q: "¿Qué significa HTML?", a: ["HyperText Markup Language","HighText Machine Language","Hyper Tool Multi Language","Home Tool Markup Language"], correct: 0 },
  { q: "¿Cuál es la unidad básica de información?", a: ["Byte","Bit","KB","MB"], correct: 1 },
  { q: "¿Qué es un compilador?", a: ["Traductor de código","Editor de texto","Gestor de memoria","Antivirus"], correct: 0 },
  { q: "¿Qué significa IP en redes?", a: ["Internet Protocol","Internal Process","Inter Program","Information Point"], correct: 0 },
  { q: "¿Qué tipo de lenguaje es Python?", a: ["Compilado","Interpretado","Binario","Ensamblador"], correct: 1 },
  { q: "¿Cuál es el puerto por defecto de HTTP?", a: ["20","80","21","443"], correct: 1 },
  { q: "¿Qué significa SQL?", a: ["Structured Query Language","Simple Query Logic","System Question Language","Sequential Query Language"], correct: 0 },
  { q: "¿Qué es un servidor?", a: ["Un dispositivo que provee servicios","Un virus","Un programa de diseño","Un lenguaje"], correct: 0 },
  { q: "¿Qué significa BIOS?", a: ["Basic Input Output System","Binary Integrated Operating System","Basic Internal Operation Setup","Binary Input Output Source"], correct: 0 },
  { q: "¿Qué topología de red tiene un nodo central?", a: ["Anillo","Malla","Estrella","Bus"], correct: 2 },
  { q: "¿Qué es un firewall?", a: ["Protección de red","Un virus","Un lenguaje de programación","Un compilador"], correct: 0 },
  { q: "¿Qué lenguaje usa la web junto a HTML y CSS?", a: ["Java","Python","JavaScript","C#"], correct: 2 },
  { q: "¿Qué significa DNS?", a: ["Domain Name System","Data Network Service","Digital Name Server","Domain Net Setup"], correct: 0 },
  { q: "¿Qué comando se usa para listar archivos en Linux?", a: ["ls","cd","mkdir","pwd"], correct: 0 },
  { q: "¿Qué significa URL?", a: ["Uniform Resource Locator","Universal Reference Link","Unified Resource Language","Universal Routing Locator"], correct: 0 },
  { q: "¿Cuál es el sistema numérico que usan las computadoras?", a: ["Decimal","Octal","Binario","Hexadecimal"], correct: 2 },
  { q: "¿Qué significa RAM?", a: ["Random Access Memory","Read Access Memory","Rapid Allocation Module","Runtime Access Method"], correct: 0 }
];

/* =========================
   Variables del juego
   ========================= */
let player = "";
let score = 0;
let currentQ = 0;
let selectedQuestions = [];

const startScreen = document.getElementById("start");
const gameScreen = document.getElementById("game");
const winScreen = document.getElementById("win");

const hudUser = document.getElementById("hudUser");
const hudScore = document.getElementById("hudScore");
const qText = document.getElementById("qText");
const answersForm = document.getElementById("answers");
const btnSubmit = document.getElementById("btnSubmit");
const btnNext = document.getElementById("btnNext");
const feedback = document.getElementById("feedback");
const rankingList = document.getElementById("ranking");
const winUser = document.getElementById("winUser");
const winScore = document.getElementById("winScore");
const btnSpin = document.getElementById("btnSpin");
const wheel = document.getElementById("wheel");

const qaSection = document.getElementById("qa");
const counter = document.createElement("p");
counter.id = "counter";
counter.style.fontWeight = "bold";
qaSection.prepend(counter);

// Canvas confeti
const confettiCanvas = document.getElementById("confetti");
const ctx = confettiCanvas.getContext("2d");
let confettiPieces = [];

/* =========================
   Funciones de juego
   ========================= */
function startGame() {
  player = document.getElementById("username").value.trim();
  if (!player) return alert("Ingresa un nombre");

  score = 0;
  currentQ = 0;
  selectedQuestions = QUESTIONS.sort(() => Math.random() - 0.5).slice(0, 10);

  hudUser.textContent = player;
  hudScore.textContent = score;

  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

function spinWheel() {
  if (currentQ >= selectedQuestions.length) {
    endGame();
    return;
  }

  let spinDeg = 720 + Math.floor(Math.random() * 360);
  wheel.style.transition = "transform 2s ease-out";
  wheel.style.transform = `rotate(${spinDeg}deg)`;

  setTimeout(() => {
    showQuestion();
  }, 2200);
}

function showQuestion() {
  const q = selectedQuestions[currentQ];
  qText.textContent = q.q;
  counter.textContent = `Pregunta ${currentQ + 1} de ${selectedQuestions.length}`;

  answersForm.innerHTML = "";
  q.a.forEach((opt, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="radio" name="answer" value="${i}" />
      ${opt}
    `;
    answersForm.appendChild(label);
  });

  feedback.textContent = "";
  qaSection.classList.remove("hidden");
  btnSubmit.classList.remove("hidden");
  btnNext.classList.add("hidden");
}

function checkAnswer() {
  const q = selectedQuestions[currentQ];
  const chosen = answersForm.querySelector("input[name='answer']:checked");
  if (!chosen) return alert("Selecciona una opción");

  const ans = parseInt(chosen.value);
  if (ans === q.correct) {
    score += 10;
    feedback.textContent = "✅ Correcto!";
  } else {
    feedback.textContent = `❌ Incorrecto. Respuesta: ${q.a[q.correct]}`;
  }

  hudScore.textContent = score;
  btnSubmit.classList.add("hidden");
  btnNext.classList.remove("hidden");
}

function nextQuestion() {
  currentQ++;
  qaSection.classList.add("hidden");

  if (currentQ < selectedQuestions.length) {
    btnSpin.disabled = false;
  } else {
    endGame();
  }
}

function endGame() {
  gameScreen.classList.add("hidden");
  winScreen.classList.remove("hidden");

  winUser.textContent = player;
  winScore.textContent = score;

  const li = document.createElement("li");
  li.textContent = `${player} — ${score} puntos`;
  rankingList.appendChild(li);

  startConfetti();
}

function restartGame() {
  winScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");
  stopConfetti();
}

/* =========================
   Confeti 🎉
   ========================= */
function startConfetti() {
  resizeCanvas();
  confettiPieces = Array.from({ length: 200 }).map(() => createConfettiPiece());
  requestAnimationFrame(updateConfetti);
}

function stopConfetti() {
  confettiPieces = [];
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}

function createConfettiPiece() {
  return {
    x: Math.random() * confettiCanvas.width,
    y: Math.random() * confettiCanvas.height - confettiCanvas.height,
    color: `hsl(${Math.random() * 360},100%,50%)`,
    size: Math.random() * 6 + 4,
    speed: Math.random() * 3 + 2,
    tilt: Math.random() * 10 - 5
  };
}

function updateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiPieces.forEach(p => {
    p.y += p.speed;
    p.x += Math.sin(p.tilt);
    if (p.y > confettiCanvas.height) {
      p.y = -10;
      p.x = Math.random() * confettiCanvas.width;
    }
    ctx.fillStyle = p.color;
    ctx.fillRect(p.x, p.y, p.size, p.size);
  });

  if (confettiPieces.length > 0) {
    requestAnimationFrame(updateConfetti);
  }
}

function resizeCanvas() {
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
}

/* =========================
   Eventos
   ========================= */
document.getElementById("btnStart").addEventListener("click", startGame);
btnSpin.addEventListener("click", () => {
  btnSpin.disabled = true;
  spinWheel();
});
btnSubmit.addEventListener("click", checkAnswer);
btnNext.addEventListener("click", nextQuestion);
document.getElementById("btnRestart").addEventListener("click", restartGame);
window.addEventListener("resize", resizeCanvas);
