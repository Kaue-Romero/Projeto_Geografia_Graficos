import Chart from 'react-apexcharts';

function BarChart() {
        const options = {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
        };
        
        const mockData = {
            labels: {
                categories: ['Italianos', 'Portugueses', 'Diversos', 'Espanhóis', 'Alemães', 'Japoneses', 'Russos']
            },
            series: [
                {
                    name: "Imigrantes (em mil)",
                    data: [1565.835, 1470.687, 674, 210, 190, 118]                   
                }
            ]
        };

        return (
            <Chart
                options={{...options, xaxis: mockData.labels}}
                series={mockData.series}
                type="bar"
                height="240"
            />
        );
}

export default BarChart;