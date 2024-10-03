import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public datasource = {
    datasets: [{
        data: [1200, 120, 220, 300, 200, 150, 1000],
        backgroundColor: [
            '#ffcd56',
            '#ff6384',
            '#36a2eb',
            '#fd6b19',
            '#E6E6FA',
            '#00FF00',
            '#008080',
        ],
    }],

    // These labels appear in the legend and in the tooltips when hovering different arcs
    labels: [
      'Rent',
          'Pharmacy',
          'Insurance',
          'Groceries',
          'Travel Expenses',
          'Internet',
          'Investments'
    ]
  };

  constructor( private http:HttpClient ) {
   }
   public myBudget = [] as any[];

   getData(): any {
    return this.http.get('http://localhost:3000/budget');
  }
}
