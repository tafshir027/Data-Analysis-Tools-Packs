// Internal JavaScript for Charts
        // Bar Chart
        const barChart = new Chart(document.getElementById('barChart'), {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Product Quality Score',
                    data: [85, 90, 88, 92],
                    backgroundColor: 'rgba(52, 152, 219, 0.8)',
                    borderColor: 'rgba(52, 152, 219, 1)',
                    borderWidth: 1
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

        // Line Chart
        const lineChart = new Chart(document.getElementById('lineChart'), {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                datasets: [{
                    label: 'Prototype Success Rate',
                    data: [70, 75, 80, 85, 90],
                    borderColor: 'rgba(231, 76, 60, 0.8)',
                    borderWidth: 2,
                    fill: false
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

        // Pie Chart
        const pieChart = new Chart(document.getElementById('pieChart'), {
            type: 'pie',
            data: {
                labels: ['Positive', 'Neutral', 'Negative'],
                datasets: [{
                    data: [60, 30, 10],
                    backgroundColor: ['#6bc4ff', '#4088b8', '#21628d'],
                    borderColor: 'transparent', // No Border
                    hoverBorderColor: 'transparent',
                }]
            }
        });

        // Donut Chart
        const donutChart = new Chart(document.getElementById('donutChart'), {
            type: 'doughnut',
            data: {
                labels: ['Competitor A', 'Competitor B', 'Our Product'],
                datasets: [{
                    data: [30, 25, 45],
                    backgroundColor: ['#6bc4ff', '#4088b8', '#21628d'],
                     borderColor: 'transparent', // No Border
                    hoverBorderColor: 'transparent',
                }]
            }
        });