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
  task2:Card[]=[]
  constructor(private service : KanbanService){
     this.tasks = this.service.getTask();
  }
 

  onDragStarted(event: any): void {
    console.log('Drag started:', event);
  }

  onDragEnded(event: any): void {
    console.log('Drag ended:', event);
  }
//rohit made this
/*
  onDrop(event: CdkDragDrop<t[]>): void {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }
  */
}

  

