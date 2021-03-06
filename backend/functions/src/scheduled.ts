import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import axios from 'axios'
import * as moment from 'moment'

admin.initializeApp()

const db = admin.firestore()

export const updateMarketData = functions
    .runWith({ memory: '1GB', timeoutSeconds: 300})
    .pubsub.schedule('*/5 * * * *').onRun( async (context) => {

        let result: any

        const { data } = await axios.get('https://api.coingecko.com/api/v3/coins/bitcoin?localization=cad')
        
        result = data

        return db.collection('marketData').doc('data').set({...result.market_data})

    })

export const updateHistoricalDataCAD = functions
    .runWith({ memory: '1GB', timeoutSeconds: 300})
    .pubsub.schedule('0 */4 * * *').onRun( async (context) => {


            let result: any
    
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=cad&days=3650&interval=daily`)
    
            result = data
    
            let historical = {}
    
            result.prices.forEach( (item: any) => {
    
                const friendlyDate:any = moment(item[0]).format('YYYY-MM-DD')
    
                historical = {
                    ...historical,
                    [friendlyDate]: item[1]
                }
            })
    
            return db.collection('historicalData').doc('cad').update(historical)

    })

export const updateHistoricalDataUSD = functions
    .runWith({ memory: '1GB', timeoutSeconds: 300})
    .pubsub.schedule('0 */4 * * *').onRun( async (context) => {


            let result: any
    
            const { data } = await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=3650&interval=daily`)
    
            result = data
    
            let historical = {}
    
            result.prices.forEach( (item: any) => {
    
                const friendlyDate:any = moment(item[0]).format('YYYY-MM-DD')
    
                historical = {
                    ...historical,
                    [friendlyDate]: item[1]
                }
            })
    
            return db.collection('historicalData').doc('usd').update(historical)

    })