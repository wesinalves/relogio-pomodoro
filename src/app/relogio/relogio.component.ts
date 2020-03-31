import { ConfigurationsService } from './../configurations.service';
import { Component, OnInit, OnChanges } from '@angular/core';
import { SEOService } from './../seo.service';

@Component({
    selector: 'app-relogio',
    templateUrl: './relogio.component.html',
    styleUrls: ['./relogio.component.scss']
})
export class RelogioComponent implements OnInit {
    public seconds: number
    public minutes: number
    timer
    initialTime
    finalTime
    break: boolean = false
    doubt: boolean = false

    constructor(private config: ConfigurationsService, private seoService: SEOService) { }

    ngOnInit(): void {
        this.seconds = this.config.seconds;
        this.config.sharedMinute.subscribe(minutes => this.minutes = minutes)
        this.seoService.addMetaTags()
    }

    startClock(): void {
        this.seconds -= 1
        if (this.seconds <= 0 && this.minutes <= 0) {
            clearTimeout(this.timer)
            if (this.break == true){
                this.minutes = this.config.break
                this.break = false                
            }else{
                this.config.sharedMinute.subscribe(minutes => this.minutes = minutes)
                this.break = true
            }
            console.log(this.break)
            return
        
                     
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
        if (this.break == true) {
            this.minutes = this.config.break
            this.seconds = 0
            this.break = false
        } else {
            this.config.sharedMinute.subscribe(minutes => this.minutes = minutes)
            this.seconds = 0
            this.break = true
        }
        if (this.finalTime == null)
            this.finalTime = new Date()

    }

    
}
