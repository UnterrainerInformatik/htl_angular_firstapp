import { ServiceBase } from './ServiceBase'
import { PersonDto } from './dtos/PersonDto'
import { UserDto } from './dtos/UserDto'
import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PeopleService extends ServiceBase<PersonDto> {

  constructor (httpClient: HttpClient) {
    super(httpClient)
    this.path += '/people'
  }

  public getCurrentUser(): Promise<UserDto> {
    return this.getResponse<UserDto>(this.basePath + `/api/users/me`)
  }
}
