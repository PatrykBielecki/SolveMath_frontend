import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  username: string = 'STUDENT6';
  teamName: string = 'STUDENT6';

  constructor(private router: Router) {
    if (router.getCurrentNavigation().extras.state) {
      const loginData = this.router.getCurrentNavigation().extras.state;
      console.log(loginData);
      this.username = Object.values(loginData)[0];
      this.teamName = Object.values(loginData)[1];
    }
  }

  goToProductDetails() {
    this.router.navigate(['/stats']);
  }

  ngOnInit() {
  }

}
