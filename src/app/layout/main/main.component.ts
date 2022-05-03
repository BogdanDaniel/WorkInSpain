import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  @HostListener('scroll',['$event.target']) scrolling(ev: any){
    const scroll = $(ev).scrollTop();
    console.log(scroll);
    if (scroll && scroll > 200) {
      //console.log('a');
      $('.navigation').addClass('sticky-header');
    } else {
      //console.log('a');
      $('.navigation').removeClass('sticky-header');
    }
  }

  ngOnInit(): void {
  }

}
