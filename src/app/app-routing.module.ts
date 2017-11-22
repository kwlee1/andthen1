import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewComponent } from './main/new/new.component';
import { ShowComponent } from './main/show/show.component';
import { AboutComponent } from './main/about/about.component';

const routes: Routes = [
	{path: "", component: MainComponent, children:[
		{path: "stories/new", pathMatch: "full", component: NewComponent},
		{path: "stories/:id", component: ShowComponent}
	]},
	{path: "about", pathMatch: "full", component:AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
