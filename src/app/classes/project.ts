import { Candidate } from "./candidate";

export class Project {
    id!: number;
    titulo!: string;
    descripcion!: string;
    candidato!: Candidate;
}
