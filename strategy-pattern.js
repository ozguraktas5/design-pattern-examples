function Fedex() {
    this.calculate = package => {
        // Fedex calculations...
        return 2.45
    }
}

function UPS() {
    this.calculate = package => {
        // UPS calculations...
        return 1.90
    }
}

function USPS() {
    this.calculate = package => {
        // USPS calculations...
        return 4.76
    }
}

function Shipping(){
    this.company = ""
    this.setStrategy = (company) => {
        this.company = company
    }
    this.calculate = package => {
        return this.company.calculate(package)
    }
}

const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()
const package = { from: 'Alabama', to: 'California', weight: 2.31 }

const shipping = new Shipping()
shipping.setStrategy(fedex)
console.log("Fedex: ", + shipping.calculate(package))

shipping.setStrategy(ups)
console.log("UPS: ", + shipping.calculate(package))

shipping.setStrategy(usps)
console.log("USPS: ", + shipping.calculate(package))


