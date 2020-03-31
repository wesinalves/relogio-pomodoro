import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
   providedIn: 'root'
})
export class SEOService { 
   constructor(private meta: Meta) {
        meta.addTag({name: 'description', content: 'Tenha mais produtividade usando o Relógio Pomodoro'});
        meta.addTag({name: 'viewport', content: 'width=device-width, initial-scale=1'}); 
   }
   addMetaTags() {
        this.meta.addTags([
           {name: 'robots', content: 'INDEX, FOLLOW'},
           {name: 'author', content: 'wesin ribeiro'},
           {name: 'keywords', content: 'Relogio pomodoro, pomodoro, tempo, produtividade'},
           {httpEquiv: 'Content-Type', content: 'text/html'},
           {property: 'og:title', content: "Relógio Pomodoro"},
           {property: 'og:type', content: "website"},
           {property: 'og:url', content: "https://relogiopomodoro.com"},
           {property: 'og:site_name', content: "relogiopomodoro"},
           {property: 'og:description', content: "Tenha mais produtividade usando o Relógio Pomodoro"},
           {property: 'og:image', content: "https://abrilexame.files.wordpress.com/2016/09/size_960_16_9_timer-de-cozinha.jpg"},
           {property: 'og:image:type', content: "image/jpeg"},
           {property: 'og:image:width', content: "800"},
           {property: 'og:image:height', content: "600"},
           {charset: 'UTF-8'}
        ]);
   } 
}