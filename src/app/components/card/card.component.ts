import { Component, Input } from '@angular/core';
import { MyLocation } from 'src/app/types/location.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() card!: MyLocation
}
