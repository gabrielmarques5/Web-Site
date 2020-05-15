var ctx = document.getElementById("barChart").getContext('2d');
var myBarChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dec"],
        datasets: [{
            label: "Vendas",
            data: [24, 29, 50, 60, 58, 68, 100, 84, 65, 78, 85, 100],
            borderWidth: 6,
            borderColor: 'rgba(77,166,253,0.85)',
            backgroundColor: 'white',
        }],
    },
    options: {
        title: {
            display: true,
            fontSize: 40,
            text: "Gráfico de Vendas",
            fontColor: '#fff'
        },
    }
});