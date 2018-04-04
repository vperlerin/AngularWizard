export class FormData {

    // FIRST STEP
    fullName: string = '';
    gender: string = '';
    dob: string = '';

    // SECOND STEP
    partnerFullName: string = '';
    partnerDob: string = '';
    partnerGender: string = '';
 
    // THIRD STEP
    appearance: string = '';
    distant: string = '';
    accuse: string = '';
    fight: string = '';
 
    clear() {
        // FIRST STEP
        this.fullName = ''; 
        this.gender = '';
        this.dob = '';

        // SECOND STEP
        this.partnerFullName = '';
        this.partnerDob = '';
        this.partnerGender = '';

        //THIRD STEP
        this.appearance = '';
        this.distant = '';
        this.accuse = '';
        this.fight = '';
 
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

export class ThirdStep {
    appearance: string = '';
    distant: string = '';
    accuse: string = '';
    fight: string = '';
} 


 