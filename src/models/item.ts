export interface Item {
  key?: string;
  nom: string;
  categorie: string;
  marque: string;
  prix: number;
  prix_neuf: number;
  annee_achat: number;
  etat: string;
  negociable: boolean;
  owner: string;
}
