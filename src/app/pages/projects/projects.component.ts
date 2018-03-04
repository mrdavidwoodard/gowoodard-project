import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import "rxjs/Rx";

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

    constructor() { }
  
    ngOnInit() {
    }
  
  }
