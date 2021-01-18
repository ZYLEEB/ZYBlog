import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ArticleService } from '../Service/article.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public environment = environment;

  constructor(private router: Router, private articleService: ArticleService) {
    // if (this.articleService.articleList.length == 0) {
    //   this.articleService.saveArticle('前端');
    //   this.articleService.saveArticle('後端');
    // }
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    })
  }

}
