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
    // 2. DATOS DE LOS EQUIPOS
    // ==========================================
    const equipos = [
        { nombre: "Cruz Azul Mezquitán", logo: "assets/logos/Cruz_Azul_mezquitan.png", pj: 3, g: 3, e: 0, p: 0, pts: 9, gf: 10, gc: 3, pe: 0, dg: "+7" },
        { nombre: "Tortilleros FC", logo: "assets/logos/Tortilleros.png", pj: 3, g: 2, e: 1, p: 0, pts: 8, gf: 7, gc: 5, pe: 1, dg: "+2" },
        { nombre: "Gordos Belicones", logo: "assets/logos/belicones.png", pj: 3, g: 2, e: 1, p: 0, pts: 7, gf: 14, gc: 5, pe: 0, dg: "+9" },
        { nombre: "Pansa Brava", logo: "assets/logos/Pansa_Brava.jpg", pj: 3, g: 2, e: 0, p: 1, pts: 6, gf: 12, gc: 4, pe: 0, dg: "+8" },
        { nombre: "JR Transmisiones", logo: "assets/logos/JR Transmisiones.png", pj: 3, g: 2, e: 0, p: 1, pts: 6, gf: 9, gc: 5, pe: 0, dg: "+4" },
        { nombre: "Robles FC", logo: "assets/logos/Robles.jpg", pj: 3, g: 2, e: 0, p: 1, pts: 6, gf: 8, gc: 7, pe: 0, dg: "+1" },
        { nombre: "Titanes L.A.", logo: "assets/logos/Titanes.jpg", pj: 3, g: 1, e: 1, p: 1, pts: 5, gf: 6, gc: 2, pe: 1, dg: "+4" },
        { nombre: "Carnicería Villalobos", logo: "assets/logos/villalobos.jpg", pj: 3, g: 1, e: 1, p: 1, pts: 5, gf: 5, gc: 5, pe: 1, dg: "0" },
        { nombre: "Furia Roja", logo: "assets/logos/Furia_Roja.png", pj: 3, g: 1, e: 1, p: 1, pts: 4, gf: 10, gc: 9, pe: 0, dg: "+1" },
        { nombre: "Diablos Gordos", logo: "assets/logos/Diablos_Gordos.jpg", pj: 3, g: 1, e: 1, p: 1, pts: 4, gf: 6, gc: 7, pe: 0, dg: "-1" },
        { nombre: "Rayados FC", logo: "assets/logos/Rayados.jpg", pj: 3, g: 1, e: 0, p: 2, pts: 3, gf: 7, gc: 13, pe: 0, dg: "-6" },
        { nombre: "7 Mares", logo: "assets/logos/7_Mares.jpg", pj: 3, g: 0, e: 0, p: 3, pts: 0, gf: 6, gc: 10, pe: 0, dg: "-4" },
        { nombre: "Chuper Amigos", logo: "assets/logos/chuperamigos.png", pj: 3, g: 0, e: 0, p: 3, pts: 0, gf: 4, gc: 14, pe: 0, dg: "-10" },
        { nombre: "Jalisco FC", logo: "assets/logos/jalisco_FC.png", pj: 3, g: 0, e: 0, p: 3, pts: 0, gf: 0, gc: 15, pe: 0, dg: "-15" }
    ];

    // ==========================================
    // 3. TABLA GENERAL DE POSICIONES
    // ==========================================
    const tablaCuerpo = document.getElementById("tabla-cuerpo");
    if (tablaCuerpo) {
        tablaCuerpo.innerHTML = "";

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