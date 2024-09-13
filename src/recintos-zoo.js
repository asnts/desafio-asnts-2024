class RecintosZoo {
    constructor(){

        // Adição dos recintos 
       this.recintos = [
        {numero: 1, bioma: 'savana', tamanho: 10, animais: [{especie: 'macaco', quantidade: 3, tamanho:1}]},
        {numero: 2, bioma: 'floresta', tamanho: 5, animais: []}, 
        {numero: 3, bioma: 'savana e rio', tamanho: 7, animais: [{especie: 'gazela', quantidade: 1, tamanho:2}]}, 
        {numero: 4, bioma: 'rio', tamanho: 8, animais: []}, 
        {numero: 5, bioma: 'savana', tamanho: 9, animais: [{especie: 'leao', quantidade: 1, tamanho: 3}]}
         
       
       ];

        //Adição dos animais e suas especificações
        
        this.animais = {
            leao: { tamanho: 3, biomas: ['savana'], carnivoro: true},
          leopardo: { tamanho: 2, biomas: ['savana'], carnivoro: true},
            crocodilo: { tamanho: 3, biomas: ['rio'], carnivoro: true},
            macaco: { tamanho: 1, biomas: ['savana', 'floresta'], carnivoro: false},
            gazela: { tamanho: 2, biomas: ['savana'], carnivoro: false},
            hipototamo: { tamanho: 4, biomas: ['savana', 'rio'], carnivoro: false, especial: true},

        };
    }

        analisaRecintos(animal, quantidade){
            if(!this.animais[animal]){
                return {erro: "Animal inválido"}
            }
            if(quantidade <= 0 || !Number.isInteger(quantidade)){
                return {erro: "Quantidade inválida"}
            }


            const animalInfo = this.animais[animal];
            const recintosDisponiveis = [];

            this.recintos.forEach(recinto => {
                let espacoOcupado = 0;
                let temEspaco = false;
                let animaisCarnivoros = 0;
            

            //Validação do bioma 

            if (!animalInfo.biomas.includes(recinto.bioma)) return;
        
            // Validação do espaço e convivência
      recinto.animais.forEach(animalExistente => {
        espacoOcupado += animalExistente.tamanho * animalExistente.quantidade;
        if (this.animais[animalExistente.especie].carnivoro) animaisCarnivoros++;
      });

        // Condição para que se houver carnívoros, não pode adicionar outras espécies
      if (animalInfo.carnivoro && recinto.animais.length > 0) return;
 
           // Regra de espaço extra se houver mais de uma espécie
      if (recinto.animais.length > 0 && animalInfo.especial) {
        temEspaco = true;
        espacoOcupado += 1;
      }

            // Verificar espaço restante
            const espacoRestante = recinto.tamanho - espacoOcupado - (animalInfo.tamanho * quantidade);
            if (espacoRestante >= 0) {
              recintosDisponiveis.push(`Recinto ${recinto.numero} (espaço livre: ${espacoRestante} total: ${recinto.tamanho})`);
            }
          });

          if (recintosDisponiveis.length === 0) {
            return { erro: "Não há recinto disponível" };
          }
      
          return { recintosDisponiveis: recintosDisponiveis.sort() };


          
          
        }
      
      
        
        }

          //const recintosZoo = new RecintosZoo();
          //const resultado = recintosZoo.analisaRecintos('macaco', 2);
          //console.log(resultado);

          const recintosZoo = new RecintosZoo();
          const resultado = recintosZoo.analisaRecintos('unicornio', 2);
          console.log(resultado);

    

     
        
    

    



export { RecintosZoo as RecintosZoo };
