import React, {Component} from 'react';
import SalaryForm from '../components/SalaryForm';
// import DisplayResult from '../components/DisplayResult';
import Header from '../components/Header'

class MortgageBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      allowed: 0,

    }
    this.handleSalarySubmit = this.handleSalarySubmit.bind(this);
  }

  handleSalarySubmit(submittedSalary){
    // debugger
    submittedSalary.id = Date.now();
    const allowedAmount = (submittedSalary.amount)
    this.setState({allowed:allowedAmount})
    // debugger
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('MortgageBox this.state:',this.state);
  }

  render(){
    return(
      <div className="mortgage-box">
      <Header />
      <div className="all">
      <SalaryForm className="form" onSalarySubmit={this.handleSalarySubmit} />
      <div className="borrow">
      <p>You can borrow £{this.state.allowed}</p>
      </div>
      </div>
      </div>
    )
  }
}

export default MortgageBox;
