 // Email Open Rate Trend Chart
 const emailOpenRateChart = new Chart(document.getElementById('emailOpenRateChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Email Open Rate',
            data: [20, 25, 30, 35, 40, 45],
            borderColor: '#680747',
            backgroundColor: 'rgba(104, 7, 71,0.5)',
            fill: true
        }]
    },
    options: { responsive: true }
});

// Click-Through Rate (CTR) Chart
const ctrChart = new Chart(document.getElementById('ctrChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Click-Through Rate (CTR)',
            data: [10, 12, 15, 18, 20, 22],
            backgroundColor: 'rgb(104, 7, 71)'
        }]
    },
    options: { responsive: true }
});

// Lead Conversion Time Chart
const leadConversionTimeChart = new Chart(document.getElementById('leadConversionTimeChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Lead Conversion Time (Days)',
            data: [7, 6, 5, 4, 3, 2],
            borderColor: 'rgb(104, 7, 71)',
            backgroundColor: 'rgba(104, 7, 71, 0.5)',
            fill: true
        }]
    },
    options: { responsive: true }
});

// Abandoned Cart Recovery Rate Chart
const abandonedCartRecoveryChart = new Chart(document.getElementById('abandonedCartRecoveryChart'), {
    type: 'pie',
    data: {
        labels: ['Recovered', 'Lost'],
        datasets: [{
            data: [40, 60],
            backgroundColor: ['rgb(219, 100, 180)', '#680747']
        }]
    },
    options: { responsive: true }
});


// Cost per Email Sent Chart
const costPerEmailChart = new Chart(document.getElementById('costPerEmailChart'), {
type: 'bar',
data: {
labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months as Labels
datasets: [{
    label: 'Cost per Email Sent ($)',
    data: [0.05, 0.04, 0.03, 0.02, 0.01, 0.01], // Example Data
    backgroundColor: '#680747', // Professional Blue
    borderColor: '#512B81',
    borderWidth: 0
}]
},
options: {
responsive: true,
plugins: {
    legend: {
        labels: {
            color: '#333', // Dark Legend Labels
            font: {
                size: 14,
                family: 'Poppins'
            }
        }
    }
},
scales: {
    x: {
        grid: {
            color: '#E0E0E0', // Subtle Grid
            borderColor: '#512B81' // Blue Border
        },
        ticks: {
            color: '#333' // Dark Tick Labels
        }
    },
    y: {
        grid: {
            color: '#E0E0E0', // Subtle Grid
            borderColor: '#512B81' // Blue Border
        },
        ticks: {
            color: '#333' // Dark Tick Labels
        }
    }
}
}
});