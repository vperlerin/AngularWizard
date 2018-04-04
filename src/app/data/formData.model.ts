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

    // FOURTH STEP
    privacy: string = '';
    cellphone: string = '';
    intuition: string = '';
    complimentary: string = '';
 
    // FITH STEP
    mood: string = '';
    lies: string = '';
    sex: string = '';
    financial: string = '';
    
    // SIXTH STEP
    jaleaous: string = '';
    routine: string = '';
    goout: string = '';
    subject: string = '';

    // FINAL STEP
    email: string = ''; 
 
 
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

        // FOURTH STEP
        this.privacy = '';
        this.cellphone = '';
        this.intuition = '';
        this.complimentary  = '';
        
        // FITH STEP
        this.mood  = '';
        this.lies  = '';
        this.sex  = '';
        this.financial  = '';
        
        // SIXTH
        this.jaleaous = '';
        this.routine = '';
        this.goout = '';
        this.subject = '';

        // FINAL
        this.email = '';
 
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

export class FourthStep {
    privacy: string = '';
    cellphone: string = '';
    intuition: string = '';
    complimentary: string = '';
} 

export class FithStep {
    mood: string = '';
    lies: string = '';
    sex: string = '';
    financial: string = '';
} 

export class SixthStep {
    jaleaous: string = '';
    routine: string = '';
    goout: string = '';
    subject: string = '';
} 

export class FinalStep {
    email: string = ''; 
}
 