import { Component } from '@angular/core';
import { Nav } from '../nav/nav';
import { HeroSlider } from '../hero-slider/hero-slider';
import { CategoriesSection } from '../categories-section/categories-section';
import { TopPicks } from '../top-picks/top-picks';
import { WhyChooseUs } from '../why-choose-us/why-choose-us';
import { BrandStory } from '../brand-story/brand-story';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-landing',
  imports: [
    Nav,
    HeroSlider,
    CategoriesSection,
    TopPicks,
    WhyChooseUs,
    BrandStory,
    Footer,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {}
