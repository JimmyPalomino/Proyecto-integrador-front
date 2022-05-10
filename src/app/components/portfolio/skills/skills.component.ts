import { Component, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { DynamicDialogRef } from 'primeng/dynamicdialog';
import { ModalService } from 'src/app/services/modal.service';
import { ModalSkillComponent } from '../modal/modal-skill/modal-skill.component';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor(private modalService: ModalService, private messageService: MessageService, private confirmationService: ConfirmationService) { }
  

  ngOnInit(): void {
  }

  showModal() {
    let ref: DynamicDialogRef = this.modalService.open(ModalSkillComponent, {});
  }

  delete() {
    this.confirmationService.confirm({
        message: 'Do you want to delete this record?',
        header: 'Delete Confirmation',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Confirmed', detail:'Record deleted'});
        },
        reject: (type: any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Rejected', detail:'You have rejected'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'Cancelled', detail:'You have cancelled'});
                break;
            }
        }
    });

}
}