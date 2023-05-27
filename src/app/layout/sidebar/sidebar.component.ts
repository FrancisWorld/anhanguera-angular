import { Component } from '@angular/core';
import { navbarData } from './nav-data';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  collapsed = false;
  navData = navbarData;

}
