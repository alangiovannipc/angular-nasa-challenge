import { Component, OnInit } from '@angular/core';
import { Photo } from '../../components/Nasa/shared/nasa.types';
import { NasaService } from '../../services/nasa.service';

@Component({
  selector: 'app-page-mars-photos',
  templateUrl: './mars-photos.component.html',
  styleUrls: ['./mars-photos.component.css'],
})
export class MarsPhotosComponent implements OnInit {
  public photos: Photo[] = [];
  constructor(private nasaService: NasaService) {}
  ngOnInit(): void {
    console.log('MarsPhotosComponent ngOnInit');
    this.nasaService.getPhotos().subscribe((photos) => {
      console.log('Photos ', photos);
    });
  }
}
