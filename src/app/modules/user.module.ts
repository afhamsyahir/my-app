import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import {MatTableModule} from '@angular/material/table'



@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ]
})
export class ModulesModule { }
