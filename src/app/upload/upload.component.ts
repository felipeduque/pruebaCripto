import { Component, OnInit, Input, ChangeDetectionStrategy, NgZone, ViewChild, } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { Buffer } from 'buffer';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators ,FormsModule, NgForm, FormControl } from '@angular/forms'; 
import { Observable, forkJoin } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';


export interface DialogData {
  dialogdata: string;
  name: string;
}
@Input('cdkTextareaAutosize')

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UploadComponent implements OnInit{
  
  public files: Set<File> = new Set();
  // public addresses$: Observable<string[]>;
  // public addresses: string[];
  page: number = 1;
  totalPages: number;
  isLoaded: boolean = false;

  dialogdata: string;
  name: string;

  items : Item[];
  title : string = 'Titulo Lista'
  constructor(
  // public dialogRef: MatDialogRef<DialogComponent>,
  //  private toast: ToastrService,
    // private store: Store<EthState>
    // , private zone: NgZone
     iconRegistry: MatIconRegistry
    , sanitizer: DomSanitizer
    , public dialog: MatDialog
    , public uploadService: UploadService) {
    iconRegistry.addSvgIcon(
      'logo-tcs',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/logo-tcs.svg'));
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }

  nextPage() {
    this.page++;
  }

  prevPage() {
    this.page--;
  }
  ngOnInit() {
  // this.store.dispatch( new GetAccounts() );
  // this.addresses$ = this.store.pipe(select(((getAccounts))));

  this.items = this.getItems();
  }


  getItems() : Item[]{
    return [
    {
      id:1,
      title:"Transaccion Activo  1",
      description:"Lorem ipsum dolor"
    },
    {
      id:2,
      title:"Transaccion Activo  2",
      description:"Lorem ipsum dolor"
    },
    {
      id:3,
      title:"Transaccion Activo  3",
      description:"Lorem ipsum dolor"
    },
    {
      id:4,
      title:"Transaccion Activo  4",
      description:"Lorem ipsum dolor"
    },
    {
      id:5,
      title:"Transaccion Activo  5",
      description:"Lorem ipsum dolor"
    },
    {
      id:6,
      title:"Transaccion Activo  6",
      description:"Lorem ipsum dolor"
    },
    {
      id:7,
      title:"Transaccion Activo  7",
      description:"Lorem ipsum dolor"
    },
    {
      id:8,
      title:"Transaccion Activo  8",
      description:"Lorem ipsum dolor"
    },
    {
      id:9,
      title:"Transaccion Activo  9",
      description:"Lorem ipsum dolor"
    },
    {
      id:10,
      title:"Transaccion Activo  10",
      description:"Lorem ipsum dolor"
    },
    {
      id:11,
      title:"Transaccion Activo  11",
      description:"Lorem ipsum dolor"
    },
    {
      id:12,
      title:"Transaccion Activo  12",
      description:"Lorem ipsum dolor"
    },
    {
      id:13,
      title:"Transaccion Activo  13",
      description:"Lorem ipsum dolor"
    },
    {
      id:14,
      title:"Transaccion Activo  14",
      description:"Lorem ipsum dolor"
    }]
  }
  public openUploadDialog(){
    const dialogRef = this.dialog.open(
      DialogComponent, 
      { data: {name: this.name, dialogdata: this.dialogdata} 
        , width: '80%'
        , height: '80%'      
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed' );
        this.dialogdata = result;
      });
  }
}
interface Item{
  id: number;
  title : string;
  description ?: string;
}
