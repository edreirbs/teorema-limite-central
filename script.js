function validar() {
    // Obtener respuestas
    var pregunta1 = document.getElementById('pregunta1').value;
    var pregunta2 = document.getElementById('pregunta2').value;
    // Lógica de validación
    if (pregunta1 === 'si' && pregunta2 === 'si') {
        document.getElementById('resultado_validacion').innerText = "El TLC es aplicable a su investigación.";
    } else {
        document.getElementById('resultado_validacion').innerText = "El TLC no es aplicable a su investigación.";
    }
}

// Crear un gráfico básico con Chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: Array.from({length: 100}, (_, i) => i + 1),
        datasets: [{
            label: 'Distribución de la Muestra',
            data: Array.from({length: 100}, (_, i) => Math.exp(-Math.pow(i-50,2)/200)),
            fill: true,
            borderColor: 'rgba(75, 192, 192, 1)',
            tension: 0.1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

function calcular() {
    // Obtener valores
    var media_muestral = parseInt(document.getElementById('media_muestral').value);
    // Actualizar output
    document.getElementById('valor_media_muestral').innerText = media_muestral;
    // Generar datos simulados de la distribución normal utilizando la media muestral
    myChart.data.datasets[0].data = Array.from({length: 100}, (_, i) => 
        (1 / (Math.sqrt(2 * Math.PI) * (100 / media_muestral))) * 
        Math.exp(-Math.pow(i-50,2)/(2 * Math.pow((100 / media_muestral),2)))
    );
    myChart.update();
}
