import { Box } from "@mui/system"
import Chart from 'react-apexcharts'

const RetirementChart = ({ data }) => {

    const series = [
        {
            name: 'Bitcoin Balance',
            data: data.map((item) => {
                return {
                    x: item.year,
                    y: item['bitcoinBalance'],
                }
            }).reverse()
        },
        // {
        //     name: `Total Invested`,
        //     data: data.map((item) => {
        //         return {
        //             x: item.date,
        //             y: Math.round(item.totalDeposits),
        //         }
        //     }).reverse()
        // },

]

const categories = data.map(item => item.year).reverse()


    const defaultOptions = {
        chart: {
          toolbar: {
            // show: false,
            tools: {
                download: false,
            }
          },
          animations: {
            enabled: false,
          }
        },
        dataLabels: {
          enabled: false,
        },
        yaxis: {
          labels: {
            show: true,
            formatter: (value) => { return `$ ${value}`},
          },
          // opposite: true,
        },
        xaxis: {
          type: "datetime",
          categories: categories,
          labels: {
            style: {
              colors: "#fff",
            },
          },
        },
        colors: ["#2E99FE", "#FF2F30"],
        tooltip: {
          x: {
            format: "dd MMM HH:mm",
          },
          theme: "dark",
        },
        annotations: {
        },
        grid: {
          show: false,
          },
        legend: {
          position: "top",
          horizontalAlign: "right",
          labels: {
            colors: "#fff",
          },
        },
        markers: {
          size: 0,
        }
      };

    const options = {
        ...defaultOptions,
    }





    return (
        <Box sx={wrapper}>
        <Chart
            series={series}
            options={options}
            type='area'
            width='100%'
            height="400px"
        />
    </Box>
    )
}

export default RetirementChart

const wrapper = {
    margin: '0 -1rem 0 -1rem',
    '@media (max-width: 768px)': {
      margin: '0 0 0 -1rem'
    }
}