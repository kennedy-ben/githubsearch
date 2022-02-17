import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = [];
  repos: any = [];
  username!: string;
  _githubService: any;
  constructor() {
    this._githubService.getUser().subscribe((user: any) => {
      console.log(user);
      this.user = user;
    });
    this._githubService.getRepos().subscribe((repos: any) => {
      // console.log(user);
      this.repos = repos;
    });
  }
  ngOnInit() {
  }
  searchUser() {
    this._githubService.updateUser(this.username);
    this._githubService.getUser().subscribe((user: any) => {
      this.user = user;
    });
    // Console.log('It works');
    this._githubService.getRepos().subscribe((repos: any) => {
      // Console.log(user);
      this.repos = repos;
    });

  }
}


