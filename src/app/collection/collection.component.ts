import { Component, OnInit } from '@angular/core';
import { Collectable } from '../models/collectable.model';
import { CollectableService } from '../services/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  
  collectedItems: Collectable[] = []; 

  onAddCollection(item) {
  	this.collectableService.addCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
  	this.collectedItems = this.collectableService.getCollections();
  }

}
