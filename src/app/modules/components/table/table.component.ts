import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.sass']
})
export class TableComponent implements OnInit {

  tableuser:any;

  constructor(private userService:UserService) { }
  
  ngOnInit(): void {
    this.userService.getData().subscribe(res=>{
      this.tableuser = res.tableUsers;
    })
  }

}
