import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/shared/header/header.component';
import { LoginComponent } from './ui/pages/login/login.component';
import { MainMenuComponent } from './ui/pages/main-menu/main-menu.component';
import { TimetableComponent } from './ui/pages/timetable/timetable.component';
import { AgGridModule } from 'ag-grid-angular';
import { HomeworkComponent } from './ui/pages/homework/homework.component';
//import the Angular Material modules
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';


const siteRoutes: Routes = [
  {path: "", component: LoginComponent},
  {path: "overview", component: MainMenuComponent},
  {path: "timetable", component: TimetableComponent},
  {path: "homework", component: HomeworkComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    MainMenuComponent,
    TimetableComponent,
    HomeworkComponent
    
  ],
  imports: [
    RouterModule.forRoot(siteRoutes),
    BrowserModule,
    AppRoutingModule,
    AgGridModule,
    MatSlideToggleModule,
    MatCardModule,
    MatDialogModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
