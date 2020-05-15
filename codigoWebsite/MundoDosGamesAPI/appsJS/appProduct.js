function registerProduct(event, form) {
    event.preventDefault();
    const title = this.title.value;
    const description = this.description.value;
    const launch = this.launch.value;
    const developer = this.developer.value;
    const distributor = this.distributor.value;
    const category = this.category.value;
    const gameMode = this.gameMode.value;
    const consoles = this.consoles.value;
    const price = this.price.value;
    const amount = this.amount.value;
    const sku = this.sku.value;

    fetch("http://localhost:3001/api/products", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: title,
            description: description,
            launch: launch,
            developer: developer,
            distributor: distributor,
            category: category,
            gameMode: gameMode,
            consoles: consoles,
            price: price,
            amount: amount,
            sku: sku
        })
    }).then(function (responsive) {
        console.log(responsive)
    }).catch(function (err) {
        console.log(err)
    })
}

function getProducts() {
    fetch("http://localhost:3001/api/products", {
        method: "GET",
    }).then(function (response) {
        return response.json()
    }).then(function (data) {
        recreateContentTable()

        const allProducts = data.docs
        for (const index in allProducts) {
            const { _id, title, launch, developer, distributor, category, gameMode, consoles, price, amount, sku } = allProducts[index]

            showProducts({title, launch, developer, distributor, category, gameMode, consoles, price, amount, sku}, _id)
        }
    }).catch(function (err) {
        console.log(err)
    })
}

function showProducts(product, id) {
    var tbody = document.getElementById('nossosProdutos')

    var tr = document.createElement('tr')

    for (const prop in product) {
        var td = document.createElement('td');

        td.appendChild(document.createTextNode(product[prop]));

        tr.appendChild(td)
    }

    createButtonUpdate(tr, id)
    createButtonRemove(tr, id)
    tbody.appendChild(tr)
}

function createButtonUpdate(tr, id) {
    var buttonUpdate = document.createElement('button')

    buttonUpdate.innerHTML = 'Atualizar'

    buttonUpdate.className = "btn btn-info"

    buttonUpdate.addEventListener('click', function () {
        const atualizar = confirm("Você deseja atualizar esse produto?")

        if (atualizar) {
            updateProduct(id)
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonUpdate);
    tr.appendChild(td)
}

function createButtonRemove(tr, id) {
    var buttonRemove = document.createElement('button')

    buttonRemove.innerHTML = 'Remover'

    buttonRemove.className = "btn btn-danger"
    
    buttonRemove.addEventListener('click', function () {
        const remover = confirm("Você deseja remover o produto?")

        if (remover) {
            deleteProduct(id)
        }
    })

    var td = document.createElement('td');
    td.appendChild(buttonRemove);
    tr.appendChild(td)
}

function deleteProduct(id) {
    console.log(id)
}

function updateProduct(id) {
    console.log(id)
}

function recreateContentTable() {
    var element = document.getElementById('nossosProdutos');

    element.innerHTML = '';
}