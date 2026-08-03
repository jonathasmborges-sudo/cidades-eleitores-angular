import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Módulo essencial para formulários

// 1. Criamos a "regra" de como uma cidade deve ser cadastrada
interface CidadeEleitoral {
  nome: string;
  eleitores: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule], // Precisamos declarar os módulos aqui
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  // 2. Variáveis ligadas aos inputs (o que o usuário vai digitar)
  nomeCidade: string = '';
  quantidadeEleitores: number | null = null;
  
  // 3. A lista (Array) que vai guardar todas as cidades cadastradas
  cidades: CidadeEleitoral[] = [];

  // 4. Função disparada pelo botão "Cadastrar"
  adicionarCidade() {
    // Só adiciona se os dois campos estiverem preenchidos
    if (this.nomeCidade && this.quantidadeEleitores !== null) {
      
      this.cidades.push({
        nome: this.nomeCidade,
        eleitores: this.quantidadeEleitores
      });
      
      // Limpa os campos da tela após salvar
      this.nomeCidade = '';
      this.quantidadeEleitores = null;
      
    } else {
      alert('Por favor, preencha o nome da cidade e a quantidade de eleitores.');
    }
  }
}