import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../Service/article.service';
import { ActivatedRoute, Router } from '@angular/Router';
import md from 'markdown-it';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  series: string;
  seriesList: string[] = [];
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


  constructor(public articleService: ArticleService, public router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.articleService.seriesListBehavuor.subscribe(list => {
      this.seriesList = list
    })

    this.articleService.sharedarticleList.subscribe(x => {
      // get the article List
      if (this.articleService.articleList.length != 0) {
        if (this.router.url == '/frontend' || this.route.snapshot.paramMap.get('end') == 'frontend') {
          this.articleService.getSeriesList('frontend');
          this.series = '前端故事集'
        }
        if (this.router.url == '/backend' || this.route.snapshot.paramMap.get('end') == 'backend') {
          this.articleService.getSeriesList('backend');
          this.series = '後端故事集'
        }
      }
    })
  }


  showArticles(series: string) {
    this.articleService.selectedArticleList = []
    this.articleService.articleList.forEach(article => {
      if (series == 'all') { //filt articles by end
        if (('/' + article.end) == this.router.url || article.end == this.route.snapshot.paramMap.get('end'))
          this.articleService.selectedArticleList.push(article)
      } else if (article.series == series) { //filt articles by series
        this.articleService.selectedArticleList.push(article)
      }
    })
    this.articleService.selectedArticleListBehavior.next(this.articleService.selectedArticleList);

    //navigate back to frontend/backend when on artilce detail page
    if (this.router.url != "/backend" && this.router.url != "/frontend") {
      this.router.navigate([`../${this.route.snapshot.paramMap.get('end')}`]);
    }
  }


}
