import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artiste } from '../model/artiste.model'; // Importez le modèle de l'artiste
import { Chanson } from '../model/chanson.model'; // Importez le modèle de la chanson
import { ChansonService } from '../services/chanson.service'; // Importez le service des chansons

@Component({
  selector: 'app-update-chanson', // Renommez le sélecteur
  templateUrl: './update-chanson.component.html',
  styles: [
  ]
})
export class UpdateChansonComponent implements OnInit {

  currentChanson = new Chanson(); // Utilisez le modèle de la chanson
  artistes! : Artiste[]; // Utilisez le modèle de l'artiste
  updatedArtisteId! : number; // Utilisez le modèle de l'artiste

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private chansonService: ChansonService // Utilisez le service des chansons
  ) { }

  ngOnInit(): void {
    this.chansonService.listeArtistes().subscribe(arts => { // Utilisez le service des chansons
      this.artistes = arts._embedded.artistes;
      console.log(arts);
    });

    this.chansonService.consulterChanson(this.activatedRoute.snapshot.params['id']).subscribe(chan => { // Utilisez le service des chansons
      this.currentChanson = chan;
      this.updatedArtisteId = this.currentChanson.artiste.idArtiste;
    });
  }

  updateChanson() { // Utilisez la méthode de mise à jour des chansons
    this.currentChanson.artiste = this.artistes.find(artiste => artiste.idArtiste == this.updatedArtisteId)!;
    this.chansonService.updateChanson(this.currentChanson).subscribe(chans => {
      this.router.navigate(['chansons']);
    });
  }
}
