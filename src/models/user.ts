export interface User {
    id_user: number;
    id_ecole: number;
    nom: string;
    prenom: string;
    adresse: string;
    sex: string;
    telephone: string;
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