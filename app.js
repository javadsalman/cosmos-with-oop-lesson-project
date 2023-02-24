class SolarSystem {
    constructor(SolarSystemId, sunId) {
        this.solarSystem = document.querySelector('#'+SolarSystemId)
        this.sun = document.querySelector('#'+sunId)
    }

    get center() {
        const sunPositions = this.sun.getBoundingClientRect()
        const top = sunPositions.top + sunPositions.height / 2;
        const left = sunPositions.left + sunPositions.width / 2;
        return {top, left}
    }

}

function rad(deg) {
    return deg * Math.PI / 180
}

class CosmosObject {
    constructor(centerObject, size, color, distance, speed=1) {
        this.distance = distance
        this.size = size
        this.speed = speed
        this.element = document.createElement('div');
        this.element.className = 'full-rounded';
        this.element.style.width = this.size+'px';
        this.element.style.height = this.size+'px';
        this.element.style.backgroundColor = color;
        this.centerObject = centerObject
        this.element.style.top = this.centerObject.center.top - size/2 + 'px';
        this.element.style.left = this.centerObject.center.left + distance - size/2 + 'px';
        this.start()
    }

    get center() {
        const rect = this.element.getBoundingClientRect()
        const top = rect.top + rect.height / 2;
        const left = rect.left + rect.width / 2;
        return {top, left}
    }

    start() {
        let currentDeg = 0
        const interval = setInterval(() => {
            const center = this.centerObject.center
            const xDistance = Math.cos(rad(currentDeg)) * this.distance - this.size/2
            const left = center.left + xDistance
            const yDistance = Math.sin(rad(currentDeg)) * this.distance + this.size/2
            const top = center.top - yDistance
            this.element.style.left = left + 'px';
            this.element.style.top = top + 'px';
            currentDeg += this.speed
        }, 10);
    }
}

class Planet extends CosmosObject{
    constructor(solar, size, color, distance, speed=1) {
        super(solar, size, color, distance, speed)
        solar.solarSystem.append(this.element)
    }
}

class Satellite extends CosmosObject{
    constructor(solar, planet, size, color, distance, speed) {
        super(planet, size, color, distance, speed)
        solar.solarSystem.append(this.element)
    }
}


const solar = new SolarSystem('solar-system', 'sun');
const earth = new Planet(solar, 25, 'blue', 100, 1.2)
const mars = new Planet(solar, 20, 'red', 150, 0.8)
const jupyter = new Planet(solar, 50, 'orange', 250, 1)

const moon = new Satellite(solar, earth, 5, 'gray', 20, 3)
const europe = new Satellite(solar, jupyter, 5, 'gray', 40, 2)
const io = new Satellite(solar, jupyter, 5, 'gray', 45, 1.5)
const titan = new Satellite(solar, jupyter, 5, 'gray', 55, -1)

function randRange(start, end) {
    return Math.floor(start + (end-start) * Math.random())
}

class Stars {
    constructor(starsId, starCount=100) {
        this.starCount = starCount;
        this.starsEl = document.querySelector('#'+starsId);
        this.rect = this.starsEl.getBoundingClientRect();
    }
    _createStar(top, left) {
        const star = document.createElement('div')
        const size = randRange(1, 4)
        const delay = randRange(500, 3300)
        star.style.width = size + 'px';
        star.style.height = size + 'px';
        star.className = 'starr';
        star.style.top = top + 'px';
        star.style.left = left + 'px';
        star.style.animationDelay = delay+'ms';
        this.starsEl.append(star);
    }
    setStars() {
        for (let i=0; i<this.starCount; i++) {
            const left = randRange(5, this.rect.width-5);
            const top = randRange(5, this.rect.height-5);
            console.log(top, left);
            this._createStar(top, left)
        }
    }
}


const stars = new Stars('stars', 300);
stars.setStars()