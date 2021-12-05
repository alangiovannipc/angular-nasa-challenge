import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { Rover, Camera, SearchRequest } from '../shared/nasa.types';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Output() onSearch = new EventEmitter<SearchRequest>();
  @Input() roverSelected: Rover;

  ngOnInit(): void {
    console.log('SearchComponent ');
  }

  handleSearch(searchRequest: SearchRequest): void {
    this.onSearch.emit(searchRequest);
  }
}
