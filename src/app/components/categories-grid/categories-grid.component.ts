import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-categories-grid',
  templateUrl: './categories-grid.component.html',
  styleUrls: ['./categories-grid.component.scss']
})
export class CategoriesGridComponent implements OnInit {
	userEmail= this.userData.getUser()

	tiles = [
		{ cols: 1, rows: 1, src:"https://i.ibb.co/7QBkkN0/Organic-cotton-baby-clothes-on-the-shelf-in-the-kids-room.jpg"},
		{ cols: 1, rows: 1, src:"https://i.ibb.co/bNY9kqL/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.jpg"},
		{ cols: 1, rows: 1, src:"https://i.ibb.co/F4qwTDm/golden-bracelets-and-earrings-on-pink-and-white-background.jpg" },
    { cols: 1, rows: 1 }
	]
  constructor(private Router: Router, private userData: AuthService) { }

  ngOnInit(): void {
  }
	navigateCategories(){
		this.Router.navigate(["categoryList"])
	}
	navigateForm(){
		this.Router.navigate(["category"])
	}
}
