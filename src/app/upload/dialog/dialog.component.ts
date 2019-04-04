import { Component, OnInit, ViewChild, Inject } from '@angular/core';
// import { IPFS } from "../../ipfs";
import { Buffer } from 'buffer';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { UploadService } from '../upload.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { forkJoin } from 'rxjs';
import { formatDate } from '@angular/common';
import { DialogData } from '../upload.component';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit{
  ngOnInit(){
    //throw new Error("Method not implemented.");
  }
  // public hash: string;
  @ViewChild('file') file;

  public files: Set<File> = new Set();

  constructor(
    // @Inject(IPFS) private ipfs,
    public dialogRef: MatDialogRef<DialogComponent>
  , @Inject(MAT_DIALOG_DATA)
    public data: DialogData  
  , public uploadService: UploadService
  , private toast: ToastrService
  ) {
  this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530')
  }
  today= new Date();
  jstoday = '';


  // async ngOnInit() {
  //   const version = await this.ipfs.version();
  //   console.log({version});
  // }

  // public async set(path: string, value: string) {
  //   const content = Buffer.from(value);
  //   const filesAdded = await this.ipfs.files.add({path, content});
  //   this.hash = filesAdded[0].hash;
  // }

  // public async get(hash: string) {
  //   const fileBuffer = await this.ipfs.files.cat(hash);
  //   console.log(fileBuffer.toString());
  // }

  progress: any;
  canBeClosed = true; 
  primaryButtonText = 'Enviar Adjunto';
  showCancelButton = true; 
  uploading = false;
  uploadSuccessful = false;
  
  onFilesAdded() {
    console.log("EJECUTÒ");
    const files: { [key: string]: File } = this.file.nativeElement.files;
    for (let key in files) {
      if (!isNaN(parseInt(key))) {
        this.files.add(files[key]);
      }
    }
  }

  uploadData() {
    console.log('Entrò');
    
    this.uploadService.uploadFiles(this.files);
    this.toast.info("Adjunto guardado con exito!", "Success!");

  }
  
  addFiles() {
    this.file.nativeElement.click();
  }
  
  closeDialog() {
    // if everything was uploaded already, just close the dialog
    if (this.uploadSuccessful) {
      return this.dialogRef.close();
    }
  
    // set the component state to "uploading"
    this.uploading = true;
  
    // start the upload and save the progress map
    
    this.progress = this.uploadService.uploadFiles(this.files);
  
    // convert the progress map into an array
    let allProgressObservables = [];
    for (let key in this.progress) {
      allProgressObservables.push(this.progress[key].progress);
    }
  
    // Adjust the state variables
  
    // The OK-button should have the text "Finish" now
    this.primaryButtonText = 'Finish';
  
    // The dialog should not be closed while uploading
    this.canBeClosed = false;
    this.dialogRef.disableClose = true;
  
    // Hide the cancel-button
    this.showCancelButton = false;
  
    // When all progress-observables are completed...
    forkJoin(allProgressObservables).subscribe(end => {
      // ... the dialog can be closed again...
      this.canBeClosed = true;
      this.dialogRef.disableClose = false;
  
      // ... the upload was successful...
      this.uploadSuccessful = true;
  
      // ... and the component is no longer uploading
      this.uploading = false;
    });
  }
}
