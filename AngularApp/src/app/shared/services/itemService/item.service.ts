import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Item } from '../../models/item.model';

@Injectable()
export class ItemService {

  selectedItem: Item;
  items: Item[];
  readonly baseURL = 'http://localhost:3000/items';

  constructor(private http: HttpClient) { }

  postItem(item: Item) {
    return this.http.post(this.baseURL, item);
  }

  getItemList() {
    return this.http.get(this.baseURL);
  }

  putItem(item: Item) {
    return this.http.put(this.baseURL + `/${item._itemid}`, item);
  }

}
