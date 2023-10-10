import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChansonsComponent } from './chansons/chansons.component'; // Remplacer "ProduitsComponent" par "ChansonsComponent"
import { AddChansonComponent } from './add-chanson/add-chanson.component'; // Remplacer "AddProduitComponent" par "AddChansonComponent"
import { FormsModule } from '@angular/forms';
import { UpdateChansonComponent } from './update-chanson/update-chanson.component'; // Remplacer "UpdateProduitComponent" par "UpdateChansonComponent"
import { HttpClientModule } from '@angular/common/http';
import { RechercheParArtisteComponent } from './recherche-par-artiste/recherche-par-artiste.component'; // Remplacer "RechercheParCategorieComponent" par "RechercheParArtisteComponent"
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ChansonsComponent, // Remplacer "ProduitsComponent" par "ChansonsComponent"
    AddChansonComponent, // Remplacer "AddProduitComponent" par "AddChansonComponent"
    UpdateChansonComponent, // Remplacer "UpdateProduitComponent" par "UpdateChansonComponent"
    RechercheParArtisteComponent, // Remplacer "RechercheParCategorieComponent" par "RechercheParArtisteComponent"
    RechercheParNomComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
