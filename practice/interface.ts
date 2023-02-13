interface WorkerInterface {
    name: string;
    occupation: string;
    address: string;
    message(): string;
}   

const worker: WorkerInterface = {
    name: 'Evan',
    occupation: 'Developer',
    address: 'Dr. Lake buena vista',
    message() {
        return `${this.name} can't answer the phone right now.`;
    }
}

console.log(worker);
