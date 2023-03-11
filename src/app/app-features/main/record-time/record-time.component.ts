import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-record-time',
  templateUrl: './record-time.component.html',
  styleUrls: ['./record-time.component.css']
})
export class RecordTimeComponent implements OnInit{
  currentTime: Date = new Date();
  inputMessage: string = "";

  ngOnInit(): void {
    this.RunningTime();
  }

  RunningTime() {
    setInterval(() => {
      this.currentTime = new Date();
    }, 1000);
  }

  record() {
    console.log(this.currentTime);
  }

  saved() {
    console.log(this.currentTime);
  }

}
