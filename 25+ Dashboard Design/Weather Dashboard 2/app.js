 // Temperature Trend Line Chart
 const temperatureCtx = document.getElementById('temperatureChart').getContext('2d');
 const temperatureChart = new Chart(temperatureCtx, {
     type: 'line',
     data: {
         labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
         datasets: [{
             label: 'Temperature (°C)',
             data: [22, 24, 26, 28, 25, 23],
             borderColor: '#ff6f61',
             backgroundColor: 'rgba(255, 111, 97, 0.2)',
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

 // Precipitation Forecast Bar Chart
 const precipitationCtx = document.getElementById('precipitationChart').getContext('2d');
 const precipitationChart = new Chart(precipitationCtx, {
     type: 'bar',
     data: {
         labels: ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5'],
         datasets: [{
             label: 'Precipitation (mm)',
             data: [5, 10, 15, 8, 12],
             backgroundColor: '#ff6f61'
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

 // Wind Speed Donut Chart
 const windSpeedCtx = document.getElementById('windSpeedChart').getContext('2d');
 const windSpeedChart = new Chart(windSpeedCtx, {
     type: 'doughnut',
     data: {
         labels: ['Low', 'Medium', 'High'],
         datasets: [{
             data: [40, 35, 25],
             backgroundColor: ['#ff6f61', '#ffc0cb', '#ffe6e6']
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: { position: 'top' }
         }
     }
 });

 // Air Quality Pie Chart
 const airQualityCtx = document.getElementById('airQualityChart').getContext('2d');
 const airQualityChart = new Chart(airQualityCtx, {
     type: 'pie',
     data: {
         labels: ['Good', 'Moderate', 'Unhealthy'],
         datasets: [{
             data: [60, 30, 10],
             backgroundColor: ['#ff6f61', '#ffc0cb', '#ffe6e6']
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: { position: 'top' }
         }
     }
 });

 // Visibility Line Chart
 const visibilityCtx = document.getElementById('visibilityChart').getContext('2d');
 const visibilityChart = new Chart(visibilityCtx, {
     type: 'line',
     data: {
         labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
         datasets: [{
             label: 'Visibility (km)',
             data: [10, 12, 15, 18, 15, 10],
             borderColor: '#ff6f61',
             backgroundColor: 'rgba(255, 111, 97, 0.2)',
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

 // Humidity Bar Chart
 const humidityCtx = document.getElementById('humidityChart').getContext('2d');
 const humidityChart = new Chart(humidityCtx, {
     type: 'bar',
     data: {
         labels: ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5'],
         datasets: [{
             label: 'Humidity (%)',
             data: [60, 65, 70, 75, 80],
             backgroundColor: '#ff6f61'
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

 // UV Index Bar Chart
 const uvIndexCtx = document.getElementById('uvIndexChart').getContext('2d');
 const uvIndexChart = new Chart(uvIndexCtx, {
     type: 'bar',
     data: {
         labels: ['Today', 'Tomorrow', 'Day 3', 'Day 4', 'Day 5'],
         datasets: [{
             label: 'UV Index',
             data: [5, 6, 7, 8, 9],
             backgroundColor: '#ff6f61'
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

 // Interactive Filter
 const filterDropdown = document.getElementById('filter');

 filterDropdown.addEventListener('change', function () {
     const selectedValue = filterDropdown.value;

     if (selectedValue === 'all') {
         // Reset charts to default data
         temperatureChart.data.datasets[0].data = [22, 24, 26, 28, 25, 23];
         precipitationChart.data.datasets[0].data = [5, 10, 15, 8, 12];
         windSpeedChart.data.datasets[0].data = [40, 35, 25];
         airQualityChart.data.datasets[0].data = [60, 30, 10];
         visibilityChart.data.datasets[0].data = [10, 12, 15, 18, 15, 10];
         humidityChart.data.datasets[0].data = [60, 65, 70, 75, 80];
         uvIndexChart.data.datasets[0].data = [5, 6, 7, 8, 9];
     } else if (selectedValue === 'dhaka') {
         // Update charts for Dhaka
         temperatureChart.data.datasets[0].data = [24, 26, 28, 30, 27, 25];
         precipitationChart.data.datasets[0].data = [8, 12, 18, 10, 15];
         windSpeedChart.data.datasets[0].data = [30, 40, 30];
         airQualityChart.data.datasets[0].data = [50, 35, 15];
         visibilityChart.data.datasets[0].data = [8, 10, 12, 14, 10, 8];
         humidityChart.data.datasets[0].data = [65, 70, 75, 80, 85];
         uvIndexChart.data.datasets[0].data = [6, 7, 8, 9, 10];
     } else if (selectedValue === 'chittagong') {
         // Update charts for Chittagong
         temperatureChart.data.datasets[0].data = [23, 25, 27, 29, 26, 24];
         precipitationChart.data.datasets[0].data = [10, 15, 20, 12, 18];
         windSpeedChart.data.datasets[0].data = [35, 45, 20];
         airQualityChart.data.datasets[0].data = [55, 30, 15];
         visibilityChart.data.datasets[0].data = [9, 11, 13, 15, 12, 9];
         humidityChart.data.datasets[0].data = [60, 65, 70, 75, 80];
         uvIndexChart.data.datasets[0].data = [5, 6, 7, 8, 9];
     } else if (selectedValue === 'sylhet') {
         // Update charts for Sylhet
         temperatureChart.data.datasets[0].data = [21, 23, 25, 27, 24, 22];
         precipitationChart.data.datasets[0].data = [15, 20, 25, 18, 22];
         windSpeedChart.data.datasets[0].data = [25, 50, 25];
         airQualityChart.data.datasets[0].data = [45, 40, 15];
         visibilityChart.data.datasets[0].data = [7, 9, 11, 13, 10, 7];
         humidityChart.data.datasets[0].data = [70, 75, 80, 85, 90];
         uvIndexChart.data.datasets[0].data = [4, 5, 6, 7, 8];
     } else if (selectedValue === 'khulna') {
         // Update charts for Khulna
         temperatureChart.data.datasets[0].data = [25, 27, 29, 31, 28, 26];
         precipitationChart.data.datasets[0].data = [6, 10, 14, 8, 12];
         windSpeedChart.data.datasets[0].data = [45, 30, 25];
         airQualityChart.data.datasets[0].data = [65, 25, 10];
         visibilityChart.data.datasets[0].data = [12, 14, 16, 18, 15, 12];
         humidityChart.data.datasets[0].data = [55, 60, 65, 70, 75];
         uvIndexChart.data.datasets[0].data = [7, 8, 9, 10, 11];
     }

     // Update all charts
     temperatureChart.update();
     precipitationChart.update();
     windSpeedChart.update();
     airQualityChart.update();
     visibilityChart.update();
     humidityChart.update();
     uvIndexChart.update();
 });