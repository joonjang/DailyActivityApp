import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tracking-component',
  templateUrl: './tracking.component.html',
  styleUrls: ['./tracking.component.css']
})
export class TrackingComponent {

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartType = 'bar';
  public chartLegend = true;

  public chartData = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
  ];

  name = new FormControl('');

  ngOnInit() {
    // react to form changes
    this.name.valueChanges
      .subscribe(val => {
        if (val = 'Bar Chart') {
          this.chartType = 'bar';
        }
        else if (val = 'Pie Chart'){
          this.chartType = 'pie';
        }
      });
  }
}



