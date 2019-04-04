import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatTabsModule
  , MatSidenavModule
  , MatToolbarModule
  , MatIconModule
  , MatButtonModule
  , MatListModule
  , MatMenuModule
  , MatCardModule
  , MatFormFieldModule
  , MatSelectModule,
  MatDialogModule,
  MatProgressBarModule
 } from '@angular/material';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , MatProgressBarModule
    , MatDialogModule
    , MatTabsModule
    , MatSidenavModule
    , MatToolbarModule
    , MatButtonModule
    , MatIconModule
    , MatListModule
    , MatMenuModule
    , MatCardModule
    , MatFormFieldModule
    , MatSelectModule
    , ScrollDispatchModule
  ],
  exports: [
    MatTabsModule
    , MatProgressBarModule
    , MatDialogModule
    , MatSidenavModule
    , MatToolbarModule
    , MatButtonModule
    , MatIconModule
    , MatListModule
    , MatMenuModule
    , MatCardModule
    , MatFormFieldModule
    , MatSelectModule
    , ScrollDispatchModule
  ]
})
export class MaterialModule { }
