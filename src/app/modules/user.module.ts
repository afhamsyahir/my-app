import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class ModulesModule { }
