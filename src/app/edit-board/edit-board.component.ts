import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ArticleService } from '../Service/article.service';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Router } from '@angular/Router';

@Component({
  selector: 'app-edit-board',
  templateUrl: './edit-board.component.html',
  styleUrls: ['./edit-board.component.css']
})
export class EditBoardComponent implements OnInit {

  public addArticle = new FormGroup({
    id: new FormControl(),
    end: new FormControl(),
    series: new FormControl(),
    episode: new FormControl(),
    title: new FormControl(),
    subtitle: new FormControl(),
    tags: new FormControl(),
    content: new FormControl(),
    likes: new FormControl(0),
    views: new FormControl(0),
  })

  constructor(public articleService: ArticleService, private authService: AuthService, public router: Router, private route: ActivatedRoute) {
    if (this.authService.isLogin == 'false') {
      console.log(this.authService.isLogin)
      this.router.navigate(['../login'])
    }

    this.articleService.sharedUpdatingArticle.subscribe(article => {
      if (article == null) { return }
      console.log(article.id)
      this.addArticle.setValue({
        id: article.id, // for update
        end: article.end,
        series: article.series,
        episode: article.episode,
        title: article.title,
        subtitle: article.subtitle,
        tags: article.tags,
        content: article.content,
        likes: article.likes,
        views: article.views
      })
      console.log(this.addArticle.value)
    })
  }

  ngOnInit(): void {
  }
  saveArticle() {
    this.articleService.saveArticle(this.addArticle.value);
  }
  deleteArticle() {
    this.articleService.deleteArticleHttp(this.addArticle.value.id).subscribe();

  }

}
