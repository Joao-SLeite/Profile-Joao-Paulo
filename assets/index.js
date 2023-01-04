const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.nav-menu');

const tooltipEmail = document.querySelector('.tooltipEmail');
const inputs = document.querySelectorAll('.input-item');
const btnSendEmail = document.getElementById('btn-send');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) =>
    n.addEventListener('click', () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    })
);

function inputValidation(inp) {
    if (inp.value === '') {
        inp.style.borderColor = '#ff0000';
        tooltipEmail.classList.remove('active');
        inp.focus();
        return false;
    } else if (inp.type === 'email') {
        const regexEmail = new RegExp(
            /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum|br|io)\b/
        );
        if (!regexEmail.test(inp.value)) {
            inp.style.borderColor = '#ff0000';
            inp.focus();
            tooltipEmail.classList.add('active');
            return false;
        } else {
            inp.style.borderColor = '#384459';
            tooltipEmail.classList.remove('active');
            return true;
        }
    } else {
        inp.style.borderColor = '#384459';
        return true;
    }
}
inputs.forEach((inp) =>
    inp.addEventListener('input', () => {
        inputValidation(inp);
    })
);

btnSendEmail.addEventListener('click', (evt) => {
    evt.preventDefault();
    let error = false;
    inputs.forEach(function (inp) {
        if (!inputValidation(inp)) {
            error = true;
        }
    });
    if (error) {
        alert('Todos os campos devem ser preenchidos corretamente!!!');
    } else {
        var params = {
            from_name: document.getElementById('name').value,
            email_id: document.getElementById('email').value,
            message: document.getElementById('message').value,
        };
        emailjs
            .send('service_pv4e57e', 'template_sre4ym8', params)
            .then(function () {
                alert('Obrigado Pelo contato!!! E-mail enviado com Sucesso!!!');
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('message').value = '';
            });
    }
});
