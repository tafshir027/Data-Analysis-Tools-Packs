// Occupancy Rate Line Chart
const occupancyCtx = document.getElementById('occupancyChart').getContext('2d');
new Chart(occupancyCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Occupancy Rate (%)',
            data: [70, 75, 80, 85, 90],
            borderColor: '#5DB996',
            backgroundColor: 'rgba(93, 185, 150, 0.2)',
            fill: true,
        }]
    },
});

// Revenue Breakdown Pie Chart
const revenueCtx = document.getElementById('revenueChart').getContext('2d');
new Chart(revenueCtx, {
    type: 'pie',
    data: {
        labels: ['Rooms', 'Restaurant', 'Events', 'Other'],
        datasets: [{
            data: [50, 30, 15, 5],
            backgroundColor: ['#5DB996', '#118B50', '#FFFFFF', '#E0F7FA'],
            borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent',
        }]
    },
});

// Guest Satisfaction Bar Chart
const satisfactionCtx = document.getElementById('satisfactionChart').getContext('2d');
new Chart(satisfactionCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Satisfaction (%)',
            data: [85, 90, 88, 92, 95],
            backgroundColor: '#5DB996',
        }]
    },
});

// Room Types Donut Chart
const roomTypeCtx = document.getElementById('roomTypeChart').getContext('2d');
new Chart(roomTypeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Single', 'Double', 'Suite', 'Deluxe'],
        datasets: [{
            data: [40, 35, 15, 10],
            backgroundColor: ['#5DB996', '#118B50', '#FFFFFF', '#E0F7FA'],
            borderColor: 'transparent', // No Border
            hoverBorderColor: 'transparent',
        }]
    },
});

// Restaurant Orders Line Chart
const restaurantCtx = document.getElementById('restaurantChart').getContext('2d');
new Chart(restaurantCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Orders',
            data: [100, 120, 110, 130, 140],
            borderColor: '#5DB996',
            backgroundColor: 'rgba(93, 185, 150, 0.2)',
            fill: true,
        }]
    },
});

// Issue Resolution Time Bar Chart
const issueCtx = document.getElementById('issueChart').getContext('2d');
new Chart(issueCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Resolution Time (Hours)',
            data: [2, 1.5, 1.8, 1.2, 1],
            backgroundColor: '#5DB996',
        }]
    },
});