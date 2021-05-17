import Chart from 'react-apexcharts';

function BarChart2() {
        const options = {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
        };
        
        const mockData = {
            labels: {
                categories: ['2006', '2007', '2008', '2009', '2010', '2011', '2013', '2014', '2015']
            },
            series: [
                {
                    name: "Imigrantes",
                    data: [45.124, 39.679, 40.128, 87.987, 54.876, 74.943, 99.038, 107.989, 119.431, 117.745]                   
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

export default BarChart2;