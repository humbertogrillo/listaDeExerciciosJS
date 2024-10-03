export default class Ingrediente{
    constructor(id, nome, tipo){
        this.id = id;
        this.nome = nome,
        this.tipo = tipo
    }
}

export const LISTA_INGREDIENTES = [
    new Ingrediente(0, "base", "pão"),
    new Ingrediente(1, "meio", "pão"),
    new Ingrediente(2, "topo", "pão"),
    new Ingrediente(2,"frango","carne"),
    new Ingrediente(3,"suina","carne"),
    new Ingrediente(4,"bovina","carne"),
    new Ingrediente(5,"blen","carne"),
    new Ingrediente(6,"alface","salada"),
    new Ingrediente(7,"tomate","salada"),
    new Ingrediente(8,"cebola","salada"),
    new Ingrediente(9,"mussarela","queijo"),
    new Ingrediente(10,"prato","queijo"),
    new Ingrediente(11,"cheddar","queijo"),
    new Ingrediente(12,"suiço","queijo"),
    new Ingrediente(13,"maionese","molho"),
    new Ingrediente(14,"mostarda","molho"),
    new Ingrediente(15,"ketchup","molho"),
];