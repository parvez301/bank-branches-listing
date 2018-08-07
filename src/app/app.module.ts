import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app.routing';

import {DataService  } from './services/data-service.service';

import { AppComponent } from './app.component';

import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { BankBranchesListComponent } from './bank-branches-list/bank-branches-list.component';
import { FilterPipe } from 'src/app/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BankBranchesListComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
