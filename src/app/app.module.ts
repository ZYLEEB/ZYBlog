import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MeterialModule } from '../app/meterial/meterial.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { SkillChartComponent } from './charts/skill-chart/skill-chart.component';
import { AbilityChartComponent } from './charts/ability-chart/ability-chart.component';
import { EditBoardComponent } from './edit-board/edit-board.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';

import { ArticleService } from './Service/article.service';
import { LoginComponent } from './login/login.component';

import { httpInterceptorsProviders } from './http-interceptor/auth';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FrontendComponent,
    BackendComponent,
    NavigationBarComponent,
    SkillChartComponent,
    AbilityChartComponent,
    EditBoardComponent,
    SidebarComponent,
    ArticleDetailComponent,
    ArticleListComponent,
    LoginComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ChartsModule,
    HttpClientModule,
    MeterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private articleService: ArticleService) {
    if (this.articleService.articleList.length == 0) {
      this.articleService.searchByEnd('frontend');
      this.articleService.searchByEnd('backend');
    }
  }

}
