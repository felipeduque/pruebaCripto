import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { UploadComponent } from './upload/upload.component';
import { LayoutComponent } from './layout/layout.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { UploadModule } from './upload/upload.module';
import { MatSelectModule, MatIconModule, MatAutocompleteModule, MatChipsModule, MatInputModule } from '@angular/material';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { ToastrModule } from 'ngx-toastr';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { NgMatSearchBarModule } from 'ng-mat-search-bar';
import { SearchBarComponent } from './component/search-bar/search-bar.component';
import { DataService } from './data.service';
// import { EthereumModule } from './ethereum/ethereum.module';

@NgModule({
  declarations: [
    AppComponent
    , LayoutComponent
    , UploadComponent, HeaderComponent, SidenavListComponent, SearchBarComponent
  ],
  imports: [
    BrowserModule
    , AppRoutingModule
    , NgMatSearchBarModule
    , BrowserAnimationsModule
    , MatAutocompleteModule
    , MatChipsModule
    , MatInputModule
    , MaterialModule
    , FlexLayoutModule
    , RoutingModule
    , UploadModule
    , PdfViewerModule
    , MatIconModule
    , MatSelectModule, ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    , ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-bottom-center'})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
