import {Injectable} from '@angular/core';

const lessonsUrl = `http://wbdv-generic-server.herokuapp.com/api/hualin/lessons`;
const modulesUrl = `http://wbdv-generic-server.herokuapp.com/api/hualin/modules`;



@Injectable()
export class LessonService {

  findLessonsForModule = (moduleId) =>
    fetch(`${modulesUrl}/${moduleId}/lessons`)
      .then(response => response.json())

}
