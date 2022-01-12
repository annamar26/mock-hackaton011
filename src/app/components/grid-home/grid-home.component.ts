import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.scss']
})
export class GridHomeComponent implements OnInit {

	tiles = [
		{ cols: 1, rows: 1 },
		{ cols: 1, rows: 1},
		{ cols: 1, rows: 1 }
	]

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

	navigateCategories(){
		this.Router.navigate(["categoryList"])
	}
}
