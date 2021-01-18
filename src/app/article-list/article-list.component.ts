import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';
import { ActivatedRoute, Router } from '@angular/Router';
import { article } from '../article';

import md from 'markdown-it';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService, public router: Router, private route: ActivatedRoute) {
    this.articleService.selectedArticleListBehavior.subscribe(articleList => {
      this.articleList = articleList;
    })
    this.articleService.sharedarticleList.subscribe(x => {
      // get the article List
      if (this.articleService.articleList.length != 0 && this.articleService.selectedArticleList.length == 0) {
        if (this.router.url == '/frontend' || this.route.snapshot.paramMap.get('end') == 'frontend') {
          this.articleService.getArtilceList('frontend');
        }
        if (this.router.url == '/backend' || this.route.snapshot.paramMap.get('end') == 'backend') {
          this.articleService.getArtilceList('backend');
        }
      }
    })
  }

  markdown = md({
    html: true,
    xhtmlOut: false,
    breaks: false,
    langPrefix: 'language-',
    linkify: false,
    typographer: false,
    quotes: '“”‘’',
    highlight: function (/*str, lang*/) { return ''; }
  });

  articleList: article[] = [];

  ngOnInit(): void {
  }




}
