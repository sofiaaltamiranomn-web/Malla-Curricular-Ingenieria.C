/* ===============================
   DATOS DE LA MALLA CURRICULAR
================================ */

const malla = {
    "Semestre 1": [
        "Fundamentos de Administración",
        "Economía, Sustentabilidad y Emprendimiento",
        "Introducción al Análisis de Datos",
        "Introducción a la Matemática",
        "Contabilidad",
        "Taller de Competencias Comunicativas",
        "Taller de Competencias para el Aprendizaje"
    ],
    "Semestre 2": [
        "Administración Estratégica",
        "Matemática",
        "Fundamentos de Microeconomía",
        "Contabilidad Financiera",
        "Cultura y Valores",
        "Taller de Desarrollo Personal I"
    ],
    "Semestre 3": [
        "Estrategia Competitiva (A+S)",
        "Fundamentos de Marketing",
        "Cálculo I",
        "Fundamentos de Macroeconomía",
        "Inglés Básico I",
        "Persona y Sentido",
        "Taller de Desarrollo Personal II"
    ],
    "Semestre 4": [
        "Derecho Comercial y Laboral",
        "Innovación en Modelos de Negocio",
        "Estadística I",
        "Microeconomía",
        "Costos para la Toma de Decisiones",
        "Inglés Básico II"
    ],
    "Semestre 5": [
        "Gestión de Personas",
        "Gestión de la Innovación",
        "Métodos Cuantitativos para la Gestión",
        "Macroeconomía",
        "Administración Financiera (A+S)",
        "Inglés Intermedio I"
    ],
    "Semestre 6": [
        "Comportamiento y Desarrollo Organizacional",
        "Investigación de Mercado (A+S)",
        "Métodos Avanzados en Estadística",
        "Comercio Internacional",
        "Mercado de Capitales",
        "Inglés Intermedio II"
    ],
    "Semestre 7": [
        "Marketing Estratégico (A+S)",
        "Econometría",
        "Gestión de Operaciones",
        "Electivo I",
        "Finanzas Corporativas",
        "Inglés Avanzado I"
    ],
    "Semestre 8": [
        "Gobernanza y Control Estratégico",
        "Consultoría Aplicada a Organizaciones (A+S)",
        "Análisis de Datos",
        "Electivo II",
        "Formulación y Evaluación de Proyectos",
        "Inglés Avanzado II"
    ],
    "Semestre 9": [
        "Ética y Responsabilidad Social",
        "Políticas Públicas, Innovación y Emprendimiento",
        "Simulación de Negocios",
        "Práctica Profesional",
        "Electivo III"
    ],
    "Semestre 10": [
        "Seminario de Habilidades para la Gestión",
        "Plan de Negocios",
        "Electivo IV"
    ]
};

/* ===============================
   REQUISITOS
================================ */

