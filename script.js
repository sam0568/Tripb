// Grupos y contraseñas
const grupos = {
  "Grupo 1": "ipbgrupo1-626",
  "Grupo 2": "ipbgrupo2-348",
  "Grupo 3": "ipbgrupo3-542",
  "Grupo 4": "ipbgrupo4-486",
  "Grupo 5": "ipbgrupo5-621",
  "Grupo 6": "ipbgrupo6-323",
  "Grupo 7": "ipbgrupo7-772",
  "Grupo 8": "ipbgrupo8-442",
  "Grupo 9": "ipbgrupo9-667",
  "Grupo 10": "ipbgrupo10-990",
  "Grupo 11": "ipbgrupo11-330",
  "Grupo 12": "ipbgrupo12-550",
  "Grupo 13": "ipbgrupo13-524",
  "Grupo 14": "ipbgrupo14-332",
  "Grupo 15": "ipbgrupo15-810",
  "Grupo 16": "ipbgrupo16-729",
};

// Aquí va tu objeto "postas" completo, no hay que cambiarlo
const postas = {
  1: [
    { 
      question: "El 14 de agosto de 2025, un fuerte terremoto sacudió la región de Kamchatka, en Rusia, generando una alerta de tsunami en partes del océano Pacífico. ¿Cuál de las siguientes afirmaciones explica mejor por qué esta región es propensa a sismos tan intensos?",
      options: [
        "Porque se encuentra sobre una placa continental estable y alejada de zonas de subducción.",
        "Porque forma parte del Cinturón de Fuego del Pacífico, donde convergen varias placas tectónicas.",
        "Porque la actividad sísmica solo ocurre en el hemisferio sur y esta región está en el norte.",
        "Porque los terremotos son causados únicamente por el clima extremo, común en esa zona."
      ],
      answer: 1
    },
    {
      question: "Selecciona el grupo que solo contiene propiedades intensivas",
      options: [
        "Masa, volumen, longitud",
        "Densidad, punto de ebullición, dureza",
        "Peso, divisibilidad, inercia",
        "Longitud, volumen, calor específico"
      ],
      answer: 1
    },
    {
      question: "Si en el laboratorio encontramos un frasco con un producto químico que puede provocar quemaduras en la piel y además es inflamable ¿Qué etiquetado debería tener el envase?",
      options: [
        "GHS08",
        "GHS09",
        "GHS03",
        "GHS05",
        "GHS07",
        "GHS06"
      ],
      answer: 3
    }
  ],
  2: [
    {
      question: "La forma menos costosa, más rápida y eficiente de que los datos viajen por todo el mundo es a través de cables. Una parte esencial de la infraestructura de internet son los cables submarinos. Estos cables se extienden por los océanos y conectan diferentes países y continentes. ¿A qué ciudad de nuestro País llegan todos los cables que permiten que nos conectemos a INTERNET?",
      options: [
        "Mar del Plata",
        "Las Toninas",
        "Las Grutas",
        "Miramar"
      ],
      answer: 1
    },
    {
      question: "La inteligencia artificial (IA) se utiliza cada vez más en distintas áreas de la vida cotidiana. ¿Cuál de las siguientes opciones representa un uso real y actual de la IA?",
      options: [
        "Crear energía a partir del agua sin necesidad de tecnología.",
        "Reemplazar completamente a los docentes en todas las escuelas.",
        "Reconocer voces y responder preguntas en asistentes virtuales como Siri o Alexa.",
        "Controlar el clima para evitar tormentas y terremotos."
      ],
      answer: 2
    },
    {
      question: "¿Cuál es la función del atajo Ctrl + Z en Microsoft Word?",
      options: [
        "Cerrar el documento",
        "Rehacer una acción",
        "Deshacer una acción",
        "Guardar un documento"
      ],
      answer: 2
    },
    {
      question: "¿De qué personaje de la farándula se disfrazó nuestra Vicedirectora en la estudiantina del 2024?",
      options: [
        "Moria Casán",
        "Susana Gimenez",
        "Graciela Alfano",
        "Gladys Florimonte"
      ],
      answer: 1
    }
  ],
  3: [
    {
      question: "La palabra 'Democracia'...",
      options: [
        "Tiene su origen en la Antigua Roma y en latín significa 'gobierno de todos'.",
        "Se originó en la Península Ibérica y significa 'Participación de todos'.",
        "Surgió en la Antigua Grecia y significa 'pueblo' y 'gobierno'.",
        "Viene del griego 'oikos' y significa 'conjunto de familias unidas'."
      ],
      answer: null
    },
    {
      question: "Los diputados del Poder Legislativo de la Nación:",
      options: [
        "Son 257 actualmente, y este número es proporcional a la cantidad de provincias",
        "Son 280 actualmente y este número es proporcional a la población de cada distrito",
        "Son 270 actualmente y las autoridades de cada provincia determinan la cantidad de diputados que tendrán en esta Cámara",
        "Son 257 actualmente y se eligen proporcionalmente a la población de cada distrito"
      ],
      answer: 3
    },
    {
      question: "¿Cómo es el segundo nombre del preceptor Rubén García?",
      options: [
        "Néstor",
        "Adolfo",
        "Eduardo",
        "Federico"
      ],
      answer: 2
    }
  ],
  4: [
    {
      question: "¿Cuál es el principal objetivo de los bloques económicos regionales?",
      options: [
        "Crear grupos de países diferentes para lograr un trabajo colaborativo",
        "Agrupación de varios países vecinos que tiene la finalidad de crear un comercio internacional que los beneficie económicamente",
        "Grupo de países que se unen para permitir viajes entre las personas.",
        "Grupos de países que tienen el objetivo de mejorar las relaciones internacionales en el mundo."
      ],
      answer: 1
    },
    {
      question: "¿Cuál es el objeto de estudio de la Geografía?",
      options: [
        "El paisaje.",
        "Las sociedades.",
        "El espacio geográfico."
      ],
      answer: 2
    },
    {
      question: "¿De qué cantante se disfrazó el director Matías Sinfreu en la estudiantina 2024?",
      options: [
        "Hernán de la Champions Liga",
        "Ke Personajes",
        "La Mona Jimenez",
        "Leo Mattioli"
      ],
      answer: 1
    }
  ],
  5: [
    {
      question: "¿Cuál de los siguientes artistas argentinos podría ser relacionado tanto con el rock como con la poesía, y cuyo nombre completo incluye una palabra que también es parte del nombre de una ciudad?",
      options: [
        "Charly García – porque “García” es una ciudad de España.",
        "Fito Páez – porque “Páez” suena como “País”.",
        "Luis Alberto Spinetta – porque “Alberto” es una ciudad en Argentina.",
        "Andrés Calamaro – porque “Calamaro” no es una ciudad, pero “Andrés” sí lo es en Colombia."
      ],
      answer: 3
    },
    {
      question: "¿Qué artista plástico fue pionero en la incorporación de la técnica collage en sus obras?",
      options: [
        "Gustav Klimt",
        "Vicent Van Gogh",
        "Pablo Picasso"
      ],
      answer: 2
    },
    {
      question: "¿Cuál es el segundo nombre de la Vicedirectora de la Institución?",
      options: [
        "Del Carmen",
        "Del Valle",
        "Del Rosario"
      ],
      answer: 1
    }
  ],
  6: [
    {
      question: "Jesús es el centro de la fé cristiana. ¿Cuál afirmación es correcta?",
      options: [
        "Jesús escribió los cuatro evangelios.",
        "Jesús es el Hijo de Dios hecho hombre.",
        "Jesús fue solo un profeta sin relación con Dios.",
        "Jesús fue un guerrero famoso en su época."
      ],
      answer: 1
    },
    {
      question: "En el cristianismo, la parábola del Buen Samaritano enseña un valor central que se aplica en la vida diaria. ¿Cuál es ese valor?",
      options: [
        "La obediencia a las autoridades sin cuestionamientos.",
        "La importancia de cumplir normas religiosas por encima de todo.",
        "El amor al prójimo, sin importar su origen o creencias.",
        "La necesidad de ayudar solo a quienes comparten nuestra fe."
      ],
      answer: 2
    },
    {
      question: "En la doctrina de la Iglesia, la libertad moral se refiere a:",
      options: [
        "Ausencia de toda norma o autoridad.",
        "Poder hacer cualquier cosa que se quiera.",
        "Capacidad de elegir entre el bien o el mal conforme a la verdad.",
        "Facultad de cambiar de religión."
      ],
      answer: 2
    },
    {
      question: "San Francisco de Asís es uno de los santos más conocidos del cristianismo. Se lo asocia con la humildad, la paz y el amor por la naturaleza. ¿Cuál de las siguientes frases representa mejor el espíritu de su vida y enseñanzas?",
      options: [
        "\"El poder y la riqueza son señales de la bendición divina.\"",
        "\"La naturaleza debe ser dominada por el ser humano para su beneficio.\"",
        "\"Es dando como se recibe, es perdonando como se es perdonado.\"",
        "\"La fe verdadera se demuestra combatiendo a quienes no la comparten.\""
      ],
      answer: 2
    }
  ],
  7: [
    {
      question: "La inteligencia emocional es…",
      options: [
        "Saber mucho sobre psicología",
        "Reconocer, entender y manejar emociones propias y ajenas",
        "No mostrar emociones",
        "Controlar a otros"
      ],
      answer: 1
    },
    {
      question: "Mantener un equilibrio entre estudio, descanso y ocio se llama…",
      options: [
        "Gestión del tiempo",
        "Motivación extrínseca",
        "Resiliencia",
        "Autoestima"
      ],
      answer: 0
    },
    {
      question: "En un entorno de trabajo saludable, las llamadas “habilidades blandas” son tan importantes como los conocimientos técnicos. ¿Cuál de las siguientes situaciones mejor representa el uso adecuado de una habilidad blanda?",
      options: [
        "Un empleado que cumple todas sus tareas, pero nunca acepta críticas ni trabaja en equipo.",
        "Un trabajador que termina tarde todo, pero se lleva bien con todos sus compañeros.",
        "Una persona que comunica sus ideas con respeto, escucha a los demás y propone soluciones cuando hay conflictos.",
        "Un líder que siempre tiene razón y no necesita escuchar otras opiniones porque tiene experiencia."
      ],
      answer: 2
    }
  ],
  8: [
    {
      question: "Oficios del Preceptor",
      options: [
        "Un preceptor no debe crear un ambiente y respetuoso ni intervenir si observa discriminación entre los estudiantes.",
        "Un preceptor no debe estar atento a las necesidades y habilidades de cada estudiante.",
        "Un preceptor es una persona cerrada, no está disponible para responder preguntas y escuchar preocupaciones de los estudiantes.",
        "Un preceptor es la persona que está todo el tiempo con los estudiantes en la escuela. Además de compartir el mismo horario de ingreso y egreso trabaja cerca de ellos. Está atenta a cada situación."
      ],
      answer: 3
    },
    {
      question: "¿Cuál es una función importante de la filosofía en la actualidad?",
      options: [
        "Enseñar únicamente hechos históricos sin cuestionarlos.",
        "Reemplazar completamente a la ciencia en la búsqueda de conocimiento.",
        "Fomentar el pensamiento crítico y reflexivo, abriendo la mente a preguntas profundas sobre el mundo y nuestra vida.",
        "Hacer que todos piensen igual para evitar conflictos."
      ],
      answer: 2
    },
    {
      question: "¿Cómo se llamó el primer párroco del pueblo?",
      options: [
        "Jorge Soldera",
        "Aquilini Arguello Ardiles",
        "Rubén Cámpoli"
      ],
      answer: 1
    }
  ],
  9: [
    {
      question: "La palabra “Canción” es:",
      options: [
        "Aguda",
        "Grave",
        "Esdrújula"
      ],
      answer: 0
    },
    {
      question: "En la biblioteca del IPB, dentro de un libro de cuentos, apareció un viejo papel escrito a mano. Es un fragmento de un hechizo literario: para romperlo hay que encontrar la palabra que completa el sentido. Solo una de las opciones es correcta, las demás rompen el significado y el ritmo. Fragmento del hechizo: “Si el aula se queda en silencio, y la tinta recorre la piel del papel, entonces despierta el — que duerme en las palabras.”",
      options: [
        "cuento",
        "mochila",
        "mástil",
        "recreo"
      ],
      answer: 0
    },
    {
      question: "La palabra “RESPLANDECÍAN” es…",
      options: [
        "Aguda",
        "Grave",
        "Esdrújula"
      ],
      answer: 1
    },
    {
      question: "¿En qué año fue fundada nuestra Institución?",
      options: [
        "1961",
        "1962",
        "1964",
        "1960"
      ],
      answer: 3
    }
  ],
  10: [
    {
      question: "¿Cuáles son las capacidades físicas fundamentales?",
      options: [
        "Fuerza y resistencia",
        "Velocidad y flexibilidad",
        "a y b son correctas",
        "Agilidad, equilibrio, reacción, potencia, precisión y ritmo."
      ],
      answer: 2
    },
    {
      question: "¿Cuántos escudos tuvo la Institución?",
      options: [
        "3 escudos",
        "1 escudo",
        "4 escudos",
        "5 escudos"
      ],
      answer: 2
    },
    {
      question: "¿Cuál es el nombre completo del encargado de nuestra cantina?",
      options: [
        "Hugo Román Alcaraz.",
        "Hugo Héctor Alcaraz.",
        "Hugo Alcaraz.",
        "Hugo Damián Alcaraz."
      ],
      answer: null
    }
  ],
  11: [
    {
      question: "La molécula que almacena la información genética en los seres vivos es:",
      options: [
        "ARN",
        "ADN",
        "proteína",
        "glucosa"
      ],
      answer: 1
    },
    {
      question: "¿EN QUÉ SE BASA LA CLASIFICACIÓN DE LA ENERGÍA SEGÚN LA FUENTE?",
      options: [
        "En sí es una energía renovable o no renovable",
        "En su impacto ambiental.",
        "En el objeto o fenómeno del cual proviene.",
        "En la aplicación de una fuerza."
      ],
      answer: 2
    },
    {
      question: "¿Qué indica el número atómico de un elemento?",
      options: [
        "La masa del átomo",
        "La cantidad de protones",
        "La cantidad de neutrones",
        "La cantidad de protones más la cantidad de neutrones."
      ],
      answer: 1
    }
  ],
  12: [
    {
      question: "¿Cuál es la primera ley de Newton?",
      options: [
        "Ley de Masa",
        "Ley de Acción/Reacción",
        "Ley de Inercia",
        "Ley de la Gravedad"
      ],
      answer: 2
    },
    {
      question: "En una plaza hay una gente que lanza agua hacia arriba. Cuando el agua alcanza su punto más alto, su velocidad instantánea es:",
      options: [
        "Máxima",
        "cero",
        "negativa",
        "igual a la velocidad inicial"
      ],
      answer: 1
    },
    {
      question: "En la Tierra, ¿cuál es la aceleración aproximada de la gravedad?",
      options: [
        "8,9 m/s²",
        "9,8 m/s²",
        "10,8 m/s²",
        "12,0 m/s²"
      ],
      answer: 1
    }
  ],
  13: [
    {
      question: "Una rana se cae a un pozo de 11 metros. Por el día avanza 2.5 metros y por la noche desciende 1 metro. ¿Cuánto tarda en salir del pozo?",
      options: [
        "5 días",
        "7 días",
        "8 días"
      ],
      answer: 1
    },
    {
      question: "¿Qué propiedades tiene un triángulo isósceles?",
      options: [
        "Tiene 3 lados iguales y 2 ángulos iguales",
        "Tiene 2 lados iguales y 2 ángulos iguales",
        "Tiene todos los lados distintos y los 3 ángulos iguales",
        "Ninguna es correcta"
      ],
      answer: 1
    },
    {
      question: "Si cinco máquinas tardan cinco minutos en hacer cinco productos, ¿cuánto tiempo tardarán 100 máquinas en hacer 100 productos?",
      options: [
        "5 minutos",
        "20 minutos",
        "100 minutos",
        "1 minuto"
      ],
      answer: 0
    },
    {
      question: "¿Cuál es la respuesta de esta suma?\n1+1+1+1+1\n1+1+1+1+1\n1+1x0+1=?",
      options: [
        "12",
        "11",
        "30",
        "31"
      ],
      answer: null
    }
  ],
  14: [
    {
      question: "Durante una actividad física intensa, una persona siente que respira más rápido y su corazón late más fuerte. ¿Cuál es la razón principal de estos cambios?",
      options: [
        "Porque el cuerpo está haciendo un esfuerzo y necesita más oxígeno para los músculos.",
        "Porque el corazón y los pulmones trabajan más rápido para eliminar el dióxido de carbono tóxico que se produce.",
        "Porque al hacer ejercicio, el cuerpo genera calor y por eso respira más rápido para enfriarse.",
        "Porque el cuerpo quiere almacenar más energía para después."
      ],
      answer: 0
    },
    {
      question: "En una investigación científica, la hipótesis es:",
      options: [
        "Una opinión personal del investigador",
        "Una suposición que se puede comprobar.",
        "La lista de materiales usados",
        "Una conclusión."
      ],
      answer: 1
    },
    {
      question: "¿Cuál es el nombre completo de PANCUCA?",
      options: [
        "Carlos Eduardo Quevedo Muñoz.",
        "Carlos Esteban Quevedo Muñoz.",
        "Carlos Edgardo Quevedo Muñoz.",
        "Carlos Enrique Quevedo Muñoz."
      ],
      answer: 2
    }
  ],
  15: [
    {
      question: "¿Qué principio dice que la ley laboral debe proteger especialmente al trabajador?",
      options: [
        " igualdad y no discriminatorio",
        "protectorio",
        "razonabilidad",
        "buena fé"
      ],
      answer: 1
    },
    {
      question: "¿Cuál es la respuesta adecuada de Mercado?",
      options: [
        "Lugar físico dónde ofrecen los productos los oferentes.",
        "Sólo intervienen los consumidores.",
        "Lugar físico dónde se encuentran consumidores y vendedores",
        ") Es un lugar físico o virtual dónde se encuentran compradores y vendedores de bienes y servicios. Los precios se determinan según la interacción entre los oferentes y los demandantes."
      ],
      answer: null
    },
  ],
  16: [
    {
      question: "Complete with the verb “to be” in the present simple tense: I…/You, we, they…/he, she, it…",
      options: [
        " is/am/are",
        "am/are/is",
        "was/were/did",
        "are/is/am"
      ],
      answer: 1
    },
    {
      question: "¿Cuál de estas oraciones está correctamente escrita en presente simple?",
      options: [
        "She go to school every day.",
        " They plays football on weekends.",
        "He studies English at night.",
        " I walks to the park every morning."
      ],
      answer: 2
    },
  ]
};

