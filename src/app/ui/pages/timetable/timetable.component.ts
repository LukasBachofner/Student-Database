import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent {
  rowData: any[] = [
    {time: '7:30 - 8:15', monday: 'Deutsch', tuesday: 'Englisch', wednesday: 'Mathe', thursday: 'Deutsch', friday: 'Englisch', saturday: 'Turnen'},
    {time: '8:20 - 9:05', monday: 'Deutsch', tuesday: 'Englisch', wednesday: 'Mathe', thursday: 'Deutsch', friday: 'Englisch', saturday: 'Turnen'},
    {time: '9:10 - 9:55', monday: 'Deutsch', tuesday: 'Englisch', wednesday: 'Mathe', thursday: 'Deutsch', friday: 'Englisch', saturday: 'Turnen'}
  ];
  columnDefs: ColDef[] = [
    {field: 'time' },
    {field: 'monday'},
    {field: 'tuesday' },
    {field: 'wednesday'} ,
    {field: 'thursday' },
    {field: 'friday' },
    {field: 'saturday'}
  ]
}
