import { Component, OnInit } from '@angular/core';
import { homeCarouselData } from '../../../data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  carouselData: any = homeCarouselData;
  currentSlide = 0;
  interval: any;

  ngOnInit(): void {
    // this.autoPlay();
  }

  autoPlay() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 2000);
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.carouselData.length;
  }
}
