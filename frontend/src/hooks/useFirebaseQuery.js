import { db } from 'firebase'

const useFirebaseQuery = () => {

    const getMarketData = () => {
        db.collection('marketData').doc('data').onSnapshot((doc) => {
            const result = doc.data()
        })
    }

    return { getMarketData }
}

export default useFirebaseQuery