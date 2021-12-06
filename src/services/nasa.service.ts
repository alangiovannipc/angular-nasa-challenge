import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SearchRequest } from '../components/Nasa/shared/nasa.types';
import { HttpClient } from '@angular/common/http';
import { API_KEY_NASA, API_MARS_PHOTOS } from '../shared/config';
import { RoverPhotoResponse } from './nasa.service.types';
import { DEFAULT_ROVER } from '../shared/shared.default';

@Injectable()
export class NasaService {
  constructor(private http: HttpClient) {}

  searchPhotos(
    searchRequest: SearchRequest[],
    page = 1
  ): Observable<RoverPhotoResponse> {
    const { value: rover } = searchRequest.find(
      (param) => param.key == 'rover'
    );
    const rovers = rover || DEFAULT_ROVER;
    const searchParams = searchRequest.reduce((previous, current) => {
      if (current?.key && current?.value && current?.key != 'rover') {
        return `${previous}&${current?.key}=${current?.value}`;
      }
      return previous;
    }, '');
    const requestUrl = `${API_MARS_PHOTOS}/rovers/${rovers}/photos?page=${page}&api_key=${API_KEY_NASA}${searchParams}`;
    return this.http.get<RoverPhotoResponse>(requestUrl);
  }
}
