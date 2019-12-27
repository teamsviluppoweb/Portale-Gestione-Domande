import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-dialog-note',
  templateUrl: './dialog-note.component.html',
  styleUrls: ['./dialog-note.component.scss']
})
export class DialogNoteComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public dataDialog: string) {
  }

  ngOnInit() {
  }

}
