import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CourseNavigatorComponent} from './course-navigator/course-navigator.component';
import {CourseListComponent} from './course-list/course-list.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {QuizzesComponent} from './quizzes/quizzes.component';
import {QuizComponent} from './quiz/quiz.component';

const routes: Routes = [

  {path: '', component: CourseListComponent},
  {path: 'table/courses', component: CourseListComponent},
  {path: 'grid/courses', component: CourseGridComponent},

  // if browser sees the path /courses, render navigator
  {path: ':layout/courses/:cid/modules', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons', component: CourseViewerComponent},
  {path: ':layout/courses/:cid/modules/:mid/lessons/:lid/topics', component: CourseViewerComponent},

  {path: ':layout/courses/:cid/quizzes', component: QuizzesComponent},
  {path: ':layout/courses/:cid/quizzes/:qid', component: QuizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
