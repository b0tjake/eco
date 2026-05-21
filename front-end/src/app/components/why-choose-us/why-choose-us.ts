import { Component } from '@angular/core';

interface Benefit {
  id: string;
  emoji: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-why-choose-us',
  imports: [],
  templateUrl: './why-choose-us.html',
})
export class WhyChooseUs {
  protected readonly benefits: Benefit[] = [
    {
      id: 'shipping',
      emoji: '🚚',
      title: 'Fast shipping',
      description:
        'Across Morocco in 24–72h. Tracked from our warehouse to your door.',
    },
    {
      id: 'price',
      emoji: '💸',
      title: 'Best prices in Morocco',
      description:
        'We negotiate hard so you get flagship gear without the flagship markup.',
    },
    {
      id: 'cod',
      emoji: '🤝',
      title: 'Pay on delivery',
      description:
        'Inspect your package first, then pay cash to the courier. Zero risk.',
    },
    {
      id: 'support',
      emoji: '💬',
      title: '24/7 support',
      description:
        'Real humans on chat, phone, and WhatsApp — every day of the week.',
    },
  ];
}
