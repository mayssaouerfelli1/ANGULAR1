import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddChansonComponent } from './add-chanson/add-chanson.component'; // Utilisez le nom de composant mis à jour
import { ChansonsComponent } from './chansons/chansons.component'; // Utilisez le nom de composant mis à jour
import { RechercheParArtisteComponent } from './recherche-par-artiste/recherche-par-artiste.component'; // Utilisez le nom de composant mis à jour
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component'; // Utilisez le nom de composant mis à jour
import { UpdateChansonComponent } from './update-chanson/update-chanson.component'; // Utilisez le nom de composant mis à jour

const routes: Routes = [
  { path: "chansons", component: ChansonsComponent }, // Utilisez le nom de composant mis à jour
  { path: "add-chanson", component: AddChansonComponent }, // Utilisez le nom de composant mis à jour
  { path: "updateChanson/:id", component: UpdateChansonComponent }, // Utilisez le nom de composant mis à jour
  { path: "rechercheParArtiste", component: RechercheParArtisteComponent }, // Utilisez le nom de composant mis à jour
  { path: "rechercheParNom", component: RechercheParNomComponent }, // Utilisez le nom de composant mis à jour
  { path: "", redirectTo: "chansons", pathMatch: "full" } // Utilisez le nom de composant mis à jour
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
