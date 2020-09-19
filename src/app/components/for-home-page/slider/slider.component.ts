import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { newArray } from '@angular/compiler/src/util';
import { Shoes } from '../../../data/Shoes'
import { ITS_JUST_ANGULAR } from '@angular/core/src/r3_symbols';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  items: Array<Shoes> = [];
  margin;
  @ViewChild('panel') myDiv: ElementRef;
  
  constructor() { 
    for (let index = 0; index < 15; index++) {
      let item = new Shoes();
      if(index+1<10)
      item.number = '0' + (index+1);
      else item.number = (index+1);
      if(index%2==1)
        item.imagePath = 'assets/images/nike/1.png';
      else  item.imagePath = 'assets/images/nike/2.png';
      item.price = '$101';
      if(index%2==1)
      item.style = 'background: #f953c6;   background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  background: linear-gradient(to right, #b91d73, #f953c6);';
      else   item.style = 'background: #06beb6; background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  background: linear-gradient(to left, #48b1bf, #06beb6); ';
      this.items.push(item);
      }
  }

  ngOnInit(): void {
  }

  pref(){
    this.myDiv.nativeElement.scrollTo({ left: (this.myDiv.nativeElement.scrollLeft - 410), behavior: 'smooth' });
   
  }
  next(){
    this.myDiv.nativeElement.scrollTo({ left: (this.myDiv.nativeElement.scrollLeft + 410), behavior: 'smooth' });
  }

}
