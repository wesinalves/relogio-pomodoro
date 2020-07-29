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
    running: boolean = false

    constructor(private config: ConfigurationsService, private seoService: SEOService) { }

    ngOnInit(): void {
        this.seconds = this.config.seconds;
        this.config.sharedMinute.subscribe(minutes => this.minutes = minutes)
        this.seoService.addMetaTags()
    }

    startClock(): void {
        this.seconds -= 1
        this.running = true
        
        if (this.seconds <= 0 && this.minutes <= 0) {
            clearTimeout(this.timer)
            if (this.break == true){
                this.config.sharedMinute.subscribe(minutes => this.minutes = minutes)
                this.break = false
                this.notifyMe('Hora de trabalhar!')                                
            }else{
                this.minutes = this.config.break
                this.break = true
                this.notifyMe('Hora de relaxar!')                
            }            
            this.playAlarm()
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
        this.running = false
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

    notifyMe(message) {
        // Let's check if the browser supports notifications
        if (!("Notification" in window)) {
          alert("This browser does not support system notifications");
        }
      
        // Let's check whether notification permissions have already been granted
        else if (Notification.permission === "granted") {
          // If it's okay let's create a notification
          var notification = new Notification("Tempo esgotado!", {
            icon: '../assets/pomodoro.png',
            body: message,
          });
        }
      
        // Otherwise, we need to ask the user for permission
        else if (Notification.permission !== 'denied') {
          Notification.requestPermission(function (permission) {
            // If the user accepts, let's create a notification
            if (permission === "granted") {
              var notification = new Notification("Obrigado!");
            }
          });
        }
      
        // Finally, if the user has denied notifications and you 
        // want to be respectful there is no need to bother them any more.
      }

      playAlarm(){
        var mp3Source = '<source src="../assets/alarm.mp3" type="audio/mpeg">';
        var oggSource = '<source src="../assets/alarm.mp3.ogg" type="audio/ogg">';
        //var embedSource = '<embed hidden="true" autostart="true" loop="false" src="' + filename +'.mp3">';
        document.getElementById("sound").innerHTML='<audio autoplay="autoplay">' + mp3Source + oggSource  + '</audio>';
      }

    
}
