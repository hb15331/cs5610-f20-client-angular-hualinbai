import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  // keep track of parent course for modules
  courseId = '';
  selectedModuleId = '';


  constructor(private moduleService: ModuleService,
              private activeRoute: ActivatedRoute) { }


  ngOnInit(): void {
    // params corresponds to cid
    // subscribes to a callback function that will be invoked
    // everytime params is changed
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      const courseId = params.cid;
      if (typeof courseId !== 'undefined') {
        this.moduleService.findModulesForCourse(courseId)
          .then(modules => this.modules = modules);
      }
      this.courseId = courseId;
      this.selectedModuleId = params.mid;
      console.log(this.selectedModuleId);

      // this.courseId = params.cid;
      // if (typeof this.courseId !== 'undefined') {
      //   this.moduleService.findModulesForCourse(this.courseId)
      //     .then(modules => this.modules = modules);
      // }

    });
  }

}
