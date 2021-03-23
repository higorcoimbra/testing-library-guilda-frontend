import { Component, OnInit } from '@angular/core';
import { TermosUsoService } from '../services/termos-uso.service';

@Component({
  selector: 'app-termos-uso',
  templateUrl: './termos-uso.component.html',
  styleUrls: ['./termos-uso.component.css']
})
export class TermosUsoComponent implements OnInit {

  disparouAcao = false;
  respostaAcao: string = '';
  termosUso: string = '';

  constructor(private termosUsoService: TermosUsoService) { }

  
  ngOnInit(): void {
    this.termosUsoService.obterTermosUso().subscribe(termosUso => {
      this.termosUso = termosUso;
    })
  }

  baixarComoArquivo() {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.termosUso));
    element.setAttribute('download', 'termos-uso.txt');
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
  }
  
  responderTermo(resposta: boolean) {
    this.disparouAcao = true;
    this.respostaAcao = resposta ? 'aceitos' : 'rejeitados';
  }

  voltar() {
    this.disparouAcao = false;
  }
}
