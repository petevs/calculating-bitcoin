import { Box } from "@mui/system"
import Chart from 'react-apexcharts'
import { Typography, useMediaQuery } from '@mui/material'
import NumberFormat from 'react-number-format'
import { Button } from "@mui/material"
import { renderToString } from 'react-dom/server'

const PortfolioChart = ({ data }) => {

    console.log(data)

    const mobile = useMediaQuery('(min-width:1024px')

    const categories = data.map(item => item.date).reverse()

    const series = [{
        name: `Portfolio Value`,
        data: data.map((item) => {
            return {
                x: item.date,
                y: Math.round(item.currentValue),
                price: Math.round(item.historicalPrice),
            }
        }).reverse()
    }]

    const CustomTooltip = (props) => {
        return (
            <Box sx={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
                <Typography variant='body1'>Portfolio Value: <NumberFormat displayType='text' value={props.y} prefix='$' thousandSeparator={true} /></Typography>
                <Typography variant='body1'>Price: <NumberFormat displayType='text' value={props.price} prefix='$' thousandSeparator={true} /></Typography>
            </Box>
        )
    }


    const tooltip = {
        custom: function({series, seriesIndex, dataPointIndex, w}){
            const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
            return renderToString(<CustomTooltip {...data} />)
        }
    }


    const customOptions = {
        yaxis: {
              show: mobile ? true : false,
        }
      }
    
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
                formatter: function (value) {
                  return "$" + Math.round(value);
                },
                type: 'numeric',
                // style: {
                //   colors: ["#fff"],
                // },
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
              ...tooltip,
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
            ...customOptions
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

export default PortfolioChart

const wrapper = {
    margin: '0 0 0 -1rem'
}