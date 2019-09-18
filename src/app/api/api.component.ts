import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FreeApiService } from '../services/service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  posts: Object;
  constructor(private _apiService: ApiService, private _scroll: FreeApiService) { }

  selectedLevel;
  l_data= [];
  w_data=[];
  p: number = 1;

  ngOnInit() {
  /*******************  Call Languages **************** */
    this._apiService.getLangJson().then((response) => {
      response.json().then((data) => {
        console.log(data);
        this.l_data = data;
      })
    }).catch((err) => {
      console.log(err);
    });

  /*******************  Call words **************** */
  // this._apiService.getWordJson().then((response) => {
  //   response.json().then((data) => {
  //     console.log(data.semanticallySimilarWords);
  //     this.w_data = data.semanticallySimilarWords;
  //   })
  // }).catch((err) => {
  //   console.log(err);
  // });

  }

  input: string = '';
  onkeyUp(event: any) {
    this.input = event.target.value;
  }
  /*******************  Call words with params **************** */

  onSubmit($event){

  // this._apiService.getWordsParam(this.selectedLevel,this.input).then((response) => {
  //   response.json().then((data) => {
  //     console.log(data.semanticallySimilarWords);
  //     this.w_data = data.semanticallySimilarWords;
  //   })
  // }).catch((err) => {
  //   console.log(err);
  // });


  this._apiService.getInfoJson().then((response) => {
    response.json().then((data) => {
      console.log(data);
      this.w_data = data.semanticallySimilarWords;
      localStorage.setItem('key',  JSON.stringify(data));
    })
  }).catch((err) => {
    console.log(err);
  });


}
triggerScrollTo(){
  this._scroll.triggerScrollTo();
}


}
