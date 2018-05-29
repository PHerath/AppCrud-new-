import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, FormGroup } from '@angular/forms';

import { ItemService } from '../shared/services/itemService/item.service';
import { Item } from '../shared/models/item.model';

declare var M: any;

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ ItemService ]
})
export class ItemComponent implements OnInit {

  constructor(public itemService: ItemService) { }

  ngOnInit() {
    this.resetForm();
    this.refreshItemList();
  }

  onSubmit(form: NgForm) {
    if (form.value._id === '') {
      this.itemService.postItem(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshItemList();
        M.toast({html: 'Saved successfully', classes: 'rounded'});
      });
    } else {
      this.itemService.putItem(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshItemList();
        M.toast({html: 'Updated successfully', classes: 'rounded'});
      });
    }
  }

  refreshItemList() {
    this.itemService.getItemList().subscribe((res) => {
      this.itemService.items = res as Item[];
    });
  }

  resetForm(form?: NgForm) {

    if (form) {
      form.reset();
    }
    this.itemService.selectedItem = {
      _itemid: '',
      name: '',
      description: '',
      price: null
    };

  }

}
