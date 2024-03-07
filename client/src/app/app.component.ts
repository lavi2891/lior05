import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private titleService: Title, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const pageTitle = this.getPageTitleBasedOnRoute(this.router.url);
        this.titleService.setTitle(pageTitle);
      }
    });
  }

  getPageTitleBasedOnRoute(url: string): string {
    switch (url) {
      case '/tasks':
        return 'Task List';
      case '/add-task':
        return 'Add Task';
      default:
        return 'Task Manager';
    }
  }
}