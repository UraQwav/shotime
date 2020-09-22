import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { Shoes } from '../../../data/Shoes'
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  items: Array<Shoes> = [];
  margin;
  @ViewChild('panel') myDiv: ElementRef;
  
  constructor(private router:Router) { 
    for (let index = 1; index < 16; index++) {
      let item = new Shoes();
      item.id=index;
      if(index<10)
      item.number = '0' + (index);
      else item.number = (index);
      if(index%2==0)
        item.imagePath = 'assets/images/nike/1.webp';
      else  item.imagePath = 'assets/images/nike/2.webp';
      item.price = '$101';
      if(index%2==0)
      item.style = 'background: #f953c6;   background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  background: linear-gradient(to right, #b91d73, #f953c6);';
      else   item.style = 'background: #06beb6; background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  background: linear-gradient(to left, #48b1bf, #06beb6); ';
      this.items.push(item);
      }
  }

  ngOnInit(): void {
  }

  pref(){
    const ua = window.navigator.userAgent;
    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      for (let index = 0; index < 410; index++) {
       setTimeout(() => {
        
          this.myDiv.nativeElement.scrollLeft -= 1;
         }, 10);
       }
    }
    else{
      this.myDiv.nativeElement.scrollTo({ left: (this.myDiv.nativeElement.scrollLeft - 410), behavior: 'smooth' });
    }
  }
  next(){
    const ua = window.navigator.userAgent;
    const edge = ua.indexOf('Edge/');
    if (edge > 0) {
      for (let index = 0; index < 410; index++) {
        setTimeout(() => {
           this.myDiv.nativeElement.scrollLeft += 1;
          }, 1);
        }
    }
    else{
      this.myDiv.nativeElement.scrollTo({ left: (this.myDiv.nativeElement.scrollLeft + 410), behavior: 'smooth' });
    }
  }
  scroll(){
    
  }
  openItem(item: Shoes){
    item.open=true;
    setTimeout(() => {
      this.router.navigate(['shoes/', item.id ]);
     }, 500);
  }
}
