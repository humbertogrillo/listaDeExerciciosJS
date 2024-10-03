import { LISTA_INGREDIENTES } from "./ingrediente";

/**
 * Versão 2.0 do Hamburguer, permite adição de ingredientes por nome
 */
export default class Hamburguer{
    ingredientes = new Array()
    constructor(){
        
    }

    /**
     * 
     * @param {string} nomeIngrediente 
     */
    adicionaIngrediente(nomeIngrediente){
        ingrediente = LISTA_INGREDIENTES.filter(x => x.nome == nomeIngrediente);
        if(this.ingredientes.length === 1){
            this.ingredientes.push(ingrediente[0]);
        }
    }
    
    /**
     * 
     * @param {Array} listaNomes 
     */
    adicionaIngredientes(listaNomes){
        listaNomes.forEach(this.adicionaIngrediente);
    }

}