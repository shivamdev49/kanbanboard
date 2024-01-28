import { Injectable } from '@angular/core';
import { Card } from 'src/model/card';
import { category } from 'src/model/category';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  tasks:Card[]=[];
  tasksprogress:Card[]=[];
  taskscompleted:Card[]=[];
  tasksreviewpending:Card[]=[];
  id=1;
  section=1;
  constructor() { 
  }

  createTask(card :Card){
    this.tasks.push(card);
    //this.section
  }
  MoveTask(card :Card){
    if(this.section == 1){
    this.tasksprogress.push(card);
    console.log(this.section);
    this.SetSectionChange();
    //Logic to delete card from previous section once moved to another
    const index = this.tasks.findIndex(task => task.id === card.id);
    if (index !== -1) {
      this.tasks.splice(index, 1);
      console.log(this.section);
    }
  }
  else if(this.section == 2){
    this.taskscompleted.push(card);
    this.SetSectionChange();
    this.getId2();
    this.setId2();
    const index = this.tasksprogress.findIndex(task => task.id === card.id);
    if (index !== -1) {
      this.tasksprogress.splice(index, 1);
      console.log(this.section);
    }
  }
  else if(this.section == 3){
   this.tasksreviewpending.push(card);
   this.SetSectionChange();
   this.getId3();
   this.setId3();
   const index = this.taskscompleted.findIndex(task => task.id === card.id);
   if (index !== -1) {
     this.taskscompleted.splice(index, 1);
     
   }
  }
}

  getId()
  {
    return this.id;
  }
  setId(){
    this.id = this.id + 1;
  }
  getId2()
  {
    return this.id;
  }
  setId2(){
    this.id = this.id + 1;
  }
  getId3()
  {
    return this.id;
  }
  setId3(){
    this.id = this.id + 1;
  }
  getsection(){
    return this.section;
  }
  SetSectionChange(){
    this.section =  this.section + 1;
  }
  getTask(){
    return this.tasks;
  }
  getTaskProgress(){
    return this.tasksprogress;
  }
  getTaskCompleted(){
    return this.taskscompleted;
   
  }
  getTaskReviewPending(){
    return this.tasksreviewpending;
  }
}
