import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyLocation } from './types/location.interface';
import { GetUnitsService } from './services/get-units.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showList = new BehaviorSubject(false);
  unitsList: MyLocation[] = [];

  constructor(private unitService: GetUnitsService){

  }

  onSubmit(){
    //console.log("Chegou no app!");
    this.unitsList = this.unitService.getFilteredUnits();
    this.showList.next(true);
  }

}
