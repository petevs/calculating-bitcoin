import { Box } from "@mui/system"
import Chart from 'react-apexcharts'
import { TextField, MenuItem, InputAdornment, RadioGroup, FormControlLabel, Radio, Typography } from "@mui/material"
import { renderToString } from 'react-dom/server'
import { useState } from 'react'
import Bitcoin from "components/Bitcoin"
import Currency from "components/Currency"

const RetirementChart = ({ data, reducerState }) => {

  console.log(reducerState)

  const [chartType, setChartType] = useState('bitcoinBalance')
  const [xAxisType, setXAxisType] = useState('year')
    
  const handleChartTypeChange = (e) => {
      setChartType(e.target.value)
  }

  const handleChartName = (chartName) => {
    switch(chartName) {
        case ('portfolioValue'):
            return 'Portfolio Value'
        case ('bitcoinSold'):
            return 'Bitcoin Sold'
        case ('inflationAdjustedIncome'):
            return 'Payment (Inflation Adjusted)'
        case ('bitcoinPrice'):
            return 'Bitcoin Prices'
        default:
            return 'Bitcoin Holdings'
    }
}

console.log(chartType)
const handleYAnnotation = (chartName) => {
  switch(chartName) {
    case ('portfolioValue'):
      return {
        y: reducerState.results.startingPortfolioValue,
        y2: reducerState.results.portfolioValueAtRetirement,
      }
    default:
      return {
        y: reducerState.currentBitcoinHoldings,
        y2: reducerState.results.bitcoinRequiredUsingPriceTarget,
      }
  }
}

const formatY = (chartType, x) => {
  switch(chartType) {
    case ('bitcoinBalance'):
      return Math.round(x  * 100000000) / 100000000
    case ('bitcoinSold'):
      return Math.round(x  * 100000000) / 100000000
    default:
      return Math.round(x)
  }
}

    const series = [
        {
            name: handleChartName(chartType),
            data: data.map((item) => {
                return {
                    x: item[xAxisType],
                    y: formatY(chartType, item[chartType]),
                }
            })
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

const categories = data.map(item => item[xAxisType])

const CustomTooltip = (props) => {
  return (
    <Box sx={{padding: '1rem', display: 'grid', gridTemplateColumns: '1fr', alignItems: 'start'}}>
      <Box sx={{borderBottom: '1px solid rgba(255, 255, 255, 0.12)', paddingBottom: '.5rem', marginBottom: '.5rem'}}>
          <Typography variant='body2'>{props.x}</Typography>
      </Box>
      <Typography variant='body1'>
        <span style={{paddingRight: '.15rem'}}>{props.chartType}</span>
        {
          props.chartType === 'Bitcoin Sold' || props.chartType === 'Bitcoin Holdings'
          ? <Bitcoin value={props.y} />
          : <Currency value={props.y} />
        }
      </Typography>
    </Box>
  )
}

const tooltip = {
  custom: function({series, seriesIndex, dataPointIndex, w}){
      const data = w.globals.initialSeries[seriesIndex].data[dataPointIndex]
      const seriesName = w.globals.seriesNames[0]
      return renderToString(<CustomTooltip {...data} chartType={seriesName} />)
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
            formatter: (value) => Math.round(value),
          },
          // opposite: true,
        },
        xaxis: {
          type: xAxisType === 'year' ? "numeric" : "",
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
          xaxis: [
            {
              x: xAxisType === 'year' ? reducerState.yearOfRetirement() : reducerState.retirementAge,
              borderColor: '#fff',
              label: {
                orientation: 'vertical',
                text: 'Retirement'
              }
            }
          ],
          yaxis: [
            {
              y: handleYAnnotation(chartType).y,
              y2: handleYAnnotation(chartType).y2,
              borderColor: '#fff',
              label: {
                orientation: 'horizontal',
                text: 'Bitcoin Required'
              }
            }
          ]
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
              <Box sx={{paddingBottom: '1rem'}}>
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
                    <MenuItem value='bitcoinBalance'>Bitcoin Holdings</MenuItem>
                    <MenuItem value='portfolioValue'>Portfolio Value</MenuItem>
                    <MenuItem value='bitcoinSold'>Bitcoin Sold</MenuItem>
                    <MenuItem value='bitcoinPrice'>Bitcoin Price</MenuItem>
                    <MenuItem value='inflationAdjustedIncome'>Payment (Inflation Adjusted)</MenuItem>
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
            <Box sx={{display: 'grid', justifyContent: 'center'}}>
              <RadioGroup 
                  row sx={radioStyle}
                  value={xAxisType}
                  onChange={(e) => setXAxisType(e.target.value)}
              >
                  <FormControlLabel value='age' control={<Radio />} label='Age' />
                  <FormControlLabel value='year' control={<Radio />} label='Year' />
              </RadioGroup>
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

  const radioStyle = {
    '& .MuiSvgIcon-root': {
      fontSize: '1rem',
    },
    '& .MuiFormControlLabel-label': {
        fontSize: '.875rem',
        color: '#fff'
    }
}