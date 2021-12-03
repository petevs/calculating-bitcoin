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
  
    provincialTax () {
  
      const basicPersonalAmount = 19369
      
      const taxBrackets = [
        { amount: 131220, rate: .10 },
        { amount: 157464, rate: 0.12 },
        { amount: 209952, rate: 0.13 },
        { amount: 314928, rate: 0.14 },
        { amount: 314928, rate: 0.15 }
      ]
  
      const taxableIncome = this.income - basicPersonalAmount
  
      let taxPayable = 0
  
      const lastBracket = taxBracket.length - 1
  
      //Add Tax for First Bracket
      taxPayable += taxableIncome * taxBracket[0].rate
  
      //If less than first tax bracket
      if(taxableIncome < taxBracket[0].amount){
        return taxPayable
      }
  
      //If more than first tax bracket
      taxBrackets.forEach((bracket, idx) => {
        if(idx === 0 || idx === lastBracket){ return }
        if(taxableIncome > bracket.amount){
          const taxableAmount = 
          tackBrackets[idx-1].rate
        }
      }
      )
  
  
  
  } 