import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { PersonDto } from './services/dtos/PersonDto';
import { UserDto } from './services/dtos/UserDto';
import { KeycloakAngularModule, KeycloakService, KeycloakEventType } from 'keycloak-angular';

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
    { id: 1, name: 'Superman' },
    { id: 2, name: 'Batman' },
    { id: 6, name: 'BatGirl' },
    { id: 3, name: 'Robin' },
    { id: 4, name: 'Flash' }
  ]

  public peopleService: PeopleService
  public me?: UserDto
  public person?: PersonDto
  public persons?: Array<PersonDto>
  public personsString?: String
  public keycloakService?: KeycloakService

  constructor(peopleService: PeopleService, keycloakService: KeycloakService) {
    this.peopleService = peopleService
    this.keycloakService = keycloakService
    this.init()
  }

  async init() {
    this.me = { id: 0, userName: 'no one' } //await this.peopleService.getCurrentUser()
    this.person = await this.peopleService.get(1)
    this.persons = await this.peopleService.getList()
    this.personsString = JSON.stringify(this.persons, undefined, 2)
    console.log('KeycloakService', this.keycloakService)
    if (this.keycloakService) {
      console.log(`Keycloak logged in:${await this.keycloakService.isLoggedIn()}`)
      if (await this.keycloakService.isLoggedIn()) {
        console.log(await this.keycloakService?.getToken())
      }
    }

  }

  async longRunning(name: string, ms: number, resolveFunction: boolean) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`Long running operation '${name}' was resolved.`)
        if (resolveFunction) {
          resolve(null)
        } else {
          reject(new Error(`Long running operation '${name}' was rejected.`))
        }
      }, ms)
    })
  }

  myComponentButtonClick() {
    console.log('The button in our component was clicked.')
  }

  myComponentCheckboxChange(state: any) {
    console.log(`State is: ${state}`)
  }

  async serialSchiach () {
    return this.longRunning('start', 1000, true).then(() => {
      return this.longRunning('end', 3000, true).then(() => {
        return this.longRunning('middle', 2000, true)
      })
    })
  }

  async serialSchen () {
    await this.longRunning('start', 1000, true)
    await this.longRunning('end', 3000, true)
    await this.longRunning('middle', 2000, true)
  }

  ngOnInit() {
    //this.serialSchiach()
    //this.serialSchen()
    this.longRunning('start', 1000, true)
    this.longRunning('end', 3000, true)
    this.longRunning('middle', 2000, true)
  }
}