// Estado
let currentGroup = null;
let currentPosta = null;

// Elemento principal
const app = document.getElementById("app");

// Mostrar login
function showLogin(errorMsg = "") {
  app.innerHTML = `
    <h1>Ingreso al Quiz</h1>
    ${errorMsg ? `<p class="error">${errorMsg}</p>` : ""}
    <label for="groupSelect">Selecciona tu grupo:</label>
    <select id="groupSelect">
      <option value="" disabled selected>Selecciona grupo</option>
      ${Object.keys(grupos).map(g => `<option value="${g}">${g}</option>`).join('')}
    </select>
    <label for="passwordInput">Contraseña:</label>
    <input type="password" id="passwordInput" autocomplete="off" />
    <button id="loginBtn">Ingresar</button>
  `;

  document.getElementById("loginBtn").onclick = () => {
    const group = document.getElementById("groupSelect").value;
    const password = document.getElementById("passwordInput").value.trim();

    if (!group || !password) {
      showLogin("Por favor completa todos los campos correctamente.");
      return;
    }
    if (grupos[group] !== password) {
      showLogin("Contraseña incorrecta.");
      return;
    }
    currentGroup = group;
    showQuiz();
  };
}

// Mostrar quiz
function showQuiz() {
  const questions = postas[currentPosta];
  if (!questions) {
    app.innerHTML = `<p>No hay preguntas para esta posta.</p>`;
    return;
  }

  // Verificar si ya respondió
  if (hasAnswered(currentGroup, currentPosta)) {
    const score = getScore(currentGroup, currentPosta);
    const total = questions.length;
    const acumulado = getAcumulado(currentGroup);
    app.innerHTML = `
      <h2>Resultado - Posta ${currentPosta}</h2>
      <p class="result">Obtuviste ${score} de ${total} puntos en esta posta.</p>
      <p class="result">Puntaje total acumulado: ${acumulado} puntos.</p>
      <a href="index.html" class="nav-link">Volver al inicio</a>
    `;
    return;
  }

  app.innerHTML = `
    <h2>Posta ${currentPosta} - Grupo ${currentGroup}</h2>
    <form id="quizForm">
      ${questions.map((q,i) => `
        <div class="question">
          <p><b>Pregunta ${i+1}:</b> ${q.question}</p>
          <div class="options">
            ${q.options.map((opt,j) => `
              <label><input type="radio" name="q${i}" value="${j}" /> ${opt}</label>
            `).join('')}
          </div>
        </div>
      `).join('')}
      <button type="submit">Enviar respuestas</button>
    </form>
    <a href="index.html" class="nav-link">Volver al inicio</a>
  `;

  document.getElementById("quizForm").onsubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const total = questions.length;
    const userAnswers = [];

    for(let i=0; i < total; i++) {
      const radios = form[`q${i}`];
      let answered = false;
      for(let r of radios) {
        if(r.checked) {
          userAnswers.push(parseInt(r.value));
          answered = true;
          break;
        }
      }
      if(!answered) {
        alert(`Por favor responde la pregunta ${i+1}`);
        return;
      }
    }

    let score = 0;
    for(let i=0; i < total; i++) {
      if(userAnswers[i] === questions[i].answer) score++;
    }

    showResult(score, total);
  };
}

