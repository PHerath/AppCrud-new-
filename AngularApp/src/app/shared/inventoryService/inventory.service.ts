import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Inventory } from './inventory.model';


@Injectable()
export class InventoryService {

  selectedInventory: Inventory;
  inventories: Inventory[];
  readonly baseURL = 'http://localhost:3000/employees';

  constructor() { }

}
