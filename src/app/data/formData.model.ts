export class FormData {

    // FIRST STEP
    fullName: string = '';
    gender: string = '';
    dob: string = '';

    // SECOND STEP
    partnerFullName: string = '';
    partnerDob: string = '';
    partnerGender: string = '';

    email: string = '';
    work: string = '';
    street: string = '';
    city: string = '';
    state: string = '';
    zip: string = '';

    clear() {
        // FIRST STEP
        this.fullName = ''; 
        this.gender = '';
        this.dob = '';

        // SECOND STEP
        this.partnerFullName = '';
        this.partnerDob = '';
        this.partnerGender = '';


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

export class SecondStep {
    partnerFullName: string = ''; 
    partnerDob:  string = ''; 
    partnerGender: string = '';
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