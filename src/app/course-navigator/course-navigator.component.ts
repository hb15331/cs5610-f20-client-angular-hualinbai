import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../services/course-service';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-course-navigator',
  templateUrl: './course-navigator.component.html',
  styleUrls: ['./course-navigator.component.css']
})
export class CourseNavigatorComponent implements OnInit {


  courses = [];
  modules = [];
  lessons = [];
  topics = [];
  selectedCourse = {
    title: ''
  };


  constructor(private courseService: CourseService,
              private moduleService: ModuleService) { }

  // equivalent to componentDidMount()
  ngOnInit(): void {
    // this.courseService.findAllCourses()
    //   .then(courses => this.courses = courses);
  }


  // createCourse = () =>
  //   this.courseService.createCourse()
  //     .then(course => this.courses.push(course))
  //
  //
  // deleteCourse = (course) =>
  //   this.courseService.deleteCourse(course._id)
  //     .then(status =>
  //       this.courses =
  //         this.courses.filter(c => c._id !== course._id)
  //     )
  //
  //
  // // toggles the flag locally
  // editCourse = (course) =>
  //   course.editing = true
  //
  //
  // // the update already occurred before we're notified by server
  // // so only toggle the editing status
  // saveCourse = (course) => {
  //   course.editing = false;
  //   this.courseService.updateCourse(course);
  // }
  //
  //
  //
  // selectCourse = (course) => {
  //   // when we select a course, not only make this course selected
  //   this.selectedCourse = course;
  //   // but also fetch the modules for that course
  //   this.moduleService.findModulesForCourse(course._id)
  //     .then(modules => this.modules = modules);
  // }
  //
  //
  // createModuleForCourse = (selectedCourse) =>
  //   this.moduleService.createModuleForCourse(selectedCourse._id)
  //     .then(module => this.modules.push(module))
  //
  //
  // deleteModule = (module) =>
  //   this.moduleService.deleteModule(module._id)
  //     .then(status =>
  //       this.modules =
  //         this.modules.filter(m => m._id !== module._id)
  //     )
  //
  //
  // saveModule = (module) =>
  //   this.moduleService.updateModule(module)



}
