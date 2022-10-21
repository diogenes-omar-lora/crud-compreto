import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TaskComponent } from './components/task/task.component';
import { TaskFromComponent } from './components/task-from/task-from.component';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskService} from './services/task.service'
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TaskComponent,
    TaskFromComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
