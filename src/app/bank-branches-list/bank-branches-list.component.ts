import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Data } from "@angular/router";
import {DataService } from '../services/data-service.service';

@Component({
  selector: 'app-bank-branches-list',
  templateUrl: './bank-branches-list.component.html',
  styleUrls: ['./bank-branches-list.component.css']
})
export class BankBranchesListComponent implements OnInit {
  city: any;
  Data: any[];
  filteredData:Data[];
  searchText:string;

constructor(private dataService: DataService,private router:Router) { 

}

ngOnInit() {

}

dropdownChange(city) {
  this.dataService.getBranchList(city.city).subscribe(data =>{
    this.Data = data;
  })
}
}