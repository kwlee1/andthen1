import { Component, OnInit } from '@angular/core';
import { StoryService } from '../story.service';

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
	constructor(private _storyService: StoryService) { }

	ngOnInit() {
		this._storyService.all(res=>{
			this.stories=res;
			this.displayed=this.stories;
		})
	}

	filter(){
		this.displayed=this.stories.filter(story=>story[this.filterparams].includes(this.search))
	}
}
