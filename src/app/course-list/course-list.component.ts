import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courses = [];
  // need courseId in html so should be a state variable
  courseId = '';


  constructor(private activatedRoute: ActivatedRoute,
              private courseService: CourseService) { }


  ngOnInit(): void {
    // listens to the changes in url
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;
    });

    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

  }

}
