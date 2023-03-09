import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NbThemeService, NbToastrService } from '@nebular/theme';

interface Info {
  nomEstado: string;
  leer: string;
  escribir: string;
  mov: string;
  estadoSig: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  // Realizado por Brayan Barrera 20201678030, Diego Martinez 20201678038, Laura Diaz 20201678047
  public entrada;
  public estados;
  public bolEstado = false;
  public bolRes = false;
  public posicion;
  public bolInfo = false;
  public listEstados: Array<Info>;
  public listResult = [];

  constructor(private toastr: NbToastrService,) {
  }
  ngOnInit(): void {

  }

  validarEntrada() {
    if (this.entrada) {
      this.entrada = this.entrada.replaceAll(' ', '_')
      console.log(this.entrada);

      this.bolEstado = true;
    } else {
      this.toastr.warning('Digite una entrada', 'Error')
    }
  }

  validarEstados() {
    if (this.estados > 0) {
      this.listEstados = [];
      for (let i = 0; i < this.estados; i++) {
        this.listEstados.push({
          nomEstado: '',
          leer: '',
          escribir: '',
          mov: '',
          estadoSig: ''
        });
      }
      this.bolInfo = true;
    }
  }

  ejecutar() {
    this.bolRes = true;
    let band = false;
    let pos2 = 0;
    this.listResult = [];

    let aux = this.entrada.split('');
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
      if (this.listEstados[pos2].leer == aux[this.posicion]) {
        if (this.listEstados[pos2].escribir !== '*') {
          aux[this.posicion] = this.listEstados[pos2].escribir;
        }
        this.listResult.push(aux.toString());
        if (this.listEstados[pos2].estadoSig !== 'h') {
          let nextArray = this.listEstados.filter(v => v.nomEstado == this.listEstados[pos2].estadoSig);
          switch (this.listEstados[pos2].mov) {
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
              let next = this.listEstados.findIndex(v => v.nomEstado == nextArray[i].nomEstado && v.leer == nextArray[i].leer);
              if (next >= 0) {
                pos2 = next;
                band = true;
              }
            }
          }
        }

      }
    } while (band);





















    
    let as = this.entrada.length % 2
    if (as === 1) {
      this.listResult.push('Accept');
    } else {
      this.listResult.push('Reject');

    }
  }

}
