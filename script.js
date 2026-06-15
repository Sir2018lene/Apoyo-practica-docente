// Base de datos que incluye ahora la configuración detallada e independiente para cada botón de info1
const modalData = {
    info1: {
        // Sub-configuración para cada uno de los botones internos de la columna derecha de info1
        btn1: {
            title: "Modelo de Mitchel Resnick",
            image: "img/md-resnick.png",
            texto1: "La Espiral del Pensamiento Creativo de Mitchel Resnick es un modelo de aprendizaje activo que se basa en experiencias lúdicas y creativas. Este proceso es continuo y se desarrolla a través de los siguientes pasos principales:",
            texto2: "Esta espiral favorece el desarrollo de la creatividad, la expresión, la resolución de problemas y el pensamiento crítico, permitiendo que el aprendizaje artístico sea significativo y centrado en el proceso de exploración y descubrimiento. Asimismo, este proceso se caracteriza por ser flexible y dinámico, por lo que el orden de sus etapas puede variar según la intención pedagógica, las necesidades del grupo y el proceso creativo propuesto por la persona docente.",
            vinetas: [
                { titulo: "Imaginar", desc: "El proceso inicia cuando las personas estudiantes imaginan ideas iniciales para sus proyectos." },
                { titulo: "Crear", desc: "Las ideas se materializan al crear producciones, como obras artísticas." },
                { titulo: "Jugar", desc: "Los estudiantes juegan y experimentan con diversos materiales, explorando nuevas posibilidades." },
                { titulo: "Compartir", desc: "En este momento, se procede a compartir las creaciones realizadas con los demás." },
                { titulo: "Reflexionar", desc: "Finalmente, se realiza un proceso de reflexión sobre lo aprendido durante toda la experiencia" }
            ],
            audio: { nombre: "Audio Guía: Fundamentos Curriculares", url: "audios/modelo/podcast-fundamentos.mp3" },
            pdf: { nombre: "Documento Completo de Fundamentos", url: "txt/fundamentos-programa.pdf" }
        },
        btn2: {
            title: "Modelo de Parsons",
            image: "img/metodologias.png",
            texto1: "Orientación metodológica utilizada en la educación artística, especialmente en Artes Plásticas, busca fortalecer el aprendizaje estético de las personas estudiantes.<p>Esta propuesta se fundamenta en el pensamiento pragmático y en las teorías del desarrollo cognitivo de autores como Jean Piaget y Lawrence Kohlberg, quienes estudiaron cómo las personas construyen conocimiento y desarrollan formas de pensamiento conforme crecen y adquieren experiencias.A partir de estas bases, Michael Parsons desarrolló una propuesta centrada en la experiencia estética, es decir, en la manera en que las personas observan, interpretan, sienten y valoran las obras de arte.</p> <p>Su planteamiento indica que la comprensión artística no ocurre de manera inmediata, sino que evoluciona progresivamente mediante distintas etapas de desarrollo. Desde esta perspectiva, la educación artística no se limita únicamente a “hacer dibujos” o producir obras, sino que busca que las personas estudiantes aprendan a observar, reflexionar, interpretar y expresar ideas y emociones por medio del arte. </p> <p>Parsons plantea que las personas atraviesan diferentes fases en la manera de comprender el arte. Cada etapa refleja un nivel más complejo de interpretación y apreciación estética.En el Programa de Estudio de Artes Plásticas se retoman cinco fases propuestas por Parsons y se agrega una fase integradora final:",
            texto2: "De esta manera el arte se convierte en un espacio para desarrollar pensamiento crítico, sensibilidad estética, creatividad y construcción de significado.",
            vinetas: [
                { titulo: "Favoritismo", desc: "Las niñas y los niños valoran una obra según lo que más les gusta visualmente. Predominan los colores llamativos, personajes conocidos o elementos agradables para ellos." },
                { titulo: "Belleza y realismo", desc: "La valoración se centra en qué tan “bonita” o “real” parece la obra. Se considera importante que el dibujo se parezca a la realidad." },
                { titulo: "Expresividad", desc: "Las personas estudiantes comienzan a identificar emociones, sentimientos e intenciones dentro de la obra." },
                { titulo: "Estilo y forma", desc: "Se reconoce que existen distintas maneras de hacer arte. Se analizan técnicas, estilos, materiales y formas de expresión." },
                { titulo: "Juicio crítico", desc: "La persona logra argumentar y valorar una obra considerando contexto, intención, significado y aspectos culturales." },
                { titulo: "Fase integradora", desc: "Integra todas las fases anteriores. La persona puede observar una obra desde múltiples perspectivas: estética, técnica, emocional, cultural y crítica." }
            ],
            audio: { nombre: "Audio Guía: Estrategias Metodológicas", url: "audios/modelo/podcast-metodologias.mp3" },
            pdf: { nombre: "Manual de Estrategias Didácticas PDF", url: "txt/manual-metodologias.pdf" }
        },
        btn3: {
            title: "Desarrollo de Competencias Clave",
            image: "img/competencias.png",
            texto1: "Se definen los criterios de desempeño esenciales para potenciar las habilidades técnicas, creativas y conceptuales del estudiantado de acuerdo con los estándares actuales.",
            texto2: "La evaluación formativa es clave para medir el progreso de estas competencias a lo largo del periodo lectivo.",
            vinetas: [
                { titulo: "Resolución Creativa", desc: "Capacidad de encontrar soluciones originales a retos visuales planteados." },
                { titulo: "Comunicación Estética", desc: "Uso adecuado del lenguaje visual para transmitir ideas, emociones y narrativas." },
                { titulo: "Dominio Técnico", desc: "Destreza progresiva en el manejo de materiales, herramientas y soportes artísticos." }
            ],
            audio: { nombre: "Audio Guía: Criterios y Competencias", url: "audios/modelo/podcast-competencias.mp3" },
            pdf: { nombre: "Matriz de Competencias del Programa", url: "txt/matriz-competencias.pdf" }
        }
    },
    info2: {
        title: "Serie: De visita al museo",
        text: "Explora las obras costarricenses en formato audio.",
        image: "img/museo.png",
        audios: [
            { nombre: "Figura Humana", url: "audios/museo/podcast-figura-humana.mp3", descripcion: "Descubre el arte de la época precolombina en el siguiente pódcast" },
            { nombre: "Virgen María", url: "audios/museo/podcast-virgen-maria.mp3", descripcion: "Conoce más acerca del Arte colonial costarricense con el pódcast." },
            { nombre: "Doña Petronila", url: "audios/museo/podcast-dona-petronila.mp3", descripcion: "Una nuevo estilo de retrato es lo que encontratarás en el siguiente pódcast." },
            { nombre: "Leona María", url: "audios/museo/podcast-leona-maria.mp3", descripcion: "La belleza natural costarricense representada a través del Arte, conocela en el siguiente pódcast." },
            { nombre: "Símbolos Patrios", url: "audios/museo/podcast-simbolos-patrios.mp3", descripcion: "Arte contemporáneo costarricense, conocelo en el siguiente pódcast." }
        ],
        pdfs: [
            { nombre: "Transcripción Figura humana", url: "txt/podcast-figura-humana.pdf" },
            { nombre: "Transcripción Virgen María", url: "txt/podcast-virgen-maria.pdf" },
            { nombre: "Transcripción Doña Petronila", url: "txt/podcast-doña-petronila.pdf" },
            { nombre: "Transcripción Leona María", url: "txt/podcast-leona-maria.pdf" },
            { nombre: "Transcripción Símbolos patrios", url: "txt/podcast-simbolos-patrios.pdf" }
        ]
    },
    info3: {
        title: "Serie: La alegría de leer",
        text: "Fragmentos narrados para fomentar el hábito lector.",
        image: "img/alegria.png",
        audios: [
            { nombre: "Anancy y el docunu", url: "audios/alegria/AnancyDocunu.mp3" },
            { nombre: "Sibö y los sapitos traviesos", url: "audios/alegria/SiboSapitosTraviesos.mp3" }
        ],
        pdfs: [
            { nombre: "Transcripción Anancy y el docunu", url: "txt/podcast-AnancyDocunu.pdf" },
            { nombre: "Transcripción Sibö y los sapitos traviesos", url: "txt/podcast-SiboSapitosTraviesos.pdf" }
        ]
    },
    info4: {
        title: "Serie: Antología BEYCRA 2024",
        text: "Antología de participaciones estudiantiles destacadas.",
        image: "img/antologia.png",
        audios: [
            { nombre: "El sentir de los siento", url: "audios/antologia/ElSentirSiento.mp3" },
            { nombre: "Historia de Texas el perro", url: "audios/antologia/HistoriaTexasPerro.mp3" },
            { nombre: "Lágrimas pasadas", url: "audios/antologia/LagrimasPasadas.mp3" },
            { nombre: "El lienzo de Iris", url: "audios/antologia/LienzoIris.mp3" },
            { nombre: "Un monstruo debajo la cama", url: "audios/antologia/UnMonstruoDebajoCama.mp3" }
        ],
        pdfs: [
            { nombre: "Transcripción El sentir de los siento", url: "txt/Version texto-El sentir de los siento.pdf" },
            { nombre: "Transcripción La historia de Texas el perro", url: "txt/Version texto-La historia del Texas el perro.pdf" },
            { nombre: "Transcripción Lágrimas pasadas", url: "txt/Version texto-Lagrimas pasadas.pdf" },
            { nombre: "Transcripción El lienzo de Iris", url: "txt/Version texto-El lienzo de Iris.pdf" },
            { nombre: "Transcripción Un monstruo debajo la cama", url: "txt/Version texto-Un monstruo debajo la cama.pdf" }
        ]
    }
};


