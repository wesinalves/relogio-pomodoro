import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationsService {
  minutes: number
  seconds: number

  constructor() {
    this.minutes = 25
    this.seconds = 0
  }
}
