import {Injectable} from '@angular/core';

const coursesUrl = `http://wbdv-generic-server.herokuapp.com/api/hualin/courses`;

@Injectable()
export class CourseService {

  findAllCourses = () =>
    fetch(coursesUrl).then(response => response.json())



  findCourseById = (courseId) =>
    fetch(`${coursesUrl}/${courseId}`).then(response => response.json())



  createCourse = () =>
    fetch(coursesUrl, {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Course', editing: false
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())


  deleteCourse = (courseId) =>
    fetch(`${coursesUrl}/${courseId}`, {
      method: 'DELETE'
    }).then(response => response.json())



  updateCourse = (course) =>
    fetch(`${coursesUrl}/${course._id}`, {
      method: 'PUT',
      body: JSON.stringify(course),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())





}
