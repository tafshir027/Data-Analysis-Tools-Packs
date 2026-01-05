// Sales Growth Line Chart
const salesGrowthCtx = document.getElementById('salesGrowthChart').getContext('2d');
const salesGrowthChart = new Chart(salesGrowthCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales Growth (%)',
            data: [10, 15, 20, 25, 30, 35],
            borderColor: '#32cd32',
            backgroundColor: 'rgba(50, 205, 50, 0.2)',
            fill: true
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: false }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Devices Sold Clustered Column Chart
const devicesSoldCtx = document.getElementById('devicesSoldChart').getContext('2d');
const devicesSoldChart = new Chart(devicesSoldCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Smartphones',
                data: [100, 120, 130, 140, 150, 160],
                backgroundColor: '#32cd32'
            },
            {
                label: 'Tablets',
                data: [80, 90, 100, 110, 120, 130],
                backgroundColor: '#98fb98'
            },
            {
                label: 'Accessories',
                data: [60, 70, 80, 90, 100, 110],
                backgroundColor: '#e6ffe6'
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: { stacked: false },
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Customer Satisfaction Rate Donut Chart
const satisfactionRateCtx = document.getElementById('satisfactionRateChart').getContext('2d');
const satisfactionRateChart = new Chart(satisfactionRateCtx, {
    type: 'doughnut',
    data: {
        labels: ['Satisfied', 'Unsatisfied'],
        datasets: [{
            data: [90, 10],
            backgroundColor: ['#32cd32', '#e6ffe6']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Revenue by Product Category Pie Chart
const revenueByCategoryCtx = document.getElementById('revenueByCategoryChart').getContext('2d');
const revenueByCategoryChart = new Chart(revenueByCategoryCtx, {
    type: 'pie',
    data: {
        labels: ['Smartphones', 'Tablets', 'Accessories', 'Repair Services'],
        datasets: [{
            data: [50, 30, 15, 5],
            backgroundColor: ['#32cd32', '#98fb98', '#c1ffc1', '#e6ffe6']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// New vs Returning Customers Bar Chart
const customerTypeCtx = document.getElementById('customerTypeChart').getContext('2d');
const customerTypeChart = new Chart(customerTypeCtx, {
    type: 'bar',
    data: {
        labels: ['New Customers', 'Returning Customers'],
        datasets: [{
            label: 'Number of Customers',
            data: [300, 200],
            backgroundColor: ['#32cd32', '#98fb98']
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

// Average Order Value Bubble Chart
const avgOrderValueCtx = document.getElementById('avgOrderValueChart').getContext('2d');
const avgOrderValueChart = new Chart(avgOrderValueCtx, {
    type: 'bubble',
    data: {
        datasets: [{
            label: 'Average Order Value',
            data: [
                { x: 10, y: 200, r: 15 },
                { x: 20, y: 220, r: 20 },
                { x: 30, y: 240, r: 25 },
                { x: 40, y: 260, r: 30 }
            ],
            backgroundColor: ['#32cd32', '#98fb98', '#c1ffc1', '#e6ffe6']
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});