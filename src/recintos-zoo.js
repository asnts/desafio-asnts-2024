class RecintosZoo {
    constructor(){
       this.Recintos = [
        {
            numero: 1, bioma: 'savana', tamanho: 10, animais: [{especie: 'macaco', quantidade: 3, tamanho:1}],
            numero: 2, bioma: 'floresta', tamanho: 5, animais: [], 
            numero: 2, bioma: 'savana e rio', tamanho: 7, animais: [{especie: 'gazela', quantidade: 1, tamanho:2}], 
            numero: 2, bioma: 'rio', tamanho: 10, animais: [], 
            numero: 2, bioma: 'savana', tamanho: 10, animais: [], 
            
        }
       ]
    }

    analisaRecintos(animal, quantidade) {
    }

}

export { RecintosZoo as RecintosZoo };
