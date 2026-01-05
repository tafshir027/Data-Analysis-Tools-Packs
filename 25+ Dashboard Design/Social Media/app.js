// Engagement Rate Line Chart
const engagementCtx = document.getElementById('engagementChart').getContext('2d');
new Chart(engagementCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Engagement Rate (%)',
            data: [4.5, 4.7, 4.6, 4.8, 4.9],
            borderColor: '#3674B5',
            backgroundColor: 'rgba(54, 116, 181, 0.2)',
            fill: true,
        }]
    },
});

// Follower Growth Bar Chart
const followerCtx = document.getElementById('followerGrowthChart').getContext('2d');
new Chart(followerCtx, {
    type: 'bar',
    data: {
        labels: ['Facebook', 'Instagram', 'Twitter'],
        datasets: [{
            label: 'Followers',
            data: [1000, 1200, 800],
            backgroundColor: ['#3674B5', '#578FCA', '#FFFFFF'],
        }]
    },
});

// Click-Through Rate Donut Chart
const ctrCtx = document.getElementById('ctrChart').getContext('2d');
new Chart(ctrCtx, {
    type: 'doughnut',
    data: {
        labels: ['CTR (%)'],
        datasets: [{
            data: [2.8],
            backgroundColor: ['#3674B5'],
        }]
    },
});

// Social Media Mentions Pie Chart
const mentionsCtx = document.getElementById('mentionsChart').getContext('2d');
new Chart(mentionsCtx, {
    type: 'pie',
    data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#3674B5', '#578FCA', '#FFFFFF'],
        }]
    },
});

// Hashtag Performance Bar Chart
const hashtagCtx = document.getElementById('hashtagChart').getContext('2d');
new Chart(hashtagCtx, {
    type: 'bar',
    data: {
        labels: ['#Trending', '#New', '#Popular'],
        datasets: [{
            label: 'Performance',
            data: [80, 60, 40],
            backgroundColor: ['#3674B5', '#578FCA', '#FFFFFF'],
        }]
    },
});

// Brand Awareness Line Chart
const brandAwarenessCtx = document.getElementById('brandAwarenessChart').getContext('2d');
new Chart(brandAwarenessCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Brand Awareness (%)',
            data: [70, 75, 80, 85, 90],
            borderColor: '#3674B5',
            backgroundColor: 'rgba(54, 116, 181, 0.2)',
            fill: true,
        }]
    },
});

// Influencer Campaign Success Bar Chart
const influencerCtx = document.getElementById('influencerChart').getContext('2d');
new Chart(influencerCtx, {
    type: 'bar',
    data: {
        labels: ['Campaign A', 'Campaign B', 'Campaign C'],
        datasets: [{
            label: 'Success (%)',
            data: [85, 90, 75],
            backgroundColor: ['#3674B5', '#578FCA', '#FFFFFF'],
        }]
    },
});

// Response Time Line Chart
const responseTimeCtx = document.getElementById('responseTimeChart').getContext('2d');
new Chart(responseTimeCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
        datasets: [{
            label: 'Response Time (Hours)',
            data: [2.5, 2.4, 2.6, 2.3, 2.2],
            borderColor: '#3674B5',
            backgroundColor: 'rgba(54, 116, 181, 0.2)',
            fill: true,
        }]
    },
});

// Video Views Bar Chart
const videoViewsCtx = document.getElementById('videoViewsChart').getContext('2d');
new Chart(videoViewsCtx, {
    type: 'bar',
    data: {
        labels: ['Video A', 'Video B', 'Video C'],
        datasets: [{
            label: 'Views',
            data: [150, 200, 180],
            backgroundColor: ['#3674B5', '#578FCA', '#FFFFFF'],
        }]
    },
});