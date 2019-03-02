import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collegeprofile',
  templateUrl: './collegeprofile.component.html',
  styleUrls: ['./collegeprofile.component.scss']
})
export class CollegeprofileComponent implements OnInit {
  isLoaded:boolean;
  collegeInfo:any;

  constructor() { }

  ngOnInit() {
    this.getCollegeInfo();
  }

  getCollegeInfo(){
    this.collegeInfo=[{location:"Chennai",uranks:15,placementpercent:"98.66%",studentofaculty:30,lab:"",infra:"",phd:35}];
    this.isLoaded = true;
}

}
