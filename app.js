// Array de los 16 equipos participantes 
const equipos = [     
    { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },        
    { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Robles FC", logo: "assets/logos/Robles.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },        
    { nombre: "Panza Brava", logo: "assets/logos/Pansa_Brava.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" },     
    { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, dg: "0" } 
];

const tablaCuerpo = document.getElementById("tabla-cuerpo"); 

if (tablaCuerpo) {     
    tablaCuerpo.innerHTML = "";     
    equipos.forEach((equipo, index) => {         
        const fila = document.createElement("tr"); 
        const logoImg = equipo.logo ? equipo.logo : "";  

        fila.innerHTML = `     
            <td>${index + 1}</td>     
            <td class="team-name">         
                <a href="equipo.html?id=${index}" style="text-decoration: none; color: inherit;">
                    <div class="team-info" style="cursor: pointer;">             
                        <img src="${logoImg}" alt="Escudo ${equipo.nombre}" class="team-logo" onerror="this.style.display='none'">             
                        <span>${equipo.nombre}</span>         
                    </div>
                </a>     
            </td>     
            <td>${equipo.pj}</td>     
            <td>${equipo.g}</td>     
            <td>${equipo.e}</td>     
            <td>${equipo.p}</td>     
            <td class="puntos-col">${equipo.pts}</td>     
            <td>0</td>      
            <td>0</td>      
            <td>${equipo.dg}</td>     
            <td>0%</td>      
            <td>0</td>`;
            
        tablaCuerpo.appendChild(fila);     
    }); 
}

// ========================================== 
// LÓGICA DEL MENÚ DESPLEGABLE 
// ========================================== 
const btnEquipos = document.getElementById("btn-equipos"); 
const menuEquipos = document.getElementById("menu-equipos"); 

if (btnEquipos && menuEquipos) {     
    menuEquipos.style.display = "none";          
    btnEquipos.addEventListener("click", (e) => {         
        e.preventDefault();         
        if (menuEquipos.style.display === "none") {             
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