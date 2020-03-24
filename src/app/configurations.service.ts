import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConfigurationsService {
  
  private minutes = new BehaviorSubject(25);
  sharedMinute = this.minutes.asObservable();
  seconds: number = 0;
  break: number = 5;

  constructor() { }

  nextMinute(minute: number){
      this.minutes.next(minute)
  }
  
}
