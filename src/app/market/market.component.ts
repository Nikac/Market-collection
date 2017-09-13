import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../services/collectable.service';
import { Collectable } from '../models/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  collected: Collectable[] = [];

  onDeleteCollection(item) {
  	this.collectableService.deleteOneCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
  	this.collected = this.collectableService.getUserCollection();
  }


}
