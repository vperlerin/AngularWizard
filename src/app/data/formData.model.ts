export class FormData {

    // FIRST STEP
    fullName: string = '';
    gender: string = '';
    dob: string = '';

    // SECOND STEP
    partnerFullName: string = '';
    partnerDob: string = '';
    partnerGender: string = '';

    // SECOND STEP A
    cellA: string = '';
    absences: string = '';
    contacting: string = '';
    talkA: string = '';
    uncomfortable: string = '';
    jealousA: string = '';
    routineA: string = '';
    intimate: string = '';
 
    // THIRD STEP
    howlong: string= '';
    appearance: string = '';
    distant: string = '';
    calls:string = '';
    tell_lies:string='';
    accuse: string = '';
    fight: string = ''; 
    financial: string = '';
    status:string = '';
    whish: string = '';
 
    // FOURTH STEP
    infidelity: string= '';
    nervous: string= '';
    privacy: string= '';
    intuition : string= '';
    complimentary: string= '';
    mood: string= '';
    lies: string= '';
    public: string= '';
 
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

        // SECOND STEP A
        this.cellA= '';
        this.absences= '';
        this.contacting= '';
        this.talkA= '';
        this.uncomfortable= '';
        this.jealousA= '';
        this.routineA= '';
        this.intimate= '';

        //THIRD STEP
        this.howlong = '';
        this.appearance = '';
        this.distant = '';
        this.calls = '';
        this.tell_lies ='';
        this.accuse  = '';
        this.fight  = ''; 
        this.financial  = '';
        this.status = '';
        this.whish = '';

        // FOURTH STEP
        this.infidelity = '';
        this.nervous = '';
        this.privacy = '';
        this.intuition = '';
        this.complimentary = '';
        this.mood = '';
        this.lies = '';
        this.public = '';
      

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

export class SecondStepA {
    cellA: string = '';
    absences: string = '';
    contacting: string = '';
    talkA: string = '';
    uncomfortable: string = '';
    jealousA: string = '';
    routineA: string = '';
    intimate: string = '';
}

export class ThirdStep {
    howlong: string= '';
    appearance: string = '';
    distant: string = '';
    calls:string = '';
    tell_lies:string='';
    accuse: string = '';
    fight: string = ''; 
    financial: string = '';
    status: string = '';
    whish: string  = '';
} 

export class FourthStep {
    infidelity: string= '';
    nervous: string= '';
    privacy: string= '';
    intuition : string= '';
    complimentary: string= '';
    mood : string= '';
    lies : string= '';
    public : string= '';
} 

 

export class FinalStep {
    email: string = ''; 
}
 