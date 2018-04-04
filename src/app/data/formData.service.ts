import { Injectable }                        from '@angular/core';

import { FormData, FirstStep, SecondStep, ThirdStep,
         FourthStep, FithStep, SixthStep, FinalStep  }   from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isFirstStepValid: boolean = false;
    private isSecondStepValid: boolean = false;
    private isThirdStepValid: boolean = false;
    private isFourthStepValid: boolean = false;
    private isFithStepValid: boolean = false;
    private isSixthStepValid: boolean = false;
    private isFinalStepValid: boolean = false;

    constructor(private workflowService: WorkflowService) { 
    }

    /*************************************************
    * FIRST STEP 
    *************************************************/
    getFirstStep(): FirstStep {
        var firststep: FirstStep = {
            fullName: this.formData.fullName,
            gender  : this.formData.gender,
            dob     : this.formData.dob
        };
        return firststep;     
    }

    setFirstStep(data: FirstStep) {
        this.isFirstStepValid = true;
        this.formData.fullName  = data.fullName;
        this.formData.gender    = data.gender;
        this.formData.dob       = data.dob;
        this.workflowService.validateStep(STEPS.firststep);
    }

    /*************************************************
    * SECOND STEP 
    *************************************************/
    getSecondStep(): SecondStep {
        var secondstep: SecondStep = {
            partnerFullName: this.formData.partnerFullName,
            partnerDob  : this.formData.partnerDob,
            partnerGender: this.formData.partnerGender
        };
        return secondstep;     
    }

    setSecondStep(data: SecondStep) {
        this.isSecondStepValid = true;
        this.formData.partnerFullName  = data.partnerFullName;
        this.formData.partnerDob    = data.partnerDob;
        this.formData.partnerGender = data.partnerGender;
        this.workflowService.validateStep(STEPS.secondstep);
    }

    /*************************************************
    * THIRD STEP 
    *************************************************/
    getThirdStep(): ThirdStep {
        var thirdstep: ThirdStep = {
            appearance : this.formData.appearance,
            distant : this.formData.distant,
            accuse: this.formData.accuse,
            fight: this.formData.fight
        };
        return thirdstep;     
    }

    setThirdStep(data: ThirdStep) {
        this.isThirdStepValid = true;
        this.formData.appearance = data.appearance;
        this.formData.distant = data.distant;
        this.formData.accuse = data.accuse;
        this.formData.fight = data.fight;
        this.workflowService.validateStep(STEPS.thirdstep);
    }

    /*************************************************
    * FOURTH STEP 
    *************************************************/
    getFourthStep(): FourthStep {
        var fourthstep: FourthStep = {
            privacy: this.formData.privacy,
            cellphone: this.formData.cellphone,
            intuition: this.formData.intuition,
            complimentary: this.formData.complimentary,
        };
        return fourthstep;     
    }

    setFourthStep(data: FourthStep) {
        this.isFourthStepValid = true;
        this.formData.privacy = data.privacy;
        this.formData.cellphone = data.cellphone;
        this.formData.intuition = data.intuition;
        this.formData.complimentary = data.complimentary;
        this.workflowService.validateStep(STEPS.fourthstep);
    }    

    /*************************************************
    * FiTH STEP 
    *************************************************/
    getFithStep(): FithStep {
        var fithstep: FithStep = {
            mood: this.formData.mood,
            lies: this.formData.lies,
            sex: this.formData.sex,
            financial: this.formData.financial
        };
        return fithstep;     
    }

    setFithStep(data: FithStep) {
        this.isFithStepValid = true;
        this.formData.mood = data.mood;
        this.formData.lies = data.lies;
        this.formData.sex = data.sex;
        this.formData.financial = data.financial;
        this.workflowService.validateStep(STEPS.fithstep);
    }  
    
    /*************************************************
    * SiXTH STEP 
    *************************************************/
    getSixthStep(): SixthStep {
        var sixthstep: SixthStep = {
            jaleaous: this.formData.jaleaous,
            routine: this.formData.routine,
            goout: this.formData.goout,
            subject: this.formData.subject
        };
        return sixthstep;     
    }

    setSixthStep(data: SixthStep) {
        this.isSixthStepValid = true;
        this.formData.jaleaous = data.jaleaous;
        this.formData.routine = data.routine;
        this.formData.goout = data.goout;
        this.formData.subject = data.subject;
        this.workflowService.validateStep(STEPS.sixthstep);
    }  


    /*************************************************
    * FINAL STEP 
    *************************************************/
    getFinalStep(): FinalStep {
        var finalstep: FinalStep = {
            email: this.formData.email 
        };
        return finalstep;     
    }

    setFinalStep(data: FinalStep) {
        console.log('SET FINAL STEP VALID');
        this.isFinalStepValid = true;
        this.formData.email = data.email; 
        this.workflowService.validateStep(STEPS.finalstep);
    }  
    
    
    
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isFirstStepValid = this.isSecondStepValid = this.isThirdStepValid = this.isFourthStepValid = this.isFithStepValid = this.isSixthStepValid = this.isFinalStepValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isFirstStepValid &&
               this.isSecondStepValid &&
               this.isThirdStepValid &&
               this.isFourthStepValid &&
               this.isFithStepValid &&
               this.isSixthStepValid &&
               this.isFinalStepValid;
    }
} 