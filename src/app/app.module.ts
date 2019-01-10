import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientService } from './services/client.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { ClientFormComponent } from './client/client-form/client-form.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { MatTableModule, 
          MatInputModule, 
          MatIconModule, 
          MatButtonModule,
          MatSelectModule,
          MatNativeDateModule,
          MatGridListModule,
          MatExpansionModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { NavbarComponent } from './navbar/navbar.component';
import { PolicyComponent } from './policy/policy.component';
import { ClaimComponent } from './claim/claim.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    PageNotFoundComponent,
    ClientFormComponent,
    ClientFormComponent,
    NavbarComponent,
    PolicyComponent,
    ClaimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    AngularFontAwesomeModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatExpansionModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"", 
        component: ClientComponent
      },
      {
        path:"clints", 
        component: ClientComponent
      },
      {
        path:"clients/:action/:clientId", 
        component: ClientFormComponent
      },
      {
        path:"policies", 
        component: PolicyComponent
      },
      {
        path:"claims", 
        component: ClaimComponent
      },
      {
        path:"**", 
        component: PageNotFoundComponent
      }
    ])
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
