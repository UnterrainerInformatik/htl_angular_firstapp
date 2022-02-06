import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'firstapp';
  isIfSet = true
  formName = 'Test'
  formComponentName = 'Gerald'
  
  testRecord = {
    test: false
  }
  heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 5, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]

  ngOnInit () {
    this.testRecord = {
      test: true
    }
  }
}
