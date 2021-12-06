import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, catchError, retry } from 'rxjs/operators';
import { PHOTOS_MOCK } from '../components/Nasa/nasa.mock';
import { Photo, SearchRequest } from '../components/Nasa/shared/nasa.types';
import { HttpClient } from '@angular/common/http';
import { API_MARS_PHOTOS } from '../shared/config';

const FETCH_LATENCY = 500;

@Injectable()
export class NasaService {
  constructor(private http: HttpClient) {}

  getPhotos(): Observable<Photo[]> {
    const url = `${API_MARS_PHOTOS}/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`;
    return this.http.get<Photo[]>(url);
    //return of(PHOTOS_MOCK).pipe(delay(FETCH_LATENCY));
  }
  searchPhotos(searchRequest: SearchRequest[]): Observable<Photo[]> {
    console.log('NasaService ', searchRequest);
    return of(PHOTOS_MOCK).pipe(delay(FETCH_LATENCY));
  }
}
