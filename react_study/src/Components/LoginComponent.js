import React, {Component} from 'react'
import AuthenticationService from '../Service/AuthenticationService.js'
import {withRouter} from "react-router-dom";

class LoginComponent extends Component {

  constructor(props) {
    super(props)

    this.state = {
      username: localStorage.getItem("authenticatedUser") || '',
      password: '',
      token: localStorage.getItem("token") || '',
      hasLoginFailed: false,
      showSuccessMessage: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginClicked = this.loginClicked.bind(this)
  }

  handleChange(event) {
    this.setState(
      {
        [event.target.name]
          :event.target.value
      }
    )
  }

  //로그인 버튼 클릭시 토큰값 생성 및 토큰값 서버로 넘겨주기
  loginClicked() {
    AuthenticationService
      .executeJwtAuthenticationService(this.state.username, this.state.password)
      .then((response) => {
        console.log(response)
        this.setState({
          token: response.data.token
        });
        AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,this.state.token)
        this.props.history.push(`/welcome/${this.state.username}`)
      }).catch( () =>{
      this.setState({showSuccessMessage:false})
      this.setState({hasLoginFailed:true})
    })
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="card col-md-6 offset-md-3 offset-md-3">
              <h3 className="text-center">Login</h3>
              <div className="card-body">
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
              </div>
              <label>User Id</label>
              <input type="text" placeholder="Id를 입력하세요" name="username" value={this.state.username} onChange={this.handleChange}/> <br/>
              <label>Password</label>
              <input type="password" placeholder="Pw를 입력하세요" name="password" value={this.state.password}  onChange={this.handleChange}/><br/>
              <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginComponent);