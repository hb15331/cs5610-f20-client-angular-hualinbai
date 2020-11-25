import {Injectable} from '@angular/core';

const coursesUrl = `https://wbdv-generic-server.herokuapp.com/api/hualin/courses`;
const modulesUrl = `https://wbdv-generic-server.herokuapp.com/api/hualin/modules`;


// declare this class in app.module.ts
@Injectable()
export class ModuleService {

  findModulesForCourse = (courseId) =>
    fetch(`${coursesUrl}/${courseId}/modules`)
      .then(response => response.json())



  createModuleForCourse = (courseId) =>
    fetch(`${coursesUrl}/${courseId}/modules`, {
      method: 'POST',
      body: JSON.stringify({
        title: 'New Module'
      }),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())


  deleteModule = (moduleId) =>
    fetch(`${modulesUrl}/${moduleId}`, {
      method: 'DELETE'
    }).then(response => response.json())


  updateModule = (module) =>
    fetch(`${modulesUrl}/${module._id}`, {
      method: 'PUT',
      body: JSON.stringify(module),
      headers: {
        'content-type': 'application/json'
      }
    }).then(response => response.json())



}
