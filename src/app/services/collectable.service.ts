import { Injectable } from '@angular/core';
import { Collectable } from '../models/collectable.model';


@Injectable()
export class CollectableService {
  
  private collectables : Collectable[] = [
  	{ description: 'Something fishy is going around here.' , type: 'Book' },
  	{ description: 'I love you girl.' , type: 'Letter' },
  	{ description: 'Iron man action hero with super powers portecting the world from evil people.' , type: 'Strip' },
  	{ description: 'Im landing the mine.' , type: 'Book' },
  	{ description: 'Herre\'s Johny!.' , type: 'Book' },
  	{ description: 'American heores. Four heroes protecting the innocent.' , type: 'Strip' }
  ];

  private collection: Collectable[] = [];

  getUserCollection() {
  	return this.collection;
  }

  // get collection
  getCollections() {
  	return this.collectables;
  }

  // add item to collection
  addCollection(item: Collectable) {
  	if(this.collection.indexOf(item) !== -1) {
  		return;
  	}
  	this.collection.push(item);
  }

  // delete item from collection
  deleteOneCollection(item: Collectable) {
  	this.collection.splice(this.collection.indexOf(item), 1);
  }

  constructor() { }



}
