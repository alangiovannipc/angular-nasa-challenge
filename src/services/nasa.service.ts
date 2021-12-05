import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { PHOTOS_MOCK } from '../components/Nasa/nasa.mock';
import { Photo } from '../components/Nasa/shared/nasa.types';
const FETCH_LATENCY = 500;

@Injectable()
export class NasaService {
  getPhotos(): Observable<Photo[]> {
    return of(PHOTOS_MOCK).pipe(delay(FETCH_LATENCY));
  }
}
