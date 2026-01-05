 // Revenue Growth Line Chart
 const revenueCtx = document.getElementById('revenueChart').getContext('2d');
 const gradientRevenue = revenueCtx.createLinearGradient(0, 0, 0, 300);
 gradientRevenue.addColorStop(0, '#00bcd4');
 gradientRevenue.addColorStop(1, '#0097a7');

 const revenueChart = new Chart(revenueCtx, {
     type: 'line',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         datasets: [{
             label: 'Revenue Growth (%)',
             data: [10, 12, 15, 18, 20, 22],
             borderColor: gradientRevenue,
             backgroundColor: gradientRevenue,
             fill: true
         }]
     },
     options: {
         responsive: true,
         scales: {
             y: { beginAtZero: true, max: 30 }
         },
         plugins: {
             legend: { position: 'top' }
         }
     }
 });

 // Sales Volume Bar Chart
 const salesVolumeCtx = document.getElementById('salesVolumeChart').getContext('2d');
 const gradientSales = salesVolumeCtx.createLinearGradient(0, 0, 0, 300);
 gradientSales.addColorStop(0, '#00bcd4');
 gradientSales.addColorStop(1, '#0097a7');

 const salesVolumeChart = new Chart(salesVolumeCtx, {
     type: 'bar',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         datasets: [{
             label: 'Sales Volume (Units)',
             data: [400, 450, 500, 550, 600, 650],
             backgroundColor: gradientSales
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

 // Funnel Chart (Custom Implementation)
 const funnelCtx = document.getElementById('funnelChart').getContext('2d');
 const funnelChart = new Chart(funnelCtx, {
     type: 'bar',
     data: {
         labels: ['Leads', 'Qualified', 'Proposal', 'Negotiation', 'Closed'],
         datasets: [{
             label: 'Sales Funnel',
             data: [100, 80, 60, 40, 20],
             backgroundColor: ['#00bcd4', '#0097a7', '#ffc000', '#ff5722', '#4caf50']
         }]
     },
     options: {
         indexAxis: 'y',
         responsive: true,
         scales: {
             x: { beginAtZero: true }
         },
         plugins: {
             legend: { position: 'top' }
         }
     }
 });

 // Scatter Chart (Sales vs Marketing Spend)
 const scatterCtx = document.getElementById('scatterChart').getContext('2d');
 const gradientScatter = scatterCtx.createLinearGradient(0, 0, 0, 300);
 gradientScatter.addColorStop(0, '#00bcd4');
 gradientScatter.addColorStop(1, '#0097a7');

 const scatterChart = new Chart(scatterCtx, {
     type: 'scatter',
     data: {
         datasets: [{
             label: 'Sales vs Marketing Spend',
             data: [
                 { x: 100, y: 200 },
                 { x: 150, y: 250 },
                 { x: 200, y: 300 },
                 { x: 250, y: 350 },
                 { x: 300, y: 400 }
             ],
             backgroundColor: gradientScatter
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

 // Interactive Filter
 const filterDropdown = document.getElementById('filter');

 filterDropdown.addEventListener('change', function () {
     const selectedValue = filterDropdown.value;

     if (selectedValue === 'all') {
         // Reset charts to default data
         revenueChart.data.datasets[0].data = [10, 12, 15, 18, 20, 22];
         salesVolumeChart.data.datasets[0].data = [400, 450, 500, 550, 600, 650];
         funnelChart.data.datasets[0].data = [100, 80, 60, 40, 20];
         scatterChart.data.datasets[0].data = [
             { x: 100, y: 200 },
             { x: 150, y: 250 },
             { x: 200, y: 300 },
             { x: 250, y: 350 },
             { x: 300, y: 340}                ];
     } else if (selectedValue === 'north') {
         // Update charts for North region
         revenueChart.data.datasets[0].data = [12, 14, 16, 19, 21, 23];
         salesVolumeChart.data.datasets[0].data = [420, 470, 520, 570, 620, 670];
         funnelChart.data.datasets[0].data = [120, 90, 70, 50, 30];
         scatterChart.data.datasets[0].data = [
             { x: 110, y: 210 },
             { x: 160, y: 260 },
             { x: 210, y: 310 },
             { x: 260, y: 360 },
             { x: 310, y: 410 }
         ];
     } else if (selectedValue === 'south') {
         // Update charts for South region
         revenueChart.data.datasets[0].data = [8, 10, 13, 16, 18, 20];
         salesVolumeChart.data.datasets[0].data = [380, 430, 480, 530, 580, 630];
         funnelChart.data.datasets[0].data = [90, 70, 50, 30, 10];
         scatterChart.data.datasets[0].data = [
             { x: 90, y: 190 },
             { x: 140, y: 240 },
             { x: 190, y: 290 },
             { x: 240, y: 340 },
             { x: 290, y: 390 }
         ];
     } else if (selectedValue === 'east') {
         // Update charts for East region
         revenueChart.data.datasets[0].data = [11, 13, 15, 17, 19, 21];
         salesVolumeChart.data.datasets[0].data = [410, 460, 510, 560, 610, 660];
         funnelChart.data.datasets[0].data = [110, 85, 65, 45, 25];
         scatterChart.data.datasets[0].data = [
             { x: 105, y: 205 },
             { x: 155, y: 255 },
             { x: 205, y: 305 },
             { x: 255, y: 355 },
             { x: 305, y: 405 }
         ];
     } else if (selectedValue === 'west') {
         // Update charts for West region
         revenueChart.data.datasets[0].data = [9, 11, 14, 17, 19, 21];
         salesVolumeChart.data.datasets[0].data = [390, 440, 490, 540, 590, 640];
         funnelChart.data.datasets[0].data = [100, 80, 60, 40, 20];
         scatterChart.data.datasets[0].data = [
             { x: 95, y: 195 },
             { x: 145, y: 245 },
             { x: 195, y: 295 },
             { x: 245, y: 345 },
             { x: 295, y: 395 }
         ];
     }

     // Update all charts
     revenueChart.update();
     salesVolumeChart.update();
     funnelChart.update();
     scatterChart.update();
 });

 // Export Button Placeholder
 document.getElementById('exportButton').addEventListener('click', function () {
     alert('Data export functionality will be implemented here.');
 });