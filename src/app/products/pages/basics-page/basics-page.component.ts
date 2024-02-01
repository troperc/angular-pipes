import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'camilo'
  public nameUpper: string = 'CAMILO'
  public fullName: string = 'CaMIlo SiERra'
  public customDate: Date = new Date();
}
