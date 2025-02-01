const passwordInput = document.getElementById('password');
        const meter = document.querySelector('meter');
        const progress = document.querySelector('progress');
        const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input[type="password"], input[type="number"]');
        const colorFondo = document.getElementById('colorFondo');
        const valoracion = document.getElementById('valoracion');
        const valoracionValue = document.getElementById('valoracionValue');
        const medidor = document.getElementById('medidor');

        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                input.style.backgroundColor = 'rgb(241, 249, 255)';
                input.style.border = '1px solid rgb(120, 120, 120)';
                input.style.borderRadius = '1px';
                input.style.height = '1.6em';
            });
            input.addEventListener('blur', function() {
                input.style.backgroundColor = 'white';
                input.style.border = '1px solid rgb(120, 120, 120)';
                input.style.borderRadius = '1px';
                input.style.height = '1.6em';
            });
        });

        passwordInput.addEventListener('focus', function() {
            meter.removeAttribute('hidden');
            medidor.removeAttribute('hidden');
        });

        passwordInput.addEventListener('blur', function() {
            meter.setAttribute('hidden', true);
            medidor.setAttribute('hidden', true);
        });
        
        document.getElementById('password').addEventListener('input', function(){
            let meter = document.querySelector('meter');
            let password = document.getElementById('password').value;
            let strength = 0;
            if(password.match(/[a-z]/)){
                strength += 2;
            }
            if(password.match(/[A-Z]/)){
                strength += 2;
            }
            if(password.match(/[0-9]/)){
                strength += 2;
            }
            if(password.length >= 8){
                strength += 2;
            }
            meter.value = strength;
            
            if (strength == 2) {
                medidor.textContent = 'Muy Débil';
            } else if (strength == 4) {
                medidor.textContent = 'Débil';
            } else if (strength == 6) {
                medidor.textContent = 'Fuerte';
            } else if (strength == 8) {
                medidor.textContent = 'Muy Fuerte';
            } else {
                medidor.textContent = '';
            }
        });

        function updateProgress() {
            let filled = 0;
            inputs.forEach(input => {
                if (input.value.length > 0) {
                    filled++;
                }
            });
            progress.value = filled;
        }

        inputs.forEach(input => {
            input.addEventListener('input', updateProgress);
        });

        document.addEventListener('DOMContentLoaded', updateProgress);

        colorFondo.addEventListener('input', function() {
            document.body.style.backgroundColor = colorFondo.value;
        });

        valoracion.addEventListener('input', function() {
            valoracionValue.textContent = valoracion.value;
        });