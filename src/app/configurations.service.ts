import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  minutes: number
  seconds: number
  break: number

  constructor() {
    this.minutes = 25
    this.seconds = 0
    this.break = 5
  }
  
}