function openModal(id, tipo) {
    // Detectar si el id corresponde a un botón secundario de info1 (ej: 'info1-btn1')
    let data;
    let esBotonInfo1 = false;

    if (id.startsWith('info1-')) {
        const subClave = id.split('-')[1]; // Extrae 'btn1', 'btn2', etc.
        data = modalData['info1'][subClave];
        esBotonInfo1 = true;
    } else {
        data = modalData[id];
    }

    if (!data) return;

    const modal = document.getElementById('customModal');
    const body = document.getElementById('modal-body');

    let contenidoHTML = '';

    // RENDERIZADO EXCLUSIVO PARA LOS BOTONES INTERNOS DE INFO1
    if (esBotonInfo1) {
        // Espacio de texto 1
        contenidoHTML += `<p style="text-align: left; color: #333; font-size: 1rem; line-height: 1.5; margin-bottom: 20px;">${data.texto1}</p>`;
        
        // Espacio de texto organizado en viñetas con títulos h4
        contenidoHTML += `<ul style="text-align: left; list-style-type: disc; padding-left: 20px; margin-bottom: 25px;">`;
        data.vinetas.forEach((vineta) => {
            contenidoHTML += `
                <li style="margin-bottom: 12px;">
                    <h4 style="margin: 0 0 4px 0; color: #01263f;">${vineta.titulo}</h4>
                    <p style="margin: 0; color: #555; font-size: 0.95rem;">${vineta.desc}</p>
                </li>`;
        });
        contenidoHTML += `</ul>`;

        // Espacio de texto 2 (Otro espacio solo texto)
        contenidoHTML += `<p style="text-align: left; color: #666; font-style: italic; margin-bottom: 25px; border-left: 4px solid #fcda6fff; padding-left: 10px;">${data.texto2}</p>`;

        // Integración de Audio y PDF juntos (área multimedia)
        contenidoHTML += `
            <hr style="border: 1px solid #eee; margin: 20px 0;">
            <div style="display: flex; flex-direction: column; gap: 15px; background: #f8f9fa; padding: 20px; border-radius: 10px; border-left: 5px solid #0496ff;">
                <div class="audio-item" style="border: none; padding: 0; background: transparent; margin: 0;">
                    <div class="audio-info" style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                        <label style="font-weight: bold; color: #01263f;">${data.audio.nombre}</label>
                        <a href="${data.audio.url}" download="${data.audio.nombre}.mp3" class="download-link" style="background-color: #01263f; padding: 5px 12px; font-size: 0.8rem; border-radius: 4px; text-decoration: none; color: white;">Descargar Audio</a>
                    </div>
                    <audio controls src="${data.audio.url}" style="width: 100%;"></audio>
                </div>
                <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 15px; border-top: 1px dashed #ccc;">
                    <span style="font-weight: bold; color: #01263f; font-size: 0.95rem;">${data.pdf.nombre}</span>
                    <a href="${data.pdf.url}" class="download-link" download target="_blank" style="background-color: #27ae60; padding: 8px 15px; font-size: 0.85rem; border-radius: 5px; text-decoration: none; color: white; font-weight: bold;">Descargar PDF</a>
                </div>
            </div>`;

        // Inyección final en la estructura del modal
        body.innerHTML = `
            <h2 style="color: #01263f; margin-top: 0; text-align: center;">${data.title}</h2>
            <div style="text-align: center; margin: 20px 0;">
                <img src="${data.image}" class="modal-img" alt="Miniatura de la sección" style="display: inline-block; max-width: 90%; height: auto; border-radius: 10px;">
            </div>
            <hr style="border: 1px solid #fcda6fff; margin: 20px 0;">
            ${contenidoHTML}
        `;

    } else {
        // COMPORTAMIENTO ORIGINAL PARA LAS PESTAÑAS info2, info3 e info4
        if (tipo === 'audios') {
            contenidoHTML = `<h3>Lista de Reproducción</h3><div class="audio-list-modal">`;
            data.audios.forEach((audio) => {
                contenidoHTML += `
                    <div class="audio-item">
                        <div class="audio-info">
                            <label>${audio.nombre}</label>
                            <a href="${audio.url}" download="${audio.nombre}.mp3" class="download-audio-btn" title="Descargar audio">
                            Descargar
                            </a>
                        </div>
                        <audio controls src="${audio.url}"></audio>
                    </div>`;
            });
            contenidoHTML += `</div>`;
        } 
        else if (tipo === 'pdfs') {
            contenidoHTML = `<h3>Documentos descargables</h3><div class="pdf-list-modal">`;
            data.pdfs.forEach((doc) => {
                contenidoHTML += `
                    <div class="pdf-item">
                        <span>${doc.nombre}</span>
                        <a href="${doc.url}" class="download-link" download target="_blank">Descargar PDF</a>
                    </div>`;
            });
            contenidoHTML += `</div>`;
        }

        // CORRECCIÓN DE VISUALIZACIÓN:
        // Solo si es 'info3' Y además el usuario pidió ver el 'catálogo de audios', mostramos el video interactivo.
        // Si pide las transcripciones (pdfs), no es necesario saturar con el video arriba.
        let elementoMultimediaHTML = '';
        if (id === 'info3' && tipo === 'audios') {
            elementoMultimediaHTML = `
                <div style="text-align: center; margin: 15px 0;">
                    <video controls playsinline src="videos/componente-proyecto.mp4" class="modal-img" style="display: inline-block; max-width: 90%; width: 640px; height: auto; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.15);"></video>
                </div>`;
        } else {
            elementoMultimediaHTML = `
                <div style="text-align: center;"><img src="${data.image}" class="modal-img" alt="Miniatura"></div>`;
        }

        body.innerHTML = `
            <h2 style="color: #01263f; margin-top: 0;">${data.title}</h2>
            ${elementoMultimediaHTML}
            <p>${data.text}</p>
            <hr style="border: 1px solid #fcda6fff; margin: 20px 0;">
            ${contenidoHTML}
        `;
    }

    modal.style.display = 'flex';
}








function closeModal() {
    const modal = document.getElementById('customModal');
    modal.style.display = 'none';
    
    // Pausar audios activos
    const audios = modal.querySelectorAll('audio');
    audios.forEach(a => { a.pause(); a.currentTime = 0; });

    // Pausar videos activos si los hay al cerrar
    const videos = modal.querySelectorAll('video');
    videos.forEach(v => { v.pause(); v.currentTime = 0; });
}

function showInfo(event, id) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('show'));
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    document.getElementById(id).classList.add('show');
    event.currentTarget.classList.add('active');
}

window.onclick = function(event) {
    const modal = document.getElementById('customModal');
    if (event.target == modal) closeModal();
}