import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

	name="";
	username;
	showlogin=false;

	constructor(private _storyService: StoryService) { }

	ngOnInit() {
		this.username=this._storyService.getUsername();
	}

	logout(){
		this.username=null;
		this._storyService.setUsername(this.username);
	}

	login(){
		this._storyService.setUsername(this.name);
		this.username=this._storyService.getUsername();
		this.name="";
		this.showlogin=false;
	}
}
