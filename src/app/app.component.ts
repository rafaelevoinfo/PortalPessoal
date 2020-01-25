import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  selectedTab: number = 1;

  constructor() {
    let url = window.location.href;

    if (url.endsWith('/perfil')) {
      this.selectedTab = 1
    } else if (url.endsWith('/portifolio')) {
      this.selectedTab = 2;
    } else if (url.endsWith('/contrate')) {
      this.selectedTab = 3;
    }
  }

  ngOnInit() {
    
  }

  ativarLink(tabIndex: number) {
    this.selectedTab = tabIndex;
  }
}
