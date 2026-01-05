 // App Usage Frequency Chart
 const appUsageFrequency = new Chart(document.getElementById('appUsageFrequency'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Usage Frequency',
            data: [50, 60, 70, 80, 90, 100],
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

// Customer Feedback Rating Chart
const customerFeedbackRating = new Chart(document.getElementById('customerFeedbackRating'), {
    type: 'bar',
    data: {
        labels: ['1 Star', '2 Stars', '3 Stars', '4 Stars', '5 Stars'],
        datasets: [{
            label: 'Feedback Ratings',
            data: [5, 10, 20, 30, 35],
            backgroundColor: ['#FF4545', '#FFA500', '#FCD34D', '#4B6CB7', '#182848'], // Professional Colors
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

// App Store Rating Chart
const appStoreRating = new Chart(document.getElementById('appStoreRating'), {
    type: 'doughnut',
    data: {
        labels: ['Positive', 'Neutral', 'Negative'],
        datasets: [{
            data: [70, 20, 10],
            backgroundColor: ['#4B6CB7', '#FCD34D', '#FF4545'], // Professional Colors
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

        // User Engagement Chart (Continued)
        const userEngagement = new Chart(document.getElementById('userEngagement'), {
    type: 'radar',
    data: {
        labels: ['Daily Active Users', 'Weekly Active Users', 'Monthly Active Users'],
        datasets: [{
            label: 'Engagement',
            data: [80, 90, 85],
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
            r: {
                grid: {
                    color: '#E0E0E0', // Subtle Grid
                    borderColor: '#4B6CB7' // Blue Border
                },
                ticks: {
                    color: '#333', // Dark Tick Labels
                    backdropColor: 'transparent' // Transparent Background for Ticks
                }
            }
        }
    }
});

// In-App Purchases Chart
const inAppPurchases = new Chart(document.getElementById('inAppPurchases'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'In-App Purchases',
            data: [50, 60, 70, 80, 90, 100],
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

// Uninstall Rate Chart
const uninstallRate = new Chart(document.getElementById('uninstallRate'), {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Uninstall Rate',
            data: [5, 4, 6, 5, 7, 6],
            borderColor: '#FF4545', // Red
            backgroundColor: 'rgba(255, 69, 69, 0.2)', // Light Red Fill
            borderWidth: 2,
            pointBackgroundColor: '#FF4545', // Point Color
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