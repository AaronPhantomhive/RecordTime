import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  title = 'RecordTime';

  showFiller = false;

  // constructor(public router: Router, public activeRoute: ActivatedRoute) { }
  testButton() {
    console.log("testButtontestButtontestButtontestButtontestButtontestButton");
  }
}