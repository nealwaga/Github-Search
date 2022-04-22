import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../services/userservice.service';

@Component({
  selector: 'app-gh-user',
  templateUrl: './gh-user.component.html',
  styleUrls: ['./gh-user.component.css']
})

export class GhUserComponent implements OnInit {

  user: any = []
  repo: any = []
  username!: string

  constructor (private myservice: UserserviceService) {
//finding user    
    this.myservice.findUser ().subscribe (user => {this.user = user;})
//finding repo    
    this.myservice.findRepo ().subscribe (repo => {this.repo = repo;})
  } 

//func for getting user
  getUser () {this.myservice.anUpdate (this.username)
     this.myservice.findUser ().subscribe (user => {this.user = user;});
     this.myservice.findRepo ().subscribe (repo => {this.repo = repo;})
  }  

  ngOnInit(): void {
    
  }

}
