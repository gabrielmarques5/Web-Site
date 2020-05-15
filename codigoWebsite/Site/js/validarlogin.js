function validar() {
    var email = form1.email.value;
    var senha = form1.password.value;

    if (email == "") {
        alert('Campo email Obrigatório.');
        form1.email.focus();
        return false;

    } else if (senha == "") {
        alert('Campo senha Obrigatório.');
        form1.password.focus();
        return false;

    }  else if (senha.length <= 9) {
        alert('Informe uma senha com no mínimo 10 caracteres.');
        form1.password.focus();
        return false;

    } else if (email.indexOf("@") < 1) {
        alert('Informe um email que contenha no mínimo um "@" e um "." ');
	    form1.email.focus();
	    return false;
  }
}