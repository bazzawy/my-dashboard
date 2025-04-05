// Example data. Replace with real CSV data once parsed.
const barLabels = ["Math", "English", "Science", "History"];
const barData = [75, 82, 78, 90];

// Once you parse your CSV, you might store data in arrays or objects:
const lineLabels = ["Test 1", "Test 2", "Test 3", "Test 4"];
const lineData = [70, 74, 80, 85];

// For Pie and Doughnut, we have categories:
const pieLabels = ["A", "B", "C", "D", "F"];
const pieData = [50, 100, 80, 40, 20];

// For stacked bar:
const stackedLabels = ["Class A", "Class B", "Class C"];
// Each dataset is a score range
const stackedDataRange1 = [10, 5, 2];  // e.g., 0-40
const stackedDataRange2 = [15, 10, 5]; // e.g., 41-60
const stackedDataRange3 = [20, 25, 15]; // e.g., 61-80
const stackedDataRange4 = [5, 10, 20]; // e.g., 81-100

// Radar chart
const radarLabels = ["Reading", "Writing", "Speaking", "Listening"];
const radarData = [85, 70, 90, 75];

window.onload = function () {
  // Bar Chart
  new Chart(document.getElementById("barChart"), {
    type: "bar",
    data: {
      labels: barLabels,
      datasets: [
        {
          label: "Avg Score by Subject",
          data: barData,
          backgroundColor: "rgba(54, 162, 235, 0.5)",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        y: { beginAtZero: true }
      }
    }
  });

  // Line Chart
  new Chart(document.getElementById("lineChart"), {
    type: "line",
    data: {
      labels: lineLabels,
      datasets: [
        {
          label: "Scores Over Time",
          data: lineData,
          fill: false,
          borderColor: "rgba(75, 192, 192, 1)",
          tension: 0.1
        }
      ]
    }
  });

  // Pie Chart
  new Chart(document.getElementById("pieChart"), {
    type: "pie",
    data: {
      labels: pieLabels,
      datasets: [
        {
          label: "Grade Distribution",
          data: pieData,
          backgroundColor: [
            "#36A2EB",
            "#4BC0C0",
            "#FFCE56",
            "#FF6384",
            "#9966FF"
          ]
        }
      ]
    }
  });

  // Doughnut Chart
  new Chart(document.getElementById("doughnutChart"), {
    type: "doughnut",
    data: {
      labels: ["Present", "Absent", "Late"],
      datasets: [
        {
          label: "Attendance",
          data: [300, 50, 20],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    }
  });

  // Stacked Bar Chart
  new Chart(document.getElementById("stackedBarChart"), {
    type: "bar",
    data: {
      labels: stackedLabels,
      datasets: [
        {
          label: "Score Range 0-40",
          data: stackedDataRange1,
          backgroundColor: "#FF6384"
        },
        {
          label: "Score Range 41-60",
          data: stackedDataRange2,
          backgroundColor: "#36A2EB"
        },
        {
          label: "Score Range 61-80",
          data: stackedDataRange3,
          backgroundColor: "#FFCE56"
        },
        {
          label: "Score Range 81-100",
          data: stackedDataRange4,
          backgroundColor: "#9966FF"
        }
      ]
    },
    options: {
      scales: {
        x: {
          stacked: true
        },
        y: {
          stacked: true,
          beginAtZero: true
        }
      }
    }
  });

  // Radar Chart
  new Chart(document.getElementById("radarChart"), {
    type: "radar",
    data: {
      labels: radarLabels,
      datasets: [
        {
          label: "Skills",
          data: radarData,
          backgroundColor: "rgba(153, 102, 255, 0.2)",
          borderColor: "rgba(153, 102, 255, 1)",
          pointBackgroundColor: "rgba(153, 102, 255, 1)"
        }
      ]
    },
    options: {
      scales: {
        r: {
          suggestedMin: 0,
          suggestedMax: 100
        }
      }
    }
  });
};
