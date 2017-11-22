import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

	stories;
	displayed;
	search="";
	filterparams="title"
	constructor(private _storyService: StoryService, private _router: Router) {
		this._router.events.subscribe(event=>{
			this._storyService.all(res=>{
				this.stories=res;
				this.displayed=this.stories.filter(story=>story[this.filterparams].includes(this.search));
			})
		})
	}

	ngOnInit() {

	}

	filter(){
		this.displayed=this.stories.filter(story=>story[this.filterparams].includes(this.search))
	}
}
