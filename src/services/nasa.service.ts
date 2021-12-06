import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, catchError, retry } from 'rxjs/operators';
import { PHOTOS_MOCK } from '../components/Nasa/nasa.mock';
import { Photo, SearchRequest } from '../components/Nasa/shared/nasa.types';
import { HttpClient } from '@angular/common/http';
import { API_KEY_NASA, API_MARS_PHOTOS } from '../shared/config';
import { RoverPhotoResponse } from './nasa.service.types';

const FETCH_LATENCY = 500;

@Injectable()
export class NasaService {
  constructor(private http: HttpClient) {}

  getPhotos(page = 1): Observable<RoverPhotoResponse> {
    const requestUrl = `${API_MARS_PHOTOS}/rovers/curiosity/photos?sol=1000&page=${page}&api_key=${API_KEY_NASA}`;
    return this.http.get<RoverPhotoResponse>(requestUrl);
    //return of(PHOTOS_MOCK).pipe(delay(FETCH_LATENCY));
  }
  searchPhotos(
    searchRequest: SearchRequest[],
    page = 1
  ): Observable<RoverPhotoResponse> {
    const searchParams = searchRequest.reduce((previous, current) => {
      if (current?.key && current?.value.trim()) {
        return `${previous}&${current?.key}=${current?.value}`;
      }
      return previous;
    }, '');
    const requestUrl = `${API_MARS_PHOTOS}/rovers/curiosity/photos?page=${page}&api_key=${API_KEY_NASA}${searchParams}`;
    console.log('searchParams ', searchParams);
    console.log('NasaService ', requestUrl);
    return this.http.get<RoverPhotoResponse>(requestUrl);
    //return of(PHOTOS_MOCK).pipe(delay(FETCH_LATENCY));
  }
}
