const questions = [
    {
        question: "¿Qué app usas más?",
        options: ["Instagram", "TikTok", "YouTube", "WhatsApp"]
    },
    {
        question: "¿Cuál es tu comida favorita?",
        options: ["Pizza", "Hamburguesa", "Sushi", "Tacos"]
    },
    {
        question: "¿Qué color te gusta más?",
        options: ["Azul", "Rojo", "Verde", "Amarillo"]
    },
    {
        question: "¿Cuál es tu videojuego favorito de Sonic?",
        options: ["Sonic Adventure", "Sonic Generations", "Sonic Mania", "Sonic Forces"]
    },
    {
        question: "¿Qué harías si tuvieras super velocidad?",
        options: ["Viajar por el mundo", "Ayudar a otros", "Competir en carreras", "Hacer bromas"]
    },
    {
        question: "¿Qué tipo de música prefieres?",
        options: ["Rock", "Pop", "Electrónica", "Clásica"]
    },
    {
        question: "¿Cuál de estos personajes te agrada más?",
        options: ["Tails", "Knuckles", "Amy", "Shadow"]
    },
    {
        question: "¿Qué harías en un día libre?",
        options: ["Dormir", "Salir con amigos", "Jugar videojuegos", "Leer"]
    },
    {
        question: "¿Cuál es tu conocimiento sobre Sonic?",
        options: ["Experto", "Intermedio", "Básico", "Solo conozco a Sonic"]
    }
];

const results = [
    {
        name: "Sonic.EXE",
        desc: "¡Eres misterioso y un poco inquietante! Tienes un lado oscuro que pocos conocen.",
        img: "https://th.bing.com/th/id/R.a648482171200d1064a55726023bc58f?rik=fu8VpmwdrCm7ow&riu=http%3a%2f%2fpm1.aminoapps.com%2f7204%2ffea7ce0d93d28843dd49a42e865831cf0e8454cfr1-800-743v2_uhq.jpg&ehk=eAxSZU92ZwARLOqyuJDKZ1N9Iz6CiBd1%2boEJCNOr3Aw%3d&risl=&pid=ImgRaw&r=0"
    },
    {
        name: "Sonic Rewrite",
        desc: "¡Eres creativo y te gusta reinventarte! Siempre buscas nuevas formas de expresarte.",
        img: "https://images.gamebanana.com/img/ss/mods/63a07c3b7ae93.jpg"
    },
    {
        name: "Sonic Verde",
        desc: "¡Eres único y diferente! No tienes miedo de destacar entre la multitud, y no existes jaja.",
        img: "https://wallpapers.com/images/hd/stylized-green-sonic-character-gj771hfhgvlw0l4w-2.jpg"
    },
    {
        name: "Sonic Clásico",
        desc: "¡Eres nostálgico y te gustan las cosas simples! Valoras la tradición y la diversión clásica.",
        img: "https://tse3.mm.bing.net/th/id/OIP.UC4AzrHsQC3ox-z9DUkxrgHaJn?rs=1&pid=ImgDetMain&o=7&rm=3"
    },
    {
        name: "Sonic Moderno",
        desc: "¡Eres moderno y siempre estás a la vanguardia! Te adaptas fácilmente a los cambios.",
        img: "https://wallpapers.com/images/hd/modern-sonic-1597-x-2856-wallpaper-qfejh9omvumwq8n2.jpg"
    },
    {
        name: "Sonic Adventure",
        desc: "¡Eres aventurero y valiente! Siempre buscas nuevas experiencias y desafíos.",
        img: "https://i.redd.it/nj9cftddy8y71.jpg"
    },
    {
        name: "Sonic Boom",
        desc: "¡Eres energético y siempre estás listo para la acción! Te gusta innovar y probar cosas nuevas.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2a/Sonic_Boom.png"
    },
    {
        name: "Sonic Oscuro",
        desc: "Tienes un lado misterioso y profundo, pero eres leal a tus amigos.",
        img: "https://static.wikia.nocookie.net/sonic/images/7/7e/Dark_Sonic.png"
    },
    {
        name: "Sonic Dorado",
        desc: "¡Eres brillante y optimista! Siempre ves el lado positivo de las cosas.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2d/Super_Sonic.png"
    },
    {
        name: "Sonic Werehog",
        desc: "¡Eres fuerte y valiente! No temes mostrar tu lado salvaje cuando es necesario.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2e/Werehog.png"
    },
    {
        name: "Sonic Chibi",
        desc: "¡Eres adorable y simpático! Todos disfrutan de tu compañía.",
        img: "https://static.wikia.nocookie.net/sonic/images/6/6e/Chibi_Sonic.png"
    },
    {
        name: "Sonic Caballero",
        desc: "¡Eres noble y justo! Siempre luchas por lo correcto.",
        img: "https://static.wikia.nocookie.net/sonic/images/7/7e/Sonic_Black_Knight.png"
    },
    {
        name: "Sonic de las Olimpiadas",
        desc: "¡Eres competitivo y te encanta el deporte! Siempre das lo mejor de ti.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2e/Olympic_Sonic.png"
    },
    {
        name: "Sonic de las Sombras",
        desc: "¡Eres enigmático y te gusta mantener el misterio! Tienes un aura especial.",
        img: "https://static.wikia.nocookie.net/sonic/images/7/7e/Shadow_Sonic.png"
    },
    {
        name: "Sonic Pixel",
        desc: "¡Eres retro y te encanta lo clásico! Disfrutas de los videojuegos de antaño.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2e/Pixel_Sonic.png"
    },
    {
        name: "Sonic Ninja",
        desc: "¡Eres ágil y silencioso! Te mueves rápido y nadie te ve venir.",
        img: "https://static.wikia.nocookie.net/sonic/images/2/2e/Ninja_Sonic.png"
    }
];

