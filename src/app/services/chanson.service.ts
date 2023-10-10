import { Injectable } from '@angular/core';
import { Artiste } from '../model/artiste.model';
import { Chanson } from '../model/chanson.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ArtisteWrapper } from '../model/artisteWrapped.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ChansonService {
  apiURL: string = 'http://localhost:55025/chansons/api';
  apiURLArt: string = 'http://localhost:55025/chansons/art';

  chansons: Chanson[] | undefined; // Tableau de chansons

  constructor(private http: HttpClient) {
   /*  this.chansons = [
      { idChanson: 1, nom: "Chanson 1", dateCreation: new Date("2023-01-01"), artiste: { idArtiste: 1, nomArtiste: "Artiste 1" , nationaliteArtiste: "tunisien"} },
      { idChanson: 2, nom: "Chanson 2", dateCreation: new Date("2023-02-01"), artiste: { idArtiste: 2, nomArtiste: "Artiste 2" , nationaliteArtiste: "egyptien"} },
      { idChanson: 3, nom: "Chanson 3", dateCreation: new Date("2023-03-01"), artiste: { idArtiste: 1, nomArtiste: "Artiste 1" , nationaliteArtiste: "français"} },
    ];
     */
  }

  listeChansons(): Observable<Chanson[]> {
    return this.http.get<Chanson[]>(this.apiURL);
  }

  ajouterChanson(chans: Chanson): Observable<Chanson> {
    return this.http.post<Chanson>(this.apiURL, chans, httpOptions);
  }

  supprimerChanson(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url, httpOptions);
  }

  consulterChanson(id: number): Observable<Chanson> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Chanson>(url);
  }

 /*  trierChansons() {
    this.chansons = this.chansons.sort((n1, n2) => {
      if (n1.idChanson > n2.idChanson) {
        return 1;
      }
      if (n1.idChanson < n2.idChanson) {
        return -1;
      }
      return 0;
    });
  } */

  updateChanson(chans: Chanson): Observable<Chanson> {
    return this.http.put<Chanson>(this.apiURL, chans, httpOptions);
  }

  listeArtistes(): Observable<ArtisteWrapper> {
    return this.http.get<ArtisteWrapper>(this.apiURLArt);
  }

  rechercherParArtiste(idArtiste: number): Observable<Chanson[]> {
    const url = `${this.apiURL}/chansonsart/${idArtiste}`;
    return this.http.get<Chanson[]>(url);
  }

  rechercherParNom(nom: string): Observable<Chanson[]> {
    const url = `${this.apiURL}/chansonsByName/${nom}`;
    return this.http.get<Chanson[]>(url);
  }
}
