document.addEventListener('DOMContentLoaded', function() {
    // Select the button
    const button = document.querySelector('.button.w-inline-block');

    if (button) {
        button.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default anchor behavior
            window.location.href = 'https://dulcet-shortbread-5e9bda.netlify.app/';
        });
    } else {
        console.error("Button with class 'button w-inline-block' not found");
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Función para agregar el evento de clic a un botón
    function addNavigationToButton(selector, url) {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
            console.log(`Botón encontrado: ${selector}`); // Depuración
            button.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation(); // Detener la propagación del evento
                console.log(`Clic en botón: ${selector}, redirigiendo a: ${url}`); // Depuración
                window.location.href = url;
            });
        });
        if (buttons.length === 0) {
            console.error(`Botón con selector '${selector}' no encontrado`);
        }
    }});