import Item from "./item";

class App {
  constructor() {
    this.id = 1;
    this.itens = [];

    this.buttonAdicionar = document.getElementById("button-adicionar");
    this.buttonLimpar = document.getElementById("button-limpar");

    this.inputItem = document.getElementById("input-item");
    this.listaItens = document.getElementById("lista-itens");

    this.registrarEventos();
  }

  registrarEventos() {
    this.buttonAdicionar.onclick = (event) => this.adicionar(event);
    this.buttonLimpar.onclick = (event) => this.limparItens(event);
  }

  criar() {
    const item = new Item(this.id, this.inputItem.value, 1);
    this.id++;
    return item;
  }

  adicionar() {
    const item = this.criar();
    this.itens.push(item);

    this.limparInput();
    this.atualizarTela();
  }

  limparInput() {
    this.inputItem.value = "";
  }

  atualizarTela() {
    this.listaItens.innerHTML = "";

    this.itens.forEach((item) => {
      this.listaItens.innerHTML += item.montarItem();
    });
  }

  limparItens() {
    this.itens = [];
    this.id = 1;

    this.atualizarTela();
  }
}

new App();
