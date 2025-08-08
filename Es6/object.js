let nameOf = 'machine name';
let machine = {
    [nameOf]: 'server',
    'machine hours': 10000
};

console.log(machine['machine hours']); // 10000

let server = {
    name: 'Server',
    restart() {
        console.log("The " + this.name + " is restarting...");
    },
    'starting up'() {
        console.log("The " +  this.name + " is starting up!");
    }
};

server['restart']();