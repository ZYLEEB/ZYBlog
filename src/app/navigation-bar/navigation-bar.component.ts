import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../Service/nav-bar.service';
import { ArticleService } from '../Service/article.service';
import { AuthService } from '../Service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  frontendSeriesList: string[];
  backendSeriesList: string[];
  frontendListFlag: boolean = false;
  backendListFlag: boolean = false;


  constructor(private navBarService: NavBarService, public authService: AuthService, public articleService: ArticleService, private rout: ActivatedRoute, public router: Router) {
    this.navBarService.sharedFrontendListFlag.subscribe(flag => {

      this.frontendListFlag = flag
    });
    this.navBarService.sharedBackendListFlag.subscribe(flag => {

      this.backendListFlag = flag
    });

  }

  ngOnInit(): void {
  }

  navgiate(end: string) {
    this.router.navigate([`../${end}`]);
  }

  switchFlag(end: string) {
    switch (end) {
      case 'frontend':
        this.frontendListFlag = !this.frontendListFlag;
        this.backendListFlag = false;
        this.navBarService.frontendListFlagBehavior.next(this.frontendListFlag);
        this.navBarService.backendListFlagBehavior.next(this.backendListFlag);
        break;
      case 'backend':
        this.backendListFlag = !this.backendListFlag;
        this.frontendListFlag = false;
        this.navBarService.backendListFlagBehavior.next(this.backendListFlag);
        this.navBarService.frontendListFlagBehavior.next(this.frontendListFlag);
        break;
    }

  }

}
