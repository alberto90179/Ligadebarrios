document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. MENÚ DESPLEGABLE CON CLASE .show
    // ==========================================
    const btnEquipos = document.getElementById("btn-equipos");
    const menuEquipos = document.getElementById("menu-equipos");

    if (btnEquipos && menuEquipos) {
        btnEquipos.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            menuEquipos.classList.toggle("show");
        });

        document.addEventListener("click", (e) => {
            if (!btnEquipos.contains(e.target) && !menuEquipos.contains(e.target)) {
                menuEquipos.classList.remove("show");
            }
        });
    }

    // ==========================================
    // 2. PARÁMETROS URL Y LISTA DE EQUIPOS
    // ==========================================
    const parametros = new URLSearchParams(window.location.search);
    const equipoId = parametros.get('id');

    const equipos = [
        { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png" },
        { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg" },
        { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg" },
        { nombre: "Robles FC", logo: "assets/logos/Robles.jpg" },
        { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png" },
        { nombre: "Pansa Brava", logo: "assets/logos/Pansa_Brava.jpg" },
        { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg" },
        { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg" },
        { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png" },
        { nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg" },
        { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png" },
        { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png" },
        { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png" },
        { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png" }
    ];

    if (equipoId !== null && equipos[equipoId]) {
        const equipo = equipos[equipoId];
        const nameElement = document.getElementById('detail-name');
        const logoElement = document.getElementById('detail-logo');

        if (nameElement) nameElement.innerText = equipo.nombre;
        if (logoElement) {
            if (equipo.logo !== "") {
                logoElement.src = equipo.logo;
                logoElement.style.display = "block";
            } else {
                logoElement.style.display = "none";
            }
        }
    }

    // ==========================================
    // 3. BASE DE DATOS LOCAL POR EQUIPO
    // ==========================================
    const detallesPorEquipo = {
        "0": { // Furia Roja
            plantilla: [
                { num: 1, pos: "37 años", nombre: "Carlos Alberto Ortega Corona", cat: "0" },
                { num: 2, pos: "25 años", nombre: "Edgar Rigoberto Estrada Llamas", cat: "0" },
                { num: 3, pos: "29 años", nombre: "Francisco Javier Saldaña Martínez", cat: "0" },
                { num: 4, pos: "43 años", nombre: "Gustavo Rodríguez Padilla", cat: "0" },
                { num: 5, pos: "48 años", nombre: "Héctor Miguel Aguilar Juárez", cat: "0" },
                { num: 6, pos: "45 años", nombre: "Israel Villaseñor Ceballos", cat: "0" },
                { num: 7, pos: "37 años", nombre: "Jhonatan Amaury Estrada Llamas", cat: "0" },
                { num: 8, pos: "23 años", nombre: "José de Jesús Lázaro González", cat: "0" },
                { num: 9, pos: "33 años", nombre: "José Guadalupe Chairez Colmenares", cat: "0" },
                { num: 10, pos: "50 años", nombre: "José Leonel Llamas González", cat: "0" },
                { num: 11, pos: "50 años", nombre: "Julio César Tellez Castellón", cat: "0" },
                { num: 12, pos: "44 años", nombre: "Mauricio Ramón Enríquez Rodríguez", cat: "0" },
                { num: 13, pos: "32 años", nombre: "Miguel Ángel Luna Glombitza", cat: "0" },
                { num: 14, pos: "36 años", nombre: "Nestor Daniel Rodríguez Ávalos", cat: "0" },
                { num: 15, pos: "25 años", nombre: "Rafael Ceja Flores", cat: "0" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "Jhonatan Amaury Estrada Llamas" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "2 (3) - (1) 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J2", fecha: "Mie 16/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "8 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "0 - 5", visita: "assets/logos/JR Transmisiones.png" }
            ]
        },
        "1": { // 7 Mares
            plantilla: [
                { num: 1, pos: "25 años", nombre: "Carlos Daniel Jiménez Camacho", cat: "0" },
                { num: 2, pos: "38 años", nombre: "Carlos Iván Jiménez Ruiz", cat: "0" },
                { num: 3, pos: "38 años", nombre: "César Daniel Aguilar García", cat: "0" },
                { num: 4, pos: "28 años", nombre: "Diego Adolfo Rosales Peñaloza", cat: "0" },
                { num: 5, pos: "27 años", nombre: "Diego Iván Mejía Vizcarra", cat: "0" },
                { num: 6, pos: "41 años", nombre: "Ernesto Iván Herrera Ibarra", cat: "0" },
                { num: 7, pos: "35 años", nombre: "José Alberto Garay Díaz", cat: "0" },
                { num: 8, pos: "21 años", nombre: "Leopoldo de Jesús De la Torre Rodríguez", cat: "0" },
                { num: 9, pos: "39 años", nombre: "Oscar Iván Campos Mejía", cat: "0" },
                { num: 10, pos: "29 años", nombre: "Rubén Alberto Salcedo Ortega", cat: "0" },
                { num: 11, pos: "40 años", nombre: "Rubén Castillo Elías", cat: "0" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "César Daniel Aguilar García" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "3 - 2", visita: "assets/logos/7_Mares.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "3 - 4", visita: "assets/logos/Tortilleros.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Rayados.jpg", res: "3 - 1", visita: "assets/logos/7_Mares.jpg" }
            ]
        },
        "2": {// Titanes L.A.
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 (10) - (9) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Titanes.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "1 - 0", visita: "assets/logos/Titanes.jpg" }
            ]
        },
        "3": { // Robles FC
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "4 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "1 - 3", visita: "assets/logos/Robles.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Robles.jpg", res: "1 - 4", visita: "assets/logos/Diablos_Gordos.jpg" }
            ]
        },
        "4": { // Cruz Azul Mezquitán
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "1 - 0", visita: "assets/logos/Titanes.jpg" }
            ]
        },
        "5": { // Pansa Brava
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 3", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" }
            ]
        },
        "6": { // Diablos Gordos
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 (10) - (9) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Robles.jpg", res: "1 - 4", visita: "assets/logos/Diablos_Gordos.jpg" }
            ]
        },
        "7": { // Rayados FC
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "4 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J2", fecha: "Mie 16/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "8 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Rayados.jpg", res: "3 - 1", visita: "assets/logos/7_Mares.jpg" }
            ]
        },
        "8": { // Tortilleros FC
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "2 (3) - (1) 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "3 - 4", visita: "assets/logos/Tortilleros.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 0", visita: "assets/logos/villalobos.jpg" }
            ]
        },
        "9": { // Carnicería Villalobos
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "1 - 2", visita: "assets/logos/villalobos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "3 (3) - (2) 3", visita: "assets/logos/belicones.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 0", visita: "assets/logos/villalobos.jpg" }
            ]
        },
        "10": { // Gordos Belicones
            plantilla: [
                { num: 109, pos: "-", nombre: "Juan Paulo Limón Trinidad", cat: "-" },
                { num: 110, pos: "25 años", nombre: "Rafael Ceja Flores", cat: "-" },
                { num: 111, pos: "37 años", nombre: "Alonso Nuñez García", cat: "-" },
                { num: 112, pos: "27 años", nombre: "Luis Alberto Ríos Carrizales", cat: "-" },
                { num: 113, pos: "28 años", nombre: "Adán García Paz", cat: "-" },
                { num: 114, pos: "-", nombre: "Álvaro Rodríguez Ávalos", cat: "-" },
                { num: 115, pos: "36 años", nombre: "Fernando Paiz Lugo", cat: "-" },
                { num: 116, pos: "36 años", nombre: "Néstor Daniel Rodríguez Ávalos", cat: "-" },
                { num: 117, pos: "41 años", nombre: "Antonio Reyes Naranjo", cat: "-" },
                { num: 118, pos: "37 años", nombre: "Juan Carlos Sánchez Hernández", cat: "-" },
                { num: 119, pos: "36 años", nombre: "Javier Ernesto García Gaspar", cat: "-" },
                { num: 120, pos: "37 años", nombre: "Hermes Adalberto Orozco Paredes", cat: "-" },
                { num: 121, pos: "26 años", nombre: "José Francisco Gómez Maldonado", cat: "-" },
                { num: 122, pos: "34 años", nombre: "José Manuel Pizano Gómez", cat: "-" },
                { num: 123, pos: "-", nombre: "Luis David Hernández Salazar", cat: "-" },
                { num: 124, pos: "25 años", nombre: "Alexis Aguilar Ponce", cat: "-" },
                { num: 125, pos: "39 años", nombre: "Martín Roberto Larios", cat: "-" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "José Manuel Pizano Gómez & Juan Paulo Limón Trinidad" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "3 - 2", visita: "assets/logos/7_Mares.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "3 (3) - (2) 3", visita: "assets/logos/belicones.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "8 - 0", visita: "assets/logos/chuperamigos.png" }
            ]
        },
        "11": { // JR Transmisiones
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 3", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "1 - 3", visita: "assets/logos/Robles.jpg" },
                { j: "J3", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "0 - 5", visita: "assets/logos/JR Transmisiones.png" }
            ]
        },
        "12": {
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "1 - 2", visita: "assets/logos/villalobos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "8 - 0", visita: "assets/logos/chuperamigos.png" }
            ]
        },
        "13": {
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Titanes.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" }
            ]
        }
    };

    // ==========================================
    // 4. RENDER DE TABLAS EN LA PÁGINA
    // ==========================================
    const datosDelEquipo = detallesPorEquipo[equipoId] || {
        plantilla: [{ num: "-", pos: "-", nombre: "Sin jugadores registrados", cat: "-" }],
        cuerpoTecnico: [{ cargo: "-", nombre: "Sin cuerpo técnico registrado" }],
        calendario: [{ j: "-", fecha: "Por definir", hora: "-", local: "", res: "-", visita: "" }]
    };

    // Plantilla
    const tbodyPlantilla = document.getElementById('plantilla-cuerpo');
    if (tbodyPlantilla) {
        tbodyPlantilla.innerHTML = "";
        const listaJugadores = datosDelEquipo.plantilla.length > 0
            ? datosDelEquipo.plantilla
            : [{ num: "-", pos: "-", nombre: "Sin jugadores registrados", cat: "-" }];

        listaJugadores.forEach(j => {
            tbodyPlantilla.innerHTML += `
                <tr>
                    <td>${j.num}</td>
                    <td>${j.pos}</td>
                    <td>${j.nombre}</td>
                    <td>${j.cat}</td>
                </tr>`;
        });
    }

    // Cuerpo Técnico
    const tbodyTecnico = document.getElementById('cuerpo-tecnico');
    if (tbodyTecnico) {
        tbodyTecnico.innerHTML = "";
        datosDelEquipo.cuerpoTecnico.forEach(ct => {
            tbodyTecnico.innerHTML += `
                <tr>
                    <td>${ct.cargo}</td>
                    <td>${ct.nombre}</td>
                </tr>`;
        });
    }

    // Calendario
    const tbodyCalendario = document.getElementById('calendario-cuerpo');
    if (tbodyCalendario) {
        tbodyCalendario.innerHTML = "";
        datosDelEquipo.calendario.forEach(p => {
            const imgLocal = p.local ? `<img src="${p.local}" width="25" height="25" style="object-fit: contain;" onerror="this.style.display='none'">` : '';
            const imgVisita = p.visita ? `<img src="${p.visita}" width="25" height="25" style="object-fit: contain;" onerror="this.style.display='none'">` : '';

            tbodyCalendario.innerHTML += `
                <tr>
                    <td>${p.j}</td>
                    <td>${p.fecha}</td>
                    <td>${p.hora}</td>
                    <td>${imgLocal}</td>
                    <td>${p.res}</td>
                    <td>${imgVisita}</td>
                </tr>`;
        });
    }
});