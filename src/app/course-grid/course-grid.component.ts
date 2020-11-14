import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseService} from '../../services/course-service';

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  courses = [];
  // need to encode this course into url when render modules
  courseId = '';


  constructor(private activateRoute: ActivatedRoute,
              private courseService: CourseService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(params => {
      this.courseId = params.cid;
    });

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
