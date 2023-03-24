import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { HeaderComponent } from './components/header/header.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';

// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatChipsModule } from '@angular/material/chips';

//lottie
import { LottieModule } from "ngx-lottie";
import player from "lottie-web";
import { FooterComponent } from './components/footer/footer.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { SkillsComponent } from './pages/skills/skills.component';
export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [AppComponent, HeaderComponent, AboutMeComponent, BreadcrumbComponent, FooterComponent, ProjectsComponent, SkillsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LottieModule.forRoot({ player: playerFactory }),
    // Angular Material Modules
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTooltipModule,
    MatGridListModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
