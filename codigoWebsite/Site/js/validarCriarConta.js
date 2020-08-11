function cadastrar() {
    var email = form1.email.value;
    var senha = form1.password.value;
    var name = form1.fullName.value;
    var nascimento = form1.birth.value;
    var cep = form1.cep.value;
    var número = form1.numberandlength.value;
    var cpf = form1.cpf.value;
    var celular = form1.cellphone.value;
    var endereço = form1.address.value;
    var cidade = form1.city.value;
    var confirmarsenha = form1.confirmpassowrd.value;

    if (email == "") {
        alert('Todos os campos são Obrigatórios.');
        form1.email.focus();
        return false;

    } else if (senha == "") {
        alert('Campo senha Obrigatório.');
        form1.password.focus();
        return false;

    }  else if (senha.length <= 9) {
        alert('Informe uma senha com no mínimo 10 Caracteres.');
        form1.password.focus();
        return false;

    } else if (email.indexOf("@") < 1) {
       alert('Informe um email que contenha no mínimo um "@" e um "." ');
	   form1.email.focus();
       return false;
    
    } else if (name == "") {
       alert('Campo nome completo Obrigatório.');
       form1.fullName.focus();
       return false;

    } else if (nascimento == "") {
       alert('Campo nascimento Obrigatório.');
       form1.birth.focus();
       return false;

    } else if (cep == "") {
       alert('Campo CEP Obrigatório.');
       form1.cep.focus();
       return false;

    } else if (cep.length <= 7) {
       alert('Informe um CEP válido.');
       form1.cep.focus();
       return false;

    } else if (número == "") {
        alert('Campo número e complemento Obrigatório.');
        form1.numberandlength.focus();
        return false;

    } else if (cpf == "") {
        alert('Campo CPF Obrigatório.');
        form1.cpf.focus();
        return false;
 
    } else if (cpf.length <= 10) {
        alert('Informe um CPF válido.');
        form1.cpf.focus();
        return false;
 
    } else if (celular == "") {
        alert('Campo celular Obrigatório.');
        form1.cellphone.focus();
        return false;
 
    } else if (celular.length <= 10) {
        alert('Informe um número de celular com DDD válido.');
        form1.cellphone.focus();
        return false;
 
    } else if (endereço == "") {
        alert('Campo endereço Obrigatório.');
        form1.address.focus();
        return false;
 
    } else if (cidade == "") {
        alert('Campo cidade Obrigatório.');
        form1.city.focus();
        return false;
    
    } else if (confirmarsenha == "") {
        alert('Campo confirmar senha Obrigatório.');
        form1.confirmpassowrd.focus();
        return false;
     
    } if (senha != confirmarsenha) {
        alert('Senhas diferentes!');
        form1.password.focus();
        form1.confirmpassowrd.focus();
        return false;
    
    } else {

        return true
    }

 

}

  


