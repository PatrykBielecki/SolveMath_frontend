import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Directive({
  selector: '[appIntegerInput]'
})
@Component({
  selector: 'app-users-add',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string = 'STUDENT6';
  team_name: string = 'STUDENT6';
  users = [];

  constructor(
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
    private router: Router,
    public nav: NavController

  ) { }

  ngOnInit() {}

  loginToHome(username, team_name) {
    this.loginService.login(username, team_name).subscribe(
      (res) => {
        let userId = Object.values(res)[0];
        let teamId = Object.values(res)[1];
        let teamName = Object.values(res)[2];
        let userName = Object.values(res)[3];
        this.nav.navigateForward('/home', { state: [userName, teamName, userId, teamId]});

      },
      (err) => {
        console.log(err);
      }
    );
  }

}
