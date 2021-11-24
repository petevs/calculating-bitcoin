import { Route} from 'react-router-dom'
import CalculatorsMain from './CalculatorsMain'
import RetireOnBitcoin from './retireOnBitcoin/RetireOnBitcoin'

const Calculators = () => {
    return (
        <>
            <Route exact path='/calculators' component={CalculatorsMain} />
            <Route path='/calculators/retire-on-bitcoin' component={RetireOnBitcoin}/> 
        </>
    )
}

export default Calculators
