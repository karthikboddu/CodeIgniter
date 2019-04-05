import { Component, OnInit, Inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LabelService } from 'src/app/services/label.service';
import { Label } from '../../models/label.model';
@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {
  labelform: FormGroup
  uid;
  labels: Label[];
  constructor(
    public dialogRef: MatDialogRef<LabelsComponent>,
    public dialog: MatDialog, private fb: FormBuilder, private labelsev: LabelService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    debugger
    this.uid = this.data.data;
  }

  ngOnInit() {
    this.labelform = this.fb.group({
      labelname: '',

    });

   
    setInterval(() => {
      this.fetchLabel();
    }, 1000);
   

  }

  fetchLabel() {
    debugger
    let fetchobs = this.labelsev.fetchLabel(this.uid);

    fetchobs.subscribe((res: any) => {
      debugger
      this.labels = res;
    })
  }

  closes(value: any) {
    debugger
    let labelobs = this.labelsev.setLabel(this.uid, value);
    labelobs.subscribe((res: any) => {
      
    });
    value='';
  }

}