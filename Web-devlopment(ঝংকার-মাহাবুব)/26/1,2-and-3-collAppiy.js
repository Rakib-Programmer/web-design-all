const normslParson = {
    firstName: 'rakib',
    lastName: 'ahmmed',
    salary: 50000,
    gatFullName: function(){
        console.log(this.firstName, this.lastName)
    },
    chargeBill: function(amount, tips, tax){
        
        this.salary = this.salary - amount-tips-tax;
        console.log(this);
        return this.salary
    }
}

// normslParson.chargeBill(300)
// normslParson.chargeBill(300)
// normslParson.chargeBill(30000)
// console.log(normslParson.salary);


const heroParson={
    firstName: 'Rakib',
    lastName: 'Munshi',
    salary:25000,

}

const farendlyParson ={
    firstName: 'AAM',
    lastName: 'Rakib',
    salary:15000,
}

// const heroCharceBill = normslParson.chargeBill.bind(heroParson);
// heroCharceBill(200)
// heroCharceBill(500)
// heroCharceBill(500)


// const friendlyCharceBill = normslParson.chargeBill.bind(farendlyParson);
// friendlyCharceBill(500)
// friendlyCharceBill(1000)
// friendlyCharceBill(500)
// friendlyCharceBill(530)
// friendlyCharceBill(500)


// normslParson.chargeBill.call(farendlyParson, 500, 100, 20)
// normslParson.chargeBill.call(farendlyParson, 5000, 50, 5)

normslParson.chargeBill.apply(farendlyParson, [5000, 50, 5])
normslParson.chargeBill.apply(farendlyParson, [1000, 150, 50])