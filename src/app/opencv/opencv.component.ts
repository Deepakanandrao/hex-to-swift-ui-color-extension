import { Component, OnInit } from '@angular/core';
import { ImageUploaderOptions, FileQueueObject } from 'ngx-image-uploader-next';
//https://www.npmjs.com/package/ngx-image-uploader-next
@Component({
  selector: 'app-opencv',
  templateUrl: './opencv.component.html',
  styleUrls: ['./opencv.component.scss']
})
export class OpencvComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  options: ImageUploaderOptions = {
    thumbnailHeight: 150,
    thumbnailWidth: 150,
    uploadUrl: './',
    allowedImageTypes: ['image/png', 'image/jpeg'],
    maxImageSize: 3
  };

  onUpload(file: FileQueueObject) {
    console.log(file.response);
  }
}
