import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { PersonDto } from './services/dtos/PersonDto';
import { UserDto } from './services/dtos/UserDto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  public title = 'firstapp';
  public isIfSet = true
  public formName = 'Testwert'
  public formComponentName = 'Gerald'
  
  public testRecord = {
    test: true,
    tust: true
  }

  public heroes = [
    {id: 1, name:'Superman'},
    {id: 2, name:'Batman'},
    {id: 6, name:'BatGirl'},
    {id: 3, name:'Robin'},
    {id: 4, name:'Flash'}
  ]

  public peopleService: PeopleService
  public me?: UserDto
  public person?: PersonDto
  public persons?: Array<PersonDto>
  public personsString?: String

  constructor (peopleService: PeopleService) {
    this.peopleService = peopleService
    this.init()
  }

  async init() {
    this.me = { id: 0, userName: 'no one' } //await this.peopleService.getCurrentUser()
    this.person = await this.peopleService.get(1)
    this.persons = await this.peopleService.getList()
    this.personsString = JSON.stringify(this.persons, undefined, 2)
  }

  myComponentButtonClick () {
    console.log('The button in our component was clicked.')
  }

  myComponentCheckboxChange (state: any) {
    console.log(`State is: ${state}`)
  }

  ngOnInit () {
  }
}
