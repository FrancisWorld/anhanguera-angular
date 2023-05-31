import { Component, Input, OnInit } from '@angular/core';
import { INavbarData } from './helper';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-submenu',
  template: `
    <ul
      *ngIf="collapsed && data.items && data.items.length > 0"
      [@submenu]="
        expanded
          ? {
              value: 'visible',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '*'
              }
            }
          : {
              value: 'hidden',
              params: {
                transitionParams: '400ms cubic-bezier(0.86, 0, 0.07, 1)',
                height: '0'
              }
            }
      "
      class="submenu-nav"
    >
      <li *ngFor="let item of data.items" class="submenu-nav-items">
        <a
          class="submenu-nav-link"
          (click)="handleClick(item)"
          *ngIf="item.items && item.items.length > 0"
        >
          <mat-icon class="submenu-link-icon">lens</mat-icon>
          <span class="submenu-link-text" *ngIf="collapsed">{{
            item.label
          }}</span>
          <mat-icon
            *ngIf="item.items && collapsed && !item.expanded"
            class="submenu-link-icon"
            >keyboard_arrow_right</mat-icon
          >
          <mat-icon
            *ngIf="item.items && collapsed && item.expanded"
            class="submenu-link-icon"
            >keyboard_arrow_down</mat-icon
          >
        </a>
        <a
          class="submenu-nav-link"
          *ngIf="!item.items || (item.items && item.items.length === 0)"
          [routerLink]="[item.rota]"
          routerLinkActive="active-submenu"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          <mat-icon class="submenu-link-icon">lens</mat-icon>
          <span class="submenu-link-text" *ngIf="collapsed">{{
            item.label
          }}</span>
        </a>
        <div *ngIf="item.items && item.items.length > 0">
          <app-submenu
            [collapsed]="collapsed"
            [multiple]="multiple"
            [expanded]="item.expanded"
          >
          </app-submenu>
        </div>
      </li>
    </ul>
  `,
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger('submenu', [
      state(
        'hidden',
        style({
          height: '0',
          overflow: 'hidden',
        })
      ),
      state('visible', style({ height: '*' })),
      transition('visible <=> hidden', [
        style({ overflow: 'hidden' }),
        animate('{{transitionParams}}'),
      ]),
      transition('void => *', animate(0)),
    ]),
  ],
})
export class SubmenuComponent implements OnInit {
  @Input() data: INavbarData = {
    rota: '',
    label: '',
    icon: '',
    items: [],
  };
  @Input() collapsed = false;
  @Input() animating: boolean | undefined;
  @Input() expanded: boolean | undefined;
  @Input() multiple: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  handleClick(item: any) {
    if (!this.multiple) {
      if (this.data.items && this.data.items.length > 0) {
        for (const modelItem of this.data.items) {
          if (item !== modelItem && modelItem.expanded) {
            modelItem.expanded = false;
          }
        }
      }
    }
    item.expanded = !item.expanded;
  }
}
