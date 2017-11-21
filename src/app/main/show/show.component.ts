import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../story.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

	id;
	story;

	constructor(private _storyService: StoryService, private _route: ActivatedRoute, private _router: Router) {
		this._route.paramMap.subscribe(params=>{
			this.id=params.get("id");
		})
	}

	ngOnInit() {
		this._storyService.one(this.id, res=>{
			this.story=res;
		})
	}

}
