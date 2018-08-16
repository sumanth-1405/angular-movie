import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Movie } from '../movie';

@Component({
  selector: 'app-carddetails',
  templateUrl: './carddetails.component.html',
  styleUrls: ['./carddetails.component.css']
})
export class CarddetailsComponent implements OnInit {

  @Input('movie') movie;

  constructor() { }

  ngOnInit() {
  }

}
