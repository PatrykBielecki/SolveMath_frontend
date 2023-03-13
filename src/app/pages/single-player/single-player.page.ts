import { Component, OnInit, Directive, HostListener } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController, NavController } from '@ionic/angular';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.page.html',
  styleUrls: ['./single-player.page.scss'],
})
export class SinglePlayerPage implements OnInit {

  term_1_arr;
  operator_arr;
  term_2_arr;
  term_3_arr;
  ans_1_arr;
  ans_2_arr;
  ans_3_arr;
  ans_4_arr;
  canGuess = false;
  iteration = 0;
  points = 0;

  constructor(
    private gameService: GameService,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {



    this.generateEquation();

    var win = document.getElementById('end');
        win.style.display = 'none';



    this.startGame(this.iteration);


    setTimeout(() => {
            this.iteration++;
            this.startGame(this.iteration);
          }, 14000);



    setTimeout(() => {
            this.iteration++;
            this.startGame(this.iteration);
          }, 14000 * 2);


    setTimeout(() => {
            this.iteration++;
            this.startGame(this.iteration);
          }, 14000 * 3);

    setTimeout(() => {
            this.iteration++;
            this.startGame(this.iteration);
          }, 14000 * 4);

    setTimeout(() => {
    document.getElementById('question-box').style.display = 'none';
                win.style.display = 'block';
                win.textContent = "Gratulacje, zebrane punkty: " + this.points;
              }, 14000 * 5);


  }

  public startGame(i){

    document.getElementById('ans-1').style.color = "white";
    document.getElementById('ans-2').style.color = "white";
    document.getElementById('ans-3').style.color = "white";
    document.getElementById('ans-4').style.color = "white";

    this.canGuess = false;

    var countdownNumberShort = document.getElementById('countdown-number-short');
    var countdownDivShort = document.getElementById('countdown-short');
    var countdownShort = 3;
    var intervalShort;

    var countdownNumberLong = document.getElementById('countdown-number-long');
    var countdownDivLong = document.getElementById('countdown-long');
    var countdownLong = 10;
    var intervalLong;

    var questionBox = document.getElementById('question-box');

    countdownNumberShort.textContent = countdownShort.toString();

    questionBox.style.display = 'none';
    countdownDivLong.style.display = 'none';
    countdownNumberLong.style.display = 'none';
    countdownNumberShort.style.display = 'block';
    countdownDivShort.style.display = 'block';

    intervalShort = setInterval(function() {
      countdownShort = --countdownShort <= 0 ? 3 : countdownShort;
      countdownNumberShort.textContent = countdownShort.toString();
    }, 1000);

    setTimeout(() => { //timeout generujacy pytanie

      clearInterval(intervalShort);

      questionBox.style.display = 'block';
      countdownDivLong.style.display = 'block';
      countdownNumberLong.style.display = 'block';
      countdownNumberShort.style.display = 'none';
      countdownDivShort.style.display = 'none';

      this.loadQuestion(i);
      this.canGuess = true;

      countdownNumberLong.textContent = countdownLong.toString();
      intervalLong = setInterval(function() {
        countdownLong = --countdownLong <= 0 ? 10 : countdownLong;
        countdownNumberLong.textContent = countdownLong.toString();
      }, 1000);

      setTimeout(() => {
        clearInterval(intervalShort);
        countdownDivLong.style.display = 'none';
        questionBox.style.display = 'block';
      }, 10000);

    }, 3000);
    clearInterval(intervalLong);
  }


  loadQuestion(i){
    var question = document.getElementById('question');
    var ans_1 = document.getElementById('ans-1');
    var ans_2 = document.getElementById('ans-2');
    var ans_3 = document.getElementById('ans-3');
    var ans_4 = document.getElementById('ans-4');

    question.textContent = this.term_1_arr[i].toString() + " "
    + this.operator_arr[i].toString() + " "
    + this.term_2_arr[i].toString() + " =";

    ans_1.textContent = this.ans_1_arr[i].toString();
    ans_2.textContent = this.ans_2_arr[i].toString();
    ans_3.textContent = this.ans_3_arr[i].toString();
    ans_4.textContent = this.ans_4_arr[i].toString();
  }

  async generateEquation() {

    const loading = await this.loadingCtrl.create({
      message: 'Loading..',
      spinner: 'bubbles',
    });
    await loading.present();

    this.gameService.generateEquation().subscribe(
      (res) => {

        this.term_1_arr = res['term_1_arr'];
        this.term_2_arr = res['term_2_arr'];
        this.operator_arr = res['operator_arr'];
        this.term_3_arr = res['term_3_arr'];
        this.ans_1_arr = res['ans_1_arr'];
        this.ans_2_arr = res['ans_2_arr'];
        this.ans_3_arr = res['ans_3_arr'];
        this.ans_4_arr = res['ans_4_arr'];
        console.log(this.term_1_arr);
        console.log(this.operator_arr);
        console.log(this.term_2_arr)
        console.log(this.ans_1_arr)
        console.log(this.ans_2_arr)
        console.log(this.ans_3_arr)
        console.log(this.ans_4_arr)
        loading.dismiss();
      },
      (err) => {
        console.log(err);
        loading.dismiss();
      }
    );
  }


  answerClicked(buttonId){

    var ans_1 = document.getElementById('ans-1').textContent;
    var ans_2 = document.getElementById('ans-2').textContent;
    var ans_3 = document.getElementById('ans-3').textContent;
    var ans_4 = document.getElementById('ans-4').textContent;
    if(this.canGuess){
      if(buttonId === 1) {
        if (ans_1 == this.term_3_arr[this.iteration]) {
          console.log('Correct!');
          this.points += 1;
          document.getElementById('ans-1').style.color = "green";
        } else {
          console.log('BAD!');
          console.log(ans_1);
          console.log(this.term_3_arr[this.iteration]);
          document.getElementById('ans-1').style.color = "red";
        }
      }
      if(buttonId === 2) {
        if (ans_2 == this.term_3_arr[this.iteration]) {
          console.log('Correct!');
          this.points += 1;
          document.getElementById('ans-2').style.color = "green";
        } else {
          console.log('BAD!');
          document.getElementById('ans-2').style.color = "red";
        }
      }
      if(buttonId === 3) {
        if (ans_3 == this.term_3_arr[this.iteration]) {
          console.log('Correct!');
          this.points += 1;
          document.getElementById('ans-3').style.color = "green";
        } else {
          console.log('BAD!');
          document.getElementById('ans-3').style.color = "red";
        }
      }
      if(buttonId === 4) {
        if (ans_4 == this.term_3_arr[this.iteration]) {
          console.log('Correct!');
          this.points += 1;
          document.getElementById('ans-4').style.color = "green";
        } else {
          console.log('BAD!');
          document.getElementById('ans-4').style.color = "red";
        }
      }
    }
    this.canGuess = false;
  }

}
