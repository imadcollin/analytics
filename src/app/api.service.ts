import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {

  /*******************  Read JSON **************** */
  private url = "https://jsonplaceholder.typicode.com/posts";
  language = './assets/lang.json';
  wordJson='./assets/words.json';
  infoJson='./assets/info.json';
 

  /*******************  Read Languages **************** */
  _auth = {
    langUrl: 'https://api.gavagai.se/v3\\',
    route: "languages?",
    apiKey: "8c79736f393ab6eff4a864fcfa23344c"
  };


  /*******************  Read words  **************** */
lang="en";
word="yes";
_word = `https://api.gavagai.se/v3/lexicon/${this.lang}/${this.word}?additionalFields=SEMANTICALLY_SIMILAR_WORDS&apiKey=${this._auth.apiKey}`;


  constructor() { }

  getLangJson() {
    return fetch(this.language);
  }
  getLag() {
    return fetch(`${this._auth.langUrl}${this._auth.route}apiKey=${this._auth.apiKey}`);
  }
  getWord(){
    return fetch(this._word);

  }
  getWordsParam(l, w){
    l="en";
    w="rest";
    console.log("language is EN ");
    console.log("word  is rest ");
    return fetch(this.wordJson);
    //working API 
    //return fetch(`https://api.gavagai.se/v3/lexicon/${l}/${w}?additionalFields=SEMANTICALLY_SIMILAR_WORDS&apiKey=${this._auth.apiKey}`);

  }
  getInfoJson(){
    return fetch(this.infoJson);
  }



}
