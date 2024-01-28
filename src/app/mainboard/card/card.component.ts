import { Component, Input } from '@angular/core';
import { KanbanService } from 'src/app/kanban.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() cards: any;
  constructor(private service:KanbanService){

  }

  OnSectionChangeTodo(){
    this.service.MoveTask(this.cards);
  }


}
