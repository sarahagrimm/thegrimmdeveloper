import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { ServicesComponent } from './services/services.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const appRoutes: Routes = [
  
  { path: 'home', component: HeaderComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'contact', component: ContactMeComponent },
  { path: 'portfolio', component: PortfolioComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactMeComponent,
    ServicesComponent,
    FooterComponent,
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} )
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
