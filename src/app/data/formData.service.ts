import { Injectable }                        from '@angular/core';

import { FormData, FirstStep, SecondStep, SecondStepA, ThirdStep,
         FourthStep,  FinalStep  }   from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isFirstStepValid: boolean = false;
    private isSecondStepValid: boolean = false;
    private isSecondAStepValid: boolean = false;
    private isThirdStepValid: boolean = false;
    private isFourthStepValid: boolean = false; 
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
    * SECOND STEP  A
    *************************************************/
    getSecondStepA(): SecondStepA {
        var secondstepa: SecondStepA = {
            cellA:   this.formData.cellA,
            absences:   this.formData.absences,
            contacting:   this.formData.contacting,
            talkA:   this.formData.talkA,
            uncomfortable:  this.formData.uncomfortable,
            jealousA:  this.formData.jealousA,
            routineA:  this.formData.routineA,
            intimate:  this.formData.intimate
        };
        return secondstepa;     
    }

    setSecondStepA(data: SecondStepA) {
        this.isSecondAStepValid = true;
        this.formData.cellA  = data.cellA,
        this.formData.absences  = data.absences,
        this.formData.contacting  = data.contacting,
        this.formData.talkA  = data.talkA,
        this.formData.uncomfortable  = data.uncomfortable,
        this.formData.jealousA  = data.jealousA,
        this.formData.routineA  = data.routineA,
        this.formData.intimate  = data.intimate 
        this.workflowService.validateStep(STEPS.secondstepa);
    }

    /*************************************************
    * THIRD STEP 
    *************************************************/
    getThirdStep(): ThirdStep {
        var thirdstep: ThirdStep = {
            howlong: this.formData.howlong,
            appearance: this.formData.appearance,
            distant: this.formData.distant,
            calls:this.formData.calls,
            tell_lies:this.formData.tell_lies,
            accuse:this.formData.accuse,
            fight: this.formData.fight, 
            financial: this.formData.financial,
            status: this.formData.status,
            whish: this.formData.whish
        };
        return thirdstep;     
    }

    setThirdStep(data: ThirdStep) {
        this.isThirdStepValid = true;
        this.formData.howlong = data.howlong;
        this.formData.appearance= data.appearance;
        this.formData.distant= data.distant;
        this.formData.calls= data.calls;
        this.formData.tell_lies= data.tell_lies;
        this.formData.accuse= data.accuse;
        this.formData.fight= data.fight; 
        this.formData.financial= data.financial; 
        this.formData.status = data.status;
        this.formData.whish = data.whish;
        this.workflowService.validateStep(STEPS.thirdstep);
    }

    /*************************************************
    * FOURTH STEP 
    *************************************************/
    getFourthStep(): FourthStep {
        var fourthstep: FourthStep = {
            infidelity: this.formData.infidelity,
            nervous: this.formData.nervous,
            privacy: this.formData.privacy,
            intuition : this.formData.intuition,
            complimentary: this.formData.complimentary,
            mood : this.formData.mood,
            lies : this.formData.lies,
            public : this.formData.public
        };
        return fourthstep;     
    }

    setFourthStep(data: FourthStep) {
        this.isFourthStepValid = true;
        this.formData.infidelity= data.infidelity;
        this.formData.nervous= data.nervous;
        this.formData.privacy= data.privacy;
        this.formData.intuition= data.intuition;
        this.formData.complimentary= data.complimentary;
        this.formData.mood = data.mood;
        this.formData.lies = data.lies;
        this.formData. public = data.public; 

        this.workflowService.validateStep(STEPS.fourthstep);
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
        this.isFirstStepValid = this.isSecondStepValid = this.isThirdStepValid = this.isFourthStepValid =   this.isFinalStepValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isFirstStepValid &&
               this.isSecondStepValid &&
               this.isThirdStepValid &&
               this.isFourthStepValid && 
               this.isFinalStepValid;
    }
} 