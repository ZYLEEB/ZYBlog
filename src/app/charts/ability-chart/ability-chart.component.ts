import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import { noop } from 'rxjs';
@Component({
  selector: 'app-ability-chart',
  templateUrl: './ability-chart.component.html'
})
export class AbilityChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'rgba(255,255,255,0.75)'
      }

    },
    scale: {
      angleLines: {
        display: false
      },
      ticks: {
        suggestedMin: 0,
        suggestedMax: 10,
        fontColor: 'rgba(255,255,255,0.75)',
        backdropColor: '#212121',
      },
      pointLabels: {
        fontColor: 'rgba(255,255,255,0.75)',
      }

    }
  };
  public radarChartLabels: Label[] = ['編程效率', '數據分析', '溝通能力', '團隊合作',
    '英語能力', '簡報撰寫效率'];

  public radarChartData: ChartDataSets[] = [
    {
      data: [9, 10, 8, 8, 8, 9], label: '日間', backgroundColor:
        'rgba(38,166,237,0.5)', borderColor: 'rgba(38,166,237,1)', pointBackgroundColor: 'rgba(38,166,237,1)', pointRadius: 1
    },
    {
      data: [10, 8, 8, 8, 8, 5], label: '夜間', backgroundColor:
        'rgba(236,64,122,0.5)', borderColor: 'rgba(236,64,122,1)', pointBackgroundColor: 'rgba(236,64,122,1)', pointRadius: 1
    },
  ];
  public radarChartType: ChartType = 'radar';

}
