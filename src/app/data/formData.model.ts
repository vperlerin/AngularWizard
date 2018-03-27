export class FormData {
    fullName: string = '';
    gender: string = '';
    dob: string = '';

    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        this.fullName = ''; 
        this.gender = '';
        this.dob = '';


        this.email = '';
        this.work = '';
        this.street = '';
        this.city = '';
        this.state = '';
        this.zip = '';
    }
}

export class FirstStep {
    fullName: string = ''; 
    gender:  string = '';
    dob: string = '';
} 

export class Personal {
    fullName: string = ''; 
    gender:  string = '';
}

export class Address {
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';
}