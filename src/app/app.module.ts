import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componants/nav/nav.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridComponent } from './componants/grid/grid.component';
import { CarauselComponent } from './componants/carausel/carausel.component';
import { HistoryComponent } from './componants/history/history.component';
import { FooterComponent } from './componants/footer/footer.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GridComponent,
    CarauselComponent,
    HistoryComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    BrowserAnimationsModule,
  

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
