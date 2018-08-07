
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankBranchesListComponent } from "./bank-branches-list/bank-branches-list.component";

const routes: Routes = [

  {
    path: '',
    component: BankBranchesListComponent
  },
 
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }