class Hero {
    constructor(name, level, type) {
        this.name = name;
        this.level = level;
        this.type = type;
    }

    attack() {
        let attackType;

        switch (this.type) {
            case 'mago':
                attackType = 'magia';
                break;
            case 'guerreiro':
                attackType = 'espada';
                break;
            case 'monge':
                attackType = 'artes marciais';
                break;
            case 'ninja':
                attackType = 'shuriken';
                break;
        }

        return `o ${this.type} atacou usando ${attackType}`;
    }
}