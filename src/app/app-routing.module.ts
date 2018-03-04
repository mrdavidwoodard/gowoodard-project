import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/aboutme/aboutme.component';
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "aboutme", component: AboutMeComponent },
    { path: "projects", component: ProjectsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],

})
export class AppRoutingModule {} 