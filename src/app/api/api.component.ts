import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FreeApiService } from '../services/service';
import { textDef } from '@angular/core/src/view';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  posts: Object;
  constructor(private _apiService: ApiService, private _scroll: FreeApiService) { }

  selectedLevel;
  l_data = [];
  w_data = [];
  public show: boolean = false;
  public hide: boolean = true;
  public details: boolean = false;
  public hide2: boolean = true;
  public change = "Table";
  public count = 0;
  public buttonName: any = 'Show';
  p: number = 1;
  public list_or_table = "List/Table";
  public more_details = "More Details";

  ngOnInit() {
    window.addEventListener('scroll', this.scroll, true); //third parameter

    console.log(this.w_data);
    console.log('----ä');
    this.text();
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
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }
  input: string = '';
  onkeyUp(event: any) {
    this.input = event.target.value;
  }
  /*******************  Call words with params **************** */
  scroll = (): void => {
    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      console.log("stick")
      header.classList.add("sticky");
    } else {
      console.log("rem")
      header.classList.remove("sticky");
    }
  };
  onSubmit($event) {

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
        localStorage.setItem('key', JSON.stringify(data));
      })
    }).catch((err) => {
      console.log(err);
    });


  }
  triggerScrollTo() {
    this._scroll.triggerScrollTo();
  }
  text() {
    var TxtRotate = function (el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

      var that = this;
      var delta = 300 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(function () {
        that.tick();
      }, delta);
    };

    window.onload = function () {
      var elements = document.getElementsByClassName('txt-rotate');
      for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-rotate');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtRotate(elements[i], JSON.parse(toRotate), period);
        }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
      document.body.appendChild(css);
    };
  }

  toggle() {
    this.show = !this.show;
    this.hide = !this.show;
    (this.count % 2 == 0) ? this.change = "List" : this.change = "Table";
    this.count++;
    // CHANGE THE NAME OF THE BUTTON.
    if (this.show) {
      this.buttonName = "Hide";
      this.list_or_table = "Show List";
    } else {
      this.buttonName = "Show";
      this.list_or_table = "Show Table";
    }
  }
  toggle2() {

    this.details = !this.details;
    this.details ? this.more_details = "Less Info" : this.more_details = "More Info";

  }
}
