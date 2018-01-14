import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { OcorrenciaViagemComponent } from './ocorrencia-viagem.component';

const routes: Routes = [
  {
    path: '',
    component: OcorrenciaViagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OcorrenciaVoagemRoutingModule { }
