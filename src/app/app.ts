import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Estrutura de dados para o cadastro de cidades
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
  // Propriedades vinculadas aos campos do formulário
  nomeCidade: string = '';
  quantidadeEleitores: number | null = null;
  
  // Lista para armazenamento das cidades cadastradas
  cidades: CidadeEleitoral[] = [];

  // Método para validação e inclusão de nova cidade na lista
  adicionarCidade() {
    if (this.nomeCidade && this.quantidadeEleitores !== null) {
      
      this.cidades.push({
        nome: this.nomeCidade,
        eleitores: this.quantidadeEleitores
      });
      
      // Reinicializa os campos do formulário
      this.nomeCidade = '';
      this.quantidadeEleitores = null;
      
    } else {
      alert('Por favor, preencha o nome da cidade e a quantidade de eleitores.');
    }
  }
}