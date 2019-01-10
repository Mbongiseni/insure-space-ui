import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { HttpClient } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import {  MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  index:number=0;
  clients: any;
  displayedColumns: string[] = ['index', 
                                'title', 
                                'name', 
                                'surname', 
                                'view', 
                                'edit', 
                                'delete'];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.retrieveAllClientDetails();
  }

  retrieveAllClientDetails(){
    this.httpClient.get('http://localhost:8080/clients').subscribe(response => {
      this.clients = response;
    });
  }

  deleleClientDetails(client){
    console.log('Client ID To Be Deleted: ' + client.clientId);
    this.httpClient.delete('http://localhost:8080/clients/remove/' + client.clientId).subscribe(response=>{
      let index = this.clients.indexOf(client);
      this.clients.splice(index, 1);
    });
  }

  applyFilter(filterValue: string) {
    let dataSource = new MatTableDataSource(this.clients);
    this.clients.filter = filterValue.trim().toLowerCase();
  }
}
