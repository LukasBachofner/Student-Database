import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';


@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.scss']
})


export class HomeworkComponent {

  rowData: any[] = [
    {Offen: 'Deutsch', Bearbeitung: 'Englisch', Erledigt: 'Fachkunde', Zurückgegeben: 'Englisch'},
    {Offen: 'Deutsch', Bearbeitung: 'Englisch', Erledigt: 'Mathe', Zurückgegeben: 'Englisch'},
    {Offen: 'Deutsch', Bearbeitung: 'Englisch', Erledigt: 'Geo', Zurückgegeben: 'Englisch'}
  ];
  columnDefs: ColDef[] = [
    {field: 'Offen', sortable: true, unSortIcon: true, filter: true, },
    {field: 'Bearbeitung', sortable: true, unSortIcon: true, filter: true},
    {field: 'Erledigt', sortable: true, unSortIcon: true, filter: true},
    {field: 'Zurückgegeben', sortable: true, unSortIcon: true, filter: true},
  ]
  displayCellInfo(event:any){
    console.log(event);
  }
  
}


