import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Experience } from 'src/app/classes/experience';
import { ExperienceService } from 'src/app/services/experience.service';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal-experience',
  templateUrl: './modal-experience.component.html',
  styleUrls: ['./modal-experience.component.css']
})
export class ModalExperienceComponent extends ModalItemComponent implements OnInit {
 
  constructor(private experienceService: ExperienceService, protected override ref: DynamicDialogRef, protected override config: DynamicDialogConfig) {
    super(ref, config);
  }
  ngOnInit(): void {
    let e: Experience = this.data as Experience;
    this.form.addControl('cargo', new FormControl(e.cargo, [Validators.required]));
    this.form.addControl('empresa', new FormControl(e.empresa, [Validators.required]));
    this.form.addControl('fecha_desde', new FormControl(e.fechaDesde, [Validators.required]));
    this.form.addControl('fecha_hasta', new FormControl(e.fechaHasta, [Validators.required]));
    this.form.addControl('direccion', new FormControl(e.direccion, [Validators.required]));
  }

  public override submit(): void {
    let e: Experience = this.data;
    e.cargo = this.form.get('cargo')?.value;
    e.empresa = this.form.get('empresa')?.value;
    e.fechaDesde = this.form.get('fecha_desde')?.value;
    e.fechaHasta = this.form.get('fecha_hasta')?.value;
    e.direccion = this.form.get('direccion')?.value;
    if (e.id)
      this.experienceService.edit(e).subscribe( data => this.closeModal());
    else
      this.experienceService.create(e).subscribe( data => this.closeModal());
  }

}
