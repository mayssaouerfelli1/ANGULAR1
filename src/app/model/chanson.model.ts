import { Artiste } from "./artiste.model";

export class Chanson {
    idChanson!: number;
    nom!: string;
    dateCreation!: Date;
    artiste!: Artiste;
}
