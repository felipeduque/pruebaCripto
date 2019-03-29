import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { UploadComponent } from '../upload/upload.component';
import { DialogComponent } from '../upload/dialog/dialog.component';

const routes: Routes = [
  {path: 'upload', component: UploadComponent},
  {path: '', redirectTo: '/upload', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
