import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() image:string="";
  @Input() title:string="";
  @Input() description:string="";
  @Input() cardHeight:string="";
  @Input() cardBg:string="";
  @Input() hasBtn:boolean=false;
  @Input() btnName:string="";

  constructor() {
   
   }

  ngOnInit(): void {
    const cards = Array.from(
      document.getElementsByClassName('card') as HTMLCollectionOf<HTMLElement>,
    );
    
    cards.forEach(card => {
      card.style.background= this.cardBg;
      card.style.height=this.cardHeight;
      // card.style.fontSize = '1.5em';
    });
    
  }

}
