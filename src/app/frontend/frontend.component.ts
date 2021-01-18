import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';
import { ActivatedRoute, Router } from '@angular/Router';

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./frontend.component.css']
})
export class FrontendComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

}
