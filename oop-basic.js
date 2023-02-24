// class Player {
//     constructor(name) {
//         this.name = name;
//         this.health = 100
//     }
// }

// class Soldier extends Player {
//     constructor(name, power) {
//         super(name)
//         this.power = power
//     }

//     hit(opponent) {
//         opponent.health -= this.power
//     }

//     get damageTaken() {
//         return 100 - this.health 
//     }
//     set damageTaken(value) {
//         this.health = 100 - value
//     }
// }

// class Doctor extends Player {
//     constructor(name, health_power) {
//         super(name);
//         this.health_power = health_power;
//     }

//     threat(opponent) {
//         opponent.health += this.health_power
//     }
// }


// const aslan = new Soldier('Aslan', 15)
// const eli = new Soldier('Eli', 26)
// const elmeddin = new Doctor('Elmeddin', 24)
// eli.hit(aslan)
// aslan.damageTaken = 40
// elmeddin.threat(aslan) 
// console.log(aslan.health)
// console.log(aslan.damageTaken)

// const sun = document.querySelector('.sun');