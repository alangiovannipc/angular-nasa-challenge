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
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.nasaService.getPhotos().subscribe((photos) => {
      console.log('loadPhotos ', photos);
      this.photos = photos;
    });
  }

  filterPhotos(cameraName: string) {
    if (cameraName.length === 0) return;
    this.photos = this.photos.filter(
      (photo) => photo.camera.name === cameraName
    );
  }
}
