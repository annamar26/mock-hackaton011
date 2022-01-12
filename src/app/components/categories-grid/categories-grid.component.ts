import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.scss']
})
export class CategoriesGridComponent implements OnInit {
	tiles = [
		{ cols: 1, rows: 1 },
		{ cols: 1, rows: 1},
		{ cols: 1, rows: 1 },
    { cols: 1, rows: 1 }
	]
  constructor(private Router: Router) { }

  ngOnInit(): void {
  }
	navigateCategories(){
		this.Router.navigate(["categoryList"])
	}
}
