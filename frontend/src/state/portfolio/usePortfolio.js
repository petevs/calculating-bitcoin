import { db } from 'firebase'
import { useContext, useEffect } from 'react'
import GlobalContext from 'state/GlobalContext'
import { fetchingPortfolioSuccess } from './portfolioActions'

const usePortfolio = () => {

    const { state, dispatch } = useContext(GlobalContext)
    
        useEffect(() => {

            if(state.user.uid){
                db.collection('portfolios').doc(state.user.uid).onSnapshot((doc) => {
                    const result = doc.data()
                    
                    if(result){
                        dispatch(fetchingPortfolioSuccess(result))
                    }
            
                })
            }

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [state.user.uid])
    
}

export default usePortfolio