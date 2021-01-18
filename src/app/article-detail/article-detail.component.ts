import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ArticleService } from '../Service/article.service';
import { article } from '../article';
import { AuthService } from '../Service/auth.service';
import md from 'markdown-it';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css']
})
export class ArticleDetailComponent implements OnInit {



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

  constructor(private route: ActivatedRoute, private location: Location, private articleService: ArticleService, public authService: AuthService) {

  }


  ngOnInit(): void {
    this.articleService.sharedarticleList.subscribe(list => {
      if (list.length != 0) { this.getArticle() }
    });

  }

  // get detail of the article
  article: article;
  series: string;
  episode: string;
  content: string;
  subtitle: string;

  getArticle() {
    let title = this.route.snapshot.paramMap.get('title')
    this.articleService.articleList.forEach(article => {
      if (article.title == title) {
        this.article = article;
        return;
      }
    })
    if (this.article != null) {

      this.series = this.markdown.render(this.article?.series)
      this.episode = this.markdown.render(this.article?.episode)
      this.content = this.markdown.render(this.article?.content)
      this.subtitle = this.markdown.render(this.article?.subtitle)
    }
  }

  goBack() {
    this.location.back();
  }

  edit(id: string) {
    this.articleService.queryOne(id);
  }
  deleteArticle(id: string) {
    this.articleService.deleteArticle(id);

  }

}
