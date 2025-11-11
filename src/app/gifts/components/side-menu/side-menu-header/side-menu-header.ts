import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'side-menu-header',
  imports: [],
  templateUrl: './side-menu-header.html',
})
export class SideMenuHeader {
  envs = environment;
}
