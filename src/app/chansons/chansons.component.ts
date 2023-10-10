import { Component, OnInit } from '@angular/core';
import { Chanson } from '../model/chanson.model'; // Importez le modèle Chanson
import { ChansonService } from '../services/chanson.service'; // Service pour les chansons

@Component({
  selector: 'app-chansons', // Modifiez le sélecteur si nécessaire
  templateUrl: './chansons.component.html' // Mettez à jour le chemin du modèle HTML
})
export class ChansonsComponent implements OnInit {

  chansons: Chanson[] = []; // Liste des chansons

  constructor(private chansonService: ChansonService) { }

  ngOnInit(): void {
    this.chargerChansons();
  }

  chargerChansons() {
    this.chansonService.listeChansons().subscribe(chans => {
      console.log(chans);
      this.chansons = chans;
    });
  }

  supprimerChanson(chanson: Chanson) {
    let conf = confirm("Etes-vous sûr ?");
    if (conf) {
      this.chansonService.supprimerChanson(chanson.idChanson).subscribe(() => {
        console.log("Chanson supprimée");
        this.chargerChansons();
      });
    }
  }
}
