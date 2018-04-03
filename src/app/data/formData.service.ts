import { Injectable }                        from '@angular/core';

import { FormData, FirstStep, SecondStep, Personal, Address }   from './formData.model';
import { WorkflowService }                   from '../workflow/workflow.service';
import { STEPS }                             from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isFirstStepValid: boolean = false;
    private isSecondStepValid: boolean = false;

    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

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

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            fullName: this.formData.fullName,
            gender  : this.formData.gender
        };
         return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.fullName  = data.fullName;
        this.formData.gender    = data.gender;

         // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork() : string {
        // Return the work type
        return this.formData.work;
    }
    
    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress() : Address {
        // Return the Address data
        var address: Address = {
            street: this.formData.street,
            city: this.formData.city,
            state: this.formData.state,
            zip: this.formData.zip
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.street = data.street;
        this.formData.city = data.city;
        this.formData.state = data.state;
        this.formData.zip = data.zip;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
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
        this.isFirstStepValid = this.isSecondStepValid = false;
        //this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isFirstStepValid &&
                this.isSecondStepValid  ;
    }
}