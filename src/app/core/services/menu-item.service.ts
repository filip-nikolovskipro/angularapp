import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor(private apiService: ApiService) { }

  getItems(slug): Observable<Item[]> {
    return this.apiService.get('/menuItems/'+ slug)
    .pipe(map(data => data));
  }
}
