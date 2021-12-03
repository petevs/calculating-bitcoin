export class PaymentDetails {
    constructor(pv, n, py, iy) {
      this.a = pv
      this.r = iy / py
      this.n = n * py
      this.py = py
    }
  
    loanPayment() {
      return this.a / ((((1 + this.r) ** this.n) - 1) / (this.r * (1 + this.r) ** this.n))
    }
  
    interestOnlyPayment() {
      return this.a * this.r
    }
  
    amortizationSchedule() {
      let amortizationTable = [
        {
          id: 0,
          period: 0,
          interestPayment: 0,
          principlePayment: 0,
          balance: this.a
        }
      ]
  
      const totals = {
        interest: 0,
        principle: 0
      }
  
      for (let i = 0; i < this.n; i++) {
  
        const previous = amortizationTable[i]
        const payment = this.loanPayment()
        const interest = previous['balance'] * this.r
        const principle = payment - interest
        const balance = previous['balance'] - principle
  
        //Handle Totals
        totals.interest = totals.interest + interest
        totals.principle = totals.principle + principle
  
        amortizationTable.push({
          id: i + 1,
          period: i + 1,
          interestPayment: interest,
          principlePayment: principle,
          balance: balance
        })
      }
  
      return {
        table: amortizationTable[this.n],
        summary: totals
        }
    }
  
  }
  
  export class IncomeTax {
    constructor(income) {
      this.income = income
    }
  
    calculateTax () {

        const taxableIncome = this.income - this.personalAmount
        
        let taxPayable = 0
  
        this.taxBrackets.forEach(bracket => {
  
          //If taxable income is greater than the tax bracket
          if(taxableIncome > bracket.to){
              const currentTaxPayable = (bracket.to - bracket.from) * bracket.rate
              taxPayable += currentTaxPayable
              return
          }
  
          if(taxableIncome < bracket.to && taxableIncome > bracket.from){
              const currentTaxPayable = (taxableIncome - bracket.from) * bracket.rate
              taxPayable += currentTaxPayable
              return
          }
  
          if(bracket.to === undefined && taxableIncome > bracket.from){
              const currentTaxPayable = (taxableIncome - bracket.from) * bracket.rate
              taxPayable += currentTaxPayable
              return
          }
  
        })
  
        return taxPayable
  
    }
  
  } 