import {Injectable} from '@angular/core';

const quizzesUrl = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuizService {

  findAllQuizzes = () =>
    fetch(quizzesUrl).then(response => response.json())


  findQuizById = (quizId) =>
    fetch(`${quizzesUrl}/${quizId}`)
      .then(response => response.json())

}
