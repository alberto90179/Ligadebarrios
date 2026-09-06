// ========================================== 
// 1. LÓGICA DEL MENÚ DESPLEGABLE EN EL HEADER 
// ========================================== 
document.addEventListener("DOMContentLoaded", () => {     
    const btnEquipos = document.getElementById("btn-equipos");     
    const menuEquipos = document.getElementById("menu-equipos");     
    
    if (btnEquipos && menuEquipos) {         
        menuEquipos.style.display = "none";                  
        
        btnEquipos.addEventListener("click", (e) => {             
            e.preventDefault();             
            if (menuEquipos.style.display === "none" || menuEquipos.style.display === "") {                 
                menuEquipos.style.display = "block";             
            } else {                 
                menuEquipos.style.display = "none";             
            }         
        });                  
        
        document.addEventListener("click", (e) => {             
            if (!btnEquipos.contains(e.target) && !menuEquipos.contains(e.target)) {                 
                menuEquipos.style.display = "none";             
            }         
        });     
    } 

    // ========================================== 
    // 2. OBTENER EL ID DEL EQUIPO DESDE LA URL 
    // ========================================== 
    const parametros = new URLSearchParams(window.location.search); 
    const equipoId = parametros.get('id'); 

    // ========================================== 
    // 3. ARRAY DE EQUIPOS
    // ========================================== 
    const equipos = [     
        { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png" },     
        { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg" },        
        { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg" },     
        { nombre: "Robles FC", logo: "assets/logos/Robles.jpg" },     
        { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png" },      
        { nombre: "Panza Brava", logo: "assets/logos/Pansa_Brava.jpg" },     
        { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg" },     
        { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg" },     
        { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png" },     
        { nombre: "Carniceria Villalobos", logo: "assets/logos/villalobos.jpg" },     
        { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png" },     
        { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png" },     
        { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png" },     
        { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png" } 
    ]; 

    // ========================================== 
    // 4. CARGAR LOS DATOS EN LA PÁGINA 
    // ========================================== 
    if (equipoId !== null && equipos[equipoId]) {     
        const equipo = equipos[equipoId];          
        
        // Cambiar nombre     
        document.getElementById('detail-name').innerText = equipo.nombre;          
        
        // Cambiar logo     
        const logoElement = document.getElementById('detail-logo');     
        if (equipo.logo !== "") {         
            logoElement.src = equipo.logo;         
            logoElement.style.display = "block";     
        } else {         
            logoElement.style.display = "none"; // Ocultar si no hay logo     
        } 
    }

   // ==========================================
    // 5. BASE DE DATOS LOCAL POR EQUIPO
    // ==========================================
    // Aqu  puedes registrar los datos reales de cada equipo usando su ID (0 = Furia Roja, 1 = 7 Mares, etc.)
    const detallesPorEquipo = {
        "0": { // Datos de Furia Roja
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
                { num: 11, pos: "50 años", nombre: "Julio César Tellez Castellon.", cat: "0" },
                { num: 12, pos: "44 años", nombre: "Mauricio Ramón Enríquez Rodríguez", cat: "0" },
                { num: 13, pos: "32 años", nombre: "Miguel Ángel Luna Glombitza", cat: "0" },
                { num: 14, pos: "36 años", nombre: "Nestor Daniel Rodríguez Avalos", cat: "0" },
                { num: 15, pos: "25", nombre: "Rafael Ceja Flores", cat: "0" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "Jhonatan Amaury Estrada Llamas" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "vs", visita: "assets/logos/Furia_Roja.png" }
            ]
        },
        "1": { // Datos de 7 Mares
            plantilla: [
                { num: 1, pos: "25 años", nombre: "Carlos Daniel Jiménez Camacho", cat: "0" },
                { num: 2, pos: "38 años", nombre: "Carlos Iván Jiménez Ruiz", cat: "0" },
                { num: 3, pos: "38 años", nombre: "César Daniel Aguilar García", cat: "0" },
                { num: 4, pos: "28 años", nombre: "Diego Adolfo Rosales Peñaloza", cat: "0" },
                { num: 5, pos: "27 años", nombre: "Diego Iván Mejía Vizcarra", cat: "0" },
                { num: 6, pos: "41 años", nombre: "Ernesto Iván Herrera Ibarra", cat: "0" },
                { num: 7, pos: "35 años", nombre: "José Alberto Garay Díaz", cat: "0" },
                { num: 8, pos: "21 años", nombre: "Leopoldo de Jesús De la Torre Rodríguez", cat: "0" },
                { num: 9, pos: "39 años", nombre: "Oscar Iván Campos Mejia", cat: "0" },
                { num: 10, pos: "29 años", nombre: "Ruben Alberto Salcedo Ortega", cat: "0" },
                { num: 11, pos: "40 años", nombre: "Ruben Castillo Elías", cat: "0" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "César Daniel Aguilar García" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "vs", visita: "assets/logos/7_Mares.jpg" }  
            ]
        },
        "2": { // Datos de Titanes L.A.
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "vs", visita: "assets/logos/Diablos_Gordos.jpg" }
            ]
            
        },
        "3": { // Datos de Robles FC
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "vs", visita: "assets/logos/Rayados.jpg" }
            ]
        },
        "4": { // Datos de Cruz Azul Mezquitán
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "POR DEFINIR", hora: "POR DEFINIR", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "vs", visita: "assets/logos/jalisco_FC.png" }
            ]
        },        
        "5": { // Datos de Pansa Brava
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],            
            calendario: [
                { j: "J 1", fecha: " Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "vs", visita: "assets/logos/JR Transmisiones.png" }
            ]
        },
        "6": { // Datos de Diablos Gordos
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],            
            calendario: [
                    { j: "J1", fecha: "Lun 07/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Titanes.jpg", res: "vs", visita: "assets/logos/Diablos_Gordos.jpg" },
                    
            ]
        },
        "7": { // Datos de Rayados FC
           plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/Robles.jpg", res: "vs", visita: "assets/logos/Rayados.jpg" }
            ]
        },
        "8": { // Datos de Tortilleros FC 
             plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Mar 08/Sep/2026", hora: "21:10 Hrs", local: "assets/logos/Tortilleros.png", res: "vs", visita: "assets/logos/Furia_Roja.png" }  
            ]
        },
        "9": { // Datos de Carniceria Villalobos
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "vs", visita: "assets/logos/villalobos.jpg" }               
            ]
        },
        "10": { // Datos de Gordos Belicones
             plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "Lun 07/Sep/2026", hora: "22:10 Hrs", local: "assets/logos/belicones.png", res: "vs", visita: "assets/logos/7_Mares.jpg" }
            ]
        },
        "11": { // Datos de JR Transmisiones
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],            
            calendario: [
                { j: "J1", fecha: " Mar 08/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/Pansa_Brava.jpg", res: "vs", visita: "assets/logos/JR Transmisiones.png" }
            ]
        },
        "12": { // Datos de Chuper Amigos
            plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J 1", fecha: "Lun 07/Sep/2026", hora: "20:10 Hrs", local: "assets/logos/chuperamigos.png", res: "vs", visita: "assets/logos/villalobos.jpg" }
            ]
        },
        "13": { // Datos de Jalisco FC
           plantilla: [
                { num: 1, pos: "", nombre: "", cat: "" },
                { num: 2, pos: "", nombre: "", cat: "" },
                { num: 3, pos: "", nombre: "", cat: "" },
                { num: 4, pos: "", nombre: "", cat: "" },
                { num: 5, pos: "", nombre: "", cat: "" },
                { num: 6, pos: "", nombre: "", cat: "" },
                { num: 7, pos: "", nombre: "", cat: "" },
                { num: 8, pos: "", nombre: "", cat: "" },
                { num: 9, pos: "", nombre: "", cat: "" },
                { num: 10, pos: "", nombre: "", cat: "" },
                { num: 11, pos: "", nombre: "", cat: "" },
                { num: 12, pos: "", nombre: "", cat: "" },
                { num: 13, pos: "", nombre: "", cat: "" },
                { num: 14, pos: "", nombre: "", cat: "" },
                { num: 15, pos: "", nombre: "", cat: "" },
                { num: 16, pos: "", nombre: "", cat: "" },
                { num: 17, pos: "", nombre: "", cat: "" },
                { num: 18, pos: "", nombre: "", cat: "" }
            ],
            cuerpoTecnico: [
                { cargo: "Equipero", nombre: "" }
            ],
            calendario: [
                { j: "J1", fecha: "POR DEFINIR", hora: "POR DEFINIR", local: "assets/logos/Cruz_Azul_mezquitan.png", res: "vs", visita: "assets/logos/jalisco_FC.png" }
            ]
        }
    };

    // ==========================================
    // 6. CARGAR LOS DATOS EN LAS TABLAS
    // ==========================================
    
    // Si el equipo no tiene datos registrados a n, mostramos un mensaje por defecto
    const datosDelEquipo = detallesPorEquipo[equipoId] || {
        plantilla: [{ num: "-", pos: "-", nombre: "Sin jugadores registrados", cat: "-" }],
        cuerpoTecnico: [{ cargo: "-", nombre: "Sin cuerpo t cnico registrado" }],
        calendario: [{ j: "-", fecha: "Por definir", hora: "-", local: "", res: "-", visita: "" }]
    };

    // Llenar tabla de Plantilla
    const tbodyPlantilla = document.getElementById('plantilla-cuerpo');
    if(tbodyPlantilla) {
        tbodyPlantilla.innerHTML = ""; // Limpiar contenido previo
        datosDelEquipo.plantilla.forEach(j => {
            tbodyPlantilla.innerHTML += `
                <tr>
                    <td>${j.num}</td>
                    <td>${j.pos}</td>
                    <td>${j.nombre}</td>
                    <td>${j.cat}</td>
                </tr>`;
        });
    }

    // Llenar Cuerpo T cnico
    const tbodyTecnico = document.getElementById('cuerpo-tecnico');
    if(tbodyTecnico) {
        tbodyTecnico.innerHTML = ""; // Limpiar contenido previo
        datosDelEquipo.cuerpoTecnico.forEach(ct => {
            tbodyTecnico.innerHTML += `
                <tr>
                    <td>${ct.cargo}</td>
                    <td>${ct.nombre}</td>
                </tr>`;
        });
    }

    // Llenar Calendario
    const tbodyCalendario = document.getElementById('calendario-cuerpo');
    if(tbodyCalendario) {
        tbodyCalendario.innerHTML = ""; // Limpiar contenido previo
        datosDelEquipo.calendario.forEach(p => {
            // Validar si hay imagen para mostrar, si no, dejar un espacio vac o
            const imgLocal = p.local ? `<img src="${p.local}" width="30" onerror="this.style.display='none'">` : '';
            const imgVisita = p.visita ? `<img src="${p.visita}" width="30" onerror="this.style.display='none'">` : '';
            
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