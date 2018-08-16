import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  private location='';
  @Input('movie') movie;

  constructor( private router: Router ) {
    this.location = router.url;
  }

  ngOnInit() {
  }

}
