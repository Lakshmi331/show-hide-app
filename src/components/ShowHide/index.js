import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {
    showFirstName: false,
    showLastName: false,
  }

  showFirstName = () => {
    this.setState(prevState => ({showFirstName: !prevState.showFirstName}))
  }

  showLastName = () => {
    this.setState(prevState => ({showLastName: !prevState.showLastName}))
  }

  render() {
    const {showFirstName, showLastName} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="buttons-container">
          <div className="name-container">
            <button
              className="first-button"
              type="button"
              onClick={this.showFirstName}
            >
              Show/Hide FirstName
            </button>
            {showFirstName && <p className="para">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="last-button"
              type="button"
              onClick={this.showLastName}
            >
              Show/Hide LastName
            </button>
            {showLastName && <p className="para">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
