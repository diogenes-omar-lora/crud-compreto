import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../services/task.service';
@Component({
  selector: 'app-task-from',
  templateUrl: './task-from.component.html',
  styleUrls: ['./task-from.component.css']
})
export class TaskFromComponent implements OnInit {

  constructor(
    public taskservice: TaskService
  ){}

  ngOnInit(): void {
  }
addTask(newTitle:any,newDescription:any){
  this.taskservice.addtask({
    title: newTitle.value,
    description: newDescription.value,
    hide: true
  })
  newTitle.value = '';
  newDescription.value = '';
  newTitle.focus();
  return false;
}
}
