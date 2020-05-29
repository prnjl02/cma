export  class AuthService{
loggedIn= false;
username
password
loginDetails(loginDetails){
this.username=loginDetails.email;
this.password=loginDetails.password
}

  isAuthenticated(){
    if(this.username==='pr.com'&&this.password==="1"){
      return this.loggedIn=true;
     }
     else{
      return this.loggedIn=false
     }
  }

}
