 // Example Charts with Professional Design
 const ticketSalesChart = new Chart(document.getElementById('ticketSalesChart'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Ticket Sales',
            data: [100, 200, 150, 300, 250, 400],
            borderColor: '#b0c8ff', // Professional Blue Line
            backgroundColor: 'rgba(75, 108, 183, 0.2)', // Light Blue Fill
            borderWidth: 8,
            pointBackgroundColor: '#4B6CB7', // Point Color
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#fff', // Dark Label Color
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            }
        }
    }
});

const revenueBreakdownChart = new Chart(document.getElementById('revenueBreakdownChart'), {
    type: 'pie',
    data: {
        labels: ['AC Buses', 'Non-AC Buses'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#b0c8ff', '#182848'], // Professional Blue and Deep Blue
            borderColor: '#FFF', // White Border for Segments
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF', // White Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});

const userActivityChart = new Chart(document.getElementById('userActivityChart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Active Users',
            data: [50, 60, 70, 80, 90, 100],
            backgroundColor: '#b0c8ff', // Professional Blue Bars
            borderColor: '#4B6CB7',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF', // White Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            }
        }
    }
});

const busUtilizationChart = new Chart(document.getElementById('busUtilizationChart'), {
    type: 'doughnut',
    data: {
        labels: ['In Use', 'Idle'],
        datasets: [{
            data: [60, 40],
            backgroundColor: ['#b0c8ff', '#182848'], // Professional Blue and Deep Blue
            borderColor: '#FFF',
             // White Border for Segments
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF', // White Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});

const routePerformanceChart = new Chart(document.getElementById('routePerformanceChart'), {
    type: 'radar',
    data: {
        labels: ['Route 1', 'Route 2', 'Route 3', 'Route 4', 'Route 5'],
        datasets: [{
            label: 'Performance',
            data: [80, 90, 85, 75, 95],
            borderColor: '#b0c8ff', // Professional Blue Line
            backgroundColor: 'rgba(75, 108, 183, 0.2)',
             // Light Blue Fill
            borderWidth: 2,
            pointBackgroundColor: '#b0c8ff', // Point Color
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF', // White Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF', // White Tick Labels
                    backdropColor: 'transparent' // Transparent Background for Ticks
                }
            }
        }
    }
});

const paymentMethodsChart = new Chart(document.getElementById('paymentMethodsChart'), {
    type: 'bar',
    data: {
        labels: ['Cash', 'Card', 'Online'],
        datasets: [{
            label: 'Payment Methods',
            data: [40, 30, 30],
            backgroundColor: ['#4B6CB7', '#b0c8ff', '#F5F5F5'], // Professional Blue, Deep Blue, and Light Gray
            borderColor: '#4B6CB7',
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#FFF', // White Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            },
            y: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)', // Subtle White Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#FFF' // White Tick Labels
                }
            }
        }
    }
});