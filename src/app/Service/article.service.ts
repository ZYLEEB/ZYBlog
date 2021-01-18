import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs'
import { article } from '../article'
import { environment } from '../../environments/environment';
import { ActivatedRoute, Router } from '@angular/Router';
import { EditBoardComponent } from '../edit-board/edit-board.component'


@Injectable({
  providedIn: 'root'
})
export class ArticleService {


  // series List for sidebar
  seriesList: string[] = [];
  public frontendSeriesList: string[] = [];
  public backendSeriesList: string[] = [];
  public seriesListBehavuor = new BehaviorSubject(this.seriesList);
  sharedSeriesList = this.seriesListBehavuor.asObservable();
  selectedArticleList: article[] = [];
  public selectedArticleListBehavior = new BehaviorSubject(this.selectedArticleList);
  sharedSelectedArticleList = this.selectedArticleListBehavior.asObservable();


  constructor(private http: HttpClient, public router: Router, private route: ActivatedRoute) { }

  // part2 -  search articles
  searchUrl = environment.baseURL + '/searchArticle.do'
  articleList: article[] = [];
  public articleListBehavior = new BehaviorSubject(this.articleList);
  sharedarticleList = this.articleListBehavior.asObservable();

  searchByEnd(end: string) {
    this.searchByEndHttp(end).subscribe(articleList => {
      this.articleList = this.articleList.concat(articleList);
      this.articleListBehavior.next(this.articleList);

      //filt series for sidenar
      articleList.forEach(article => {
        if (article.end == 'frontend' && !this.frontendSeriesList.includes(article.series)) {
          this.frontendSeriesList.push(article.series)
        }
        if (article.end == 'backend' && !this.backendSeriesList.includes(article.series)) {
          this.backendSeriesList.push(article.series);
        }
      })
    });
  }

  searchByEndHttp(end: string): Observable<article[]> {
    let param = new HttpParams()
      .set("end", end);
    return this.http.get<article[]>(this.searchUrl, { params: param })
  }

  // part3 - save article
  saveUrl = environment.baseURL + '/saveArticle.do'
  updateNumber: number;
  saveArticle(param) {
    this.articlePost(param).subscribe(number => this.updateNumber = number);
  }

  private articlePost(param): Observable<any> {
    console.log(param)
    let httpparam = new HttpParams();
    httpparam = httpparam
      .set("id", param.id)
      .set("end", param.end)
      .set("series", param.series)
      .set("episode", param.episode)
      .set("title", param.title)
      .set("subtitle", param.subtitle)
      .set("tags", param.tags)
      .set("content", param.content)
      .set("likes", param.likes)
      .set("views", param.views)
    return this.http.post<any>(this.saveUrl, httpparam);
  }

  // part4 - get series List
  getSeriesList(end: string) {
    this.seriesList = [];
    this.articleList.forEach(article => {
      if (!this.seriesList.includes(article.series) && article.end == end) {
        this.seriesList.push(article.series)
      }
    })
    this.seriesListBehavuor.next(this.seriesList)
  }

  //part5 - get article List
  getArtilceList(condition: string) {
    this.selectedArticleList = [];
    if (condition == 'frontend' || condition == 'backend') {//by end
      this.articleList.forEach(article => {
        if (article.end == condition) {
          this.selectedArticleList.push(article);
        }
      })

    } else {//by series
      this.articleList.forEach(article => {
        if (condition == article.series) {
          this.selectedArticleList.push(article)
        }
      })
    }
    this.selectedArticleListBehavior.next(this.selectedArticleList);
  }

  // part6 - update article
  updateUrl = environment.baseURL + '/queryOne.do'
  updatingArticle: article = null;
  public updatingArticleBehavior = new BehaviorSubject(this.updatingArticle);
  sharedUpdatingArticle = this.updatingArticleBehavior.asObservable();

  queryOne(id: string) {
    this.queryOneHttp(id).subscribe(article => {
      this.updatingArticle = article;
      this.updatingArticleBehavior.next(this.updatingArticle);
      this.router.navigate(['./edit'])
    })

  }

  queryOneHttp(id: string): Observable<article> {
    let param = new HttpParams();
    param = param.set('id', id);
    return this.http.get<article>(this.updateUrl, { params: param })
  }

  // part7 - delete article
  deleteUrl = environment.baseURL + '/delete.do'
  deleteArticle(id: string) {
    this.queryOneHttp(id).subscribe(article => {
      this.updatingArticle = article;
      this.updatingArticleBehavior.next(this.updatingArticle);
      this.router.navigate(['./edit'])
    })
  }

  deleteArticleHttp(id: string): Observable<any> {
    let param = new HttpParams();
    param = param.set('id', id);
    return this.http.get<any>(this.deleteUrl, { params: param })
  }

  // article count
  count(series: string): number {
    let count: number = 0;
    this.articleList.forEach(article => {
      if (article.series == series) {
        count++;
      } else if (series == 'all' && (('/' + article.end) == this.router.url || article.end == this.route.snapshot.paramMap.get('end'))) {
        count++;
      }
    })
    return count
  }
}
