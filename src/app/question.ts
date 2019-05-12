interface Choice {
    id: number;
    option: string;
    value: boolean
}

export class Question {
    id: number;
    question: string;
    choices: Array<Choice>;
    visited: boolean;
    answered: boolean;

    constructor( id: number, question: string, choices: Array<Choice>){
        this.id= id;
        this.question= question;
        this.choices= choices;
        this.visited= false;
        this.answered= false;
    }

    getSoal(){
        return this.question;
    }
}
