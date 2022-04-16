import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user-service/user.service';
//import { RepositoryService } from '../../repository-service/repository-service.service';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.css']
})

export class RepositoryComponent implements OnInit {
  repos:any;
  profile:any;
  userName!:string;

  constructor(
    private userService:UserService, private repositoryService:RepositoryService
  ) { }
  findRepo() {
    this.repositoryService.updateUser(this.userName);
    this.repositoryService.getRepoInformation()
    this.repos = this.repositoryService.repos;
  }



  ngOnInit() {
  }

}

//export class RepositoryComponent implements OnInit {
//
//  constructor() { }
//
//  ngOnInit(): void {
//  }
//
//}
