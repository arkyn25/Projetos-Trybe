const btnEntrar = document.getElementById('button-login');
const personalizado = document.getElementById('Personalizado');
const labelGender = document.getElementById('generos');
const genderCustom = document.createElement('input');
const inputForm = document.querySelectorAll('#form input');
const form = document.getElementById('form');
const para = document.getElementById('para');
const btnCadastrar = document.getElementById('facebook-register');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const nascimento = document.getElementById('birthdate');

const createGenderCustom = () => {
  labelGender.appendChild(genderCustom);
  genderCustom.name = 'gender-custom';
  genderCustom.placeholder = 'Gênero (opcional)';
};

const campoInvalido = () => {
  for (let i = 0; i < inputForm.length; i += 1) {
    if (inputForm[i].value === '') {
      para.innerText = 'Campos inválidos';
      return false;
    }
  }
  return true;
};
const novoForm = () => {
  form.innerText = `Olá, ${nome.value}
seu email: ${email.value}
Sua data de nascimeto: ${nascimento.value}
seu genero: ${labelGender.value}`;
};
const alerta = () => {
  alert(`${document.getElementById('user-email-phone').value}`);
};

btnCadastrar.addEventListener('click', (event) => {
  if (campoInvalido()) {
    novoForm();
  }
  event.preventDefault();
});
btnEntrar.addEventListener('click', alerta);
personalizado.addEventListener('click', createGenderCustom);
