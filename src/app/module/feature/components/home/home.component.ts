import { Component, OnInit } from '@angular/core';
import { tents } from '../../../../../data/camping/tents/tents';
import { sleepingBags } from '../../../../../data/camping/sleeping_bags/sleeping_bags';
import { mattressesAndGroundsheets } from '../../../../../data/camping/mattresses_and_groundsheets/mattresses_and_groundsheets';
import { portableStovesAndCampingCookware } from '../../../../../data/camping/portable_stoves_and_camping_cookware/portable_stoves_and_camping_cookware';
import { flashlightsAndLanterns } from '../../../../../data/camping/flashlights_and_lanterns/flashlights_and_lanterns';
import { mensPantsPage1 } from '../../../../../data/pants/men_page1';
import { dressPage1 } from '../../../../../data/dress/page1';
import { gounsPage1 } from '../../../../../data/Gouns/gouns';
import { kurtaPage1 } from '../../../../../data/Kurta/kurta';
import { sareePage1 } from '../../../../../data/Saree/page1';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  tents: any;
  sleepingBags: any;
  mattressesAndGroundsheets: any;
  portableStovesAndCampingCookware: any;
  flashlightsAndLanterns: any;

  pants: any;
  dress: any;
  gouns: any;
  kurta: any;
  saree: any;

  ngOnInit(): void {
    this.tents = tents.slice(0, 5);
    this.sleepingBags = sleepingBags.slice(0, 5);
    this.mattressesAndGroundsheets = mattressesAndGroundsheets.slice(0, 5);
    this.portableStovesAndCampingCookware = portableStovesAndCampingCookware.slice(0, 5);
    this.flashlightsAndLanterns = flashlightsAndLanterns.slice(0, 5);

    this.pants = mensPantsPage1.slice(0,5)
    this.dress = dressPage1.slice(0,5)
    this.gouns = gounsPage1.slice(0,5)
    this.kurta = kurtaPage1.slice(0,5)
    this.saree = sareePage1.slice(0,5)
  }
}
