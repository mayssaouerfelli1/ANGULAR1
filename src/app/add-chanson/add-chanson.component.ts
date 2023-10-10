import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Chanson } from '../model/chanson.model'; // Modèle Chanson
import { Artiste } from '../model/artiste.model'; // Modèle Artiste
import { ChansonService } from '../services/chanson.service'; // Service pour les chansons

@Component({
  selector: 'app-add-chanson', // Modifiez le sélecteur
  templateUrl: './add-chanson.component.html'
})
export class AddChansonComponent implements OnInit {

  newChanson = new Chanson();
  artists: Artiste[] = []; // Liste des artistes
  newIdArtiste!: number; // Modifiez le nom de la variable pour correspondre à l'artiste sélectionné

  constructor(private chansonService: ChansonService, private router: Router) { }

  ngOnInit(): void {
    // La logique de récupération des artistes de chansons reste inchangée
    this.chansonService.listeArtistes().subscribe(arts => {
      this.artists = arts._embedded.artistes;
      console.log(arts);
    });
  }

  addChanson() {
    // Modifiez le nom de la variable pour correspondre à la chanson
    this.newChanson.artiste = this.artists.find(art => art.idArtiste == this.newIdArtiste)!;

    this.chansonService.ajouterChanson(this.newChanson).subscribe((chans) => {
      console.log(chans);
      this.router.navigate(['chansons']);
    });
  }
}
