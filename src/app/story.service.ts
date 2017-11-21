import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StoryService {

	username=null;

	constructor(private _http: Http) { }

	getUsername(){
		return this.username;
	}
	setUsername(username){
		this.username=username;
	}

	all(callback){
		this._http.get('http://52.15.173.121/stories').subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	one(id, callback){
		this._http.get('http://52.15.173.121/stories/'+id).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	create(data, callback){
		this._http.post('http://52.15.173.121/stories', data).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	update(data, callback){
		this._http.put('http://52.15.173.121/stories/'+data._id, data).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	destroy(id, callback){
		this._http.delete('http://52.15.173.121/stories/'+id).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
};

}