let currentQuestion = 0;
let answers = [];


const mainContent = document.getElementById('main-content');
const progressBar = document.getElementById('progress-bar');

// Colores de Sonic para cada pregunta
const sonicColors = [
    '#0074D9', // azul Sonic
    '#FF4136', // rojo
    '#2ECC40', // verde
    '#FFDC00', // amarillo
    '#B10DC9', // morado
    '#FF851B', // naranja
    '#7FDBFF', // celeste
    '#F012BE', // rosa
    '#001f3f', // azul oscuro
    '#39CCCC'  // turquesa
];

// Alternativa: ícono SVG embebido para máxima compatibilidad
const sonicMiniIcon = `<svg width="28" height="28" viewBox="0 0 64 64" style="vertical-align:middle;margin-left:8px;">
  <circle cx="32" cy="32" r="32" fill="#0074D9"/>
  <ellipse cx="32" cy="38" rx="18" ry="14" fill="#fff"/>
  <ellipse cx="32" cy="32" rx="14" ry="14" fill="#0074D9"/>
  <ellipse cx="26" cy="30" rx="2.5" ry="4" fill="#fff"/>
  <ellipse cx="38" cy="30" rx="2.5" ry="4" fill="#fff"/>
  <ellipse cx="26" cy="32" rx="1.2" ry="2" fill="#222"/>
  <ellipse cx="38" cy="32" rx="1.2" ry="2" fill="#222"/>
  <ellipse cx="32" cy="40" rx="5" ry="2" fill="#222"/>
</svg>`;

document.getElementById('start-btn').onclick = startTest;

function startTest() {
    currentQuestion = 0;
    answers = [];
    showQuestion();
    updateProgressBar();
    document.body.style.background = sonicColors[0];
}

function showQuestion() {
    const q = questions[currentQuestion];
    // Cambia el color de fondo según la pregunta
    document.body.style.background = sonicColors[currentQuestion % sonicColors.length];
    mainContent.innerHTML = `
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;">
            <span style="font-size:1.1rem;font-weight:bold;">Pregunta ${currentQuestion+1} de ${questions.length}</span>
            <span>${sonicMiniIcon}</span>
        </div>
        <h2>${q.question}</h2>
        <div class="options">
            ${q.options.map((opt, i) => `<button class="option-btn" onclick="selectOption(${i})">${opt}</button>`).join('')}
        </div>
    `;
}

window.selectOption = function(optionIdx) {
    answers.push(optionIdx);
    currentQuestion++;
    updateProgressBar();
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function updateProgressBar() {
    const percent = ((currentQuestion) / questions.length) * 100;
    progressBar.style.width = percent + '%';
    // Cambia el color de la barra de progreso según la pregunta
    progressBar.style.background = sonicColors[(currentQuestion-1 >= 0 ? currentQuestion-1 : 0) % sonicColors.length];
}

function showResult() {
    // Suma simple para ejemplo, puedes mejorar el algoritmo
    const sum = answers.reduce((a, b) => a + b, 0);
    const idx = sum % results.length;
    const result = results[idx];
    // Fondo azul Sonic para el resultado
    document.body.style.background = '#0074D9';
    mainContent.innerHTML = `
        <h2 id="result-title">${result.name}</h2>
        <img id="result-img" src="${result.img}" alt="${result.name}">
        <div id="result-desc">${result.desc}</div>
        <div id="final-actions">
            <button id="save-btn">Guardar Resultado</button>
            <button id="restart-btn">Volver a hacer el test</button>
        </div>
    `;
    document.getElementById('restart-btn').onclick = startTest;
    document.getElementById('save-btn').onclick = saveResultAsImage;
}

function saveResultAsImage() {
    html2canvas(mainContent).then(canvas => {
        const link = document.createElement('a');
        link.download = 'resultado-sonic.png';
        link.href = canvas.toDataURL();
        link.click();
    });
}

// Cargar html2canvas desde CDN
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
document.body.appendChild(script);
