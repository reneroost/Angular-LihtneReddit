import { Component } from '@angular/core';
import { Artikkel } from './artikkel/artikkel.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  artiklid: Artikkel[];

  constructor() {
    this.artiklid = [
      new Artikkel('Angular', 'http://angular.io', 3),
      new Artikkel('Fullstack', 'http://fullstack.io', 2),
      new Artikkel('Angular Homepage', 'http://angular.io', 1)
    ];
  }

  lisaArtikkel(pealkiri: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Lisan artikli. Pealkiri: ${pealkiri.value}. Link: ${link.value} `);
    this.artiklid.push(new Artikkel(pealkiri.value, link.value, 0));
    pealkiri.value = '';
    link.value = '';
    return false;
  }

  sorteeritudArtiklid(): Artikkel[] {
    return this.artiklid.sort((a: Artikkel, b: Artikkel) => b.haaled - a.haaled);
  }
}
