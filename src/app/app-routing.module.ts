import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {RecordTimeComponent} from "./app-features/main/record-time/record-time.component";
import {MainComponent} from "./app-features/main/main.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: "full"
  },
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'recordTime',
    component: RecordTimeComponent
  }
]


@NgModule({
  imports: [ BrowserModule, RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
