import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { UnitsResponse } from '../types/units-response.interface';
import { MyLocation } from '../types/location.interface';

@Injectable({
  providedIn: 'root'
})
export class GetUnitsService {

  readonly apiUrl = "https://test-frontend-developer.s3.amazonaws.com/data/locations.json";

  private allUnitsSubject: BehaviorSubject<MyLocation[]> = new BehaviorSubject<MyLocation[]>([]);
  private allUnits$: Observable<MyLocation[]> = this.allUnitsSubject.asObservable();
  private filteredUnits: MyLocation[] = [];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get<UnitsResponse>(this.apiUrl).subscribe(data => {
      this.allUnitsSubject.next(data.locations);
      this.filteredUnits = data.locations;
    });
  }

  getAllUnits(): Observable<MyLocation[]> {
   return this.allUnits$;
  }

  getFilteredUnits(){
    return this.filteredUnits;
  }

  setFilteredUnits(value: MyLocation[]){
    this.filteredUnits = value;
  }
}
