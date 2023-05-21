import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router) {
    const data$ = new Observable((sub) => {
      console.log('Start of Observable');
      sub.next('Observable data 1');
      sub.next('Observable data 2');
      sub.next('Observable data 3');
      // sub.next("Observable data 4");
      setTimeout(() => sub.next('Observable data 4'), 1000);
      sub.next('Observable data 5');
    });

    console.log('Start');

    data$.subscribe((x) => {
      console.log('First Subscription :', x);
    });

    console.log('First Subscription ends');

    data$.subscribe((x) => {
      console.log('Second Subscription:', x);
    });

    console.log('Second Subscription ends');

    const data = this.normalFunction();

    console.log('Normal Function Data:' + data);
  }

  ngOnInit(): void {}

  normalFunction() {
    console.log('Return ouput: 1');
    return 1;
  }

  onInputDemo() {
    this.router.navigateByUrl('views/demo/service');
  }
  onOutputDemo() {
    this.router.navigateByUrl('views/demo/edituser/');
  }
  onViewChildDemo() {
    this.router.navigateByUrl('views/user/edituser/');
  }
  onServiceDemo() {
    this.router.navigateByUrl('views/user/edituser/');
  }
  onLifeCycleDemo() {
    this.router.navigateByUrl('views/demo/lifecyclehooks');
  }
  onDirectiveDemo() {
    this.router.navigateByUrl('views/user/edituser/');
  }
  onPipesDemo() {
    this.router.navigateByUrl('views/user/edituser/');
  }
  onHTMLDemo() {
    this.router.navigateByUrl('views/demo/html');
  }

  onNGRXDemo()
  {
    this.router.navigateByUrl('views/demo/html');
  }
}
