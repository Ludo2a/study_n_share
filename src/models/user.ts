export interface User {
    ecole: string;
    nom: string;
    prenom: string;
    ville: string;
    sex: string;
    telephone: string;
    purpose: string;
    contact: string;
    photo: string;
    notes_donnees: Array<Number>;
    notes_recues: Array<Number>;
    date_inscription: Date;
    commentaires_recus: Array<String>;
    nombre_ventes: number;
    somme_totale_vente: number;
    disponibilites_horaire: Array<Date>;
    fonction: string;
    email: string;
    password: string;
}
