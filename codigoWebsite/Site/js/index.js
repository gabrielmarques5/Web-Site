$('#meuModal').on('shown.bs.modal', function() {
    $('#meuInput').trigger('focus')
})

function carrinho() {
    window.location.href = "carrinho.html"
}