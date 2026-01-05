// Revenue Trend Line Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Revenue ($)',
            data: [5000, 7000, 6000, 8000, 9000],
            borderColor: '#FFD700', // Gold Accent
            backgroundColor: '#ffd700', // Transparent Gold
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
            backgroundColor: ['#FFD700', '#2A2A2A', '#1E1E1E', '#333333'],borderColor: 'transparent', // No Border
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
            backgroundColor: '#FFD700', // Gold Accent
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
            backgroundColor: ['#FFD700', '#2A2A2A', '#1E1E1E'],
            
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
            borderColor: '#FFD700', // Gold Accent
            backgroundColor: 'rgba(255, 215, 0, 0.2)', // Transparent Gold
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
            backgroundColor: '#FFD700', // Gold Accent
        }]
    },
});