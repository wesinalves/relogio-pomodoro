import { ConfigurationsService } from './../configurations.service';
import { Component, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-relogio',
    templateUrl: './relogio.component.html',
    styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit,OnChanges {
    public seconds: number
    public minutes: number
    timer
    initialTime
    finalTime
    break: boolean = false
    doubt: boolean = false

    constructor(private config: ConfigurationsService) { }

    ngOnInit(): void {
        this.seconds = this.config.seconds;
        this.minutes = this.config.minutes;
    }

    ngOnChanges(): void{
        this.minutes = this.config.minutes
    }


    startClock() {
        this.seconds -= 1
        if (this.seconds <= 0 && this.minutes <= 0) {
            this.break = true
            this.stopClock()
        } else if (this.seconds <= 0) {
            this.seconds = 59
            this.minutes -= 1
        }
        this.timer = setTimeout(() => {
            this.startClock()
        }, 1000)
        if (this.initialTime == null)
            this.initialTime = new Date()
    }

    stopClock() {
        clearTimeout(this.timer)
        if (this.break = true) {
            this.minutes = this.config.break
            this.seconds = 0
            this.break = false
        } else {
            this.minutes = this.config.minutes
            this.seconds = 0
        }
        if (this.finalTime == null)
            this.finalTime = new Date()

    }


}
