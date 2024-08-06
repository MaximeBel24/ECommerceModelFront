import { Component, OnInit } from '@angular/core';
import { tents } from '../../data/camping/tents/tents';
import { sleepingBags } from '../../data/camping/sleeping_bags/sleeping_bags';
import { mattressesAndGroundsheets } from '../../data/camping/mattresses_and_groundsheets/mattresses_and_groundsheets';
import { portableStovesAndCampingCookware } from '../../data/camping/portable_stoves_and_camping_cookware/portable_stoves_and_camping_cookware';
import { flashlightsAndLanterns } from '../../data/camping/flashlights_and_lanterns/flashlights_and_lanterns';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  tents : any
  sleepingBags : any
  mattressesAndGroundsheets : any
  portableStovesAndCampingCookware : any
  flashlightsAndLanterns : any

  ngOnInit(): void {
    this.tents = tents.slice(0,5)
    this.sleepingBags = sleepingBags.slice(0,5)
    this.mattressesAndGroundsheets = mattressesAndGroundsheets.slice(0,5)
    this.portableStovesAndCampingCookware = portableStovesAndCampingCookware.slice(0,5)
    this.flashlightsAndLanterns = flashlightsAndLanterns.slice(0,5)
  }

}
