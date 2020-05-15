function registerClient(event, form) {
    event.preventDefault();
    const fullName = this.fullName.value;
    const email = this.email.value;
    const birth = this.birth.value;
    const cep = this.cep.value;
    const numberandlength = this.numberandlength.value;
    const password = this.password.value;
    const cpf = this.cpf.value;
    const cellphone = this.cellphone.value;
    const address = this.address.value;
    const city = this.city.value;
    const confirmpassowrd = this.confirmpassowrd.value;

    fetch("http://localhost:3001/api/clients", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullName: fullName,
            email: email,
            birth: birth,
            cep: cep,
            numberandlength: numberandlength,
            password: password,
            cpf: cpf,
            cellphone: cellphone,
            address: address,
            city: city,
            confirmpassowrd: confirmpassowrd

        })
    }).then(function (responsive) {
        console.log(responsive)
    }).catch(function (err) {
        console.log(err)
    })
}