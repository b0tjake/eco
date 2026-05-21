import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly currentYear = new Date().getFullYear();

  protected readonly quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Categories', href: '#' },
    { label: 'Top picks', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ];

  protected readonly support = [
    { label: 'Shipping & delivery', href: '#' },
    { label: 'Returns', href: '#' },
    { label: 'Warranty', href: '#' },
    { label: 'FAQ', href: '#' },
  ];
}
