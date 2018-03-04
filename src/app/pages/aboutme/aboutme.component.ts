import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/Rx";

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
