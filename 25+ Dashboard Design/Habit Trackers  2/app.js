 // Update Analog Clock
 const sec = document.querySelector(".sec");
 const min = document.querySelector(".min");
 const hr = document.querySelector(".hr");

 function updateClock() {
     const time = new Date();
     const secs = time.getSeconds() * 6;
     const mins = time.getMinutes() * 6;
     const hrs = time.getHours() * 30 + (mins / 12);

     sec.style.transform = `rotateZ(${secs}deg)`;
     min.style.transform = `rotateZ(${mins}deg)`;
     hr.style.transform = `rotateZ(${hrs}deg)`;
 }

 setInterval(updateClock, 1000);
 updateClock();

 // Dynamic Calendar with Current Date Highlighted
 const calendarDiv = document.getElementById('calendar');
 function renderCalendar() {
     const today = new Date();
     const currentYear = today.getFullYear();
     const currentMonth = today.getMonth();
     const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
     const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
     const daysInMonth = lastDayOfMonth.getDate();
     const startDay = firstDayOfMonth.getDay();

     let calendarHTML = `<table>`;
     calendarHTML += `<tr><th colspan="7">${today.toLocaleString('default', { month: 'long' })} ${currentYear}</th></tr>`;
     calendarHTML += `<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>`;

     let day = 1;
     for (let i = 0; i < 6; i++) {
         calendarHTML += `<tr>`;
         for (let j = 0; j < 7; j++) {
             if (i === 0 && j < startDay) {
                 calendarHTML += `<td></td>`;
             } else if (day > daysInMonth) {
                 calendarHTML += `<td></td>`;
             } else {
                 const isToday = day === today.getDate() && currentMonth === today.getMonth() && currentYear === today.getFullYear();
                 calendarHTML += `<td class="${isToday ? 'today' : ''}">${day}</td>`;
             day++;
         }
     }
     calendarHTML += `</tr>`;
 }
 calendarHTML += `</table>`;
 calendarDiv.innerHTML = calendarHTML;
}
renderCalendar();

// Habit Progress Line Chart
const progressCtx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(progressCtx, {
 type: 'line',
 data: {
     labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
     datasets: [{
         label: 'Progress (%)',
         data: [20, 40, 60, 80, 100, 90, 85],
         borderColor: '#9e2acf',
         backgroundColor: 'rgba(80, 0, 115, 0.2)',
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

// Time Spent on Habits Bar Chart
const timeSpentCtx = document.getElementById('timeSpentChart').getContext('2d');
const timeSpentChart = new Chart(timeSpentCtx, {
 type: 'bar',
 data: {
     labels: ['Morning Workout', 'Meditation', 'Reading', 'Water Intake', 'Journaling'],
     datasets: [{
         label: 'Time Spent (Minutes)',
         data: [30, 15, 20, 5, 10],
         backgroundColor: '#500073'
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

// Habit Completion Rate Donut Chart
const completionRateCtx = document.getElementById('completionRateChart').getContext('2d');
const completionRateChart = new Chart(completionRateCtx, {
 type: 'doughnut',
 data: {
     labels: ['Completed', 'Pending'],
     datasets: [{
         data: [80, 20],
         backgroundColor: ['#500073', '#e6e6ff'],
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