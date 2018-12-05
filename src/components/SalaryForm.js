import React from 'react';

class SalaryForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      amount: 0,
      amount2: 0,
      deposit: 0,
      months: 0,
      repayments:0
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleMonths = this.handleMonths.bind(this);
  }

  handleChange(event){
    this.setState({amount:event.target.value});
  }

  handleChange2(event){
    this.setState({amount2:event.target.value})
  }

  handleDeposit(event){
    this.setState({deposit:event.target.value})
  }
  handleMonths(event){
    this.setState({months:event.target.value})
  }

  handleSubmit(event){
    // debugger
    event.preventDefault();
    const combinedSalary = parseInt(this.state.amount, 10)+parseInt(this.state.amount2, 10);
    const multipliedSalary = combinedSalary*1000
    const mortgageMultiplier = multipliedSalary*3
    const amount = mortgageMultiplier + (parseInt(this.state.deposit, 10)*1000)
    this.props.onSalarySubmit({amount:amount});
  }

  handleRepayments(event){
    debugger
    const months = parseInt(this.state.months, 10)
    const repayments = (this.state.amount) /months
    this.props.onSalarySubmit({months:months})
    this.props.onSalarySubmit({repayments:repayments})
  }
  render(){
    return (

      <div className="how-much">
      <h4>In £K</h4>
      <p>How much do you make?</p>
      <form className="salary-form" onSubmit={this.handleSubmit}>
      <input type="number" min="0" placeholder="Your salary" value={this.state.amount} onChange={this.handleChange}/>

      <p>How much does your partner make? If applicable</p>
      <input type="number" min="0" placeholder="Partner's salary" value={this.state.amount2} onChange={this.handleChange2}/>

      <p>How much deposit do you currently have?</p>
      <input type="number" placeholder="Deposit" value={this.state.deposit} onChange={this.handleDeposit}/>

      <input type="submit" value="Calculate"/>
      </form>

      </div>
    )
  }


}

export default SalaryForm;
//
// <p>Over how many years would you like to pay over?</p>
// <form className="repayments-form" onSubmit={this.handleMonths}
// <input type="number"
// placeholder="Repayment months"
// value={this.state.months}
// onChange={this.handleMonths}/>
//
// <input type="submit" value="Calculate"/>
// </form>
