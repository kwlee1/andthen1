import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../story.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Entry } from '../entry';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	id;
	story;
	entry=new Entry();

	constructor(private _storyService: StoryService, private _route: ActivatedRoute, private _router: Router) {
		this._route.paramMap.subscribe(params=>{
			this.id=params.get("id");
			this._storyService.one(this.id, res=>{
				this.story=res;
			})
		})
	}

	ngOnInit() {}

	addEntry(){
		var user=this._storyService.getUsername();
		if(!user){
			user="Anonymous";
		}
		this.entry.user=user;
		this.story.entries.push(this.entry);
		console.log(this.story);
		this._storyService.update(this.story, res=>{
			this._storyService.one(this.id, res=>{
				this.story=res;
			})
			this.entry=new Entry();
		})
	}
}
