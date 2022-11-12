import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-users-add',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string
  team_id: string
  score: string

  constructor(
    private loginService: LoginService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {}

  async submitDates(event?: InfiniteScrollCustomEvent) {
    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.loginService.login(this.name, this.team_id, this.score).subscribe(
      (res) => {
        console.log(res);
        loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
}
