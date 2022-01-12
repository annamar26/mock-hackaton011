import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
userEmail= this.userData.getUser()
  constructor(public dialog: MatDialog, private Router: Router, private userData: AuthService ) {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((result:any)=> {
      console.log(`Dialog result: ${result}`);
    });
  }
  ngOnInit(): void {
  }
  navigateToHome(){
    this.Router.navigate([''])
  }
  
}
