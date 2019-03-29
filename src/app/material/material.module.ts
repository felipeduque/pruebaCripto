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
  , MatSelectModule
 } from '@angular/material';
import { ScrollDispatchModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
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
