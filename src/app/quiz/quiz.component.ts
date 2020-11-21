import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionService} from '../../services/question-service';
import {QuizService} from '../../services/quiz-service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  questions = [];
  quizId = '';
  quiz = {
    title: ''
  };

  constructor(private activatedRoute: ActivatedRoute,
              private quizService: QuizService,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.quizId = params.qid;
      this.questionService.findQuestionsForQuiz(this.quizId)
        .then(questions => {
          this.questions = questions;
          // console.log(this.questions);
        });
      this.quizService.findQuizById(this.quizId)
        .then(quiz => this.quiz = quiz);
    });
    // console.log(this.questions);
  }
}
