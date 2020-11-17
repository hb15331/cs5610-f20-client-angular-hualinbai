import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LessonService} from '../../services/lesson-service';

@Component({
  selector: 'app-lesson-tabs',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {

  lessons = [];
  // selectedLessonId = '';

  constructor(private lessonService: LessonService,
              private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activeRoute.params.subscribe(params => {
      const moduleId = params.mid;
      if (typeof moduleId !== 'undefined') {
        this.lessonService.findLessonsForModule(moduleId)
          .then(lessons => this.lessons = lessons);
      }
      // this.selectedLessonId = params.lid;
    });
  }

}
