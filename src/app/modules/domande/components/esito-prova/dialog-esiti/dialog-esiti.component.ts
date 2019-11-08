import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-esiti',
  templateUrl: './dialog-esiti.component.html',
  styleUrls: ['./dialog-esiti.component.scss']
})
export class DialogEsitiComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogEsitiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
  }

}
