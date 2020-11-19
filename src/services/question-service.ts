import {Injectable} from '@angular/core';

const quizzesUrl = 'http://localhost:3000/api/quizzes';

@Injectable()
export class QuestionService {

  findQuestionsForQuiz = (quizId) =>
    fetch(`${quizzesUrl}/${quizId}/questions`)
      .then(response => response.json())
    // fetch(`http://localhost:3000/api/quizzes/${quizId}/questions`)
    //   .then(response => response.json())

}
