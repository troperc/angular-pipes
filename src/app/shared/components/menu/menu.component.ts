import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Pipes de angular',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          { label: 'Numeros', icon: 'pi pi-dollar', routerLink: 'numbers' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: 'uncommon' },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [{ label: 'Custom pipes', icon: 'pi pi-cog', routerLink: 'custom' }],
      },
    ];
  }
}
