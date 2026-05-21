import { Component, Input, OnDestroy, OnInit, signal } from '@angular/core';

interface HeroSlide {
  id: number;
  kicker: string;
  title: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-hero-slider',
  imports: [],
  templateUrl: './hero-slider.html',
})
export class HeroSlider implements OnInit, OnDestroy {
  /** Slide rotation interval in ms. */
  @Input() interval = 2000;

  protected readonly currentIndex = signal(0);

  protected readonly slides: HeroSlide[] = [
    {
      id: 1,
      kicker: 'Latest Electronics Deals',
      title: 'Premium Headphones, Premium Sound',
      subtitle:
        'Studio-grade noise cancellation at prices nobody in Morocco can match.',
      image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1600&auto=format&fit=crop',
    },
    {
      id: 2,
      kicker: 'Just Landed',
      title: 'iPhone — Power in Your Pocket',
      subtitle:
        'The latest iPhones, in stock and ready to ship across Casablanca.',
      image:
        'https://images.unsplash.com/photo-1592286927505-1def25115558?w=1600&auto=format&fit=crop',
    },
    {
      id: 3,
      kicker: 'Game Without Limits',
      title: 'PlayStation 4 & PlayStation 5',
      subtitle: 'Consoles, controllers, and exclusives — all in one place.',
      image:
        'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=1600&auto=format&fit=crop',
    },
    {
      id: 4,
      kicker: 'Built for Everything',
      title: 'Laptops for Work, Study, and Play',
      subtitle: 'From featherweight ultrabooks to high-end gaming rigs.',
      image:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=1600&auto=format&fit=crop',
    },
  ];

  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit(): void {
    this.start();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  protected goTo(i: number): void {
    this.currentIndex.set(i);
    this.restart();
  }

  protected next(): void {
    this.currentIndex.update((i) => (i + 1) % this.slides.length);
  }

  protected prev(): void {
    this.currentIndex.update(
      (i) => (i - 1 + this.slides.length) % this.slides.length,
    );
  }

  protected pause(): void {
    this.stop();
  }

  protected resume(): void {
    if (this.timer === null) {
      this.start();
    }
  }

  private start(): void {
    this.timer = setInterval(() => this.next(), this.interval);
  }

  private stop(): void {
    if (this.timer !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }

  private restart(): void {
    this.stop();
    this.start();
  }
}
