import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model'; // Importez le modèle Chanson
import { ChansonService } from '../services/chanson.service'; // Service pour les chansons

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styles: []
})
export class RechercheParNomComponent implements OnInit {

  nomChanson!: string; // Remplacez nomProduit par nomChanson
  chansons!: Chanson[]; // Liste des chansons
  allChansons!: Chanson[];
  searchTerm!: string;

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chansonService.listeChansons().subscribe(chans => {
      console.log(chans);
      this.chansons = chans;
      this.allChansons = chans;
    });
  }

  rechercherChansons() { // Remplacez rechercherProds par rechercherChansons
    this.chansonService.rechercherParNom(this.nomChanson).subscribe(chans => {
      console.log(chans);
      this.chansons = chans;
    });
  }

  onKeyUp(filterText: string) {
    this.chansons = this.allChansons.filter(item =>
      item.nom.toLowerCase().includes(filterText));
  }
}
