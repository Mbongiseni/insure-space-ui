import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css']
})
export class ClientFormComponent implements OnInit {
  client:any = { 
                "clientId": 11, 
                "lookupTitle": { 
                                  "lookupTitleId": 2, 
                                  "name": "Mr", 
                                  "description": "Mr" 
                              }, 
                "initials": "WM", 
                "firstName": "Mbongiseni", 
                "middleName": "Willmont", 
                "lastName": "Ngubane", 
                "dateOfBirth": 383608800000, 
                "idNumber": "8202275680084", 
                "lookupRace": { 
                                "lookupRaceId": 1, 
                                "name": "African", 
                                "description": "African" 
                              }, 
                "lookupGender": { 
                                  "lookupGenderId": 1, 
                                  "name": "Male", 
                                  "description": "Male" 
                                }, 
                "lookupMaritalStatus": { 
                                          "lookupMaritalStatusId": 3, 
                                          "name": "Single", 
                                          "description": "Single" 
                                        }, 
                "lookupLanguage": { 
                                    "lookupLanguageId": 5, 
                                    "name": "IsiZulu", 
                                    "description": "IsiZulu" 
                                  }, 
                "contactInfo": { 
                                  "contactInfoId": 13, 
                                  "homePhoneNumber": "011 728 5380", 
                                  "cellPhoneNumber": "071 432 4982", 
                                  "emallAddress": "wm.ngubane@gmail.com" 
                                }, 
                "addressInfo": { 
                    "addressInfoId": 1, 
                    "addressLine1": "No. 3281", 
                    "addressLine2": "Thulani Ext-1", 
                    "addressLine3": "Soweto", 
                    "addressLine4": "Gauteng", "postalCode": "1724" 
                  } 
              };
  action:string;
  clientId:string;
  titleList:any;
  genderList:any;
  languageList:any;
  maritalStatusesList:any;
  racesList:any;
  title:string;
  
  

  constructor(private router: Router, private httpClient: HttpClient, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.clientId = params.get('clientId');
      this.action = params.get('action');
    });
    this.retrieveClientDetailsById(this.clientId);
    this.retrieveAllTitleDetails();
    this.retrieveAllGenderDetails();
    this.retrieveAllLanguageDetails();
    this.retrieveAllMaritalStatusesDetails();
    this.retrieveAllRacesDetails();
  }

  save(client:NgForm){
    this.httpClient.put("http://localhost:8080/clients/update/client", client.value).subscribe(response => {
      console.log(response);
    })
    console.log(JSON.stringify(client.value));
  }
  
  retrieveClientDetailsById(clientId){
    this.httpClient.get('http://localhost:8080/clients/retrieve/' + clientId).subscribe(response => {
      this.client = response;
    });
  }

  retrieveAllTitleDetails(){
    this.httpClient.get('http://localhost:8080/titles').subscribe(response => {
      this.titleList = response;
    });
  }

  retrieveAllGenderDetails(){
    this.httpClient.get('http://localhost:8080/gender').subscribe(response => {
      this.genderList = response;
    });
  }

  retrieveAllLanguageDetails(){
    this.httpClient.get('http://localhost:8080/languages').subscribe(response => {
      this.languageList = response;
    });
  }

  retrieveAllMaritalStatusesDetails(){
    this.httpClient.get('http://localhost:8080/marital-statuses').subscribe(response => {
      this.maritalStatusesList = response;
    });
  }

  retrieveAllRacesDetails(){
    this.httpClient.get('http://localhost:8080/races').subscribe(response => {
      this.racesList = response;
    });
  }

  redirectToClientList(){
    this.router.navigate(['']);
  }

  getPageTitle(){
    let strTitle:string = "";
    if (this.action === 'view'){
      strTitle = "View Client's Details";
    }else if (this.action === 'edit'){
      strTitle = "Edit Client's Details";
    }
    return strTitle;
  }
  

}
