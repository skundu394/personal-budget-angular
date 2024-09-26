import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { ArticleComponent } from '../article/article.component';
import { HttpClient } from '@angular/common/http';
import { Chart, PieController, ArcElement, Tooltip, Legend } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';

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

  constructor( @Inject(PLATFORM_ID) private platformId: Object, private http:HttpClient){

  }

  ngOnInit(): void {
    // Ensure the chart is created only in the browser
    if (isPlatformBrowser(this.platformId)) {
      console.log('Chart is created only on my browser');
       this.createChart();


    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i=0; i< res.myBudget.length; i++){
        this.datasource.datasets[0].data[i] = res.myBudget[i].budget;
        this.datasource.labels[i] = res.myBudget[i].title;
        this.createChart();
      }
    });
  }

  }

  createChart() {
    // Get the canvas element by its ID
    var canvas = document.getElementById("myChart");

    // Initialize the context variable
    var ctx: CanvasRenderingContext2D | null = null;

    // Ensure the canvas element exists and is of type HTMLCanvasElement
    if (canvas instanceof HTMLCanvasElement) {
      ctx = canvas.getContext("2d");  // Get the 2D drawing context from the canvas
    }
    Chart.register(PieController, ArcElement, Tooltip, Legend);
    // If the context is not null, create the chart
    if (ctx) {
      var myPieChart = new Chart(ctx, {
        type: 'pie',       // Specify chart type as 'pie'
        data: this.datasource  // Use 'this.datasource' for chart data
      });
    } else {
      console.error('Failed to get 2D context for chart rendering.');
    }
  }

}
