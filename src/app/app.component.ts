import { Component } from '@angular/core';


interface SideBarToggle{
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'anhanguera';

  isSideBarCollapsed = false;
  screenWidth = 0;

  onToggleSidebar(data: SideBarToggle){
    this.screenWidth = data.screenWidth;
    this.isSideBarCollapsed = data.collapsed;
  }
}
