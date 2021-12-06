import { Component, OnInit } from '@angular/core';
import {
  Photo,
  Rover,
  SearchRequest,
} from '../../components/Nasa/shared/nasa.types';
import { NasaService } from '../../services/nasa.service';
import {
  DEFAULT_ROVER,
  DEFAULT_NASA_REQUEST,
} from '../../shared/shared.default';

@Component({
  selector: 'app-page-mars-photos',
  templateUrl: './mars-photos.component.html',
  styleUrls: ['./mars-photos.component.css'],
})
export class MarsPhotosComponent implements OnInit {
  public photos: Photo[] = [];
  public roverSelected: Rover = DEFAULT_ROVER;
  private searchRequest: SearchRequest[] = DEFAULT_NASA_REQUEST;
  constructor(private nasaService: NasaService) {}
  ngOnInit(): void {
    console.log('MarsPhotosComponent ngOnInit');
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.nasaService.searchPhotos(this.searchRequest).subscribe((result) => {
      console.log('loadPhotos ', result.photos);
      this.photos = result.photos;
    });
  }

  filterPhotos(cameraName: string) {
    if (cameraName === 'all') {
      this.loadPhotos();
      return;
    }
    this.photos = this.photos.filter(
      (photo) => photo.camera.name === cameraName
    );
  }

  searchPhotos(searchRequest: SearchRequest[]) {
    this.cleanPhotos();
    console.log('MarsPhotosComponent searchPhotos ', searchRequest);
    this.nasaService.searchPhotos(searchRequest).subscribe((result) => {
      console.log('searchPhotos ', result);
      this.photos = result.photos;
    });
  }

  cleanPhotos() {
    this.photos = [];
  }
}
