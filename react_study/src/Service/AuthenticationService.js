import axios from 'axios'

class AuthenticationService {

  // 서버에 username, password를 넘겨줌
  executeJwtAuthenticationService(username, password) {
    return axios.post('http://localhost:8081/authenticate', {
      username,
      password
    })
  }

  registerSuccessfulLoginForJwt(username, token) {
    console.log("===registerSuccessfulLoginForJwt===")
    localStorage.setItem('token', token);
    localStorage.setItem('authenticatedUser', username);
    this.setupAxiosInterceptors();
  }

  //axios request에 담아주기
  setupAxiosInterceptors() {
    axios.interceptors.request.use(
      config => {
        const token = localStorage.getItem('token');
        if (token) {
          config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
      },
      error => {
        Promise.reject(error)
      });
  }

  logout() {
    localStorage.removeItem("authenticatedUser");
    localStorage.removeItem("token");
  }

  //로그인시 토큰값 넘어왔는지 확인
  isUserLoggedIn() {
    const token = localStorage.getItem('token');
    console.log("===UserloggedInCheck===");
    console.log(token);

    if (token) {
      return true;
    }
    return false;
  }

  //로그인시 username값 넘어왔는지 확인
  getLoggedInUserName() {
    let user = localStorage.getItem('authenticatedUser');
    if(user===null) return '';
    return user;
  }

}

export default new AuthenticationService()