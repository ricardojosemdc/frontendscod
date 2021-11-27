export class Imovel {
    private nome: string;
    private email: string;
    private estado: string;
    private salary: number;
  
    constructor(id: number, firstName: string, lastName, salary: number) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.salary = salary;
    }
  
    getName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getYearlySalary(): number {
      return 12 * this.salary;
    }
  }