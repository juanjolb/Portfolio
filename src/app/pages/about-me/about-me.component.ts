import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, startWith, Subscription } from 'rxjs';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit, OnDestroy {

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  datesFormat: string[] = ['shortDate', 'dd-MM-YYYY', 'mediumDate', 'dd/MM/YYYY'];
  dynamicDate: string = '';

  timer: Observable<number> = interval(5000).pipe(startWith(0))
  timerSubscription!: Subscription;
  index: number = 0;

  ngOnInit(): void {
    this.timerSubscription = this.timer.subscribe({
    next: () => {
      if (this.index === this.datesFormat.length) this.index = 0;
      this.dynamicDate = this.datesFormat[this.index]
      this.index++
     }
    })
  }

  ngOnDestroy(): void {
   this.timerSubscription.unsubscribe(); 
  }
  

}
