import { db } from 'firebase'
import { useEffect, useContext } from 'react'
import GlobalContext from 'state/GlobalContext'
import { fetchingHistoricalDataSuccess, fetchingMarketDataError, fetchingMarketDataLoading, fetchingMarketDataSuccess } from './marketDataActions'

const useMarketData = () => {

    const { dispatch } = useContext(GlobalContext)

    useEffect(() => {

        dispatch(fetchingMarketDataLoading)

        db.collection('marketData').doc('data').onSnapshot((doc) => {
                const result = doc.data()
                dispatch(fetchingMarketDataSuccess(result))
            },
            (error) => {
                dispatch(fetchingMarketDataError(error))
            })
        
        db.collection('historicalData').doc('usd').onSnapshot((doc) => {
            const result = doc.data()
            dispatch(fetchingHistoricalDataSuccess(result))
            },
            (error) => {
                dispatch(fetchingMarketDataError(error))
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


}

export default useMarketData