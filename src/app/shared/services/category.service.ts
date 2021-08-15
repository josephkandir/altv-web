import { Injectable } from '@angular/core';
import { Category } from '../models/category.model';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categories: Category[] = [];

  private _categories: Category[] = [
    new Category('lifestyle', '', '', true, true),
    new Category('lifestyle', 'health', '', true, true),
    new Category('lifestyle', 'food', '', true, true),
    new Category('lifestyle', 'fashion', '', true, true),
    new Category('lifestyle', 'travel', '', true, true),
    new Category('technology', '', '', true, true),
    new Category('travel', '', '', true, true),
  ];

  constructor() { }

  getCategories(): Category[] {
    return this._categories;
  }

  getMenus(): Array<Menu> {
    let menus: Array<Menu> = [];

    this._categories.slice().filter(m => m.subCategoryName === '' && m.isMenu === true && m.isActive === true).forEach(x => {
      let subMenu: Array<string> = [];
      
      this._categories.slice().filter(m => m.subCategoryName !== '' && m.categoryName === x.categoryName && m.isActive === true).forEach(y => {
        subMenu.push(y.subCategoryName);
      });

      menus.push(new Menu(x.categoryName, subMenu));
    });

    return menus;
  }
}
