import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewComponent } from './main/new/new.component';
import { ShowComponent } from './main/show/show.component';

const routes: Routes = [
	{path: "", component: MainComponent, children:[
		{path: "stories/new", pathMatch: "full", component: NewComponent},
		{path: "stories/:id", component: ShowComponent}
	]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
