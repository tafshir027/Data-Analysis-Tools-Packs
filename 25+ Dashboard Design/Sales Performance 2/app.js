  // Revenue Growth Line Chart
  const revenueCtx = document.getElementById('revenueChart').getContext('2d');
  const revenueChart = new Chart(revenueCtx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Revenue Growth (%)',
              data: [10, 12, 15, 18, 20, 22],
              borderColor: '#0078d4',
              backgroundColor: 'rgba(0, 120, 212, 0.2)',
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

  // Sales Volume Bar Chart
  const salesVolumeCtx = document.getElementById('salesVolumeChart').getContext('2d');
  const salesVolumeChart = new Chart(salesVolumeCtx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Sales Volume (Units)',
              data: [400, 450, 500, 550, 600, 650],
              backgroundColor: '#0078d4'
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

  // Sales Conversion Rate Donut Chart
  const conversionRateCtx = document.getElementById('conversionRateChart').getContext('2d');
  const conversionRateChart = new Chart(conversionRateCtx, {
      type: 'doughnut',
      data: {
          labels: ['Converted', 'Not Converted'],
          datasets: [{
              data: [25, 75],
              backgroundColor: ['#0078d4', '#e6e9f0']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { position: 'top' }
          }
      }
  });

  // Customer Retention Rate Pie Chart
  const retentionRateCtx = document.getElementById('retentionRateChart').getContext('2d');
  const retentionRateChart = new Chart(retentionRateCtx, {
      type: 'pie',
      data: {
          labels: ['Retained', 'Lost'],
          datasets: [{
              data: [80, 20],
              backgroundColor: ['#0078d4', '#e6e9f0']
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: { position: 'top' }
          }
      }
  });

  // Lead-to-Customer Ratio Bar Chart
  const leadToCustomerCtx = document.getElementById('leadToCustomerChart').getContext('2d');
  const leadToCustomerChart = new Chart(leadToCustomerCtx, {
      type: 'bar',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Lead-to-Customer Ratio (%)',
              data: [10, 12, 15, 18, 20, 22],
              backgroundColor: '#0078d4'
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

  // Average Order Value Line Chart
  const avgOrderValueCtx = document.getElementById('avgOrderValueChart').getContext('2d');
  const avgOrderValueChart = new Chart(avgOrderValueCtx, {
      type: 'line',
      data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
              label: 'Average Order Value ($)',
              data: [180, 190, 200, 210, 220, 230],
              borderColor: '#0078d4',
              backgroundColor: 'rgba(0, 120, 212, 0.2)',
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

  // Interactive Filters
  const regionFilter = document.getElementById('regionFilter');
  const monthFilter = document.getElementById('monthFilter');
  const categoryFilter = document.getElementById('categoryFilter');

  function updateCharts() {
      const selectedRegion = regionFilter.value;
      const selectedMonth = monthFilter.value;
      const selectedCategory = categoryFilter.value;

      // Example logic to update charts based on filters
      if (selectedRegion === 'north') {
          revenueChart.data.datasets[0].data = [12, 14, 16, 18, 20, 22];
          salesVolumeChart.data.datasets[0].data = [420, 470, 520, 570, 620, 670];
          conversionRateChart.data.datasets[0].data = [30, 70];
          retentionRateChart.data.datasets[0].data = [85, 15];
          leadToCustomerChart.data.datasets[0].data = [12, 14, 16, 18, 20, 22];
          avgOrderValueChart.data.datasets[0].data = [190, 200, 210, 220, 230, 240];
      } else if (selectedRegion === 'south') {
          revenueChart.data.datasets[0].data = [8, 10, 12, 14, 16, 18];
          salesVolumeChart.data.datasets[0].data = [380, 430, 480, 530, 580, 630];
          conversionRateChart.data.datasets[0].data = [20, 80];
          retentionRateChart.data.datasets[0].data = [75, 25];
          leadToCustomerChart.data.datasets[0].data = [8, 10, 12, 14, 16, 18];
          avgOrderValueChart.data.datasets[0].data = [170, 180, 190, 200, 210, 220];
      } else if (selectedRegion === 'east') {
          revenueChart.data.datasets[0].data = [10, 12, 14, 16, 18, 20];
          salesVolumeChart.data.datasets[0].data = [400, 450, 500, 550, 600, 650];
          conversionRateChart.data.datasets[0].data = [25, 75];
          retentionRateChart.data.datasets[0].data = [80, 20];
          leadToCustomerChart.data.datasets[0].data = [10, 12, 14, 16, 18, 20];
          avgOrderValueChart.data.datasets[0].data = [180, 190, 200, 210, 220, 230];
      } else if (selectedRegion === 'west') {
          revenueChart.data.datasets[0].data = [14, 16, 18, 20, 22, 24];
          salesVolumeChart.data.datasets[0].data = [440, 490, 540, 590, 640, 690];
          conversionRateChart.data.datasets[0].data = [35, 65];
          retentionRateChart.data.datasets[0].data = [90, 10];
          leadToCustomerChart.data.datasets[0].data = [14, 16, 18, 20, 22, 24];
          avgOrderValueChart.data.datasets[0].data = [200, 210, 220, 230, 240, 250];
      } else {
          // Default data for "All Regions"
          revenueChart.data.datasets[0].data = [10, 12, 15, 18, 20, 22];
          salesVolumeChart.data.datasets[0].data = [400, 450, 500, 550, 600, 650];
          conversionRateChart.data.datasets[0].data = [25, 75];
          retentionRateChart.data.datasets[0].data = [80, 20];
          leadToCustomerChart.data.datasets[0].data = [10, 12, 15, 18, 20, 22];
          avgOrderValueChart.data.datasets[0].data = [180, 190, 200, 210, 220, 230];
      }

      // Update charts based on selected month
      if (selectedMonth === 'jan') {
          revenueChart.data.datasets[0].data = [10];
          salesVolumeChart.data.datasets[0].data = [400];
          leadToCustomerChart.data.datasets[0].data = [10];
          avgOrderValueChart.data.datasets[0].data = [180];
      } else if (selectedMonth === 'feb') {
          revenueChart.data.datasets[0].data = [12];
          salesVolumeChart.data.datasets[0].data = [450];
          leadToCustomerChart.data.datasets[0].data = [12];
          avgOrderValueChart.data.datasets[0].data = [190];
      } else if (selectedMonth === 'mar') {
          revenueChart.data.datasets[0].data = [15];
          salesVolumeChart.data.datasets[0].data = [500];
          leadToCustomerChart.data.datasets[0].data = [15];
          avgOrderValueChart.data.datasets[0].data = [200];
      } else if (selectedMonth === 'apr') {
          revenueChart.data.datasets[0].data = [18];
          salesVolumeChart.data.datasets[0].data = [550];
          leadToCustomerChart.data.datasets[0].data = [18];
          avgOrderValueChart.data.datasets[0].data = [210];
      }

      // Update charts based on selected category
      if (selectedCategory === 'electronics') {
          revenueChart.data.datasets[0].data = [12, 14, 16, 18, 20, 22];
          salesVolumeChart.data.datasets[0].data = [420, 470, 520, 570, 620, 670];
      } else if (selectedCategory === 'clothing') {
          revenueChart.data.datasets[0].data = [8, 10, 12, 14, 16, 18];
          salesVolumeChart.data.datasets[0].data = [380, 430, 480, 530, 580, 630];
      } else if (selectedCategory === 'grocery') {
          revenueChart.data.datasets[0].data = [10, 12, 14, 16, 18, 20];
          salesVolumeChart.data.datasets[0].data = [400, 450, 500, 550, 600, 650];
      } else if (selectedCategory === 'home') {
          revenueChart.data.datasets[0].data = [14, 16, 18, 20, 22, 24];
          salesVolumeChart.data.datasets[0].data = [440, 490, 540, 590, 640, 690];
      }

      // Update all charts
      revenueChart.update();
      salesVolumeChart.update();
      conversionRateChart.update();
      retentionRateChart.update();
      leadToCustomerChart.update();
      avgOrderValueChart.update();
  }

  // Add event listeners to filters
  regionFilter.addEventListener('change', updateCharts);
  monthFilter.addEventListener('change', updateCharts);
  categoryFilter.addEventListener('change', updateCharts);

  // Initial chart update
  updateCharts();