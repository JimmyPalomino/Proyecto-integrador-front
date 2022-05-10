import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ModalItemComponent } from '../modal-item/modal-item.component';

@Component({
  selector: 'app-modal-skill',
  templateUrl: './modal-skill.component.html',
  styleUrls: ['./modal-skill.component.css']
})
export class ModalSkillComponent extends ModalItemComponent implements OnInit {

  ngOnInit(): void {
    this.form.addControl('nombre', new FormControl(null, [Validators.required]));
    this.form.addControl('progreso', new FormControl(null, [Validators.required]));
  }

}
