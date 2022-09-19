import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Token } from "../../models/token.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: "",
    password: ""
  };
  token?:Token;
  t:string = "";
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }else{
      this.retrieveToken();
    }
  }

  retrieveToken():void{
    this.authService.getRequestToken()
    .subscribe(
      data => {
        this.token = data;
        console.log('retrieveToken()');
        console.log(this.token?.request_token);
        this.t = this.token?.request_token||'';
      },
      error => {
        console.log(error)
      });
  }

  async onSubmit() {
    const { username, password } = this.form;
    console.log(this.token?.request_token);

    this.authService.login(username, password, this.t)
    .subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void{
    window.location.reload();
  }

  getLoggedIn(){
    return this.isLoggedIn;
  }
}
