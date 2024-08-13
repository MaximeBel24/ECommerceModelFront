import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../../../auth/components/auth.component';
import { UserService } from '../../../../state/user/user.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../models/appState';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{

  currentSection: any;
  isNavbarContentOpen: any;
  userProfile:any;

  constructor(
    private router : Router, 
    private dialog: MatDialog, 
    private userService : UserService, 
    private store: Store<AppState>
  ){}

  openNavbarContent(section: string) {
    this.isNavbarContentOpen = true;
    this.currentSection = section;
  }

  closeNavbarContent() {
    this.isNavbarContentOpen = false;
  }

  navigateTo(path: string) {
    this.router.navigate([path])
  }

  ngOnInit(): void {
    if(localStorage.getItem("jwt")) this.userService.getUserProfile()

    this.store.pipe(select((store)=>store.user)).subscribe((user)=>{
      this.userProfile = user.userProfile
      if(user.userProfile){
        this.dialog.closeAll()
      }
      console.log("user connected", user);
    })
  }

  @HostListener('document:mouseenter', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const modalContainer = document.querySelector('.modal-container');
    const openButtons = document.querySelectorAll('.open-button');

    let clickInsideButton = false;
    let clickInsideModal = false;

    openButtons.forEach((button: Element) => {
      if (button.contains(event.target as Node)) {
        clickInsideButton = true;
      }
    });

    if (modalContainer && modalContainer.contains(event.target as Node)) {
      clickInsideModal = true;
    }

    if (!clickInsideButton && !clickInsideModal && this.isNavbarContentOpen) {
      this.closeNavbarContent();
    }
  }

  handleOpenLoginModal=() =>{ 
    console.log("handle open login module");
    this.dialog.open(AuthComponent,{
      width: "500px",
      disableClose:false
    })
  }

  handleLogout=()=>{
    this.userService.logout()
  }
  
}
