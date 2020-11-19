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
  // a list of quizzes is under a particular course
  courseId = '';

  constructor(private quizService: QuizService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.cid;
      this.quizService.findAllQuizzes()
        .then(quizzes => this.quizzes = quizzes);
    });
  }

}
