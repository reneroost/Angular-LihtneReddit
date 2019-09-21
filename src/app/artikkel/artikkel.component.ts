import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Artikkel } from './artikkel.model';

@Component({
  selector: 'app-artikkel',
  templateUrl: './artikkel.component.html',
  styleUrls: ['./artikkel.component.css']
})
export class ArtikkelComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() artikkel: Artikkel;

  constructor() { }

  ulesHaaletus() {
    this.artikkel.ulesHaaleta();
    return false;
  }

  allaHaaletus() {
    this.artikkel.allaHaaleta();
    return false;
  }

  ngOnInit() {
  }

}
