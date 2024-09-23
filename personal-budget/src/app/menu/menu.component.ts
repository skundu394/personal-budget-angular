import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { LoginComponent } from '../login/login.component';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'pb-menu',
  standalone: true,
  imports: [AboutComponent, LoginComponent, RouterModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
