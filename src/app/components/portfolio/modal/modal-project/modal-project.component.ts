import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal-project',
  templateUrl: './modal-project.component.html',
  styleUrls: ['./modal-project.component.css']
})
export class ModalProjectComponent implements OnInit {

  form: FormGroup = new FormGroup({
  });
  
  @Input()
  public showDialog: boolean = false;

  @Input()
  public isEdit: boolean = false;

  @Output() 
  public showDialogChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  
  constructor() { }

  ngOnInit(): void {
    this.form= new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required]),
    });
  }

  submit() {
    this.closeModal();
  }

  closeModal(): void {
    this.showDialog = false;
    this.showDialogChange.emit(this.showDialog);
  }

}
