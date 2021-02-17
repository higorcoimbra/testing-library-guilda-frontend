import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-termos-uso',
  templateUrl: './termos-uso.component.html',
  styleUrls: ['./termos-uso.component.css']
})
export class TermosUsoComponent implements OnInit {

  disparouAcao = false;
  respostaAcao: string = '';

  constructor() { }

  
  ngOnInit(): void {
  }
  
  responderTermo(resposta: boolean) {
    this.disparouAcao = true;
    this.respostaAcao = resposta ? 'aceitos' : 'rejeitados';
  }

  voltar() {
    this.disparouAcao = false;
  }
}
