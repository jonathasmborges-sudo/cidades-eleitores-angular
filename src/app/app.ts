import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CidadeEleitoral {
  nome: string;
  eleitores: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  nomeCidade: string = '';
  quantidadeEleitores: number | null = null;
  cidades: CidadeEleitoral[] = [];

  // Variável de controle para edição
  indiceEmEdicao: number | null = null;

  adicionarCidade() {
    if (this.nomeCidade && this.quantidadeEleitores !== null) {

      if (this.indiceEmEdicao !== null) {
        // Atualiza a cidade existente
        this.cidades[this.indiceEmEdicao] = {
          nome: this.nomeCidade,
          eleitores: this.quantidadeEleitores
        };
        this.indiceEmEdicao = null;
      } else {
        // Cadastra uma nova cidade
        this.cidades.push({
          nome: this.nomeCidade,
          eleitores: this.quantidadeEleitores
        });
      }

      // Limpa os campos
      this.nomeCidade = '';
      this.quantidadeEleitores = null;

    } else {
      alert('Por favor, preencha o nome da cidade e a quantidade de eleitores.');
    }
  }

  // Método chamado pelo botão Editar do HTML
  editarCidade(index: number) {
    this.nomeCidade = this.cidades[index].nome;
    this.quantidadeEleitores = this.cidades[index].eleitores;
    this.indiceEmEdicao = index;
  }

  // Método chamado pelo botão Excluir do HTML
  excluirCidade(index: number) {
    this.cidades.splice(index, 1);

    if (this.indiceEmEdicao === index) {
      this.indiceEmEdicao = null;
      this.nomeCidade = '';
      this.quantidadeEleitores = null;
    }
  }
}