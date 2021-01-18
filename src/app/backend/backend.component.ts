import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./backend.component.css']
})
export class BackendComponent implements OnInit {
  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
  }


}
