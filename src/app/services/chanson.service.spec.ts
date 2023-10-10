import { TestBed } from '@angular/core/testing';
import { ChansonService } from './chanson.service'; // Modifier l'import pour utiliser le service ChansonService

describe('ChansonService', () => { // Modifier le nom du service dans la description
  let service: ChansonService; // Modifier le type de service

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChansonService); // Utiliser ChansonService
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
