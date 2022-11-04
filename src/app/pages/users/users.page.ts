import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';
import { ApiResult } from 'src/app/services/inventory.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  users = []
  filterTerm: string;

  constructor(
    private usersService: UsersService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.loadUsers();
  }

  async loadUsers(event?: InfiniteScrollCustomEvent) {
      const loading = await this.loadingCtrl.create({
        message: 'Loading..',
        spinner: 'bubbles',
      });
      await loading.present();

      this.usersService.getAllEndpoints().subscribe(
        (res) => {
          loading.dismiss();
          for(let i=0; i<res.length; i++){
            this.users.push(res[i]);
          }
        },
        (err) => {
          console.log(err);
          loading.dismiss();
        }
      );
    }
}
