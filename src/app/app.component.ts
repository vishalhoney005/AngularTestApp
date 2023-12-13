import { Component } from '@angular/core';
import { AuthService } from './Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularTestApp';

  constructor(private authsvc:AuthService){

  }


  isloggedIn(){
    return this.authsvc.isloggedIn();
  }
  
  logout(){
    this.authsvc.logout();
  }
}
