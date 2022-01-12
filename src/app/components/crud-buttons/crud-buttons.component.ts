import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-crud-buttons',
  templateUrl: './crud-buttons.component.html',
  styleUrls: ['./crud-buttons.component.scss']
})
export class CrudButtonsComponent implements OnInit {
  userEmail= this.userData.getUser()

  constructor(private userData: AuthService, private Router:Router) { }

  ngOnInit(): void {
  }
  navigateForm(){
this.Router.navigate(["category"])
  }
}
