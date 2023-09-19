// Write your code here

import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  displayFirstName = () => {
    const {firstName} = this.state
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  displayLastName = () => {
    const {lastName} = this.state
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    let firstNameCard
    if (firstName) {
      firstNameCard = (
        <div className="name-container">
          <p>Joe</p>
        </div>
      )
    } else {
      firstNameCard = null
    }
    let lastNameCard
    if (lastName) {
      lastNameCard = (
        <div className="name-container">
          <p>Jonas</p>
        </div>
      )
    } else {
      lastNameCard = null
    }
    return (
      <div className="background-main">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <button
            type="button"
            className="button"
            onClick={this.displayFirstName}
          >
            Show/Hide Firstname
          </button>
          <button
            type="button"
            className="button"
            onClick={this.displayLastName}
          >
            Show/Hide Lastname
          </button>
        </div>
        <div className="name-cards">
          {firstNameCard}
          {lastNameCard}
        </div>
      </div>
    )
  }
}

export default ShowHide
