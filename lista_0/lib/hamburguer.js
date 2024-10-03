import { LISTA_INGREDIENTES } from "./ingrediente";

export default class Hamburguer{
    ingredientes = new Array()
    constructor(){
        
    }
    /**
     * Função adiciona pão ao sanduiche
     */
    adicionaPão(){
        let pao;
        if(this.ingredientes.length == 0){
            pao = LISTA_INGREDIENTES.filter(x => x.nome == "base")[0];
        }else {
            pao = LISTA_INGREDIENTES.filter(x => x.nome == "topo")[0];
        }
    }
    
    /**
     * 
     * @param {string} tipoCarne 
     * 
     * Espera um tipo de carne entre 'frango', 'suina', 'bovina' e 'blend'.
     * Em caso de não passar parâmetro, o tipo blend será escolhido.
     * Adiciona a carne especificada ao sanduíche. 
     */
    adicionaCarne(tipoCarne = "blend"){
        this.validaPao();
        let carne = LISTA_INGREDIENTES.filter(x => x.nome == tipoCarne).pop();
        this.ingredientes.push(carne);
    }

    /**
     * Adiciona alface ao sanduíche.
     */
    adicionaAlface(){
        this.validaPao();
        this.ingredientes.push(LISTA_INGREDIENTES.filter(x => x.nome == "alface" ).pop());
    }

    /**
     * Adiciona tomate ao sanduiche
     */
    adicionaTomate(){
        this.validaPao();
        this.ingredientes.push(LISTA_INGREDIENTES.filter(x => x.nome == "tomate" ).pop());
    }

    /**
     * Adiciona queijo mussarela ao sanduiche
     */
    adicionaQueijo(){
        this.validaPao();
        this.ingredientes.push(LISTA_INGREDIENTES.filter(x => x.nome == "mussarela").pop());
    }

    validaPao(){
        if (this.ingredientes.length == 0) throw new Error("Não é possível adicionar carne sem um pão.")
    }

    entregar(){
        if (this.ingredientes.length < 3) throw new Error("Impossível entregar sanduíche com menos de 3 ingredientes");

        let ultimo = this.ingredientes.pop();
        if (ultimo == "topo"){
            
        }
    }
}