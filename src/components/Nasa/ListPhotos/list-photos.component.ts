import { Component, Input, OnInit } from '@angular/core';
import { Photo } from '../shared/nasa.types';

@Component({
  selector: 'app-list-photos',
  templateUrl: './list-photos.component.html',
  styleUrls: ['./list-photo.component.css'],
})
export class ListPhotosComponent implements OnInit {
  @Input('photos') photos: Photo[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
