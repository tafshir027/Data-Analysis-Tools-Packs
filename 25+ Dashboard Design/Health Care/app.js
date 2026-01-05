// Patient Satisfaction Pie Chart
        const patientSatisfactionCtx = document.getElementById('patientSatisfactionChart').getContext('2d');
        new Chart(patientSatisfactionCtx, {
            type: 'pie',
            data: {
                labels: ['Satisfied', 'Neutral', 'Unsatisfied'],
                datasets: [{
                    data: [85, 10, 5],
                    backgroundColor: ['#0078d4', '#ffc000', '#a8a8a8']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });

        // Bed Occupancy Donut Chart
        const bedOccupancyCtx = document.getElementById('bedOccupancyChart').getContext('2d');
        new Chart(bedOccupancyCtx, {
            type: 'doughnut',
            data: {
                labels: ['Occupied', 'Vacant'],
                datasets: [{
                    data: [78, 22],
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

        // Treatment Success Rate Line Chart
        const treatmentSuccessCtx = document.getElementById('treatmentSuccessChart').getContext('2d');
        new Chart(treatmentSuccessCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Success Rate (%)',
                    data: [80, 85, 90, 88, 92, 95],
                    borderColor: '#0078d4',
                    backgroundColor: 'rgba(0, 120, 212, 0.2)',
                    fill: true
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                },
                plugins: {
                    legend: { position: 'top' }
                }
            }
        });

        // Staff Performance Radar Chart
        const staffPerformanceCtx = document.getElementById('staffPerformanceChart').getContext('2d');
        new Chart(staffPerformanceCtx, {
            type: 'radar',
            data: {
                labels: ['Doctors', 'Nurses', 'Admin Staff', 'Support Staff'],
                datasets: [{
                    label: 'Performance Score',
                    data: [85, 90, 75, 80],
                    backgroundColor: 'rgba(0, 120, 212, 0.2)',
                    borderColor: '#0078d4',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'top' }
                },
                scale: {
                    ticks: { beginAtZero: true, max: 100 }
                }
            }
        });

        // Export Button (Placeholder)
        document.getElementById('exportButton').addEventListener('click', function () {
            alert('Data export functionality will be implemented here.');
        });