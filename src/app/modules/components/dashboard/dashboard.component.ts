import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Chart } from 'chart.js';
import {UserService} from '../../../services/user.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})

export class DashboardComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public userService: UserService 
  ) { }

  ngOnInit(): void {

    this.userService.getData().subscribe(res=>{
      var chartdonut = res.chartDonut;
      var chartbar = res.chartBar;
      const myChart = new Chart("myChart", {
        type: 'doughnut',
        data: {
            labels: chartdonut.map((t: { name: any; })=>t.name),
            datasets: [{
                label: 'Value',
                data: chartdonut.map((t: { value: any; })=>t.value),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)', 
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    
                    grid: {
                      display:false,
                      drawBorder: false
                    },
  
                    ticks:{
                      display:false
                    }
                },
  
                
  
                x: {
                  grid: {
                    display:false,
                    drawBorder: false
                  },
                  ticks:{
                    display:false
                  }
                }
            }
        }
    });
  
    const myChart1 = new Chart("myChart1", {
      type: 'bar',
      data: {
          labels: chartbar.map((t: { name: any; })=>t.name),
          datasets: [{
              label: 'Value',
              data: chartbar.map((t: { value: any; })=>t.value),
              backgroundColor: [
                  'rgba(240, 88, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true,    
              }
          }
      }
  });
    })

  }

  logout(): void{
    this.auth.logout();
  }

}
