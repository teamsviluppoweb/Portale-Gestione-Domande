import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-conferma',
  templateUrl: './dialog-conferma.component.html',
  styleUrls: ['./dialog-conferma.component.scss']
})
export class DialogConfermaComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogConfermaComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: boolean) {
  }
  ngOnInit() {
    this.dataDialog = true;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }





}
