import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-home",
  imports: [RouterModule, CommonModule],
  templateUrl: "./home.html",
  styleUrl: "./home.css",
})
export class Home {
  menuOpen: boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}

