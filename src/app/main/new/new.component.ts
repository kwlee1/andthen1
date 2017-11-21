import { Component, OnInit } from '@angular/core';
import { Story } from '../story';
import { Entry } from '../entry';
import { StoryService } from '../../story.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

	story=new Story();
	entry=new Entry();

	constructor(private _storyService: StoryService, private _router: Router) { }

	ngOnInit() {
	}

	create(){
		var user=this._storyService.getUsername();
		if(!user){
			user="Anonymous";
		}
		this.story.author=user;
		this.entry.user=user;
		this.story.entries.push(this.entry);
		this._storyService.create(this.story, res=>{
			this._router.navigateByUrl("/stories/"+res._id);
		})
	}

}
