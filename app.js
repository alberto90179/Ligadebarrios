document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. MENÚ DESPLEGABLE CON ROTACIÓN Y CIERRE
    // ==========================================
    const dropdowns = [
        { btn: document.getElementById("btn-equipos"), menu: document.getElementById("menu-equipos") },
        { btn: document.getElementById("btn-fase-final"), menu: document.getElementById("menu-fase-final") }
    ];

    dropdowns.forEach(({ btn, menu }) => {
        if (btn && menu) {
            const dropdownLi = btn.closest(".dropdown");
            btn.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation();
                const isOpen = menu.classList.toggle("show");
                if (dropdownLi) {
                    dropdownLi.classList.toggle("open", isOpen);
                }
            });

            document.addEventListener("click", (e) => {
                if (!btn.contains(e.target) && !menu.contains(e.target)) {
                    menu.classList.remove("show");
                    if (dropdownLi) dropdownLi.classList.remove("open");
                }
            });
        }
    });

    // ==========================================
    // 2. DATOS DE LOS EQUIPOS (CON ID FIJO AÑADIDO)
    // ==========================================
      const equipos = [
        { id: 1,    nombre: "7 Mares",                  logo: "assets/logos/7_Mares.png",               pj: 11, g: 6, e: 1, p: 4,  pts: 20,     gf: 38, gc: 19, pe: 1, dg: "+19" },
        { id: 9,    nombre: "Carnicería Villalobos",    logo: "assets/logos/villalobos.png",            pj: 11, g: 3, e: 5, p: 3,  pts: 17,     gf: 23, gc: 22, pe: 3, dg: "+1"  },
        { id: 12,   nombre: "Chuper Amigos",            logo: "assets/logos/chuperamigos.png",          pj: 11, g: 4, e: 1, p: 6,  pts: 13,     gf: 28, gc: 30, pe: 0, dg: "-2" },
        { id: 4,    nombre: "Cruz Azul Mezquitán",      logo: "assets/logos/Cruz_Azul_mezquitan.png",   pj: 11, g: 7, e: 1, p: 3,  pts: 23,     gf: 27, gc: 20, pe: 1, dg: "+7"},
        { id: 6,    nombre: "Diablos Gordos",           logo: "assets/logos/Diablos_Gordos.png",        pj: 11, g: 7, e: 2, p: 2,  pts: 24,     gf: 32, gc: 20, pe: 1, dg: "+12" },
        { id: 0,    nombre: "Furia Roja",               logo: "assets/logos/Furia_Roja.png",            pj: 11, g: 5, e: 1, p: 5,  pts: 16,     gf: 27, gc: 26, pe: 0, dg: "+1" },
        { id: 10,   nombre: "Gordos Belicones",         logo: "assets/logos/belicones.png",             pj: 11, g: 5, e: 2, p: 4,  pts: 17,     gf: 37, gc: 25, pe: 0, dg: "+12" },
        { id: 13,   nombre: "Jalisco FC",               logo: "assets/logos/jalisco_FC.png",            pj: 11, g: 0, e: 0, p: 11, pts: 0,      gf: 0,  gc: 55, pe: 0, dg: "-55"},
        { id: 11,   nombre: "JR Transmisiones",         logo: "assets/logos/JR Transmisiones.png",      pj: 11, g: 6, e: 2, p: 3,  pts: 21,     gf: 31, gc: 20, pe: 1, dg: "+11" },
        { id: 5,    nombre: "Pansa Brava",              logo: "assets/logos/Pansa_Brava.png",           pj: 11, g: 8, e: 1, p: 2,  pts: 25,     gf: 36, gc: 17, pe: 0, dg: "+19"},
        { id: 7,    nombre: "Rayados FC",               logo: "assets/logos/Rayados.png",               pj: 11, g: 3, e: 1, p: 7,  pts: 10,     gf: 22, gc: 38, pe: 0, dg: "-16"},
        { id: 3,    nombre: "Robles FC",                logo: "assets/logos/Robles.png",                pj: 11, g: 3, e: 3, p: 5,  pts: 13,     gf: 23, gc: 25, pe: 1, dg: "-2" },
        { id: 2,    nombre: "Titanes L.A.",             logo: "assets/logos/Titanes.png",               pj: 11, g: 3, e: 3, p: 5,  pts: 14,     gf: 18, gc: 18, pe: 2, dg: "-" },
        { id: 8,    nombre: "Tortilleros FC",           logo: "assets/logos/Tortilleros.png",           pj: 11, g: 4, e: 1, p: 6,  pts: 14,     gf: 18, gc: 25, pe: 1, dg: "-7" }
    ];

   // ==========================================
    // 3. TABLA GENERAL DE POSICIONES
    // ==========================================
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    if (tablaCuerpo) {
        tablaCuerpo.innerHTML = "";
        
        // Ordenamos los equipos según los puntos y la diferencia de goles
        equipos.sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            const difA = parseInt(a.dg);
            const difB = parseInt(b.dg);
            if (difB !== difA) return difB - difA;
            return b.gf - a.gf;
        });

        equipos.forEach((equipo, index) => {
            const fila = document.createElement("tr");
            const logoImg = equipo.logo || "";
            const porcentaje = equipo.pj > 0 ? (equipo.pts / equipo.pj).toFixed(2) : "0.00";
            const pos = index + 1;

            // Determinar zona según la posición
            let zonaClase = "";
            let zonaBadge = "";

            if (pos <= 8) {
                zonaClase = "fila-liguilla";
                zonaBadge = '<span class="badge-zona badge-liguilla" title="Zona de Liguilla">Liguilla</span>';
            } else if (pos <= 12) {
                zonaClase = "fila-consolacion";
                zonaBadge = '<span class="badge-zona badge-consolacion" title="Copa de Consolación">Consolación</span>';
            } else {
                zonaClase = "fila-eliminado";
                zonaBadge = '<span class="badge-zona badge-eliminado" title="Eliminado">Eliminado</span>';
            }

            fila.className = zonaClase;

            // En el enlace <a> ahora usamos equipo.id en lugar del index del sort
            fila.innerHTML = `
                <td class="pos-col">
                    <span class="pos-num">${pos}</span>
                    ${zonaBadge}
                </td>
                <td class="team-name">
                    <a href="equipo.html?id=${equipo.id}" style="text-decoration: none; color: inherit;">
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
                <td>${equipo.gf}</td>
                <td>${equipo.gc}</td>
                <td>${equipo.dg}</td>
                <td>${porcentaje}</td>
                <td>${equipo.pe}</td>
            `;
            tablaCuerpo.appendChild(fila);
        });
    }

    // ==========================================
    // 4. CÁLCULO ESTADÍSTICAS GLOBALES LIGA
    // ==========================================
    function calcularEstadisticasLiga() {
        let totalGoles = 0, totalPJ = 0, totalVictorias = 0, totalEmpates = 0;
        let mejorOfensiva = equipos[0];
        let mejorDefensiva = equipos[0];

        equipos.forEach(eq => {
            totalGoles += eq.gf;
            totalPJ += eq.pj;
            totalVictorias += eq.g;
            totalEmpates += eq.e;

            // Equipo con más goles a favor
            if (eq.gf > mejorOfensiva.gf) mejorOfensiva = eq;
            
            // Equipo con menos goles en contra
            if (eq.gc < mejorDefensiva.gc) mejorDefensiva = eq;
        });
        
        // CÁLCULO DE POSICIÓN REAL PARA EL RANGO
        // Como el array 'equipos' ya fue ordenado previamente en el paso 3, 
        // su índice refleja su posición actual en la tabla general.
        let rankMO = equipos.indexOf(mejorOfensiva) + 1;
        let rankMD = equipos.indexOf(mejorDefensiva) + 1;

        // 1 Partido = 2 Equipos jugando
        let partidosJugados = totalPJ / 2;
        let empates = (totalEmpates / 2)-0.5;
        let victorias = totalVictorias; 
        
        // 14 equipos juegan 13 jornadas (81 partidos totales)
        let totalPartidosTemporada = (equipos.length * (equipos.length - 1)) / 2;
        let pendientes = totalPartidosTemporada - partidosJugados;

        // Tarjetas simuladas o recuperadas
        let totalAmarillas = 35;
        let totalRojas = 5;

        const el = (id) => document.getElementById(id);
        
        if(el('stat-pj')) el('stat-pj').textContent = partidosJugados;
        if(el('stat-pendientes')) el('stat-pendientes').textContent = pendientes;
        if(el('stat-victorias')) el('stat-victorias').textContent = victorias;
        if(el('stat-empates')) el('stat-empates').textContent = empates;
        if(el('stat-total-goles')) el('stat-total-goles').textContent = totalGoles;

        // INYECCIÓN DE DATOS Y RANGO MEJOR OFENSIVA
        if(el('mo-nombre')) el('mo-nombre').textContent = mejorOfensiva.nombre;
        if(el('mo-goles')) el('mo-goles').textContent = mejorOfensiva.gf;
        if(el('mo-logo')) el('mo-logo').src = mejorOfensiva.logo;
        if(el('mo-rank')) el('mo-rank').textContent = `#${rankMO} RANK`;

        // INYECCIÓN DE DATOS Y RANGO MEJOR DEFENSIVA
        if(el('md-nombre')) el('md-nombre').textContent = mejorDefensiva.nombre;
        if(el('md-goles')) el('md-goles').textContent = mejorDefensiva.gc;
        if(el('md-logo')) el('md-logo').src = mejorDefensiva.logo;
        if(el('md-rank')) el('md-rank').textContent = `#${rankMD} RANK`;

        if(el('stat-amarillas')) el('stat-amarillas').textContent = totalAmarillas;
        if(el('stat-rojas')) el('stat-rojas').textContent = totalRojas;
        if(el('stat-total-tarjetas')) el('stat-total-tarjetas').textContent = (totalAmarillas + totalRojas);
    }

    // Ejecutamos la función de cálculos de la liga
    calcularEstadisticasLiga();
});