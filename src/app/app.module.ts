import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpencvComponent } from './opencv/opencv.component';
import { HomeComponent } from './home/home.component';

import { ImageUploaderModule } from 'ngx-image-uploader-next';

@NgModule({
  declarations: [
    AppComponent,
    OpencvComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ImageUploaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
