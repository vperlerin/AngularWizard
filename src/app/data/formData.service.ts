import { Injectable }                        from '@angular/core';

import { FormData, FirstStep, SecondStep, ThirdStep  }   from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isFirstStepValid: boolean = false;
    private isSecondStepValid: boolean = false;
    private isThirdStepValid: boolean = false 
   

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

    
    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isFirstStepValid = this.isSecondStepValid = this.isThirdStepValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isFirstStepValid &&
                this.isSecondStepValid &&
                this.isThirdStepValid  ;
    }
} 