// Array de los 14 equipos participantes con las nuevas propiedades (gf, gc, pe)
const equipos = [
    { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 3, g: 3, e: 0, p: 0, pts: 9, gf: 10, gc: 3, pe: 0, dg: "+7" },
    { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png", pj: 3, g: 2, e: 1, p: 0, pts: 7, gf:14, gc: 5, pe: 0, dg: "+9" },
    { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png", pj: 2, g: 2, e: 0, p: 0, pts: 6, gf: 8, gc: 2, pe: 0, dg: "+6" },
    { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg", pj: 3, g: 1, e: 1, p: 1, pts:5, gf: 6, gc: 2, pe: 1, dg: "+4" },
    { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png", pj: 2, g: 1, e: 1, p: 0, pts: 5, gf: 3, gc: 2, pe: 1, dg: "+1" },
    { nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 3, g: 1, e: 1, p: 1, pts: 5, gf: 5, gc: 5, pe: 1, dg: "0" },     
    { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg", pj: 2, g: 1, e: 1, p: 0, pts: 4, gf: 5, gc: 2, pe: 0, dg: "+3" },
    { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png", pj: 3, g: 1, e: 1, p: 1, pts: 4, gf: 10, gc: 9, pe: 0, dg: "+1" },
    { nombre: "Pansa Brava", logo: "assets/logos/Pansa_Brava.jpg", pj: 2, g: 1, e: 0, p: 1, pts: 3, gf: 7, gc: 3, pe: 0, dg: "+4" },
    { nombre: "Robles FC", logo: "assets/logos/Robles.jpg", pj: 2, g: 1, e: 0, p: 1, pts: 3, gf: 5, gc: 6, pe: 0, dg: "-1" },
    { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg", pj: 3, g: 1, e: 0, p: 2, pts: 3, gf: 7, gc: 13, pe: 0, dg: "-6" },
    { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 2, g: 0, e: 0, p: 2, pts: 0, gf: 3, gc: 6, pe: 0, dg: "-3" },
    { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 3, g: 0, e: 0, p: 3, pts: 0, gf: 4, gc: 14, pe: 0, dg: "-10" },
    { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png", pj: 3, g: 0, e: 0, p: 3, pts: 0, gf:0, gc: 15, pe: 0, dg: "-15" }                        
];

const tablaCuerpo = document.getElementById("tabla-cuerpo");  

if (tablaCuerpo) {          
    tablaCuerpo.innerHTML = "";          

    // LÓGICA DE ORDENAMIENTO (Tabla General)
    equipos.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        
        const difA = parseInt(a.dg);
        const difB = parseInt(b.dg);
        if (difB !== difA) return difB - difA;
        
        return b.gf - a.gf;
    });

    // Generar la tabla
    equipos.forEach((equipo, index) => {                  
        const fila = document.createElement("tr");          
        const logoImg = equipo.logo ? equipo.logo : "";           
        
        // CÁLCULO MODIFICADO: Efectividad en función de 3 (Puntos por partido)
        // Se divide los puntos obtenidos entre los partidos jugados.
        const porcentaje = equipo.pj > 0 ? (equipo.pts / equipo.pj).toFixed(2) : "0.00";         
        
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
            <td>${porcentaje}</td>     <!-- Efectividad sobre 3 (Se retiró el símbolo %) -->             
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