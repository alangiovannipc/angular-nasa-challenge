import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { DEFAULT_ROVER } from '../../../shared/shared.default';
import { Rover, Camera, SearchRequest } from '../shared/nasa.types';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<SearchRequest[]>();
  public roverSelected: Rover = DEFAULT_ROVER;
  public searchForm = new FormGroup({
    rover: new FormControl(''),
    earthDate: new FormControl(''),
    sol: new FormControl(''),
  });

  ngOnInit(): void {
    console.log('SearchComponent ');
  }

  search(): void {
    console.log('SearchComponent search');
    console.log('SearchComponent searchForm ', this.searchForm.value);
    const { rover, earthDate, sol } = this.searchForm.value || {};
    const searchRequest: SearchRequest[] = [
      {
        key: 'rover',
        value: rover,
      },
      {
        key: 'earth_date',
        value: earthDate,
      },
      {
        key: 'sol',
        value: sol,
      },
    ];
    this.onSearch.emit(searchRequest);
  }
}
