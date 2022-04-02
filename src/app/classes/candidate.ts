import { TypeDocument } from "./type-document";

export class Candidate {
    id!: number;
    nombre!: string;
    apellido!: string;
    tipo!: TypeDocument; //Tipo de Documento
    numDocumento!: string;
    direccion!: string;
    redSocial!: string;
}
