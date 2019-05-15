interface Choice {
    id: number;
    option: string;
    value: boolean
}

export class Question {
    public id: number;
    public question: string;
    public choices: Array<Choice>;
    public visited: boolean;
    public answered: boolean;
    private valueAns: boolean;

    constructor( id: number, question: string, choices: Array<Choice>){
        this.id= id;
        this.question= question;
        this.choices= choices;
        // this.visited= false;
        this.answered= false;
        this.valueAns= false;
    }

    getSoal(): string{
        return this.question;
    }
}
