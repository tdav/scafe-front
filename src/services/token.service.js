class TokenService {

  isAutorize() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) return true; else return false;
  }

  getLocalAccessToken() {
    const user = JSON.parse(sessionStorage.getItem("user"));
    return user?.accessToken;
  }

  updateLocalAccessToken(token) {
    let user = JSON.parse(sessionStorage.getItem("user"));
    user.accessToken = token;
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(sessionStorage.getItem("user"));
  }

  getToken() {
    const user = JSON.parse(sessionStorage.getItem("user"))
 

    if (user==null)
      return '';
    else
      return user.data.token;
  }


  setUser(user) {
    console.log(JSON.stringify(user));
    sessionStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    sessionStorage.removeItem("user");
  }
}

export default new TokenService();