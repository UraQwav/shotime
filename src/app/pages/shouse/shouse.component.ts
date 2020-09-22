import { Component, OnInit } from '@angular/core';
import { Shoes } from 'src/app/data/Shoes';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shouse',
  templateUrl: './shouse.component.html',
  styleUrls: ['./shouse.component.css']
})
export class ShouseComponent implements OnInit {
  items: Array<Shoes> = [];
  shoes: Shoes;
  id: string;
  constructor(private route:ActivatedRoute) {
    for (let index = 1; index < 16; index++) {
      let item = new Shoes();
      item.id= (index);
      if(index<10)
      item.number = '0' + (index);
      else item.number = (index);
      if(index%2==0)
        item.imagePath = 'assets/images/nike/1.webp';
      else  item.imagePath = 'assets/images/nike/2.webp';
      item.price = '$101';
      item.name = 'nike freern 2018';
      if(index%2==0)
      item.style = 'background: #f953c6;   background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  background: linear-gradient(to right, #b91d73, #f953c6);';
      else   item.style = 'background: #06beb6; background: -webkit-linear-gradient(to left, #48b1bf, #06beb6);  background: linear-gradient(to left, #48b1bf, #06beb6); ';
      this.items.push(item);
      console.log(item.id)
      }
      this.id = this.route.snapshot.paramMap.get('id');
      console.log(this.id+ 'id');
      this.items.forEach(element => {
        if(element.id == this.id){
          this.shoes = element;
          console.log(this.shoes);
        }
      });
   }

  ngOnInit(): void {
    
  }

}
