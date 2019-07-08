import React from 'react';
import {withRouter} from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  
  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <div className="session-form">
          <div className="logo-container">
            <img className="session-logo" src="https://help.basecamp.com/images/logo-bc.png"/>
          </div>
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="login-form-box">
              <h1>Log in to Basecamp</h1>
              <br/>
              <button type='submit' className='demo-login-button'>Use        

                <img height='30' alt='DEMO' src="https://cfblog-58e9.kxcdn.com/wp-content/uploads/2015/10/content1-1024x626.jpg"/>
               
                   Signin</button>
              <br />
              Or, sign up
              {this.renderErrors()}
              <div className="login-form">
                <br />
                <label className="field-label">Email:
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                  />
                </label>
                <br />
                <label>Password:
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                  />
                </label>
                <br />
                <input className="session-submit" type="submit" value={this.props.formType} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
