import { Component, OnInit } from '@angular/core';
import { NbThemeService, NbToastrService } from '@nebular/theme';
import { TuringService } from '../Services/turing.service';
interface Info {
  nomEstado: string;
  leer: string;
  escribir: string;
  mov: string;
  estadoSig: string;
}

@Component({
  selector: 'app-turing',
  templateUrl: './turing.component.html',
  styleUrls: ['./turing.component.scss'],
})
export class TuringComponent implements OnInit {
  public entrada;
  public estados;
  public bolEstado = false;
  public bolInfo = false;
  public listEstados: Array<Info>;
  public listResult: Array<any>;

  constructor(
    private turingService: TuringService,
    private toastr: NbToastrService
  ) {}
  ngOnInit(): void {}

  validarEntrada() {
    if (this.entrada) {
      this.entrada = this.entrada.replaceAll(' ', '_');
      console.log(this.entrada);

      this.bolEstado = true;
    } else {
      this.toastr.warning('Digite una entrada', 'Error');
    }
  }

  validarEstados() {
    console.log(this.estados);
    if (this.estados > 0) {
      this.listEstados = [];
      for (let i = 0; i < this.estados; i++) {
        this.listEstados.push({
          nomEstado: '',
          leer: '',
          escribir: '',
          mov: '',
          estadoSig: '',
        });
      }
      this.bolInfo = true;
    }
  }

  ejecutar() {
    this.listResult = this.turingService.ejecutar(
      this.listEstados,
      this.entrada
    );
  }
}
