import {Injectable} from '@angular/core';

const quizzesUrl = 'https://whiteboard-student-server.herokuapp.com/api/quizzes';

@Injectable()
export class QuestionService {
  findQuestionsForQuiz = (quizId) =>
    fetch(`${quizzesUrl}/${quizId}/questions`)
      .then(response => response.json())
}
