 // Sample Data
 const data = {
    regions: {
        north: {
            salesGrowth: [10, 15, 20, 25, 30, 35],
            productsSold: [800, 900, 1000, 1100, 1200, 1300],
            satisfactionRate: [90, 10],
            revenueByCategory: [40, 30, 20, 10],
            customerType: [300, 200],
            avgOrderValue: [80, 75, 90, 85]
        },
        south: {
            salesGrowth: [8, 12, 18, 22, 28, 32],
            productsSold: [700, 800, 900, 1000, 1100, 1200],
            satisfactionRate: [85, 15],
            revenueByCategory: [35, 35, 20, 10],
            customerType: [250, 150],
            avgOrderValue: [75, 70, 85, 80]
        },
        europe: {
            salesGrowth: [12, 16, 22, 26, 32, 38],
            productsSold: [850, 950, 1050, 1150, 1250, 1350],
            satisfactionRate: [92, 8],
            revenueByCategory: [45, 25, 20, 10],
            customerType: [350, 250],
            avgOrderValue: [85, 80, 95, 90]
        },
        asia: {
            salesGrowth: [15, 20, 25, 30, 35, 40],
            productsSold: [900, 1000, 1100, 1200, 1300, 1400],
            satisfactionRate: [88, 12],
            revenueByCategory: [50, 25, 15, 10],
            customerType: [400, 300],
            avgOrderValue: [90, 85, 100, 95]
        }
    }
};

