
const ctx = document.getElementById('myChart');

let labels = [];
for (let i = 5; i < 17; i++) {
    labels.push(i + 'nov');
}

let ylabels = {};
for (let i = 1; i < 8; i++) {
    ylabels[i * 100] = i * 100 + "$";
}

new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: [{
            label: 'BTC',
            data: [150, 600, 256, 230, 273, 100, 406, 210, 376, 700, 453, 100],
            borderWidth: 3,
            borderColor: '#592795',
            lineTension: 0.4,
        },
        {
            label: 'ETH',
            data: [null, null, null, null, 273, 100, 406, 210, 376, 700, 453, 100].reverse(),
            borderWidth: 3,
            lineTension: 0.4,
            borderColor: '#4D91A5',
        },
        {
            label: 'Doge Coin',
            data: [null, null, null, null, 235, 600, 60, 330, 673, 246, 539, 100],
            borderWidth: 3,
            borderColor: '#1970D6',
            lineTension: 0.4,
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white',
                    callback: function (value, index) {
                        console.log(value, ylabels[value]);
                        return ylabels[value];
                    }
                },
            },
            x: {
                ticks: {
                    color: 'white',
                }
            }
        }
    }
});


document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger').classList.toggle('active');
    document.querySelector('.section-left').classList.toggle('active');
    document.querySelector('body').classList.toggle('active');
});