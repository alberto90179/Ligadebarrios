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
    const equipoId = parseInt(parametros.get('id'));

    const equipos = [
        { id: 1, nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 6, g: 3, e: 0, p: 3, pts: 9, gf: 21, gc: 15, pe: 0, dg: "+6" },
        { id: 9, nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 6, g: 1, e: 4, p: 1, pts: 9, gf: 11, gc: 11, pe: 2, dg: "0" },
        { id: 12, nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 6, g: 2, e: 0, p: 4, pts: 6, gf: 14, gc: 20, pe: 0, dg: "-6" },
        { id: 4, nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 6, g: 4, e: 1, p: 1, pts: 14, gf: 16, gc: 11, pe: 1, dg: "+5" },
        { id: 6, nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg", pj: 6, g: 2, e: 2, p: 2, pts: 9, gf: 11, gc: 14, pe: 1, dg: "-3" },
        { id: 0, nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png", pj: 6, g: 3, e: 1, p: 2, pts: 10, gf: 17, gc: 11, pe: 0, dg: "+6" },
        { id: 10, nombre: "Gordos Belicones", logo: "assets/logos/belicones.png", pj: 6, g: 3, e: 2, p: 1, pts: 11, gf: 22, gc: 12, pe: 0, dg: "+10" },
        { id: 13, nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png", pj: 6, g: 0, e: 0, p: 6, pts: 0, gf: 0, gc: 30, pe: 0, dg: "-30" },
        { id: 11, nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png", pj: 6, g: 3, e: 2, p: 1, pts: 12, gf: 17, gc: 12, pe: 1, dg: "+5" },
        { id: 5, nombre: "Pansa Brava", logo: "assets/logos/Pansa_Brava.jpg", pj: 6, g: 5, e: 0, p: 1, pts: 15, gf: 24, gc: 7, pe: 0, dg: "+17" },
        { id: 7, nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg", pj: 6, g: 2, e: 1, p: 3, pts: 7, gf: 15, gc: 20, pe: 0, dg: "-5" },
        { id: 3, nombre: "Robles FC", logo: "assets/logos/Robles.jpg", pj: 6, g: 2, e: 2, p: 2, pts: 9, gf: 14, gc: 11, pe: 1, dg: "+3" },
        { id: 2, nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg", pj: 6, g: 1, e: 2, p: 3, pts: 6, gf: 10, gc: 12, pe: 1, dg: "-2" },
        { id: 8, nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png", pj: 6, g: 2, e: 1, p: 3, pts: 8, gf: 9, gc: 15, pe: 1, dg: "-6" }
    ];

    const clasificacion = [...equipos].sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        const difA = parseInt(a.dg);
        const difB = parseInt(b.dg);
        if (difB !== difA) return difB - difA;
        return b.gf - a.gf;
    });

    // ==========================================
    // 3. BASE DE DATOS LOCAL POR EQUIPO
    // ==========================================
    const detallesPorEquipo = {
        "0": { // Furia Roja
            plantilla: [
                { num: 184, pos: "27 años", nombre: "Antonio Joel Saldaña Martinez", cat: "2", amarilla: "-", roja: "-" },
                { num: 171, pos: "37 años", nombre: "Carlos Alberto Ortega Corona", cat: "2", amarilla: "-", roja: "-" },
                { num: 179, pos: "30 años", nombre: "Carlos Alonso Aguilar Yañez", cat: "2", amarilla: "-", roja: "-" },
                { num: 172, pos: "25 años", nombre: "Edgar Rigoberto Estrada Llamas", cat: "3", amarilla: "-", roja: "-" },
                { num: 173, pos: "29 años", nombre: "Francisco Javier Saldaña Martínez", cat: "2", amarilla: "-", roja: "-" },
                { num: 183, pos: "43 años", nombre: "Gustavo Rodríguez Padilla", cat: "1", amarilla: "-", roja: "-" },
                { num: 175, pos: "28 años", nombre: "Horacio García Preciado", cat: "3", amarilla: "-", roja: "-" },
                { num: 176, pos: "45 años", nombre: "Israel Villaseñor Ceballos", cat: "3", amarilla: "-", roja: "-" },
                { num: 177, pos: "37 años", nombre: "Jhonatan Amaury Estrada Llamas", cat: "3", amarilla: "-", roja: "-" },
                { num: 182, pos: "24 años", nombre: "José de Jesús Lázaro González", cat: "2", amarilla: "-", roja: "-" },
                { num: 178, pos: "33 años", nombre: "José Guadalupe Chairez Colmenares", cat: "2", amarilla: "-", roja: "-" },
                { num: 174, pos: "50 años", nombre: "José Leonel Llamas González", cat: "2", amarilla: "-", roja: "-" },
                { num: 180, pos: "44 años", nombre: "Juan Carlos Nuñez Vazquez", cat: "3", amarilla: "-", roja: "-" },
                { num: 187, pos: "44 años", nombre: "Mauricio Ramón Enríquez Rodríguez", cat: "1", amarilla: "-", roja: "-" },
                { num: 188, pos: "32 años", nombre: "Miguel Ángel Luna Glombitza", cat: "1", amarilla: "-", roja: "-" },
                { num: 181, pos: "30 años", nombre: "Oscar Eduardo Diaz Muñoz", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "Jhonatan Amaury Estrada Llamas" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "2 (3) - (1) 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J2", fecha: "Mie 16/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "8 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "0 - 5", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 0", visita: "assets/logos/Furia_Roja.png" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 - 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "vs", visita: "assets/logos/Pansa_Brava.jpg" }
            ]
        },
        "1": { // 7 Mares
            plantilla: [
                { num: 108, pos: "33 años", nombre: "Abel Alejandro Aguilar Andrade", cat: "3", amarilla: "1", roja: "-" },
                { num: 92, pos: "25 años", nombre: "Carlos Daniel Jiménez Camacho", cat: "3", amarilla: "-", roja: "-" },
                { num: 106, pos: "38 años", nombre: "Carlos Iván Jiménez Ruiz", cat: "3", amarilla: "-", roja: "-" },
                { num: 103, pos: "38 años", nombre: "César Daniel Aguilar García", cat: "3", amarilla: "-", roja: "-" },
                { num: 93, pos: "28 años", nombre: "Diego Adolfo Raudales Peñaloza", cat: "2", amarilla: "-", roja: "-" },
                { num: 98, pos: "27 años", nombre: "Diego Iván Mejía Vizcarra", cat: "2", amarilla: "-", roja: "-" },
                { num: 101, pos: "41 años", nombre: "Ernesto Iván Herrera Ibarra", cat: "2", amarilla: "-", roja: "-" },
                { num: 100, pos: "42 años", nombre: "Hector Alonso García Magaña", cat: "3", amarilla: "-", roja: "-" },
                { num: 102, pos: "25 años", nombre: "Joel Rafael Sanchez Gomez", cat: "1", amarilla: "-", roja: "-" },
                { num: 91, pos: "35 años", nombre: "José Alberto Garay Díaz", cat: "3", amarilla: "-", roja: "-" },
                { num: 104, pos: "24 años", nombre: "Leopoldo de Jesús De la Torre Rodríguez", cat: "3", amarilla: "-", roja: "-" },
                { num: 107, pos: "39 años", nombre: "Oscar Iván Campos Mejía", cat: "2", amarilla: "-", roja: "-" },
                { num: 99, pos: "31 años", nombre: "Oswaldo Daniel Landeros Bartolo", cat: "3", amarilla: "2", roja: "-" },
                { num: 96, pos: "28 años", nombre: "Pedro Alberto Perez Amezquita", cat: "3", amarilla: "-", roja: "-" },
                { num: 105, pos: "29 años", nombre: "Rubén Alberto Salcedo Ortega", cat: "2", amarilla: "-", roja: "-" },
                { num: 94, pos: "40 años", nombre: "Rubén Castillo Elías", cat: "2", amarilla: "-", roja: "-" },
                { num: 95, pos: "28 años", nombre: "Ulises Posadas Mejia", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "César Daniel Aguilar García" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "3 - 2", visita: "assets/logos/7_Mares.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "3 - 4", visita: "assets/logos/Tortilleros.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Rayados.jpg", res: "3 - 1", visita: "assets/logos/7_Mares.jpg" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "4 - 2", visita: "assets/logos/JR Transmisiones.png"},
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "6 - 3", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/7_Mares.jpg" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "vs", visita: "assets/logos/Titanes.jpg" }
            ]
        },
        "2": { // Titanes L.A.
            plantilla: [
                { num: 68, pos: "35 años", nombre: "Abisai Villalobos", cat: "2", amarilla: "-", roja: "-" },
                { num: 56, pos: "32 años", nombre: "Alejandro Muñiz Pelayo", cat: "2", amarilla: "-", roja: "-" },
                { num: 63, pos: "31 años", nombre: "Alexis Jovani Mancilla Castillo", cat: "1", amarilla: "-", roja: "-" },
                { num: 66, pos: "28 años", nombre: "Cesar Michel Acevedo", cat: "2", amarilla: "-", roja: "-" },
                { num: 70, pos: "30 años", nombre: "David Santana Castillo", cat: "2", amarilla: "-", roja: "-" },
                { num: 58, pos: "27 años", nombre: "Eddie Gomez García", cat: "3", amarilla: "-", roja: "-" },
                { num: 59, pos: "37 años", nombre: "Gerardo Sandoval Perez", cat: "3", amarilla: "-", roja: "-" },
                { num: 61, pos: "32 años", nombre: "Gerson Villa Martínez", cat: "2", amarilla: "-", roja: "-" },
                { num: 69, pos: "39 años", nombre: "Humberto Leonel Zamora Bucio", cat: "1", amarilla: "-", roja: "-" },
                { num: 240, pos: "35 años", nombre: "Jaime Castellón", cat: "1", amarilla: "-", roja: "-" },
                { num: 71, pos: "15 años", nombre: "Luciano Michel Bucio", cat: "1", amarilla: "-", roja: "-" },
                { num: 72, pos: "37 años", nombre: "Luis Alberto Sandoval Estrella", cat: "3", amarilla: "-", roja: "-" },
                { num: 62, pos: "35 años", nombre: "Luis Alfredo García Ortíz", cat: "3", amarilla: "-", roja: "-" },
                { num: 239, pos: "31 años", nombre: "Marlon Alexis Galindo", cat: "2", amarilla: "-", roja: "-" },
                { num: 55, pos: "33 años", nombre: "Miguel Angel Garcia Diaz", cat: "2", amarilla: "-", roja: "-" },
                { num: 67, pos: "33 años", nombre: "Omar Armando Reyes Bucio", cat: "3", amarilla: "-", roja: "-" },
                { num: 64, pos: "25 años", nombre: "Rogelio Jose Gutierrez Perez", cat: "3", amarilla: "-", roja: "-" },
                { num: 57, pos: "41 años", nombre: "Victor Alfonso Corona Mendez", cat: "2", amarilla: "-", roja: "-" },
                { num: 60, pos: "25 años", nombre: "Victor Bonal Vidrio", cat: "1", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 (10) - (9) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Titanes.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "1 - 0", visita: "assets/logos/Titanes.jpg" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Titanes.jpg", res: "0 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Robles.jpg", res: "3 (4) - (3) 3", visita: "assets/logos/Titanes.jpg" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 - 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "vs", visita: "assets/logos/Titanes.jpg" }
            ]
        },
        "3": { // Robles FC
            plantilla: [
                { num: 143, pos: "20 años", nombre: "Alexis de la Torre", cat: "3", amarilla: "-", roja: "-" },
                { num: 135, pos: "19 años", nombre: "Carlos Alexis Delgadillo", cat: "2", amarilla: "-", roja: "-" },
                { num: 147, pos: "27 años", nombre: "Eduardo Reyes", cat: "1", amarilla: "-", roja: "-" },
                { num: 140, pos: "23 años", nombre: "Eloy López Rivera", cat: "3", amarilla: "-", roja: "-" },
                { num: 138, pos: "32 años", nombre: "Elvis Martínez", cat: "2", amarilla: "-", roja: "-" },
                { num: 145, pos: "28 años", nombre: "Iván Suarez", cat: "3", amarilla: "-", roja: "-" },
                { num: 148, pos: "30 años", nombre: "Jesus Jaime Arechiga", cat: "2", amarilla: "-", roja: "-" },
                { num: 133, pos: "27 años", nombre: "Jorge Luis Delgado Palacios", cat: "3", amarilla: "-", roja: "-" },
                { num: 134, pos: "27 años", nombre: "Jose Armando Muñoz Silva", cat: "3", amarilla: "-", roja: "-" },
                { num: 141, pos: "22 años", nombre: "Jose Ignacio Ortega", cat: "2", amarilla: "-", roja: "-" },
                { num: 144, pos: "25 años", nombre: "Jose Ramón Avalos", cat: "3", amarilla: "-", roja: "-" },
                { num: 142, pos: "25 años", nombre: "Leonardo Raul Esparza", cat: "3", amarilla: "-", roja: "-" },
                { num: 146, pos: "29 años", nombre: "Manuel Ezequiel Macías", cat: "2", amarilla: "-", roja: "-" },
                { num: 137, pos: "28 años", nombre: "Martín Rosas Jimenez", cat: "2", amarilla: "-", roja: "-" },
                { num: 149, pos: "44 años", nombre: "Noe Andrey Juarez Diaz", cat: "3", amarilla: "-", roja: "-" },
                { num: 150, pos: "20 años", nombre: "Pablo Martín Ramírez", cat: "3", amarilla: "-", roja: "-" },
                { num: 139, pos: "34 años", nombre: "Paulo Eduardo Cisneros", cat: "1", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Iván Suarez" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "4 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "0 - 0", visita: "assets/logos/Robles.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Robles.jpg", res: "1 - 4", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Robles.jpg" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Robles.jpg", res: "3 (4) - (3) 3", visita: "assets/logos/Titanes.jpg" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 1", visita: "assets/logos/Robles.jpg" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "vs", visita: "assets/logos/Robles.jpg" }
            ]
        },
        "4": { // Cruz Azul Mezquitán
            plantilla: [
                { num: 254, pos: "25 años", nombre: "Alexis Jovani Perez Perez", cat: "1", amarilla: "-", roja: "-" },
                { num: 253, pos: "31 años", nombre: "Alvaro Vázquez Guzmán", cat: "-", amarilla: "-", roja: "-" },
                { num: 234, pos: "20 años", nombre: "Christian Antonio Rodríguez Gabriel", cat: "2", amarilla: "-", roja: "-" },
                { num: 235, pos: "41 años", nombre: "Christian Rey Rodríguez Contreras", cat: "2", amarilla: "-", roja: "-" },
                { num: 229, pos: "26 años", nombre: "Emmanuel Gomez H", cat: "2", amarilla: "-", roja: "-" },
                { num: 257, pos: "21 años", nombre: "Erick Oswaldo Perez Hernandez", cat: "-", amarilla: "-", roja: "-" },
                { num: 231, pos: "36 años", nombre: "Ernesto Soltero Aguilar", cat: "-", amarilla: "-", roja: "-" },
                { num: 249, pos: "24 años", nombre: "Francisco Javier Llamas Medina", cat: "3", amarilla: "-", roja: "-" },
                { num: 233, pos: "48 años", nombre: "Jose Alfredo Gomez Camberos", cat: "1", amarilla: "-", roja: "-" },
                { num: 255, pos: "43 años", nombre: "Jose de Jesus Estanislao Perez", cat: "3", amarilla: "-", roja: "-" },
                { num: 258, pos: "23 años", nombre: "Kevin Gabriel García Olague", cat: "2", amarilla: "1", roja: "-" },
                { num: 232, pos: "23 años", nombre: "Luis Fernando Guerrero Medina", cat: "2", amarilla: "-", roja: "-" },
                { num: 230, pos: "34 años", nombre: "Marco Antonio López Bernal", cat: "2", amarilla: "-", roja: "-" },
                { num: 252, pos: "28 años", nombre: "Marcos Alejandro Cárdenas Hernández", cat: "3", amarilla: "-", roja: "-" },
                { num: 236, pos: "41 años", nombre: "Miguel Estanislao Perez", cat: "2", amarilla: "-", roja: "-" },
                { num: 256, pos: "36 años", nombre: "Orlando Gómez Ambriz", cat: "-", amarilla: "1", roja: "-" },
                { num: 251, pos: "25 años", nombre: "Pedro Gabriel Perez Hernandez", cat: "3", amarilla: "-", roja: "-" },
                { num: 250, pos: "41 años", nombre: "Ulises Medina A", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Christian Rey Rodríguez Contreras" }],
            calendario: [
                { j: "J1", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "1 - 0", visita: "assets/logos/Titanes.jpg" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "2 (3) - (4) 2", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "2 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 2", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "vs", visita: "assets/logos/Robles.jpg" }
            ]
        },
        "5": { // Pansa Brava
            plantilla: [
                { num: 268, pos: "- años", nombre: "Armando Guadalupe Amézquita Barbarin", cat: "3", amarilla: "-", roja: "-" },
                { num: 216, pos: "- años", nombre: "Brayan Osvaldo Hernandez Ventura", cat: "2", amarilla: "-", roja: "-" },
                { num: 210, pos: "- años", nombre: "Cesar Lara", cat: "3", amarilla: "-", roja: "-" },
                { num: 248, pos: "- años", nombre: "David Omar Benitez Gomez", cat: "3", amarilla: "-", roja: "-" },
                { num: 226, pos: "- años", nombre: "Edgar Gerardo Salazar", cat: "3", amarilla: "-", roja: "-" },
                { num: 271, pos: "- años", nombre: "Edwin Alejandro Ruiz Mejía", cat: "2", amarilla: "-", roja: "-" },
                { num: 209, pos: "- años", nombre: "Emanuel Ventura Ramirez", cat: "3", amarilla: "-", roja: "-" },
                { num: 228, pos: "- años", nombre: "Francisco Javier Verduzco Arechiga", cat: "3", amarilla: "-", roja: "-" },
                { num: 217, pos: "- años", nombre: "Francisco Mondragon Valenzuela ", cat: "2", amarilla: "-", roja: "-" },
                { num: 215, pos: "- años", nombre: "Issac Pelayo Santana", cat: "3", amarilla: "-", roja: "-" },
                { num: 272, pos: "- años", nombre: "Jonatan Antonio Lopez Santos", cat: "3", amarilla: "-", roja: "-" },
                { num: 211, pos: "- años", nombre: "Jonatan Josue Ruiz Rosales", cat: "3", amarilla: "-", roja: "-" },
                { num: 247, pos: "- años", nombre: "Juan Carlos Gonzalez Paz", cat: "1", amarilla: "-", roja: "-" },
                { num: 227, pos: "- años", nombre: "Juan Carlos Rico Lopez", cat: "1", amarilla: "-", roja: "-" },
                { num: 213, pos: "- años", nombre: "Juan Roman Sanchez Villavazo", cat: "1", amarilla: "-", roja: "-" },
                { num: 270, pos: "- años", nombre: "Marco Vizcarra Diaz", cat: "3", amarilla: "-", roja: "-" },
                { num: 269, pos: "- años", nombre: "Raul Vizcarra Diaz", cat: "3", amarilla: "-", roja: "-" },
                { num: 214, pos: "- años", nombre: "Victor Hugo Flores Bartolo", cat: "-", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 3", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Titanes.jpg", res: "0 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "2 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 1", visita: "assets/logos/Robles.jpg" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "vs", visita: "assets/logos/Pansa_Brava.jpg" }
            ]
        },
        "6": { // Diablos Gordos
            plantilla: [
                { num: 80, pos: "34 años", nombre: "Abraham Barreto Robles", cat: "1", amarilla: "-", roja: "-" },
                { num: 89, pos: "25 años", nombre: "Alan Chavez", cat: "3", amarilla: "-", roja: "-" },
                { num: 87, pos: "46 años", nombre: "Andres Chavez Tovar", cat: "3", amarilla: "-", roja: "-" },
                { num: 84, pos: "25 años", nombre: "Carlos Jair Meza Nava", cat: "2", amarilla: "-", roja: "-" },
                { num: 75, pos: "36 años", nombre: "Christian Rojas Chávez", cat: "1", amarilla: "-", roja: "-" },
                { num: 90, pos: "23 años", nombre: "Edgar Alfredo Rodriguez Virgen", cat: "3", amarilla: "", roja: "-" },
                { num: 86, pos: "19 años", nombre: "Hector Javier Guerrero Naranjo", cat: "2", amarilla: "-", roja: "-" },
                { num: 76, pos: "23 años", nombre: "Jairo Adan Gonzalez Alaniz", cat: "3", amarilla: "-", roja: "-" },
                { num: 74, pos: "22 años", nombre: "Jonathan Misael Tapia Santana", cat: "3", amarilla: "-", roja: "-" },
                { num: 82, pos: "- años", nombre: "Jorge Alberto Guerrero", cat: "2", amarilla: "-", roja: "-" },
                { num: 73, pos: "33 años", nombre: "Jose Norberto Ramos Zamora", cat: "2", amarilla: "-", roja: "-" },
                { num: 83, pos: "22 años", nombre: "Juan Carlos Navarro Robles", cat: "3", amarilla: "-", roja: "-" },
                { num: 88, pos: "39 años", nombre: "Juan Chavez", cat: "3", amarilla: "-", roja: "-" },
                { num: 79, pos: "30 años", nombre: "Justo Manuel Covarrubias", cat: "3", amarilla: "-", roja: "-" },
                { num: 78, pos: "20 años", nombre: "Luis Fernando Guerrero Delgadillo", cat: "3", amarilla: "-", roja: "-" },
                { num: 81, pos: "46 años", nombre: "Luis Jorge Guerrero", cat: "3", amarilla: "-", roja: "-" },
                { num: 85, pos: "30 años", nombre: "Manuel López Mundo", cat: "3", amarilla: "-", roja: "-" },
                { num: 77, pos: "29 años", nombre: "Salvador Ochoa Guerrero", cat: "2", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Jorge Alberto Guerrero" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "1 (10) - (9) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 5", visita: "assets/logos/Pansa_Brava.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Robles.jpg", res: "1 - 4", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "1 - 0", visita: "assets/logos/Furia_Roja.png" },
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "6 - 3", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "1 (0) - (2) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "vs", visita: "assets/logos/chuperamigos.png" }
            ]
        },
        "7": { // Rayados FC
            plantilla: [
                { num: 202, pos: "44 años", nombre: "Carlos Huerta", cat: "3", amarilla: "-", roja: "-" },
                { num: 192, pos: "27 años", nombre: "Elvis Aron de la Rosa Hernández", cat: "1", amarilla: "-", roja: "-" },
                { num: 193, pos: "25 años", nombre: "Felipe de Jesús Castellón", cat: "3", amarilla: "-", roja: "-" },
                { num: 191, pos: "24 años", nombre: "Joel Heriberto Castañeda López", cat: "3", amarilla: "1", roja: "-" },
                { num: 199, pos: "34 años", nombre: "Jose Octavio Ponce Fonseca", cat: "2", amarilla: "-", roja: "-" },
                { num: 0, pos: "- años", nombre: "Juan Velazquez", cat: "2", amarilla: "-", roja: "-" },
                { num: 200, pos: "24 años", nombre: "Leobardo Leonel de la Rosa H.", cat: "3", amarilla: "-", roja: "-" },
                { num: 197, pos: "25 años", nombre: "Oscar Ulises Guerrero Huerta", cat: "3", amarilla: "-", roja: "1" },
                { num: 198, pos: "33 años", nombre: "Pablo Misael Santana Pelayo", cat: "3", amarilla: "1", roja: "-" },
                { num: 196, pos: "27 años", nombre: "Pedro Paez", cat: "3", amarilla: "1", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "4 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J2", fecha: "Mie 16/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "8 - 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Rayados.jpg", res: "3 - 1", visita: "assets/logos/7_Mares.jpg" },
                { j: "J4", fecha: "Mar 05/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/villalobos.jpg", res: "2 (3) - (2) 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Rayados.jpg", res: "2 - 3", visita: "assets/logos/chuperamigos.png" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/belicones.png", res: "2 - 4", visita: "assets/logos/Rayados.jpg" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Rayados.jpg", res: "vs", visita: "assets/logos/Tortilleros.png" }
            ]
        },
        "8": { // Tortilleros FC
            plantilla: [
                { num: 220, pos: "30 años", nombre: "Daniel Salvador Flores Olague", cat: "3", amarilla: "-", roja: "-" },
                { num: 225, pos: "21 años", nombre: "Diego De Jesus Avalos Salgado", cat: "3", amarilla: "1", roja: "-" },
                { num: 223, pos: "33 años", nombre: "Efraín López", cat: "1", amarilla: "-", roja: "-" },
                { num: 164, pos: "- años", nombre: "Gustavo Gomez", cat: "3", amarilla: "-", roja: "-" },
                { num: 0, pos: "- años", nombre: "Hugo Cisneros", cat: "2", amarilla: "-", roja: "-" },
                { num: 219, pos: "29 años", nombre: "Jesus Jafeth González Ventura", cat: "3", amarilla: "-", roja: "-" },
                { num: 221, pos: "33 años", nombre: "Jose Antonio Perez Peña", cat: "3", amarilla: "-", roja: "-" },
                { num: 190, pos: "29 años", nombre: "Jose Jareth González Ventura", cat: "3", amarilla: "-", roja: "-" },
                { num: 218, pos: "29 años", nombre: "Jose Julian Cisneros C.", cat: "2", amarilla: "2", roja: "-" },
                { num: 224, pos: "36 años", nombre: "Juan Manuel Olague", cat: "1", amarilla: "-", roja: "-" },
                { num: 222, pos: "29 años", nombre: "Luis Gaspar Aguila", cat: "1", amarilla: "-", roja: "-" },
                { num: 189, pos: "28 años", nombre: "Oswaldo Cisneros", cat: "3", amarilla: "-", roja: "-" },
                { num: 163, pos: "33 años", nombre: "Ruben Gaspar", cat: "2", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Oswaldo Cisneros" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "2 (3) - (1) 2", visita: "assets/logos/Furia_Roja.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "3 - 4", visita: "assets/logos/Tortilleros.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 0", visita: "assets/logos/villalobos.jpg" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "4 - 0", visita: "assets/logos/Tortilleros.png" },
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 4", visita: "assets/logos/belicones.png" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 2", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Rayados.jpg", res: "vs", visita: "assets/logos/Tortilleros.png" }
            ]
        },
        "9": { // Carnicería Villalobos
            plantilla: [
                { num: 12, pos: "22 años", nombre: "Alexis Pelayo", cat: "1", amarilla: "-", roja: "-" },
                { num: 1, pos: "38 años", nombre: "Carlos Toscano", cat: "2", amarilla: "-", roja: "-" },
                { num: 18, pos: "26 años", nombre: "Cesar Cuevas", cat: "2", amarilla: "-", roja: "-" },
                { num: 7, pos: "24 años", nombre: "Cristian Beatriz Contreras", cat: "3", amarilla: "-", roja: "-" },
                { num: 4, pos: "24 años", nombre: "Cristian Hernandez Zuñiga", cat: "3", amarilla: "1", roja: "-" },
                { num: 6, pos: "30 años", nombre: "Cristian Pelayo Santana", cat: "2", amarilla: "-", roja: "-" },
                { num: 14, pos: "37 años", nombre: "Eduardo Chagollan", cat: "3", amarilla: "-", roja: "-" },
                { num: 11, pos: "25 años", nombre: "Jesus Alberto Carrillo Pelayo", cat: "2", amarilla: "-", roja: "-" },
                { num: 10, pos: "- años", nombre: "Josue Rodriguez Flores", cat: "3", amarilla: "-", roja: "-" },
                { num: 9, pos: "- años", nombre: "Josue Villaseñor", cat: "-", amarilla: "-", roja: "-" },
                { num: 5, pos: "50 años", nombre: "Juan Hernandez Garcia", cat: "3", amarilla: "-", roja: "-" },
                { num: 15, pos: "32 años", nombre: "Luis Carlos Alberto Hernandez", cat: "3", amarilla: "-", roja: "-" },
                { num: 17, pos: "27 años", nombre: "Oswald Medina", cat: "3", amarilla: "-", roja: "-" },
                { num: 2, pos: "25 años", nombre: "Ramiro Arteaga Salas", cat: "3", amarilla: "-", roja: "-" },
                { num: 3, pos: "26 años", nombre: "Ramiro Avalos Aldaco", cat: "3", amarilla: "-", roja: "-" },
                { num: 13, pos: "- años", nombre: "Rodolfo Aldaco", cat: "2", amarilla: "-", roja: "-" },
                { num: 8, pos: "24 años", nombre: "Wilber Pelayo Peña", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Ramiro Arteaga Salas" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "1 - 2", visita: "assets/logos/villalobos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "3 (3) - (2) 3", visita: "assets/logos/belicones.png" },
                { j: "J3", fecha: "Mar 22/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 0", visita: "assets/logos/villalobos.jpg" },
                { j: "J4", fecha: "Mar 05/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/villalobos.jpg", res: "2 (3) - (2) 2", visita: "assets/logos/Rayados.jpg" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "3 (8) - (7) 3", visita: "assets/logos/villalobos.jpg" },
                { j: "J6", fecha: "Lun 19/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "1 (0) - (2) 1", visita: "assets/logos/Diablos_Gordos.jpg" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/villalobos.jpg", res: "vs", visita: "assets/logos/jalisco_FC.png" }
            ]
        },
        "10": { // Gordos Belicones
            plantilla: [
                { num: 113, pos: "28 años", nombre: "Adán García Paz", cat: "-", amarilla: "-", roja: "-" },
                { num: 126, pos: "-", nombre: "Alejandro Sánchez Verde", cat: "3", amarilla: "-", roja: "-" },
                { num: 124, pos: "25 años", nombre: "Alexis Aguilar Ponce", cat: "3", amarilla: "-", roja: "-" },
                { num: 111, pos: "37 años", nombre: "Alonso Nuñez García", cat: "2", amarilla: "1", roja: "-" },
                { num: 114, pos: "-", nombre: "Álvaro Rodríguez Ávalos", cat: "3", amarilla: "-", roja: "-" },
                { num: 117, pos: "42 años", nombre: "Antonio Reyes Naranjo", cat: "1", amarilla: "-", roja: "-" },
                { num: 115, pos: "36 años", nombre: "Fernando Paiz Lugo", cat: "3", amarilla: "-", roja: "-" },
                { num: 120, pos: "37 años", nombre: "Hermes Adalberto Orozco Paredes", cat: "2", amarilla: "-", roja: "-" },
                { num: 119, pos: "36 años", nombre: "Javier Ernesto García Gaspar", cat: "1", amarilla: "-", roja: "-" },
                { num: 121, pos: "26 años", nombre: "José Francisco Gómez Maldonado", cat: "2", amarilla: "-", roja: "-" },
                { num: 122, pos: "34 años", nombre: "José Manuel Pizano Gómez", cat: "3", amarilla: "-", roja: "-" },
                { num: 118, pos: "37 años", nombre: "Juan Carlos Sánchez Hernández", cat: "3", amarilla: "1", roja: "-" },
                { num: 109, pos: "-", nombre: "Juan Paulo Limón Trinidad", cat: "3", amarilla: "-", roja: "-" },
                { num: 112, pos: "28 años", nombre: "Luis Alberto Ríos Carrizales", cat: "3", amarilla: "-", roja: "-" },
                { num: 123, pos: "-", nombre: "Luis David Hernández Salazar", cat: "2", amarilla: "-", roja: "-" },
                { num: 125, pos: "39 años", nombre: "Martín Roberto Larios", cat: "3", amarilla: "-", roja: "-" },
                { num: 116, pos: "36 años", nombre: "Néstor Daniel Rodríguez Ávalos", cat: "3", amarilla: "1", roja: "-" },
                { num: 110, pos: "25 años", nombre: "Rafael Ceja Flores", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "José Manuel Pizano Gómez & Juan Paulo Limón Trinidad" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "3 - 2", visita: "assets/logos/7_Mares.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/villalobos.jpg", res: "3 (3) - (2) 3", visita: "assets/logos/belicones.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "8 - 0", visita: "assets/logos/chuperamigos.png" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "2 (3) - (4) 2", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J5", fecha: "Lun 12/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/Tortilleros.png", res: "1 - 4", visita: "assets/logos/belicones.png" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/belicones.png", res: "2 - 4", visita: "assets/logos/Rayados.jpg" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "vs", visita: "assets/logos/belicones.png" }
            ]
        },
        "11": { // JR Transmisiones
            plantilla: [
                { num: 43, pos: "46 años", nombre: "Adán Mercado Ballardo", cat: "2", amarilla: "-", roja: "-" },
                { num: 49, pos: "19 años", nombre: "Alexis Orlando Mercado Rodríguez", cat: "3", amarilla: "-", roja: "-" },
                { num: 51, pos: "25 años", nombre: "Bernardo Antonio Peña García", cat: "3", amarilla: "-", roja: "-" },
                { num: 238, pos: "42 años", nombre: "Edgar Roberto Contreras Roque", cat: "1", amarilla: "-", roja: "-" },
                { num: 45, pos: "28 años", nombre: "Félix Cuevas Sánchez", cat: "1", amarilla: "-", roja: "1" },
                { num: 48, pos: "27 años", nombre: "Jesús Emmanuel Cortés Navarro", cat: "-", amarilla: "-", roja: "-" },
                { num: 52, pos: "44 años", nombre: "Jorge Román Ortega Tapia", cat: "2", amarilla: "-", roja: "-" },
                { num: 41, pos: "40 años", nombre: "José Arturo Alanis Suarez", cat: "3", amarilla: "-", roja: "-" },
                { num: 42, pos: "41 años", nombre: "José Manuel Mercado Ballardo", cat: "2", amarilla: "-", roja: "-" },
                { num: 39, pos: "39 años", nombre: "Juan Gerardo Alaniz Sánchez", cat: "2", amarilla: "-", roja: "-" },
                { num: 54, pos: "27 años", nombre: "Luis Alfredo Alanís Avalos", cat: "3", amarilla: "-", roja: "-" },
                { num: 47, pos: "34 años", nombre: "Luis Carlos Mercado García", cat: "3", amarilla: "-", roja: "-" },
                { num: 38, pos: "40 años", nombre: "Luis Jorge López Martínez", cat: "2", amarilla: "-", roja: "-" },
                { num: 40, pos: "27 años", nombre: "Miguel Ángel Gutierrez Ortega", cat: "-", amarilla: "-", roja: "-" },
                { num: 44, pos: "46 años", nombre: "Omar Alejandro Tapia Nájera", cat: "3", amarilla: "-", roja: "-" },
                { num: 50, pos: "25 años", nombre: "Osmand Cabain Ortega Cárdenas", cat: "2", amarilla: "-", roja: "-" },
                { num: 53, pos: "37 años", nombre: "Pedro González Pérez", cat: "3", amarilla: "-", roja: "-" },
                { num: 37, pos: "28 años", nombre: "Rodolfo Alejandro Tapia Casillas", cat: "2", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Omar Alejandro Tapia Nájera" }],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "2 - 3", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J2", fecha: "Lun 28/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "0 - 0", visita: "assets/logos/Robles.jpg" },
                { j: "J3", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Furia_Roja.png", res: "0 - 5", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J4", fecha: "Lun 05/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/7_Mares.jpg", res: "4 - 2", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "3 (8) - (7) 3", visita: "assets/logos/villalobos.jpg" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/JR Transmisiones.png", res: "vs", visita: "assets/logos/belicones.png" }
            ]
        },
        "12": { // Chuper Amigos
            plantilla: [
                { num: 29, pos: "35 años", nombre: "Alejandro Pelayo G.", cat: "1", amarilla: "-", roja: "-" },
                { num: 24, pos: "45 años", nombre: "Alejandro Rangel", cat: "3", amarilla: "-", roja: "-" },
                { num: 20, pos: "43 años", nombre: "Ángel Vazquez", cat: "2", amarilla: "-", roja: "-" },
                { num: 35, pos: "39 años", nombre: "Christian G. Martell Suárez", cat: "-", amarilla: "-", roja: "-" },
                { num: 23, pos: "22 años", nombre: "Dionicio de Jesus Avalos Fausto", cat: "2", amarilla: "-", roja: "-" },
                { num: 31, pos: "42 años", nombre: "Enrique Zúñiga Casillas", cat: "3", amarilla: "2", roja: "-" },
                { num: 32, pos: "34 años", nombre: "Felipe de Jesus Elizondo M.", cat: "-", amarilla: "-", roja: "-" },
                { num: 21, pos: "39 años", nombre: "J. Manuel Vizcarra Quintero", cat: "2", amarilla: "-", roja: "-" },
                { num: 28, pos: "38 años", nombre: "Jesús Bautista Delgado", cat: "3", amarilla: "-", roja: "-" },
                { num: 19, pos: "36 años", nombre: "José Angel Isidro", cat: "1", amarilla: "-", roja: "-" },
                { num: 36, pos: "40 años", nombre: "José de Jesús Contreras Aceves", cat: "-", amarilla: "-", roja: "-" },
                { num: 30, pos: "29 años", nombre: "Jose Eduardo Arcega vera", cat: "2", amarilla: "-", roja: "-" },
                { num: 22, pos: "40 años", nombre: "Juan Andres Vázquez Guerra", cat: "2", amarilla: "-", roja: "-" },
                { num: 26, pos: "34 años", nombre: "Juan Antonio Cervantes Díaz", cat: "3", amarilla: "-", roja: "-" },
                { num: 34, pos: "40 años", nombre: "Luis Javier Fabian Contreras", cat: "-", amarilla: "-", roja: "-" },
                { num: 27, pos: "-", nombre: "Luis Manuel Avalos Fregoso", cat: "3", amarilla: "-", roja: "-" },
                { num: 25, pos: "40 años", nombre: "Mario Alberto Torres Suarez", cat: "-", amarilla: "-", roja: "-" },
                { num: 33, pos: "31 años", nombre: "Victor Alfonso Contreras Gonzalez", cat: "3", amarilla: "-", roja: "-" }
            ],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "Alejandro Rangel" }],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "1 - 2", visita: "assets/logos/villalobos.jpg" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/Cruz_Azul_mezquitan.png" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/belicones.png", res: "8 - 0", visita: "assets/logos/chuperamigos.png" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "4 - 0", visita: "assets/logos/Tortilleros.png" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "21:10 Hrs", local: "assets/logos/Rayados.jpg", res: "2 - 3", visita: "assets/logos/chuperamigos.png" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "22:10 Hrs", local: "assets/logos/chuperamigos.png", res: "3 - 4", visita: "assets/logos/JR Transmisiones.png" },
                { j: "J7", fecha: "Mar 27/Oct/2026", hora: "20:10 Hrs", local: "assets/logos/Diablos_Gordos.jpg", res: "vs", visita: "assets/logos/chuperamigos.png" }
            ]
        },
        "13": { // Jalisco FC
            plantilla: [],
            cuerpoTecnico: [{ cargo: "Equipero", nombre: "" }],
            calendario: [
                { j: "J1", fecha: "Mie 23/Sep/2026", hora: "19:40 Hrs", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J2", fecha: "Lun 14/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Titanes.jpg" },
                { j: "J3", fecha: "Lun 21/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J4", fecha: "Mar 06/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/Robles.jpg" },
                { j: "J5", fecha: "Mar 13/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/Furia_Roja.png", res: "5 - 0", visita: "assets/logos/jalisco_FC.png" },
                { j: "J6", fecha: "Mar 20/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/jalisco_FC.png", res: "0 - 5", visita: "assets/logos/7_Mares.jpg" },
                { j: "J7", fecha: "Lun 26/Oct/2026", hora: "23:10 Hrs", local: "assets/logos/villalobos.jpg", res: "vs", visita: "assets/logos/jalisco_FC.png" }
            ]
        }
    };

    // ==========================================
    // 4. FUNCIÓN PARA CALCULAR LA RACHA
    // ==========================================
    function calcularRacha(equipoObj, calendarioPartidos) {
        if (!calendarioPartidos || calendarioPartidos.length === 0) return [];
        const racha = [];
        const logoActual = equipoObj.logo;

        calendarioPartidos.forEach(p => {
            if (!p.res || p.res.toLowerCase() === "vs" || p.res.includes("Por definir")) return;
            const partes = p.res.split("-");
            if (partes.length !== 2) return;

            const numLocalMatch = partes[0].trim().match(/^(\d+)/);
            const numVisitaMatch = partes[1].trim().match(/(\d+)$/);
            if (!numLocalMatch || !numVisitaMatch) return;

            const golesLoc = parseInt(numLocalMatch[1], 10);
            const golesVis = parseInt(numVisitaMatch[1], 10);
            const esLocal = (p.local === logoActual);

            if (golesLoc === golesVis) {
                racha.push("E");
            } else if (esLocal) {
                racha.push(golesLoc > golesVis ? "G" : "P");
            } else {
                racha.push(golesVis > golesLoc ? "G" : "P");
            }
        });
        return racha;
    }

    // ==========================================
    // 5. RENDER DINÁMICO EN PÁGINA
    // ==========================================
    const equipo = equipos.find(e => e.id === equipoId);
    if (equipoId !== null && !isNaN(equipoId) && equipo) {
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

        const datosCalendario = detallesPorEquipo[equipoId]?.calendario || [];
        const rachaCalculada = calcularRacha(equipo, datosCalendario);

        const datosDelEquipo = detallesPorEquipo[equipoId] || { plantilla: [] };
        let ta = 0, tr = 0;
        datosDelEquipo.plantilla.forEach(j => {
            if (j.amarilla && j.amarilla !== "-") ta += parseInt(j.amarilla);
            if (j.roja && j.roja !== "-") tr += parseInt(j.roja);
        });

        const posEquipo = clasificacion.findIndex(eq => eq.nombre === equipo.nombre) + 1;
        const cociente = equipo.pj > 0 ? (equipo.pts / equipo.pj).toFixed(2) : "0.00";

        const statPos = document.getElementById("stat-pos");
        const statPts = document.getElementById("stat-pts");
        const statPj = document.getElementById("stat-pj");
        const statCociente = document.getElementById("stat-cociente");
        const statGf = document.getElementById("stat-gf");
        const statGc = document.getElementById("stat-gc");
        const statDg = document.getElementById("stat-dg");
        const statTarjetas = document.getElementById("stat-tarjetas");

        if (statPos) statPos.innerText = posEquipo > 0 ? posEquipo : "-";
        if (statPts) statPts.innerText = equipo.pts;
        if (statPj) statPj.innerText = equipo.pj;
        if (statCociente) statCociente.innerText = cociente;
        if (statGf) statGf.innerText = equipo.gf;
        if (statGc) statGc.innerText = equipo.gc;
        if (statDg) statDg.innerText = equipo.dg;
        if (statTarjetas) statTarjetas.innerText = `${ta} / ${tr}`;

        const rachaContenedor = document.getElementById("racha-contenedor");
        if (rachaContenedor) {
            rachaContenedor.innerHTML = "";
            rachaCalculada.forEach(res => {
                const badge = document.createElement("span");
                badge.className = `badge-racha racha-${res.toLowerCase()}`;
                badge.innerText = res.toUpperCase();
                rachaContenedor.appendChild(badge);
            });
        }
    }

    // ==========================================
    // 6. RENDER DE TABLAS (PLANTILLA, TÉCNICO, CALENDARIO)
    // ==========================================
    const datosDelEquipo = detallesPorEquipo[equipoId] || {
        plantilla: [{ num: "-", pos: "-", nombre: "Sin jugadores registrados", cat: "-", amarilla: "-", roja: "-" }],
        cuerpoTecnico: [{ cargo: "-", nombre: "Sin cuerpo técnico registrado" }],
        calendario: [{ j: "-", fecha: "Por definir", hora: "-", local: "", res: "-", visita: "" }]
    };

    // Plantilla
    const tbodyPlantilla = document.getElementById('plantilla-cuerpo');
    if (tbodyPlantilla) {
        tbodyPlantilla.innerHTML = "";
        const listaJugadores = datosDelEquipo.plantilla.length > 0
            ? datosDelEquipo.plantilla
            : [{ num: "-", pos: "-", nombre: "Sin jugadores registrados", cat: "-", amarilla: "-", roja: "-" }];

        listaJugadores.forEach(j => {
            const esValido = (j.num !== "-" && j.nombre !== "Sin jugadores registrados");
            const filaClass = esValido ? 'class="fila-jugador-click"' : '';
            const nombreHtml = esValido 
                ? `<span class="nombre-jugador-link">${j.nombre} <i class="fas fa-id-card" title="Ver credencial"></i></span>`
                : j.nombre;

            tbodyPlantilla.innerHTML += `
                <tr ${filaClass} 
                    data-num="${j.num}" 
                    data-nombre="${j.nombre}" 
                    data-edad="${j.pos}" 
                    data-cat="${j.cat}" 
                    data-amarilla="${j.amarilla || '-'}" 
                    data-roja="${j.roja || '-'}">
                    <td><strong>${j.num}</strong></td>
                    <td>${j.pos}</td>
                    <td>${nombreHtml}</td>
                    <td>${j.cat}</td>
                    <td>${j.amarilla || "-"}</td>
                    <td>${j.roja || "-"}</td>
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

    // ==========================================
    // 7. GESTIÓN DEL MODAL DE CREDENCIAL E INFORMACIÓN
    // ==========================================
    const modal = document.getElementById("modal-credencial");
    const btnCerrar = document.getElementById("btn-cerrar-modal");
    const modalBody = document.getElementById("modal-credencial-contenido");
    const modalTitulo = document.getElementById("modal-titulo-jugador");

    function cerrarModal() {
        if (!modal) return;
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (modalBody) modalBody.innerHTML = "";
    }

    function abrirModalCredencial(num, nombre, edad, cat, amarilla, roja) {
        if (!modal || !modalBody || !modalTitulo) return;

        modalTitulo.innerHTML = `<i class="fas fa-id-card"></i> #${num} - Credencial de Jugador`;

        const rutaPng = `assets/credenciales/${num}.png`;
        const rutaJpg = `assets/credenciales/${num}.jpg`;

        const taBadge = (amarilla && amarilla !== "-") 
            ? `<span class="modal-badge-amarilla">${amarilla}</span>` 
            : `<span>-</span>`;

        const trBadge = (roja && roja !== "-") 
            ? `<span class="modal-badge-roja">${roja}</span>` 
            : `<span>-</span>`;

        modalBody.innerHTML = `
            <img src="${rutaPng}" alt="Credencial de ${nombre}" class="modal-credencial-img" 
                 onerror="if (!this.dataset.triedJpg) { this.dataset.triedJpg = true; this.src = '${rutaJpg}'; } else { this.style.display='none'; document.getElementById('credencial-fallback').style.display='block'; }">
            
            <div id="credencial-fallback" class="modal-credencial-fallback" style="display: none;">
                <i class="fas fa-user-circle" style="font-size: 3.5rem; color: #003366; margin-bottom: 10px;"></i>
                <p style="font-size: 0.82rem; color: #718096; margin: 0;">(Sin imagen registrada en <code>assets/credenciales/${num}.png</code>)</p>
            </div>

            <!-- FICHA DETALLADA DE INFORMACIÓN DEL JUGADOR -->
            <div class="modal-jugador-info-card">
                <div class="modal-jugador-nombre">${nombre}</div>
                <div class="modal-jugador-grid">
                    <div class="modal-stat-item">
                        <span class="modal-stat-label"><i class="fas fa-hashtag"></i> Número</span>
                        <span class="modal-stat-valor">#${num}</span>
                    </div>
                    <div class="modal-stat-item">
                        <span class="modal-stat-label"><i class="fas fa-birthday-cake"></i> Edad</span>
                        <span class="modal-stat-valor">${edad}</span>
                    </div>
                    <div class="modal-stat-item">
                        <span class="modal-stat-label"><i class="fas fa-futbol"></i> J. Jugados</span>
                        <span class="modal-stat-valor">${cat}</span>
                    </div>
                    <div class="modal-stat-item">
                        <span class="modal-stat-label"><i class="fas fa-clone"></i> Tarjetas</span>
                        <span class="modal-stat-valor" style="display: inline-flex; gap: 6px; align-items: center;">
                            ${taBadge} ${trBadge}
                        </span>
                    </div>
                </div>
            </div>
        `;

        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
    }

    if (tbodyPlantilla) {
        tbodyPlantilla.addEventListener("click", (e) => {
            const fila = e.target.closest("tr.fila-jugador-click");
            if (!fila) return;

            const num = fila.getAttribute("data-num");
            const nombre = fila.getAttribute("data-nombre");
            const edad = fila.getAttribute("data-edad");
            const cat = fila.getAttribute("data-cat");
            const amarilla = fila.getAttribute("data-amarilla");
            const roja = fila.getAttribute("data-roja");

            if (num && num !== "-") {
                abrirModalCredencial(num, nombre, edad, cat, amarilla, roja);
            }
        });
    }

    if (btnCerrar) {
        btnCerrar.addEventListener("click", cerrarModal);
    }
    if (modal) {
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                cerrarModal();
            }
        });
    }
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && modal && modal.classList.contains("active")) {
            cerrarModal();
        }
    });
});