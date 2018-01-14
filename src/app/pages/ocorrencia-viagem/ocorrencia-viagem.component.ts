import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/filter';
import { Observable } from 'rxjs/Observable';
import { List } from '../../core/list/list.interface';
import { OcorrenciaViagem } from './ocorrencia-viagem-create-update/ocorrencia-viagem.model';
import { ListColumn } from '../../core/list/list-column.model';
import { ListDataSource } from '../../core/list/list-datasource';
import { ListDatabase } from '../../core/list/list-database';
import { componentDestroyed } from '../../core/utils/component-destroyed';
import { OcorrenciaViagemCreateUpdateComponent } from './ocorrencia-viagem-create-update/ocorrencia-viagem-create-update.component';
import { ALL_IN_ONE_TABLE_DEMO_DATA } from './ocorrencia-viagem.demo';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { ROUTE_TRANSITION } from '../../app.animation';

@Component({
  selector: 'vr-ocorrencia-viagem',
  templateUrl: './ocorrencia-viagem.component.html',
  styleUrls: ['./ocorrencia-viagem.component.scss'],
  animations: [...ROUTE_TRANSITION],
  host: { '[@routeTransition]': '' }
})
export class OcorrenciaViagemComponent implements List<OcorrenciaViagem>, OnInit, OnDestroy {

  subject$: ReplaySubject<OcorrenciaViagem[]> = new ReplaySubject<OcorrenciaViagem[]>(1);
  data$: Observable<OcorrenciaViagem[]>;
  ocorrenciaViagemList: OcorrenciaViagem[];

  @Input()
  columns: ListColumn[] = [
    { name: 'Checkbox', property: 'checkbox', visible: false },
    { name: 'Image', property: 'image', visible: true },
    { name: 'Name', property: 'name', visible: true, isModelProperty: true },
    { name: 'First Name', property: 'firstName', visible: false, isModelProperty: true },
    { name: 'Last Name', property: 'lastName', visible: false, isModelProperty: true },
    { name: 'Street', property: 'street', visible: true, isModelProperty: true },
    { name: 'Zipcode', property: 'zipcode', visible: true, isModelProperty: true },
    { name: 'City', property: 'city', visible: true, isModelProperty: true },
    { name: 'Phone', property: 'phoneNumber', visible: true, isModelProperty: true },
    { name: 'Actions', property: 'actions', visible: true },
  ] as ListColumn[];
  pageSize = 10;
  resultsLength: number;
  dataSource: ListDataSource<OcorrenciaViagem> | null;
  database: ListDatabase<OcorrenciaViagem>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {
    this.ocorrenciaViagemList = ALL_IN_ONE_TABLE_DEMO_DATA.map(ocorrenciaViagem => new OcorrenciaViagem(ocorrenciaViagem));

    this.subject$.next(this.ocorrenciaViagemList);
    this.data$ = this.subject$.asObservable();

    this.database = new ListDatabase<OcorrenciaViagem>();
    this.data$
      .takeUntil(componentDestroyed(this))
      .filter(Boolean)
      .subscribe((ocorrenciaViagemList) => {
        this.ocorrenciaViagemList = ocorrenciaViagemList;
        this.database.dataChange.next(ocorrenciaViagemList);
        this.resultsLength = ocorrenciaViagemList.length;
      });

    this.dataSource = new ListDataSource<OcorrenciaViagem>(this.database, this.sort, this.paginator, this.columns);
  }

  createOcorrenciaViagem() {
    this.dialog.open(OcorrenciaViagemCreateUpdateComponent).afterClosed().subscribe((ocorrenciaViagem: OcorrenciaViagem) => {
      if (ocorrenciaViagem) {
        this.ocorrenciaViagemList.unshift(new OcorrenciaViagem(ocorrenciaViagem));
        this.subject$.next(this.ocorrenciaViagemList);
      }
    });
  }

  downloadOcorrenciaViagem(){
    alert('exporar csv aplicando o filtro')
  }

  updateOcorrenciaViagem(ocorrenciaViagem) {
    this.dialog.open(OcorrenciaViagemCreateUpdateComponent, {
      data: ocorrenciaViagem
    }).afterClosed().subscribe((ocorrenciaViagem) => {
      if (ocorrenciaViagem) {
        const index = this.ocorrenciaViagemList.findIndex((existingOcorrenciaViagem) => existingOcorrenciaViagem.id === ocorrenciaViagem.id);
        this.ocorrenciaViagemList[index] = new OcorrenciaViagem(ocorrenciaViagem);
        this.subject$.next(this.ocorrenciaViagemList);
      }
    });
  }

  deleteOcorrenciaViagem(ocorrenciaViagem) {
    this.ocorrenciaViagemList.splice(this.ocorrenciaViagemList.findIndex((existingOcorrenciaViagem) => existingOcorrenciaViagem.id === ocorrenciaViagem.id), 1);
    this.subject$.next(this.ocorrenciaViagemList);
  }

  onFilterChange(value) {
    if (!this.dataSource) {
      return;
    }
    this.dataSource.filter = value;
  }

  ngOnDestroy() {
  }
}
