import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {FormsModule} from '@angular/forms';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import { CourseListComponent } from './course-list/course-list.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import {LessonService} from '../services/lesson-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { CourseGridComponent } from './course-grid/course-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseListComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseViewerComponent,
    CourseGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseService, ModuleService, LessonService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