// Sales Growth Line Chart
const salesGrowthCtx = document.getElementById('salesGrowthChart').getContext('2d');
const salesGrowthChart = new Chart(salesGrowthCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Sales Growth (%)',
            data: data.regions.north.salesGrowth,
            borderColor: '#e9967a',
            backgroundColor: 'rgba(233, 150, 122, 0.2)',
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

// Products Sold Bar Chart
const productsSoldCtx = document.getElementById('productsSoldChart').getContext('2d');
const productsSoldChart = new Chart(productsSoldCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Products Sold (Units)',
            data: data.regions.north.productsSold,
            backgroundColor: '#e9967a'
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

// Customer Satisfaction Rate Donut Chart
const satisfactionRateCtx = document.getElementById('satisfactionRateChart').getContext('2d');
const satisfactionRateChart = new Chart(satisfactionRateCtx, {
    type: 'doughnut',
    data: {
        labels: ['Satisfied', 'Unsatisfied'],
        datasets: [{
            data: data.regions.north.satisfactionRate,
            backgroundColor: ['#e9967a', '#ffe6f2']
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
        labels: ['Skincare', 'Makeup', 'Fragrance', 'Haircare'],
        datasets: [{
            data: data.regions.north.revenueByCategory,
            backgroundColor: ['#e9967a', '#f4a7b9', '#f8c3d0', '#ffe6f2']
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
            data: data.regions.north.customerType,
            backgroundColor: ['#e9967a', '#f4a7b9']
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

// Average Order Value by Region Line Chart
const avgOrderValueCtx = document.getElementById('avgOrderValueChart').getContext('2d');
const avgOrderValueChart = new Chart(avgOrderValueCtx, {
    type: 'line',
    data: {
        labels: ['North America', 'South America', 'Europe', 'Asia'],
        datasets: [{
            label: 'Average Order Value ($)',
            data: data.regions.north.avgOrderValue,
            borderColor: '#e9967a',
            backgroundColor: 'rgba(233, 150, 122, 0.2)',
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

// Dynamic Filtering Logic
const regionFilter = document.getElementById('regionFilter');
const monthFilter = document.getElementById('monthFilter');
const categoryFilter = document.getElementById('categoryFilter');



function updateCharts() {
    const selectedRegion = regionFilter.value;
    const selectedMonth = monthFilter.value;
    const selectedCategory = categoryFilter.value;

    // Update Sales Growth Chart
    if (selectedRegion === 'all') {
        salesGrowthChart.data.datasets[0].data = [
            ...data.regions.north.salesGrowth,
            ...data.regions.south.salesGrowth,
            ...data.regions.europe.salesGrowth,
            ...data.regions.asia.salesGrowth
        ];
    } else {
        salesGrowthChart.data.datasets[0].data = data.regions[selectedRegion].salesGrowth;
    }

    // Update Products Sold Chart
    if (selectedRegion === 'all') {
        productsSoldChart.data.datasets[0].data = [
            ...data.regions.north.productsSold,
            ...data.regions.south.productsSold,
            ...data.regions.europe.productsSold,
            ...data.regions.asia.productsSold
        ];
    } else {
        productsSoldChart.data.datasets[0].data = data.regions[selectedRegion].productsSold;
    }

    // Update Customer Satisfaction Rate Chart
    if (selectedRegion === 'all') {
        satisfactionRateChart.data.datasets[0].data = [
            data.regions.north.satisfactionRate[0] + 
            data.regions.south.satisfactionRate[0] + 
            data.regions.europe.satisfactionRate[0] + 
            data.regions.asia.satisfactionRate[0],
            data.regions.north.satisfactionRate[1] + 
            data.regions.south.satisfactionRate[1] + 
            data.regions.europe.satisfactionRate[1] + 
            data.regions.asia.satisfactionRate[1]
        ];
    } else {
        satisfactionRateChart.data.datasets[0].data = data.regions[selectedRegion].satisfactionRate;
    }

    // Update Revenue by Product Category Chart
    if (selectedRegion === 'all') {
        revenueByCategoryChart.data.datasets[0].data = [
            data.regions.north.revenueByCategory[0] + 
            data.regions.south.revenueByCategory[0] + 
            data.regions.europe.revenueByCategory[0] + 
            data.regions.asia.revenueByCategory[0],
            data.regions.north.revenueByCategory[1] + 
            data.regions.south.revenueByCategory[1] + 
            data.regions.europe.revenueByCategory[1] + 
            data.regions.asia.revenueByCategory[1],
            data.regions.north.revenueByCategory[2] + 
            data.regions.south.revenueByCategory[2] + 
            data.regions.europe.revenueByCategory[2] + 
            data.regions.asia.revenueByCategory[2],
            data.regions.north.revenueByCategory[3] + 
            data.regions.south.revenueByCategory[3] + 
            data.regions.europe.revenueByCategory[3] + 
            data.regions.asia.revenueByCategory[3]
        ];
    } else {
        revenueByCategoryChart.data.datasets[0].data = data.regions[selectedRegion].revenueByCategory;
    }

    // Update New vs Returning Customers Chart
    if (selectedRegion === 'all') {
        customerTypeChart.data.datasets[0].data = [
            data.regions.north.customerType[0] + 
            data.regions.south.customerType[0] + 
            data.regions.europe.customerType[0] + 
            data.regions.asia.customerType[0],
            data.regions.north.customerType[1] + 
            data.regions.south.customerType[1] + 
            data.regions.europe.customerType[1] + 
            data.regions.asia.customerType[1]
        ];
    } else {
        customerTypeChart.data.datasets[0].data = data.regions[selectedRegion].customerType;
    }

    // Update Average Order Value by Region Chart
    if (selectedRegion === 'all') {
        avgOrderValueChart.data.datasets[0].data = [
            ...data.regions.north.avgOrderValue,
            ...data.regions.south.avgOrderValue,
            ...data.regions.europe.avgOrderValue,
            ...data.regions.asia.avgOrderValue
        ];
    } else {
        avgOrderValueChart.data.datasets[0].data = data.regions[selectedRegion].avgOrderValue;
    }

    // Update all charts
    salesGrowthChart.update();
    productsSoldChart.update();
    satisfactionRateChart.update();
    revenueByCategoryChart.update();
    customerTypeChart.update();
    avgOrderValueChart.update();
}

// Add Event Listeners to Filters
regionFilter.addEventListener('change', updateCharts);
monthFilter.addEventListener('change', updateCharts);
categoryFilter.addEventListener('change', updateCharts);

// Initial Chart Update
updateCharts();