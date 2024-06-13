// script.js
const invoiceChartCanvas = document.getElementById('invoiceChart').getContext('2d');
const salesForcastChartCanvas = document.getElementById('salesForcastChart').getContext('2d');

const invoiceChart = new Chart(invoiceChartCanvas, {
  type: 'line',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'This week',
      data: [20, 40, 60, 50, 70, 80, 60],
      borderColor: '#dc3545',
      borderWidth: 2
    },
    {
      label: 'Last week',
      data: [40, 30, 50, 70, 60, 50, 40],
      borderColor: '#28a745',
      borderWidth: 2
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

const salesForcastChart = new Chart(salesForcastChartCanvas, {
  type: 'bar',
  data: {
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    datasets: [{
      label: 'Weighted',
      data: [50, 70, 40, 90, 80, 60, 70],
      backgroundColor: '#ffc107',
      borderWidth: 1
    },
    {
      label: 'Won',
      data: [30, 50, 20, 60, 50, 40, 50],
      backgroundColor: '#007bff',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});

document.getElementById('loading-more').addEventListener('click', function() {
  // Replace this with your actual loading logic
  alert('Loading more data...');
});