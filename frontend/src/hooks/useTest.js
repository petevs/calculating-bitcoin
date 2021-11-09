import { useEffect } from 'react'
import { db } from 'firebase'


const useTest = () => {

    useEffect(() => {
        db.collection('marketData').doc('data').onSnapshot((doc) => {
            const result = doc.data()
            console.log(result)
        })
    }, [])

}

export default useTest