import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../../reducers/index';
import { OcorrenciaViagem } from './ocorrencia-viagem.model';

@Component({
  selector: 'vr-ocorrencia-viagem-create-update',
  templateUrl: './ocorrencia-viagem-create-update.component.html',
  styleUrls: ['./ocorrencia-viagem-create-update.component.scss']
})
export class OcorrenciaViagemCreateUpdateComponent implements OnInit {

  static id = 100;

  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(@Inject(MAT_DIALOG_DATA) public defaults: any,
              private dialogRef: MatDialogRef<OcorrenciaViagemCreateUpdateComponent>,
              private fb: FormBuilder,
              private store: Store<fromRoot.State>) {
  }

  ngOnInit() {
    if (this.defaults) {
      this.mode = 'update';
    } else {
      this.defaults = {} as OcorrenciaViagem;
    }

    this.form = this.fb.group({
      id: [OcorrenciaViagemCreateUpdateComponent.id++],
      firstName: [this.defaults.firstName || '',],
      lastName: [this.defaults.lastName || ''],
      street: this.defaults.street || '',
      city: this.defaults.city || '',
      zipcode: this.defaults.zipcode || '',
      phoneNumber: this.defaults.phoneNumber || '',
    });
  }

  save() {
    if (this.mode === 'create') {
      this.createOcorrenciaViagem();
    } else if (this.mode === 'update') {
      this.updateOcorrenciaViagem();
    }
  }

  createOcorrenciaViagem() {
    const ocorrenciaViagem = this.form.value;
    this.dialogRef.close(ocorrenciaViagem);
  }

  updateOcorrenciaViagem() {
    const ocorrenciaViagem = this.form.value;
    ocorrenciaViagem.id = this.defaults.id;

    this.dialogRef.close(ocorrenciaViagem);
  }

  isCreateMode() {
    return this.mode === 'create';
  }

  isUpdateMode() {
    return this.mode === 'update';
  }
}
