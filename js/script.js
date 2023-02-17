
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
            lineTension: 0.4,
        },
        {
            label: 'ETH',
            data: [null, null, null, 230, 273, 100, 406, 210, 376, 700, 453, 100].reverse(),
            borderWidth: 3,
            lineTension: 0.4,
        },
        {
            label: 'Doge Coin',
            data: [4, 242, 566, 309, 235, 600, 60, 330, 673, 246, 539, 100].reverse(),
            borderWidth: 3,
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
