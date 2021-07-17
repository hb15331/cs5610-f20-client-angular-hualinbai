import { Component, OnInit } from '@angular/core';
import {QuizService} from '../../services/quiz-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {

  quizzes = [];
  courseId = '';
  quizzesAttempts = [];

  constructor(private quizService: QuizService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.quizService.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });
  }


  findAttemptsForQuiz = (quizId) =>
    fetch(`https://whiteboard-student-server.herokuapp.com/api/quizzes/${quizId}/attempts`)
      .then(response => response.json())
      .then(quizAttempts => {
        const quizScores = quizAttempts.map(qa => Math.round(qa.score));
        const quizTitle = this.findQuizTitle(quizId);
        this.quizzesAttempts.push({quizTitle, quizScores});
      })


  findQuizTitle = (quizId) => {
    const target = this.quizzes.find(quiz => quiz._id === quizId ? quiz.title : '');
    return target.title;
  }


  findAttemptsForQuizzes = () => {
    this.quizzesAttempts = [];
    this.quizzes.map(quiz => this.findAttemptsForQuiz(quiz._id));
  }


}
