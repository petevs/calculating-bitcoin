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
        <Box sx={containerStyle}>
            <Box sx={wrapper}>
                <Chart
                    series={series}
                    options={options}
                    type='area'
                    width='100%'
                    height="400px"
                />
            </Box>
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

const containerStyle = {
    '@media (min-width: 768px)': {
      backgroundColor: '#212B36',
      boxShadow: 'rgb(0 0 0 / 24%) 0px 0px 2px 0px, rgb(0 0 0 / 24%) 0px 16px 32px -4px',
      borderRadius: '1rem',
      padding: '2rem',
    }
  
  
  }