import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login.service';

@Directive({
  selector: '[appIntegerInput]'
})
@Component({
  selector: 'app-users-add',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  name: string;
  team_id: string;
  score: string;

  constructor(
    private loginService: LoginService,
    private loadingCtrl: LoadingController,
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
        //route here
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }
}
