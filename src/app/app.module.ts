import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectContentComponent } from './project-content/project-content.component';
import { MultiContentComponent } from './multi-content/multi-content.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectContentComponent,
    MultiContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
