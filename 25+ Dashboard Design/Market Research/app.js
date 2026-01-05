// Example Charts
const surveyResponseChart = new Chart(document.getElementById('surveyResponseChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Survey Response Rate',
            data: [60, 70, 80, 90, 85, 95],
            backgroundColor: 'rgba(53, 21, 93, 1)'
        }]
    },
    options: { responsive: true }
});

const consumerBehaviorChart = new Chart(document.getElementById('consumerBehaviorChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Consumer Behavior',
            data: [50, 60, 70, 80, 90, 100],
            borderColor: '#rgba(53, 21, 93, 1)',
            backgroundColor: 'rgba(53, 21, 93, 0.5)',
            fill: true
        }]
    },
    options: { responsive: true }
});

const marketTrendChart = new Chart(document.getElementById('marketTrendChart'), {
    type: 'radar',
    data: {
        labels: ['Quality', 'Price', 'Service', 'Availability', 'Support'],
        datasets: [{
            label: 'Market Trends',
            data: [80, 90, 85, 75, 95],
            borderColor: 'rgba(53, 21, 93, 1)',
            backgroundColor: 'rgba(53, 21, 93, 0.5)',
            fill: true
        }]
    },
    options: { responsive: true }
});

const productDemandChart = new Chart(document.getElementById('productDemandChart'), {
    type: 'pie',
    data: {
        labels: ['Electronics', 'Fashion', 'Grocery'],
        datasets: [{
            data: [40, 30, 30],
            backgroundColor: ['#512B81', '#35155D', '#451952']
        }]
    },
    options: { responsive: true }
});

const industryResearchChart = new Chart(document.getElementById('industryResearchChart'), {
    type: 'doughnut',
    data: {
        labels: ['Depth 1', 'Depth 2', 'Depth 3'],
        datasets: [{
            data: [50, 30, 20],
            backgroundColor: ['#512B81', '#35155D', '#451952']
        }]
    },
    options: { responsive: true }
});

const customerFeedbackChart = new Chart(document.getElementById('customerFeedbackChart'), {
    type: 'bar',
    data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
            label: 'Customer Feedback',
            data: [70, 20, 10],
            backgroundColor: ['#512B81', '#35155D', '#451952']
        }]
    },
    options: { responsive: true }
});