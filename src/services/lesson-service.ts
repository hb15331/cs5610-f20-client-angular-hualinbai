import {Injectable} from '@angular/core';

const lessonsUrl = `https://wbdv-generic-server.herokuapp.com/api/hualin/lessons`;
const modulesUrl = `https://wbdv-generic-server.herokuapp.com/api/hualin/modules`;



@Injectable()
export class LessonService {

  findLessonsForModule = (moduleId) =>
    fetch(`${modulesUrl}/${moduleId}/lessons`)
      .then(response => response.json())

}
