import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Project } from 'src/app/classes/project';
import { ProjectService } from 'src/app/services/project.service';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent extends ModalItemComponent implements OnInit {
 
  constructor(private projectService: ProjectService, protected override ref: DynamicDialogRef, protected override config: DynamicDialogConfig) {
    super(ref, config);
  }
  ngOnInit(): void {
    let e: Project = this.data as Project;
    this.form.addControl('nombre', new FormControl(e.titulo, [Validators.required]));
    this.form.addControl('descripcion', new FormControl(e.descripcion, [Validators.required]));
  }

  public override submit(): void {
    let e: Project = this.data;
    e.titulo = this.form.get('nombre')?.value;
    e.descripcion = this.form.get('descripcion')?.value;
    if (e.id)
      this.projectService.edit(e).subscribe( data => this.closeModal());
    else
      this.projectService.create(e).subscribe( data => this.closeModal());
  }
}