// Revenue Trend Line Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Revenue ($)',
            data: [5000, 7000, 6000, 8000, 9000],
            borderColor: '#700caa', // Gold Accent
            backgroundColor: 'rgba(68, 10, 102,0.3)', // Transparent Gold
            fill: true,
        }]
    },
});

// Expense Breakdown Pie Chart
const expenseCtx = document.getElementById('expenseChart').getContext('2d');
new Chart(expenseCtx, {
    type: 'pie',
    data: {
        labels: ['Marketing', 'Operations', 'Salaries', 'Taxes'],
        datasets: [{
            data: [30, 25, 35, 10],
            backgroundColor: ['rgb(68, 10, 102)', 'rgb(88, 13, 131)', 'rgb(111, 18, 165)', 'rgb(136, 23, 201)'],borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent', // No Hover Border // Simplified Colors
        }]
    },
});

// Profit Growth Bar Chart
const profitCtx = document.getElementById('profitChart').getContext('2d');
new Chart(profitCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Profit ($)',
            data: [3000, 4000, 3500, 5000, 6000],
            backgroundColor: 'rgb(68, 10, 102)', // Gold Accent
        }]
    },
});

// Investment Returns Donut Chart
const investmentCtx = document.getElementById('investmentChart').getContext('2d');
new Chart(investmentCtx, {
    type: 'doughnut',
    data: {
        labels: ['Stocks', 'Bonds', 'Real Estate'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['rgba(111, 18, 165,0.5)', 'rgb(88, 13, 131)', 'rgb(68, 10, 102)'],
            
            borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent', // No Hover Border
            // Simplified Colors
        }]
    },
});

// Cash Flow Analysis Line Chart
const cashFlowCtx = document.getElementById('cashFlowChart').getContext('2d');
new Chart(cashFlowCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Cash Flow ($)',
            data: [15000, 14000, 16000, 17000, 18000],
            borderColor: 'rgba(68, 10, 102,1)', // Gold Accent
            backgroundColor: 'rgba(68, 10, 102,0.3)', // Transparent Gold
            fill: true,
        }]
    },
});

// Risk Assessment Bar Chart
const riskCtx = document.getElementById('riskChart').getContext('2d');
new Chart(riskCtx, {
    type: 'bar',
    data: {
        labels: ['Low', 'Medium', 'High'],
        datasets: [{
            label: 'Risk Level (%)',
            data: [60, 30, 10],
            backgroundColor: 'rgba(68, 10, 102,1)', // Gold Accent
        }]
    },
});