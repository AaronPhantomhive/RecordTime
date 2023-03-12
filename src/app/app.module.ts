import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecordTimeComponent } from './app-features/main/record-time/record-time.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {RouterOutlet} from "@angular/router";
import { MainComponent } from './app-features/main/main.component';
import {AppRoutingModule} from "./app-routing.module";
import {MatCardModule} from "@angular/material/card";
import { FocusColorDirective } from './app-common/directives/pattern/focus-color.directive';
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    RecordTimeComponent,
    MainComponent,
    FocusColorDirective
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    AppRoutingModule,
    RouterOutlet,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
