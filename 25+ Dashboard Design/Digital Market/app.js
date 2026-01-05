// Website Traffic Line Chart
const trafficCtx = document.getElementById('trafficChart').getContext('2d');
const trafficChart = new Chart(trafficCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Website Traffic',
            data: [50000, 55000, 60000, 65000, 70000, 75000],
            borderColor: '#0078d4',
            backgroundColor: 'rgba(0, 120, 212, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Conversion Rate Pie Chart
const conversionCtx = document.getElementById('conversionChart').getContext('2d');
const conversionChart = new Chart(conversionCtx, {
    type: 'pie',
    data: {
        labels: ['Converted', 'Not Converted'],
        datasets: [{
            data: [5, 95],
            backgroundColor: ['#0078d4', '#ffc000']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Ad Spend vs Revenue Bar Chart
const adSpendCtx = document.getElementById('adSpendChart').getContext('2d');
const adSpendChart = new Chart(adSpendCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Ad Spend ($)',
                data: [5000, 6000, 7000, 8000, 9000, 10000],
                backgroundColor: '#0078d4'
            },
            {
                label: 'Revenue ($)',
                data: [15000, 18000, 21000, 24000, 27000, 30000],
                backgroundColor: '#ffc000'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Social Media Engagement Donut Chart
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(engagementCtx, {
    type: 'doughnut',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter', 'LinkedIn'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#0078d4', '#ffc000', '#a8a8a8', '#ff5722']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Slider Functionality
const websiteTraffic = document.getElementById('websiteTraffic');
const conversionRate = document.getElementById('conversionRate');
const cpc = document.getElementById('cpc');
const cpa = document.getElementById('cpa');
const ctr = document.getElementById('ctr');
const bounceRate = document.getElementById('bounceRate');

const dataSlider = document.getElementById('dataSlider');

dataSlider.addEventListener('input', function () {
    const sliderValue = parseInt(dataSlider.value);

    // Update KPIs
    websiteTraffic.textContent = `${50000 + sliderValue * 500}`;
    conversionRate.textContent = `${sliderValue / 10}%`;
    cpc.textContent = `$${1.25 + sliderValue / 100}`;
    cpa.textContent = `$${25 + sliderValue}`;
    ctr.textContent = `${2.5 + sliderValue / 10}%`;
    bounceRate.textContent = `${40 - sliderValue / 2}%`;

    // Update Website Traffic Line Chart
    trafficChart.data.datasets[0].data = [
        50000 + sliderValue * 500,
        55000 + sliderValue * 500,
        60000 + sliderValue * 500,
        65000 + sliderValue * 500,
        70000 + sliderValue * 500,
        75000 + sliderValue * 500
    ];
    trafficChart.update();

    // Update Conversion Rate Pie Chart
    conversionChart.data.datasets[0].data = [sliderValue, 100 - sliderValue];
    conversionChart.update();

    // Update Ad Spend vs Revenue Bar Chart
    adSpendChart.data.datasets[0].data = [
        5000 + sliderValue * 100,
        6000 + sliderValue * 100,
        7000 + sliderValue * 100,
        8000 + sliderValue * 100,
        9000 + sliderValue * 100,
        10000 + sliderValue * 100
    ];
    adSpendChart.data.datasets[1].data = [
        15000 + sliderValue * 300,
        18000 + sliderValue * 300,
        21000 + sliderValue * 300,
        24000 + sliderValue * 300,
        27000 + sliderValue * 300,
        30000 + sliderValue * 300
    ];
    adSpendChart.update();

    // Update Social Media Engagement Donut Chart
    engagementChart.data.datasets[0].data = [
        40 + sliderValue / 2,
        30 + sliderValue / 2,
        20 - sliderValue / 2,
        10 - sliderValue / 2
    ];
    engagementChart.update();
});

// Export Button Placeholder
document.getElementById('exportButton').addEventListener('click', function () {
    alert('Data export functionality will be implemented here.');
});