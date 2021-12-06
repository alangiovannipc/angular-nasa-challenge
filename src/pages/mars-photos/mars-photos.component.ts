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
  public page: number = 1;
  constructor(private nasaService: NasaService) {}
  ngOnInit(): void {
    this.loadPhotos();
  }

  loadPhotos(): void {
    this.nasaService
      .searchPhotos(this.searchRequest, this.page)
      .subscribe((result) => {
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
    this.searchRequest = searchRequest;
    this.nasaService
      .searchPhotos(searchRequest, this.page)
      .subscribe((result) => {
        this.photos = result.photos;
      });
  }

  cleanPhotos() {
    this.photos = [];
  }

  previousPage() {
    this.page -= 1;
    this.loadPhotos();
  }

  nextPage() {
    this.page += 1;
    this.loadPhotos();
  }
}
