import { Component } from '@angular/core';
import { Image } from './shared.ts';
// import {Material} from  './material.ts';
@Component({
  selector: 'readme-page',
  templateUrl: './readme-page.component.html',
  styleUrls: ['./readme-page.component.scss']
})
export class ReadmePageComponent  {
 panelOpenState: boolean = false;
  public images = IMAGES;
  constructor() {
  }
}

const IMAGES: Image[] = [

  { 'title': 'chettinad chicken', 'url': '/assets/images/angularfirebase.png' },
  { 'title': 'Madras chicken',     'url': '/assets/images/angularfirebase.png' },
  { 'title': 'fish kozhambu',     'url': '/assets/images/angularfirebase.png' },
  { 'title': 'shrimp curry',      'url': '/assets/images/angularfirebase.png' },
  { 'title': 'mutton gravy',      'url': '/assets/images/angularfirebase.png' },
];
