import { Component } from '@angular/core';

interface MenuItem {
  tittle: string;
  route: string;
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {

  public reactiveMenu: MenuItem[] = [
    { tittle: 'Basicos', route: './reactive/basic' },
    { tittle: 'Dinamicos', route: './reactive/dynamic' },
    { tittle: 'Switches', route: './reactive/switches' },
  ];

  public authMenu: MenuItem[] = [
    { tittle: 'Registro', route: './auth/sign-up' },
  ];

}
