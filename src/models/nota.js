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
        const media = Math.max(
            0.4 * this.a1 + 0.6 * this.a2, 
            0.4 * this.a1 + 0.6 * this.a3, 
            0.4 * this.a3 + 0.6 * this.a2
        )

        if (media >= 9 ){
            return "SS";
        } else if (media < 9 && media >= 7){
            return "MS";
        } else if (media >= 5 && media < 7){
            return "MM";
        } else if (media < 5 && media >= 3){
            return "MI";
        } else if (media < 3 && media >= 1){
            return "II"
        } else {
            return "SR"
        }
    }
}

module.exports = Nota;