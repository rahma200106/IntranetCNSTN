import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { LogicielsComponent } from './logiciels/logiciels.component';
import { GuidesComponent } from './guides/guides.component';
import { FooterComponent } from './footer/footer.component';
import { GalerieComponent } from './galerie/galerie.component';
import { DetailgalerieComponent } from './detailgalerie/detailgalerie.component';
import { DocumentsComponent } from './documents/documents.component';
import { DGComponent } from './dg/dg.component';
import { DSINComponent } from './dsn/dsin.component';
import { DAAFComponent } from './daaf/daaf.component';
import { DCGComponent } from './dcg/dcg.component';
import { DDVPComponent } from './ddvp/ddvp.component';
import { DREVComponent } from './drev/drev.component';
import { DREMComponent } from './drem/drem.component';
import { InterventionsComponent } from './interventions/interventions.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FdgComponent } from './fdg/fdg.component';
import { FDSCComponent } from './fdsc/fdsc.component';
import { FDVPSComponent } from './fdvps/fdvps.component';
import { FDSINComponent } from './fdsin/fdsin.component';
import { EmployeeComponent } from './employee/employee.component';
import { EquipementComponent } from './equipement/equipement.component';
import { DemandematComponent } from './demandemat/demandemat.component';
import { FormsModule } from '@angular/forms';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { AjoutComponent } from './ajout/ajout.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentationComponent,
    LogicielsComponent,
    GuidesComponent,
    FooterComponent,
    GalerieComponent,
    DetailgalerieComponent,
    DocumentsComponent,
    DGComponent,
    DSINComponent,
    DAAFComponent,
    DCGComponent,
    DDVPComponent,
    DREVComponent,
    DREMComponent,
    InterventionsComponent,
    ContactsComponent,
    FdgComponent,
    FDSCComponent,
    FDVPSComponent,
    FDSINComponent,
    EmployeeComponent,
    EquipementComponent,
    DemandematComponent,
    UpdateComponentComponent,
    AjoutComponent

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
