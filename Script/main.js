document.addEventListener("DOMContentLoaded", () => {
    let chart;

    const ctx = document.getElementById("mainChart2").getContext("2d");

    const timeLabels = [
        "06:00",
        "09:00",
        "12:00",
        "15:00",
        "18:00",
        "21:00",
        "24:00",
    ];

    // 랜덤한 값을 생성하는 함수
    function getRandomValues(numValues, min, max) {
        const values = [];
        for (let i = 0; i < numValues; i++) {
            values.push(Math.floor(Math.random() * (max - min + 1)) + min);
        }
        return values;
    }

    // const caloriesBurned1 = getRandomValues(7, 200, 2000);
    // const caloriesBurned2 = getRandomValues(7, 200, 2000);
    // const caloriesBurned3 = getRandomValues(7, 200, 2000);
    // const caloriesBurned4 = getRandomValues(7, 200, 2000);

    const generateData = () => {
        return {
            labels: timeLabels,
            datasets: [
                {
                    label: "Data 1",
                    data: getRandomValues(10, 200, 2000),
                    borderColor: "rgba(255, 99, 132, 1)", // 빨간색
                    backgroundColor: "rgba(255, 99, 132, 0.1)",
                    pointBackgroundColor: "rgba(255, 99, 132, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(255, 99, 132, 1)",
                    tension: 0.4,
                    pointRadius: 0,
                    fill: true,
                },
                {
                    label: "Data 3",
                    data: getRandomValues(10, 50, 1500),
                    borderColor: "rgba(54, 102, 220, 1)", // 파란색
                    backgroundColor: "rgba(54, 102, 220, 0.1)",
                    pointBackgroundColor: "rgba(54, 162, 235, 1)",
                    pointBorderColor: "#fff",
                    pointHoverBackgroundColor: "#fff",
                    pointHoverBorderColor: "rgba(54, 162, 235, 1)",
                    tension: 0.4,
                    pointRadius: 0,
                    fill: true,
                },
            ],
        };
    };

    const config = {
        type: "line",
        data: generateData(),
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: true,
                    },
                    ticks: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    title: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    enabled: false,
                },
            },
            interaction: {
                intersect: false,
                mode: "index",
            },
            elements: {
                point: {
                    radius: 0,
                    hoverRadius: 0,
                    hoverBorderWidth: 0,
                },
            },
            animation: {
                duration: 1500,
                easing: "easeInOutQuart",
            },
        },
    };
    chart = new Chart(ctx, config);
});
