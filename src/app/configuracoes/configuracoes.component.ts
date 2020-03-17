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

    constructor(private config: ConfigurationsService) {
        this.pomodoro.time = config.minutes
        this.pomodoro.break = config.break
    }

    ngOnInit(): void {
    }

    setPomodoro(){
        this.config.minutes = this.pomodoro.time
        //console.log(this.pomodoro.time)
    }

    setBreak(){
        this.config.break = this.pomodoro.break
    }

}
