import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-relogio',
  templateUrl: './relogio.component.html',
  styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {
  seconds: number = 0
  minutes: number = 25
  timer
  initialTime
  finalTime
  start: boolean = false
  break: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  startClock(){
    this.seconds -=1
    if(this.seconds <= 0){
      this.seconds = 59
      this.minutes -= 1
    }
    if(this.seconds <=0 && this.minutes <= 0){
      this.break = true
      this.stopClock()
    } 
    this.timer = setTimeout(() => {
      this.startClock()
    }, 1000)
    this.start = true
    if(this.initialTime == null)
      this.initialTime = new Date()
  }

  stopClock(){
    clearTimeout(this.timer)
    if(this.break = true){
        this.minutes = 5
        this.seconds = 0
        this.break = false
    }else{
        this.minutes = 25
        this.seconds = 0        
    }
    if(this.finalTime == null)
      this.finalTime = new Date()
    
  }

}
