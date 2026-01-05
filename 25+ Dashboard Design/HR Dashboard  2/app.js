 // Employee Growth Line Chart
 const employeeGrowthCtx = document.getElementById('employeeGrowthChart').getContext('2d');
 const employeeGrowthChart = new Chart(employeeGrowthCtx, {
     type: 'line',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         datasets: [{
             label: 'Employee Growth (%)',
             data: [5, 7, 9, 10, 12, 15],
             borderColor: '#8a2be2',
             backgroundColor: 'rgba(138, 43, 226, 0.2)',
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

 // Attrition Rate Bar Chart
 const attritionRateCtx = document.getElementById('attritionRateChart').getContext('2d');
 const attritionRateChart = new Chart(attritionRateCtx, {
     type: 'bar',
     data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
         datasets: [{
             label: 'Attrition Rate (%)',
             data: [4, 5, 6, 7, 8, 9],
             backgroundColor: '#8a2be2'
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

 // Retention Rate Donut Chart
 const retentionRateCtx = document.getElementById('retentionRateChart').getContext('2d');
 const retentionRateChart = new Chart(retentionRateCtx, {
     type: 'doughnut',
     data: {
         labels: ['Retained', 'Lost'],
         datasets: [{
             data: [85, 15],
             backgroundColor: ['#8a2be2', '#e6e9f0'],
             borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent',
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: { position: 'top' }
         }
     }
 });

 // Recruitment Funnel Chart (Custom)
 const funnelCtx = document.getElementById('funnelChart').getContext('2d');
 const funnelChart = new Chart(funnelCtx, {
     type: 'bar',
     data: {
         labels: ['Applications', 'Screening', 'Interviews', 'Offers', 'Hired'],
         datasets: [{
             label: 'Recruitment Funnel',
             data: [500, 300, 200, 100, 50],
             backgroundColor: ['#8a2be2', '#b39ddb', '#d1c4e9', '#ede7f6', '#f3e5f5'],
             borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent',
         }]
     },
     options: {
         indexAxis: 'y',
         responsive: true,
         plugins: {
             legend: { display: false }
         }
     }
 });

 // Salary Breakdown Waterfall Chart (Custom)
 const waterfallCtx = document.getElementById('waterfallChart').getContext('2d');
 const waterfallChart = new Chart(waterfallCtx, {
     type: 'bar',
     data: {
         labels: ['Base Salary', 'Bonus', 'Deductions', 'Net Salary'],
         datasets: [{
             label: 'Salary Breakdown',
             data: [50000, 10000, -5000, 55000],
             backgroundColor: ['#8a2be2', '#b39ddb', '#d1c4e9', '#ede7f6']
         }]
     },
     options: {
         responsive: true,
         plugins: {
             legend: { display: false }
         }
     }
 });

 // Performance vs Tenure Line and Stacked Column Chart
 const lineStackedColumnCtx = document.getElementById('lineStackedColumnChart').getContext('2d');
 const lineStackedColumnChart = new Chart(lineStackedColumnCtx, {
     type: 'bar',
     data: {
         labels: ['Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
         datasets: [
             {
                 label: 'Performance Score',
                 type: 'line',
                 data: [70, 75, 80, 85, 90],
                 borderColor: '#8a2be2',
                 backgroundColor: 'rgba(138, 43, 226, 0.2)',
                 fill: true
             },
             {
                 label: 'Tenure',
                 type: 'bar',
                 data: [1, 2, 3, 4, 5],
                 backgroundColor: '#b39ddb'
             }
         ]
     },
     options: {
         responsive: true,
         scales: {
             x: { stacked: true },
             y: { beginAtZero: true }
         },
         plugins: {
             legend: { position: 'top' }
         }
     }
 });