const requisitos = {
    "Administración Estratégica": ["Fundamentos de Administración"],
    "Matemática": ["Introducción a la Matemática"],
    "Contabilidad Financiera": ["Contabilidad"],
    "Estrategia Competitiva (A+S)": ["Administración Estratégica"],
    "Fundamentos de Marketing": ["Administración Estratégica"],
    "Cálculo I": ["Matemática"],
    "Persona y Sentido": ["Cultura y Valores"],
    "Taller de Desarrollo Personal II": ["Taller de Desarrollo Personal I"],
    "Innovación en Modelos de Negocio": ["Economía, Sustentabilidad y Emprendimiento"],
    "Estadística I": ["Matemática"],
    "Microeconomía": ["Cálculo I", "Fundamentos de Microeconomía"],
    "Costos para la Toma de Decisiones": ["Contabilidad Financiera"],
    "Inglés Básico II": ["Inglés Básico I"],
    "Gestión de Personas": ["Derecho Comercial y Laboral", "Administración Estratégica"],
    "Gestión de la Innovación": ["Innovación en Modelos de Negocio"],
    "Métodos Cuantitativos para la Gestión": ["Cálculo I"],
    "Macroeconomía": ["Fundamentos de Macroeconomía"],
    "Administración Financiera (A+S)": ["Costos para la Toma de Decisiones"],
    "Inglés Intermedio I": ["Inglés Básico II"],
    "Comportamiento y Desarrollo Organizacional": ["Gestión de Personas"],
    "Investigación de Mercado (A+S)": ["Fundamentos de Marketing", "Estadística I"],
    "Métodos Avanzados en Estadística": ["Métodos Cuantitativos para la Gestión", "Estadística I"],
    "Comercio Internacional": ["Macroeconomía"],
    "Mercado de Capitales": ["Estadística I"],
    "Inglés Intermedio II": ["Inglés Intermedio I"],
    "Marketing Estratégico (A+S)": ["Investigación de Mercado (A+S)"],
    "Econometría": ["Métodos Avanzados en Estadística", "Métodos Cuantitativos para la Gestión"],
    "Gestión de Operaciones": ["Métodos Cuantitativos para la Gestión"],
    "Finanzas Corporativas": ["Mercado de Capitales"],
    "Inglés Avanzado I": ["Inglés Intermedio II"],
    "Gobernanza y Control Estratégico": ["Estrategia Competitiva (A+S)"],
    "Consultoría Aplicada a Organizaciones (A+S)": ["Gestión de la Innovación"],
    "Análisis de Datos": ["Introducción al Análisis de Datos", "Estadística I"],
    "Formulación y Evaluación de Proyectos": ["Finanzas Corporativas"],
    "Inglés Avanzado II": ["Inglés Avanzado I"],
    "Ética y Responsabilidad Social": ["Gobernanza y Control Estratégico"],
    "Políticas Públicas, Innovación y Emprendimiento": ["Gestión de la Innovación", "Macroeconomía"],
    "Simulación de Negocios": ["Análisis de Datos"],
    "Seminario de Habilidades para la Gestión": ["Gobernanza y Control Estratégico"],
    "Plan de Negocios": ["Gobernanza y Control Estratégico", "Formulación y Evaluación de Proyectos"]
};

/* ===============================
   LÓGICA PRINCIPAL
================================ */

const contenedor = document.getElementById("malla");
const mensaje = document.getElementById("mensaje");

let aprobados = JSON.parse(localStorage.getItem("aprobados")) || [];

// Crear malla
for (const semestre in malla) {
    const col = document.createElement("div");
    col.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    col.appendChild(titulo);

    malla[semestre].forEach(ramo => {
        const div = document.createElement("div");
        div.className = "ramo";
        div.textContent = ramo;

        if (aprobados.includes(ramo)) {
            div.classList.add("aprobado");
        }

        div.addEventListener("click", () => manejarClick(ramo, div));
        col.appendChild(div);
    });

    contenedor.appendChild(col);
}

// Manejo de aprobación
function manejarClick(ramo, elemento) {
    if (aprobados.includes(ramo)) {
        aprobados = aprobados.filter(r => r !== ramo);
        elemento.classList.remove("aprobado");
    } else {
        const faltantes = verificarRequisitos(ramo);
        if (faltantes.length > 0) {
            mostrarMensaje("Faltan aprobar: " + faltantes.join(", "));
            return;
        }
        aprobados.push(ramo);
        elemento.classList.add("aprobado");
    }

    localStorage.setItem("aprobados", JSON.stringify(aprobados));
}

// Verificar requisitos
function verificarRequisitos(ramo) {
    const reqs = requisitos[ramo] || [];
    return reqs.filter(r => !aprobados.includes(r));
}

// Mensajes
function mostrarMensaje(texto) {
    mensaje.textContent = texto;
    mensaje.classList.remove("oculto");

    setTimeout(() => {
        mensaje.classList.add("oculto");
    }, 4000);
}

