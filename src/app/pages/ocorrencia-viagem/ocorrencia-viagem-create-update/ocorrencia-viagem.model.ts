export class OcorrenciaViagem {
  id: number;
  idFilial: number;
  firstName: string;
  lastName: string;
  street: string;
  zipcode: number;
  city: string;
  phoneNumber: string;
  mail: string;

  get name() {
    let name = '';

    if (this.firstName && this.lastName) {
      name = this.firstName + ' ' + this.lastName;
    } else if (this.firstName) {
      name = this.firstName;
    } else if (this.lastName) {
      name = this.lastName;
    }

    return name;
  }

  set name(value) { }

  get address() {
    return `${this.street}, ${this.zipcode} ${this.city}`;
  }

  set address(value) { }

  constructor(ocorrenciaViagem) {
    this.id = ocorrenciaViagem.id;
    this.firstName = ocorrenciaViagem.firstName;
    this.lastName = ocorrenciaViagem.lastName;
    this.street = ocorrenciaViagem.street;
    this.zipcode = ocorrenciaViagem.zipcode;
    this.city = ocorrenciaViagem.city;
    this.phoneNumber = ocorrenciaViagem.phoneNumber;
    this.mail = ocorrenciaViagem.mail;
    this.idFilial = ocorrenciaViagem.idFilial;
  }
}
