// Real-Time Stock Trend Chart
const realTimeStockTrend = new Chart(document.getElementById('realTimeStockTrend'), {
    type: 'line',
    data: {
        labels: ['9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
        datasets: [{
            label: 'Stock Price',
            data: [150, 160, 170, 180, 190, 200, 210],
            borderColor: '#4B6CB7', // Professional Blue
            backgroundColor: 'rgba(75, 108, 183, 0.2)', // Light Blue Fill
            borderWidth: 2,
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
                    color: '#333', // Dark Legend Labels
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
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            },
            y: {
                grid: {
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            }
        }
    }
});

// Sector-wise Performance Chart
const sectorWisePerformance = new Chart(document.getElementById('sectorWisePerformance'), {
    type: 'pie',
    data: {
        labels: ['Technology', 'Finance', 'Healthcare'],
        datasets: [{
            data: [40, 35, 25],
            backgroundColor: ['#4B6CB7', '#5581e9', '#0c3085'], // Professional Colors
            borderColor: '#FFF', // White Border for Segments
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});

// Profit/Loss Breakdown Chart
const profitLossBreakdown = new Chart(document.getElementById('profitLossBreakdown'), {
    type: 'doughnut',
    data: {
        labels: ['Profit', 'Loss'],
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#4B6CB7', '#5581e9'], // Professional Blue and Red
            borderColor: '#FFF', // White Border for Segments
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});

// Market Sentiment Chart
const marketSentiment = new Chart(document.getElementById('marketSentiment'), {
    type: 'pie',
    data: {
        labels: ['Positive', 'Negative', 'Neutral'],
        datasets: [{
            data: [60, 25, 15],
            backgroundColor: ['#4B6CB7', '#5581e9', '#0c3085'], // Professional Colors
            borderColor: '#FFF', // White Border for Segments
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
                    font: {
                        size: 14,
                        family: 'Poppins'
                    }
                }
            }
        }
    }
});

// Top Gainers Chart
const topGainers = new Chart(document.getElementById('topGainers'), {
    type: 'bar',
    data: {
        labels: ['Stock A', 'Stock B', 'Stock C'],
        datasets: [{
            label: 'Top Gainers',
            data: [15, 12, 10],
            backgroundColor: '#4B6CB7', // Professional Blue
            borderColor: '#4B6CB7',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
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
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            },
            y: {
                grid: {
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            }
        }
    }
});

// Top Losers Chart
const topLosers = new Chart(document.getElementById('topLosers'), {
    type: 'bar',
    data: {
        labels: ['Stock X', 'Stock Y', 'Stock Z'],
        datasets: [{
            label: 'Top Losers',
            data: [-10, -12, -15],
            backgroundColor: '#5581e9', // Professional Red
            borderColor: '#5581e9',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
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
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#FF4545' // Red Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            },
            y: {
                grid: {
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#FF4545' // Red Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            }
        }
    }
});

// Volume Analysis Chart
const volumeAnalysis = new Chart(document.getElementById('volumeAnalysis'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Trading Volume',
            data: [500, 600, 700, 800, 900, 1000],
            borderColor: '#5581e9', // Deep Blue
            backgroundColor: 'rgba(24, 40, 72, 0.2)', // Light Deep Blue Fill
            borderWidth: 2,
            pointBackgroundColor: '#5581e9', // Point Color
            pointRadius: 5,
            pointHoverRadius: 7
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: '#333', // Dark Legend Labels
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
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#182848' // Deep Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            },
            y: {
                grid: {
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#182848' // Deep Blue Border
                },
                ticks: {
                    color: '#333' // Dark Tick Labels
                }
            }
        }
    }
});

// Real-Time Data Update Simulation
setInterval(() => {
    const newData = Math.floor(Math.random() * 100) + 100; // Random Data
    realTimeStockTrend.data.datasets[0].data.push(newData);
    realTimeStockTrend.data.labels.push(`New`);
    realTimeStockTrend.update();
}, 5000); // Update every 5 seconds