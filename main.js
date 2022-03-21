//elementos do formulario
let btnEnviar = document.querySelector(".btn-enviar");
let nome = document.querySelector("#name");
let email = document.querySelector("#email");
let senha = document.querySelector("#senha");
let confirmarSenha = document.querySelector("#repetir-senha");

//funcao que aciona a verificação do formulario ao clicar no botão enviar
btnEnviar.addEventListener("click", function(e){
    e.preventDefault();
    checkInput();
});

//funcao que checa os campos do formulário
function checkInput(){
    if(nome.value === ''){
        errorMessage(nome, 'Esse campo é obrigatório');
    } 
    else{
        successMessage(nome);
    }

    if(email.value === ''){
        errorMessage(email, 'Esse campo é obrigatório');
    }  
    else if(!checkEmail(email.value)){
        errorMessage(email, 'Insira um e-mail válido');
    }
    else{
        successMessage(email);
    }

    if(senha.value === ''){
        errorMessage(senha, 'Esse campo é obrigatório');
    } else if(senha.value.length < 7){
        errorMessage(senha, 'Insira uma senha maior que 7 caracteres');
    }
    else{
        successMessage(senha);
    }

    if(confirmarSenha.value === ''){
        errorMessage(confirmarSenha, 'Esse campo é obrigatório');
    } else if(confirmarSenha.value.length < 7){
        errorMessage(confirmarSenha, 'Insira uma senha maior que 7 caracteres');
    }
    else if(senha.value != confirmarSenha.value){
        errorMessage(confirmarSenha, 'As senhas não conferem');
    }
    else{
        successMessage(confirmarSenha);
    }

    const formControls = document.querySelectorAll(".form-control");
    const formIsValid = [ ... formControls].every((e)=>{
        return (e.className === 'form-control success');
    });

    if(formIsValid){
        let msg = document.querySelector(".msg-sucesso");
        msg.style.display = 'block';

        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    }
}

//funcao que insere uma mensagem de erro abaixo do input
function errorMessage(input, message){
    const controlForm = input.parentNode;
    const msg = controlForm.querySelector('.message');
    msg.textContent = message;
    controlForm.classList.add("error");
}

//funcao que insere mensagem de sucesso abaixo do campo input
function successMessage(input){
    const controlForm = input.parentNode;
    controlForm.classList.add('success');
    controlForm.classList.remove('error')
}

//funcao que checa o padrão de e-mail
function checkEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}