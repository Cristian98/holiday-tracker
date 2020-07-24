export class User {
    name: string;
    password: string;
    email: string;
    grupa: string; 

    public constructor(name: string, password: string, email: string, grupa: string) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.grupa = grupa;
    }
    public greetUser() {
        return "Hello, " + this.name;
    }
}