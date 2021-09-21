class Nota {
    constructor(disciplina, a1, a2, a3) {
        this.disciplina = disciplina;
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
    }

    mediaFinal() {
        return Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        );
    }

    mediaCA() {
        const CA = Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        )

        if (CA >= 9 ){
            return "SS";
        } else if (CA < 9 && CA >= 7){
            return "MS";
        } else if (CA >= 5 && CA < 7){
            return "MM";
        } else if (CA < 5 && CA >= 3){
            return "MI";
        } else if (CA < 3 && CA >= 1){
            return "II"
        } else {
            return "SR"
        }
    }
}

module.exports = Nota;