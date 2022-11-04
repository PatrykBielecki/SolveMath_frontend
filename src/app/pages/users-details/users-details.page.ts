import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.page.html',
  styleUrls: ['./users-details.page.scss'],
})
export class UsersDetailsPage implements OnInit {
  users = null;

  constructor(
    private route: ActivatedRoute,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.usersService.getEndpointDetails(id).subscribe((res) => {
      this.users = res[0];
    });
  }

  openHomepage(url) {
    window.open(url, '_blank');
  }
}
