interface Choice {
    id: number;
    option: string;
    value: boolean
}

export interface Question {
    id: number;
    question: string;
    choices: Array<Choice>;
    show: boolean;
}
