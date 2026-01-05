// Heart Rate Line Chart
const heartRateCtx = document.getElementById('heartRateChart').getContext('2d');
const heartRateChart = new Chart(heartRateCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Heart Rate (bpm)',
            data: [70, 72, 75, 73, 71, 74],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 77, 77, 0.2)',
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

// Steps Taken Bar Chart
const stepsTakenCtx = document.getElementById('stepsTakenChart').getContext('2d');
const stepsTakenChart = new Chart(stepsTakenCtx, {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Steps Taken',
            data: [8000, 8500, 9000, 8700, 8800, 9200],
            backgroundColor: '#ff4d4d'
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

// Workout Duration Donut Chart
const workoutDurationCtx = document.getElementById('workoutDurationChart').getContext('2d');
const workoutDurationChart = new Chart(workoutDurationCtx, {
    type: 'doughnut',
    data: {
        labels: ['Cardio', 'Strength', 'Flexibility'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#ff4d4d', '#ff9999', '#ffb3b3']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Calories Burned Pie Chart
const caloriesBurnedCtx = document.getElementById('caloriesBurnedChart').getContext('2d');
const caloriesBurnedChart = new Chart(caloriesBurnedCtx, {
    type: 'pie',
    data: {
        labels: ['Walking', 'Running', 'Cycling'],
        datasets: [{
            data: [100, 150, 50],
            backgroundColor: ['#ff4d4d', '#ff9999', '#ffb3b3']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Sleep Duration Bar Chart
const sleepDurationCtx = document.getElementById('sleepDurationChart').getContext('2d');
const sleepDurationChart = new Chart(sleepDurationCtx, {
    type: 'bar',
    data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Sleep Duration (Hours)',
            data: [6, 7, 6.5, 7, 6.8, 7.2, 7.5],
            backgroundColor: '#ff4d4d'
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

// Water Intake Line Chart
const waterIntakeCtx = document.getElementById('waterIntakeChart').getContext('2d');
const waterIntakeChart = new Chart(waterIntakeCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Water Intake (Liters)',
            data: [1.8, 2, 2.1, 1.9, 2, 2.2],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 77, 77, 0.2)',
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

// Fitness Goals Progress Bar Chart
const fitnessGoalsCtx = document.getElementById('fitnessGoalsChart').getContext('2d');
const fitnessGoalsChart = new Chart(fitnessGoalsCtx, {
    type: 'bar',
    data: {
        labels: ['Weight Loss', 'Muscle Gain', 'Endurance'],
        datasets: [{
            label: 'Progress (%)',
            data: [80, 60, 70],
            backgroundColor: '#ff4d4d'
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

// Nutrition Intake Pie Chart
const nutritionIntakeCtx = document.getElementById('nutritionIntakeChart').getContext('2d');
const nutritionIntakeChart = new Chart(nutritionIntakeCtx, {
    type: 'pie',
    data: {
        labels: ['Protein', 'Carbs', 'Fats'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: ['#ff4d4d', '#ff9999', '#ffb3b3']
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Activity Level Line Chart
const activityLevelCtx = document.getElementById('activityLevelChart').getContext('2d');
const activityLevelChart = new Chart(activityLevelCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Activity Level (%)',
            data: [60, 65, 70, 75, 80, 85],
            borderColor: '#ff4d4d',
            backgroundColor: 'rgba(255, 77, 77, 0.2)',
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