// Array de los 16 equipos participantes con las nuevas propiedades (gf, gc, pe)
const equipos = [     
    { nombre: "Robles FC", logo: "assets/logos/Robles.jpg", pj: 1, g: 1, e: 0, p: 0, pts: 3, gf: 4, gc: 2, pe: 0, dg: "+2" },
    { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png", pj: 1, g: 1, e: 0, p: 0, pts: 3, gf:3 , gc: 2, pe: 0, dg: "+1" },
    { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png", pj: 1, g: 1, e: 0, p: 0, pts: 3, gf: 3, gc: 2, pe: 0, dg: "+1" },
    { nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 1, g: 1, e: 0, p: 0, pts: 3, gf: 2, gc: 1, pe: 0, dg: "+1" },
    { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png", pj: 1, g: 0, e: 1, p: 0, pts: 2, gf: 2, gc: 2, pe: 1, dg: "0" },   
    { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg", pj: 1, g: 0, e: 1, p: 0, pts: 2, gf: 1, gc: 1, pe: 1, dg: "0" },
    { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png", pj: 1, g: 0, e: 1, p: 0, pts: 1, gf: 2, gc: 2, pe: 0, dg: "0" },
    { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg", pj: 1, g: 0, e: 1, p: 0, pts: 1, gf: 1, gc: 1, pe: 0, dg: "0" },
    { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, gf: 0, gc: 0, pe: 0, dg: "0" },
    { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png", pj: 0, g: 0, e: 0, p: 0, pts: 0, gf: 0, gc: 0, pe: 0, dg: "0" },
    { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 1, g: 0, e: 0, p: 1, pts: 0, gf: 2, gc: 3, pe: 0, dg: "-1" },
    { nombre: "Panza Brava", logo: "assets/logos/Pansa_Brava.jpg", pj: 1, g: 0, e: 0, p: 1, pts: 0, gf: 2, gc: 3, pe: 0, dg: "-1" },        
    { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 1, g: 0, e: 0, p: 1, pts: 0, gf: 1, gc: 2, pe: 0, dg: "-1" },                        
    { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg", pj: 1, g: 0, e: 0, p: 1, pts: 0, gf: 2, gc: 4, pe: 0, dg: "-2" }    
];

const tablaCuerpo = document.getElementById("tabla-cuerpo"); 

if (tablaCuerpo) {     
    tablaCuerpo.innerHTML = "";     
    equipos.forEach((equipo, index) => {         
        const fila = document.createElement("tr"); 
        const logoImg = equipo.logo ? equipo.logo : "";  

        // Cálculo dinámico del porcentaje de efectividad (Puntos obtenidos / Puntos posibles)
        const puntosPosibles = equipo.pj * 3;
        const porcentaje = equipo.pj > 0 ? ((equipo.pts / puntosPosibles) * 100).toFixed(0) : 0;

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
            <td>${equipo.gf}</td>      <!-- Goles a favor -->
            <td>${equipo.gc}</td>      <!-- Goles en contra -->
            <td>${equipo.dg}</td>     
            <td>${porcentaje}%</td>    <!-- Porcentaje -->
            <td>${equipo.pe}</td>      <!-- Puntos extras -->
        `;
            
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