import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
  selector: 'app-skill-chart',
  templateUrl: './skill-chart.component.html',
})
export class SkillChartComponent implements AfterViewInit {

  javaStartDate = new Date(2020, 8, 22, 0, 0, 0, 0);
  springStartDate = new Date(2020, 9, 30, 0, 0, 0, 0);
  myBatisStartDate = new Date(2020, 10, 15, 0, 0, 0, 0);
  mySQLStartDate = new Date(2020, 9, 30, 0, 0, 0, 0);
  HTMLCSSStartDate = new Date(2020, 8, 5, 0, 0, 0, 0);
  jstsStartDate = new Date(2020, 8, 5, 0, 0, 0, 0);
  angularStartDate = new Date(2020, 10, 10, 0, 0, 0, 0);
  now = new Date();
  javaLearnedTime: number = Math.floor(((this.now.getTime() - this.javaStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  springLearnedTime: number = Math.floor(((this.now.getTime() - this.springStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  myBatisLearnedTime: number = Math.floor(((this.now.getTime() - this.myBatisStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  mySQLLearnedTime: number = Math.floor(((this.now.getTime() - this.mySQLStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  HTMLCSSLearnedTime: number = Math.floor(((this.now.getTime() - this.HTMLCSSStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  jstsLearnedTime: number = Math.floor(((this.now.getTime() - this.jstsStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;
  angularLearnedTime: number = Math.floor(((this.now.getTime() - this.angularStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000)) * 100) / 100;

  constructor() { }


  ngAfterViewInit() {
    let now = new Date();
    this.javaLearnedTime = (now.getTime() - this.javaStartDate.getTime()) / (30 * 24 * 60 * 60 * 1000);
    console.log()

  }

  barChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      labels: {
        fontColor: 'rgba(255,255,255,0.75)'
      }

    },
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          suggestedMax: 10,
          fontColor: 'rgba(255,255,255,0.75)'

        }
      }],
      yAxes: [{
        ticks: {
          fontColor: 'rgba(255,255,255,0.75)'
        }
      }]
    },

  };
  barChartLabels: Label[] = ['Java JDK 1.8', 'MySQL 8', 'Spring Framework 4.0', 'MyBatis 3.0', 'HTML5/CSS3', 'JavaScript/TypeScript', 'Angular 8+'];
  barChartType: ChartType = 'horizontalBar';

  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [this.javaLearnedTime, this.mySQLLearnedTime, this.springLearnedTime, this.myBatisLearnedTime, this.HTMLCSSLearnedTime, this.jstsLearnedTime, this.angularLearnedTime],
      label: '學習時間(月)',
      backgroundColor: 'rgba(38,166,237,1)',
      borderColor: 'rgba(38,166,237,1)',
      hoverBackgroundColor: 'rgba(38,166,237,1)',
      hoverBorderColor: 'rgba(38,166,237,1)'
    },

    // {
    //   data: [100, 80, 60, 50, 50, 70, 80], label: '喜歡度',
    //   backgroundColor: 'rgba(236,64,122,1)',
    //   borderColor: 'rgba(236,64,122,1)',
    //   hoverBackgroundColor: 'rgba(236,64,122,1)',
    //   hoverBorderColor: 'rgba(236,64,122,1)'

    // },

  ];
}
