import { Component, Input, OnInit } from '@angular/core';
import { CardLabelComponent } from './card-label/card-label.component';
import { CardPricingComponent } from './card-pricing/card-pricing.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardLabelComponent, CardPricingComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{

  @Input()
  gameCover:string =""
  @Input()
  gameType:string = "Ditital PS4"
  @Input()
  gamePrice:string = "129,99"
  @Input()
  gamelabel:string=""

  ngOnInit(): void {
      
  }
}
