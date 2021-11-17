import { Box } from "@mui/system"
import Chart from 'react-apexcharts'
import { Typography, useMediaQuery, TextField, MenuItem, InputAdornment, Divider } from '@mui/material'
import NumberFormat from 'react-number-format'
import { renderToString } from 'react-dom/server'
import { useState } from 'react'

const PortfolioChart = ({ data }) => {

    const [chartType, setChartType] = useState('Portfolio Value')
    
    const handleChartTypeChange = (e) => {
        setChartType(e.target.value)
    }
    

    const mobile = useMediaQuery('(min-width:1024px')

    const categories = data.map(item => item.date).reverse()

    const series = [
        {
            name: `Portfolio Value`,
            data: data.map((item) => {
                return {
                    x: item.date,
                    y: Math.round(item.currentValue),
                    price: Math.round(item.historicalPrice),
                    bitcoinHoldings: item.runningBitcoinBalance
                }
            }).reverse()
        },
        {
            name: `Total Invested`,
            data: data.map((item) => {
                return {
                    x: item.date,
                    y: Math.round(item.totalDeposits),
                }
            }).reverse()
        },

]

    const CustomTooltip = (props) => {
        return (
            <Box sx={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
                <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '.5rem', marginBottom: '.5rem'}}>
                    <Typography variant='body2'>{props.x}</Typography>
                </Box>
                <Typography variant='body1'>Portfolio Value: <NumberFormat displayType='text' value={props.y} prefix='$' thousandSeparator={true} /></Typography>
                <Typography variant='body1'>Price: <NumberFormat displayType='text' value={props.price} prefix='$' thousandSeparator={true} /></Typography>
                <Typography variant='body1'>Bitcoin Holdings: <NumberFormat displayType='text' value={props.bitcoinHoldings} decimalScale={8} fixedDecimalScale={8} /></Typography>
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
        <Box>
            <Box>
                <TextField
                    select
                    value={chartType}
                    onChange={handleChartTypeChange}
                    size='small'
                    sx={{width: '350px'}}
                    InputProps={{
                        startAdornment: (<InputAdornment position='start'>
                            Chart Type:
                        </InputAdornment>),
                    }}
                >
                    <MenuItem value='Portfolio Value'>Portfolio Value</MenuItem>
                    <MenuItem value='Bitcoin Holdings'>Bitcoin Holdings</MenuItem>
                </TextField>
            </Box>
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

export default PortfolioChart

const wrapper = {
    margin: '0 0 0 -1rem'
}