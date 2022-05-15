import { TypeDocument } from "./type-document";

export class Candidate {
    id!: number;
    nombre!: string;
    apellido!: string;
    tipo!: TypeDocument;
    numDocumento!: string;
    direccion!: string;
    redSocial!: string;
    profileImage!: string;
    urlProfileImage!: string; //Este campo contendra la url de la imagen, pero no se debe persistir!!
    titulo!: string;
    descripcion!: string
}
