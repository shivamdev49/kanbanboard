import { Component } from '@angular/core';
import { KanbanService } from '../kanban.service';
import { Card } from 'src/model/card';

@Component({
  selector: 'app-mainboard',
  templateUrl: './mainboard.component.html',
  styleUrls: ['./mainboard.component.css']
})
export class MainboardComponent {

  tasks:Card[]=[];
  tasksprogress:Card[]=[];
  taskscompleted:Card[]=[];
  tasksreviewpending:Card[]=[];
  constructor(private service : KanbanService){
     this.tasks = this.service.getTask();
     this.tasksprogress= this.service.getTaskProgress();
     this.taskscompleted=this.service.getTaskCompleted();
     this.tasksreviewpending= this.service.getTaskReviewPending();
  }
}

  

