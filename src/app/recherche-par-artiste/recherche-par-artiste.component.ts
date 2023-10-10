import { Component, OnInit } from '@angular/core';
import { Artiste } from '../model/artiste.model'; // Importez le modèle Artiste
import { Chanson } from '../model/chanson.model'; // Importez le modèle Chanson
import { ChansonService } from '../services/chanson.service'; // Service pour les chansons

@Component({
  selector: 'app-recherche-par-artiste',
  templateUrl: './recherche-par-artiste.component.html',
  styles: []
})
export class RechercheParArtisteComponent implements OnInit {
  IdArtiste!: number;
  artistes!: Artiste[];
  chansons!: Chanson[]; // Liste des chansons

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeArtistes().subscribe(arts => {
      this.artistes = arts._embedded.artistes;
      console.log(arts);
    });
  }

  onChangeArtiste() { // Correction du nom de la méthode
    this.chansonService.rechercherParArtiste(this.IdArtiste).subscribe(chans => {
      this.chansons = chans;
    });
  }
}
