/*
Descrizione:
Rifare l’esercizio della to do list.
Questa volta però ogni todo sarà un oggetto, formato da tre proprietà:
id, un numero progressivo per indicare in modo univoco l’elemento
text, una stringa che indica il testo del todo
done, un booleano (true/false) che indica se il todo è stato fatto oppure no

MILESTONE 0
Creare un array con dei dati di partenza

MILESTONE 1
Stampare all’interno di una lista HTML un item per ogni todo.
Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.

MILESTONE 2
Visualizzare a fianco ad ogni item una “x”: cliccando su di essa, il todo viene rimosso dalla lista.

MILESTONE 3
Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.

Bonus:
1- oltre al click sul pulsante, intercettare anche il tasto ENTER per aggiungere il todo alla lista
2- cliccando sul testo dell’item, invertire il valore della proprietà done del todo corrispondente (se done era uguale a false, impostare true e viceversa)
*/


"use strict";

const app = Vue.createApp({
    data() {
        return {
            todoList: [
                {
                    id: 1,
                    text: "Primo task",
                    done: true,
                },
                {
                    id: 2,
                    text: "Secondo task",
                    done: true,
                },
                {
                    id: 3,
                    text: "Terzo task",
                    done: false,
                },
                {
                    id: 4,
                    text: "Quarto task",
                    done: true,
                },
                {
                    id: 5,
                    text: "Quinto task",
                    done: false,
                },
                {
                    id: 6,
                    text: "Sesto task",
                    done: false,
                }
            ]
        }
    },
    methods: {
        deleteItem(singleTaskId) {
            let deleteIndex;
            
            // Individuo l'indice dell'elemento da cancellare
            this.todoList.forEach((singleElement, i) => {
                const singleTask = this.todoList[i];      
                
                if (singleTask.id === singleTaskId) {
                    deleteIndex = i;
                    this.todoList.splice(deleteIndex, 1);
                }
            });
        }
    }
})

app.mount("#app");