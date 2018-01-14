import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OcorrenciaViagemComponent } from './ocorrencia-viagem.component';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { OcorrenciaVoagemRoutingModule } from './ocorrencia-viagem-routing.module';
import { ListModule } from '../../core/list/list.module';
import { OcorrenciaViagemUpdateModule } from './ocorrencia-viagem-create-update/ocorrencia-viagem-create-update.module';
import { PageHeaderModule } from '../../core/page-header/page-header.module';
import { BreadcrumbsModule } from '../../core/breadcrumbs/breadcrumbs.module';

@NgModule({
  imports: [
    CommonModule,
    OcorrenciaVoagemRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatDialogModule,

    // Core
    ListModule,
    OcorrenciaViagemUpdateModule,
    PageHeaderModule,
    BreadcrumbsModule
  ],
  declarations: [OcorrenciaViagemComponent],
  exports: [OcorrenciaViagemComponent]
})
export class OcorrenciaViagemModule { }
