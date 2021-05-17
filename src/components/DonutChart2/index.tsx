import Chart from 'react-apexcharts';

function DonutChart2() {
    const mockData = {
        series: [45.124, 39.679, 40.128, 87.987, 54.876, 74.943, 99.038, 107.989, 119.431, 117.745] ,
        labels: [' 2006', ' 2007', ' 2008', ' 2009', ' 2010', ' 2011', '2012', ' 2013', ' 2014', ' 2015']
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

export default DonutChart2;