import { Component, OnInit } from '@angular/core';
import {
  CardAnimation1, CardAnimation2, CardAnimation3,
  CardAnimation4, CardAnimation5, CardAnimation6,
  FadeIn, FadeIn1, FadeIn2,
  LoopAnimation, SlideInFromRight, SizeChange
} from '../../animation.constants';
import { ActivatedRoute } from '@angular/router'; 
import { HttpService } from '../../services/http/http.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
  animations: [CardAnimation1, CardAnimation2, CardAnimation3, CardAnimation4, CardAnimation5, CardAnimation6, FadeIn, FadeIn1, FadeIn2,
    LoopAnimation, SlideInFromRight, SizeChange
]
})

export class StudentsListComponent implements OnInit {
  isLoaded:boolean;
  collegeList:any;
  progressStage1:any;
  progressStage2:any;
  progressStage3:any;
  progressStage4:any;
  flag:any;
  constructor(private service: HttpService, private route: ActivatedRoute,private router: Router) { 

  }

  ngOnInit() {
      this.getCollegeList();
  }
  getCollegeList(){
      this.collegeList=[{name:"SSN College of Engineering",area:"Chennai",rank:1},
                {name:"SSN College of Engineering",area:"Chennai",rank:1}];
      this.isLoaded = true;
}
showPrediction() {
  this.progressStage1 = true;
  this.progressStage2 = false;
  this.progressStage3 = false;
  this.progressStage4 = false;
  setTimeout(() => {
    this.progressStage1 = false;
    this.progressStage2 = true;
    this.progressStage3 = false;
    this.progressStage4 = false;
  }, 2000);
  setTimeout(() => {
    this.progressStage1 = false;
    this.progressStage2 = false;
    this.progressStage3 = true;
    this.progressStage4 = false;
  }, 4000);
  setTimeout(() => {
    this.progressStage1 = false;
    this.progressStage2 = false;
    this.progressStage3 = false;
    this.progressStage4 = true;
    this.flag = true;
  }, 6000);
}
}