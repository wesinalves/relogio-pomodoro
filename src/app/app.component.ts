import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'relogio-pomodoro';
  doubt: boolean = false;
  config: boolean = false;
  monitor: boolean = false;
  share: boolean = false;

  toggleDoubt(){
    if(this.doubt == true){
        this.doubt = false
    }else{
        this.doubt = true
    }
  }

  toggleConfig(){
    if(this.config == true){
        this.config = false
    }else{
        this.config = true
    }
  }
}
