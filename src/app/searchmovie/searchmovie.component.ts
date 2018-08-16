import { Component, OnInit } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css']
})
export class SearchmovieComponent implements OnInit {

  @Output() displayData = new EventEmitter();
  private data:string;

  constructor() { }

  onSearch(data:string){
    this.data=data;
    this.displayData.emit(this.data);
  }

  ngOnInit() {
  }

}
