import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-word-details',
  templateUrl: './word-details.component.html',
  styleUrls: ['./word-details.component.css']
})
export class WordDetailsComponent implements OnInit {
  storage;
  details;
  similar;
  endsWithWords;
  stringSimilarWords;
  wordInformation;
  leftSideNeighbours;
  constructor() { }

  ngOnInit() {

    this.storage = localStorage.getItem("key");
    console.log('retrievedObject: ', JSON.parse(this.storage));
    this.details = JSON.parse(this.storage);
    this.stringSimilarWords = this.details.stringSimilarWords;
    this.endsWithWords = this.details.endsWithWords;
    this.wordInformation = this.details.wordInformation;
    this.leftSideNeighbours = this.details.leftSideNeighbours;
  }

}
