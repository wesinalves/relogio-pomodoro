import { ConfigurationsService } from './../configurations.service';
import { Component, OnInit } from '@angular/core';
import { PomodoroModel } from './pomodoro';

@Component({
    selector: 'app-configuracoes',
    templateUrl: './configuracoes.component.html',
    styleUrls: ['./configuracoes.component.scss']
})
export class ConfiguracoesComponent implements OnInit {
    pomodoro: PomodoroModel = new PomodoroModel()

    constructor(private config: ConfigurationsService) { }

    ngOnInit(): void{
        this.config.sharedMinute.subscribe(minutes => this.pomodoro.time = minutes)
        this.pomodoro.break = this.config.break
    }

    setPomodoro(){
        this.config.nextMinute(this.pomodoro.time)
        //console.log(this.pomodoro.time)
    }

    setBreak(){
        this.config.break = this.pomodoro.break
    }

}
