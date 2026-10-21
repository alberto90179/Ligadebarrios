document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // 1. MENÚ DESPLEGABLE CON ROTACIÓN Y CIERRE
    // ==========================================
    const btnEquipos = document.getElementById("btn-equipos");
    const menuEquipos = document.getElementById("menu-equipos");
    const dropdownLi = btnEquipos ? btnEquipos.closest(".dropdown") : null;

    if (btnEquipos && menuEquipos) {
        btnEquipos.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isOpen = menuEquipos.classList.toggle("show");
            if (dropdownLi) {
                dropdownLi.classList.toggle("open", isOpen);
            }
        });

        document.addEventListener("click", (e) => {
            if (!btnEquipos.contains(e.target) && !menuEquipos.contains(e.target)) {
                menuEquipos.classList.remove("show");
                if (dropdownLi) dropdownLi.classList.remove("open");
            }
        });
    }

    // ==========================================
    // 2. DATOS DE LOS EQUIPOS (CON ID FIJO AÑADIDO)
    // ==========================================
    const equipos = [
        { id: 1, nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 6, g: 3, e: 0, p: 3, pts: 9, gf: 21, gc: 15, pe: 0, dg: "+6" },
        { id: 9, nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 6, g: 1, e: 4, p: 1, pts: 9, gf: 11, gc: 11, pe: 2, dg: "0" },
        { id: 12, nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 6, g: 2, e: 0, p: 4, pts: 6, gf: 14, gc: 20, pe: 0, dg: "-6" },
        { id: 4, nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 6, g: 4, e: 1, p: 1, pts:14, gf: 16, gc: 11, pe: 1, dg: "+5" },
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
});