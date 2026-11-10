document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica de Inicio de Sesión (admin-login.html)
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const user = document.getElementById('username').value;
            const pass = document.getElementById('password').value;
            const errorMsg = document.getElementById('login-error');

            // Credenciales solicitadas
            if (user === 'admin' && pass === 'ligaiguano') {
                sessionStorage.setItem('liga_admin_auth', 'true');
                window.location.href = 'dashboard.html';
            } else {
                errorMsg.style.display = 'block';
            }
        });
    }

    // 2. Lógica del Dashboard (dashboard.html)
    const dashboardBody = document.getElementById('dashboard-body');
    if (dashboardBody) {
        // Verificar si el usuario está autenticado
        if (sessionStorage.getItem('liga_admin_auth') !== 'true') {
            window.location.href = 'admin-login.html';
        } else {
            // Mostrar la página si está autenticado
            dashboardBody.style.display = 'block';
        }

        // Cerrar sesión
        const btnLogout = document.getElementById('btn-logout');
        if (btnLogout) {
            btnLogout.addEventListener('click', (e) => {
                e.preventDefault();
                sessionStorage.removeItem('liga_admin_auth');
                window.location.href = 'admin-login.html';
            });
        }

        // Manejo del formulario de captura de datos
        const formResultados = document.getElementById('form-resultados');
        if (formResultados) {
            formResultados.addEventListener('submit', (e) => {
                e.preventDefault();
                
                // Aquí recolectas los datos para enviarlos a Firestore o actualizar tu array local
                const jornada = document.getElementById('jornada').value;
                const local = document.getElementById('equipo-local').options[document.getElementById('equipo-local').selectedIndex].text;
                const visita = document.getElementById('equipo-visita').options[document.getElementById('equipo-visita').selectedIndex].text;
                const golesL = document.getElementById('goles-local').value;
                const golesV = document.getElementById('goles-visita').value;

                alert(`✅ Resultado guardado exitosamente:\n${jornada} | ${local} ${golesL} - ${golesV} ${visita}\n\n(Conecta este evento a tu base de datos de Firebase)`);
                formResultados.reset();
            });
        }
    }
});