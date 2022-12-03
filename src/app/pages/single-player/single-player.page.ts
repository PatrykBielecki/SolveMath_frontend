import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-player',
  templateUrl: './single-player.page.html',
  styleUrls: ['./single-player.page.scss'],
})
export class SinglePlayerPage implements OnInit {

  public edited = false;

  public term_1_arr   = [2, 3, 4, 10, 1];
  public operator_arr = ['+', '-', '*', '/', '+'];
  public term_2_arr   = [3, 4, 5, 5, 10];
  public term_3_arr   = [5, -1, 20, 2, 11];
  public ans_1_arr    = [5, 0, 18, 5, 11];
  public ans_2_arr    = [3, -1, 19, 4, 12];
  public ans_3_arr    = [4, 1, 20, 3, 13];
  public ans_4_arr    = [6, -2, 21, 2, 10];

  constructor() { }

  ngOnInit() {

//     async function secondFunction() {
//         console.log('Before promise call.')
//         //Await for the first function to complete
//         await startGame(0)
//         console.log('Next step.')
//     };
//
//     secondFunction()

    this.startGame(0);

  }

  public startGame(i){

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

}
