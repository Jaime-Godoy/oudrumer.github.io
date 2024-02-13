// Activa la validación de formulario de Bootstrap
(function() {
    'use strict';
    window.addEventListener('load', function() {
        // Obtén todos los formularios a los que queremos aplicar estilos de validación de Bootstrap
        var forms = document.getElementsByClassName('needs-validation');
        // Haz un bucle sobre ellos y evita el envío
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                } else {
                    // Si el formulario es válido, muestra el popup
                    alert('Tu mensaje ha sido enviado correctamente');
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();