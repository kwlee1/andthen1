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
		this._http.get('/belts').subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	one(id, callback){
		this._http.get('/belts/'+id).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	create(data, callback){
		this._http.post('/belts', data).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	update(data, callback){
		this._http.put('/belts/'+data._id, data).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
	};
	destroy(id, callback){
		this._http.delete('/belts/'+id).subscribe(
			res=>{callback(res.json())},
			err=>{callback(err.json())}
		);
};

}
