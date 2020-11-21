class Item {
  constructor(id, nome, quantidade) {
    this.nome = nome;
    this.quantidade = quantidade;
    this.id = id;
  }

  montarItem() {
    return `<li
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="item-${this.id}"
            />
            <label class="custom-control-label" for="item-${this.id}">
              ${this.nome}
            </label>
          </div>
          <span class="badge badge-primary badge-pill">${this.quantidade}</span>
        </li>`;
  }
}

export default Item;
