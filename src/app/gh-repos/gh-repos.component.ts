import { Component, OnInit } from '@angular/core';
import { ReposService } from '../repos.service';

@Component({
  selector: 'app-gh-repos',
  templateUrl: './gh-repos.component.html',
  styleUrls: ['./gh-repos.component.css']
})
export class GhReposComponent implements OnInit {

  userRepos!: any;

  constructor (private reposService: ReposService) { }

  ngOnInit(): void {
    this.reposService.getUserRepo().subscribe (
      data => {
        this.userRepos = data 
        console.log (this.userRepos)
      }
    )
  }

}
