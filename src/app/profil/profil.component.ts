import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  nom = "Bob";
  imageSrc = "https://via.placeholder.com/350x150";
  constructor() { }

  ngOnInit() {
   
  }
  direBonjour() {
    console.log("bonjour");
  }
}
