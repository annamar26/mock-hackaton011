import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.scss']
})
export class GridHomeComponent implements OnInit {

	tiles = [
		{ text: "img1" ,cols: 1, rows: 1, color: 'lightblue' },
		{ text: "img2" ,cols: 1, rows: 1, color: 'lightgreen' },
		{ text: "img3" ,cols: 1, rows: 1, color: 'lightpink' }
	]

  constructor(private Router: Router) { }

  ngOnInit(): void {
  }

	navigateCategories(){
		this.Router.navigate(["categories"])
	}
}
