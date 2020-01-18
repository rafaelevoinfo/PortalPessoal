import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedTab:number=1;

  ativarLink(tabIndex:number){
    this.selectedTab = tabIndex;
  }
}
