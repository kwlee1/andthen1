import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NewComponent } from './main/new/new.component';
import { ShowComponent } from './main/show/show.component';
import { AboutComponent } from './main/about/about.component';

const routes: Routes = [
	{path: "", pathMatch: "full", redirectTo: "/about"},
	{path: "", component: MainComponent, children:[
		{path: "about", pathMatch: "full", component:AboutComponent },
		{path: "stories/new", pathMatch: "full", component: NewComponent},
		{path: "stories/:id", component: ShowComponent}
	]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
