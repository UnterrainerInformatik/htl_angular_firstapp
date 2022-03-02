import { DtoBase } from './DtoBase'

export interface PersonDto extends DtoBase {
    name: string
    birth: string
}