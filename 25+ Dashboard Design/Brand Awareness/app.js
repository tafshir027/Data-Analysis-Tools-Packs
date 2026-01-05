// Example Charts
const searchVolumeChart = new Chart(document.getElementById('searchVolumeChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Search Volume',
            data: [5000, 6000, 7000, 8000, 9000, 10000],
            borderColor: '#F11A7B',
            backgroundColor: 'rgba(241, 26, 123, 0.2)',
            fill: true
        }]
    },
    options: { responsive: true }
});

const adImpressionsChart = new Chart(document.getElementById('adImpressionsChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Ad Impressions',
            data: [10000, 12000, 15000, 18000, 20000, 22000],
            backgroundColor: '#3E001F'
        }]
    },
    options: { responsive: true }
});

const influencerEngagementChart = new Chart(document.getElementById('influencerEngagementChart'), {
    type: 'doughnut',
    data: {
        labels: ['Engaged', 'Not Engaged'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#F11A7B', '#3E001F']
        }]
    },
    options: { responsive: true }
});

const brandReputationChart = new Chart(document.getElementById('brandReputationChart'), {
    type: 'radar',
    data: {
        labels: ['Quality', 'Trust', 'Value', 'Service', 'Support'],
        datasets: [{
            label: 'Brand Reputation',
            data: [80, 90, 85, 75, 95],
            borderColor: '#F11A7B',
            backgroundColor: 'rgba(241, 26, 123, 0.2)',
            fill: true
        }]
    },
    options: { responsive: true }
});

const marketingReachChart = new Chart(document.getElementById('marketingReachChart'), {
    type: 'pie',
    data: {
        labels: ['Email', 'Social', 'Ads', 'Events'],
        datasets: [{
            data: [40, 30, 20, 10],
            backgroundColor: ['#3E001F', '#982176', '#F11A7B', '#FFF']
        }]
    },
    options: { responsive: true }
});

const pressMentionsChart = new Chart(document.getElementById('pressMentionsChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Press Mentions',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: '#3E001F'
        }]
    },
    options: { responsive: true }
});