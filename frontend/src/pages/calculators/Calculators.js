import { Route} from 'react-router-dom'
import CalculatorsMain from './CalculatorsMain'
import RetirementCalc from './retireOnBitcoin/RetirementCalc'
import SpeculativeAttack from './speculativeAttack/SpeculativeAttack'
import TaxLiability from './taxLiability/TaxLiability'
import TradePreview from './tradePreview/TradePreview'

const Calculators = () => {
    return (
        <>
            <Route exact path='/calculators' component={CalculatorsMain} />
            <Route path='/calculators/retire-on-bitcoin' component={RetirementCalc} />
            <Route path='/calculators/tax-liability' component={TaxLiability} />
            <Route path='/calculators/speculative-attack' component={SpeculativeAttack} />
            <Route path='/calculators/trade-preview' component={TradePreview} />
        </>
    )
}

export default Calculators
