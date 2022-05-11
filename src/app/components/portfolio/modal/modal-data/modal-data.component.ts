import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Candidate } from 'src/app/classes/candidate';
import { CandidateService } from 'src/app/services/candidate.service';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal-data',
  templateUrl: './modal-data.component.html',
  styleUrls: ['./modal-data.component.css']
})
export class ModalDataComponent extends ModalItemComponent implements OnInit {
  
  constructor(private candidateService: CandidateService, protected override ref: DynamicDialogRef, protected override config: DynamicDialogConfig) {
    super(ref, config);
  }

  ngOnInit(): void {
    let c:  Candidate = this.data as Candidate;
    this.form.addControl('nombre', new FormControl(c.nombre, [Validators.required, Validators.minLength(4)]));
    this.form.addControl('apellido', new FormControl(c.apellido, [Validators.required, Validators.minLength(4)]));
    this.form.addControl('titulo', new FormControl(c.titulo, [Validators.required]));
    this.form.addControl('direccion', new FormControl(c.direccion, [Validators.required]));
  }

  public override submit(): void {
    let c: Candidate = this.data;
    c.nombre = this.nombre.value;
    c.apellido = this.apellido.value;
    c.titulo = this.titulo.value;
    c.direccion = this.direccion.value;
    if (c.id)
      this.candidateService.edit(c).subscribe( data => this.closeModal(c));
    else
      this.candidateService.create(c).subscribe( data => this.closeModal(c));
  }

  get nombre(): AbstractControl {
    return this.getControl('nombre');
  }

  get apellido(): AbstractControl {
    return this.getControl('apellido');
  }

  get titulo(): AbstractControl {
    return this.getControl('titulo');
  }

  get direccion(): AbstractControl {
    return this.getControl('direccion');
  }
}