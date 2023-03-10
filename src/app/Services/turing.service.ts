import { Injectable } from '@angular/core';


interface Info {
  nomEstado: string;
  leer: string;
  escribir: string;
  mov: string;
  estadoSig: string;
}


@Injectable({
  providedIn: 'root'
})
export class TuringService {

  public bolEstado = false;
  public bolRes = false;
  public posicion;
  public bolInfo = false;
  public listResult = [];

  constructor() { }


  ejecutar(listEstados: Array<Info>, entrada: string) {
    this.bolRes = true;
    let band = false;
    let pos2 = 0;
    this.listResult = [];

    let aux = entrada.split('');
    let iniAux = aux.findIndex(l => l == '*');

    if (iniAux >= 0) {
      this.posicion = iniAux;
      aux[this.posicion] = '_';
    } else {
      this.posicion = 0;
    }
    this.listResult.push(aux.toString());
    do {
      band = false;
      if (listEstados[pos2].leer == aux[this.posicion]) {
        if (listEstados[pos2].escribir !== '*') {
          aux[this.posicion] = listEstados[pos2].escribir;
        }
        this.listResult.push(aux.toString());
        if (listEstados[pos2].estadoSig !== 'h') {
          let nextArray = listEstados.filter(v => v.nomEstado == listEstados[pos2].estadoSig);
          switch (listEstados[pos2].mov) {
            case 'r':
              this.posicion++;
              if (this.posicion >= aux.length) {
                aux.push('_');
              }
              break;

            case 'l':
              this.posicion--;
              if (this.posicion < 0) {
                aux = ['_'].concat(aux);
                this.posicion = 0
              }

              break;
            case '*':

              break;
            default:
              break;
          }
          for (let i = 0; i < nextArray.length; i++) {
            if (nextArray[i].leer == aux[this.posicion]) {
              let next = listEstados.findIndex(v => v.nomEstado == nextArray[i].nomEstado && v.leer == nextArray[i].leer);
              if (next >= 0) {
                pos2 = next;
                band = true;
              }
            }
          }
        }

      }
    } while (band);

    
    let as = entrada.length % 2
    if (as === 1) {
      this.listResult.push('Accept');
    } else {
      this.listResult.push('Reject');

    }

    return this.listResult;
  }
}
