import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstapp';
  isIfSet = true
  formName = 'Testwert'
  formComponentName = 'Gerald'
  
  testRecord = {
    test: true,
    tust: true
  }

  heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 6, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]

  ngOnInit () {
  }
}
