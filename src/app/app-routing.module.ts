import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OpencvComponent } from './opencv/opencv.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'opencv', component: OpencvComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
