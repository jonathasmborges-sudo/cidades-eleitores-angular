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

  // Guarda qual linha está sendo editada (null = cadastrando novo)
  indiceEmEdicao: number | null = null;

  adicionarCidade() {
    if (this.nomeCidade && this.quantidadeEleitores !== null) {

      if (this.indiceEmEdicao !== null) {
        // Se estamos editando, atualiza a linha existente
        this.cidades[this.indiceEmEdicao] = {
          nome: this.nomeCidade,
          eleitores: this.quantidadeEleitores
        };
        this.indiceEmEdicao = null; // Sai do modo edição
      } else {
        // Se é um cadastro novo, insere na lista
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

  editarCidade(index: number) {
    // 1. Pega os dados da cidade clicada e coloca de volta nos inputs
    this.nomeCidade = this.cidades[index].nome;
    this.quantidadeEleitores = this.cidades[index].eleitores;

    // 2. Avisa ao sistema qual é o número da linha que está sendo editada
    this.indiceEmEdicao = index;
  }

  excluirCidade(index: number) {
    // Remove 1 item da lista exatamente na posição "index"
    this.cidades.splice(index, 1);

    // Se você excluir a mesma cidade que estava editando no momento, limpa os campos
    if (this.indiceEmEdicao === index) {
      this.indiceEmEdicao = null;
      this.nomeCidade = '';
      this.quantidadeEleitores = null;
    }
  }
}