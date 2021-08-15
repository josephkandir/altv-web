import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.model';
import { CategoryService } from 'src/app/shared/services/category.service';

@Component({
  selector: 'app-header-standard',
  templateUrl: './header-standard.component.html',
  styleUrls: ['./header-standard.component.css']
})
export class HeaderStandardComponent implements OnInit {
  menus!: Menu[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.menus = this.categoryService.getMenus();
  }

}
