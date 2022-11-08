import { Injectable } from '@angular/core';
import { Task} from '../models/task'
@Injectable({
  providedIn: 'root'
})
export class TaskService {
tasks: Task[];
  constructor() {
    this.tasks =[
      {title:'Welcome',description:'This is My Project', hide:true}
    ];
   }
   
   gettasks(){
    return this.tasks;
   }

   addtask(task: Task){
    this.tasks.push(task);
   }

   deleteTask(task: Task){
    for(let i = 0; i < this.tasks.length; i++){
      if(task == this.tasks[i]){
        this.tasks.splice(i,1);
      }
    }
   }
}
