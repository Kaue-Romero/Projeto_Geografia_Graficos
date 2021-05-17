import Chart from 'react-apexcharts';

function DonutChart() {
    const mockData = {
        series: [1565.835, 1470.687, 674.318, 644.469, 210.825, 190.282, 118.624],
        labels: ['Italianos', 'Portugueses', 'Diversos', 'Espanhóis', 'Alemães', 'Japoneses', 'Russos']
    }

    const options = {
        legend: {
            show: true
        }
    }
    return (
        <Chart
            options={{ ...options, labels: mockData.labels }}
            series={mockData.series}
            type="donut"
            height="240"
        />
    );
}

export default DonutChart;