// Mostrar resultado y puntaje acumulado
function showResult(score, total) {
  saveResult(currentGroup, currentPosta, score);
  const acumulado = getAcumulado(currentGroup);

  app.innerHTML = `
    <h2>Resultado - Posta ${currentPosta}</h2>
    <p class="result">Obtuviste ${score} de ${total} puntos en esta posta.</p>
    <p class="result">Puntaje total acumulado: ${acumulado} puntos.</p>
    <a href="index.html" class="nav-link">Volver al inicio</a>
  `;
}

// Guardar resultado
function saveResult(group, posta, score) {
  const key = `quiz_result_${group}_posta_${posta}`;
  localStorage.setItem(key, score);
}

// Puntaje acumulado
function getAcumulado(group) {
  let total = 0;
  for (let i = 1; i <= Object.keys(postas).length; i++) {
    const val = getScore(group, i);
    if (val) total += val;
  }
  return total;
}

// Verificar si respondió
function hasAnswered(group, posta) {
  const key = `quiz_result_${group}_posta_${posta}`;
  return localStorage.getItem(key) !== null;
}

// Obtener puntaje
function getScore(group, posta) {
  const key = `quiz_result_${group}_posta_${posta}`;
  const val = localStorage.getItem(key);
  return val ? Number(val) : null;
}

// Resetear estado
function resetState() {
  currentGroup = null;
  currentPosta = null;
}

// Leer posta de la URL (simula QR)
function getPostaFromURL() {
  const params = new URLSearchParams(window.location.search);
  const posta = Number(params.get("posta"));
  return (posta >=1 && posta <= Object.keys(postas).length) ? posta : null;
}

// Inicializar app
function init() {
  currentPosta = getPostaFromURL();
  showLogin();
}

window.onload = init;


function mostrarPuntaje() {
                const totalPostas = Object.keys(postas).length;
                let resultado = "";

                Object.keys(grupos).forEach(grupo => {
                    let puntajeTotal = 0;
                    for (let i = 1; i <= totalPostas; i++) {
                        const key = `quiz_result_${grupo}_posta_${i}`;
                        const val = localStorage.getItem(key);
                        if(val) puntajeTotal += Number(val);
                    }
                    resultado += `${grupo}: ${puntajeTotal} pts\n`;
                });

                // Mostrar en el <p> con id="puntaje-total"
                document.getElementById("puntaje-total").innerText = resultado;
            }

