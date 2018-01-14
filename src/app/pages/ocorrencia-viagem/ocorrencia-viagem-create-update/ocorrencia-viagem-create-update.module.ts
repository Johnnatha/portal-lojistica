import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcorrenciaViagemCreateUpdateComponent } from './ocorrencia-viagem-create-update.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatDialogModule, MatIconModule, MatInputModule, MatRadioModule, MatSelectModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule
  ],
  declarations: [OcorrenciaViagemCreateUpdateComponent],
  entryComponents: [OcorrenciaViagemCreateUpdateComponent],
  exports: [OcorrenciaViagemCreateUpdateComponent]
})
export class OcorrenciaViagemUpdateModule {
}
