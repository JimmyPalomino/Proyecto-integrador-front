import { Candidate } from "./candidate"

export class Experience {
    id!: number
    candidato!: Candidate
    cargo!: string
    direccion!: string
    empresa!: string
    tecnologia!: any;
    experiencia!: number
    fechaDesde!: string
    fechaHasta!: string

    constructor() {}
}
