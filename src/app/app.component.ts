import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((routerEvent) => {
      if (routerEvent instanceof NavigationStart) {
        console.log('router:', routerEvent.url);
      }
    })
  }

}
