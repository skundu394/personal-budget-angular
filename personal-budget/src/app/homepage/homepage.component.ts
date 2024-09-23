import { Component, OnInit } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pb-homepage',
  standalone: true,
  imports: [ ArticleComponent ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit {

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

  constructor(private http:HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i=0; i< res.data.myBudget.length; i++){
        this.datasource.datasets[0].data[i] = res.data.myBudget[i].budget;
        this.datasource.labels[i] = res.data.myBudget[i].title;
        this.createChart();
      }
    });
  }

createChart() {
  var ctx = document.getElementById("myChart").getContext("2d");
  var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: this.datasource
  });

}

}
