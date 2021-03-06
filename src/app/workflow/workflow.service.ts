import { Injectable }         from '@angular/core';

import { STEPS }              from './workflow.model';

@Injectable()
export class WorkflowService {

    private workflow = [
        { step: STEPS.firststep, valid: false },
        { step: STEPS.secondstep, valid: false },
        { step: STEPS.secondstepa, valid: false },
        { step: STEPS.thirdstep, valid: false },
        { step: STEPS.fourthstep, valid: false },
        { step: STEPS.finalstep, valid: false }   
    ];
    
    validateStep(step: string) { 
        // If the state is found, set the valid field to true 
        var found = false;
        for (var i = 0; i < this.workflow.length && !found; i++) {
            if (this.workflow[i].step === step) {
                found = this.workflow[i].valid = true;
                console.log('FOUND',found,this.workflow[i]);
            }
        }
    }

    resetSteps() {
        // Reset all the steps in the Workflow to be invalid
        this.workflow.forEach(element => {
            element.valid = false;
        });
    }

    getFirstInvalidStep(step: string) : string {
        // If all the previous steps are validated, return blank
        // Otherwise, return the first invalid step
        var found = false;
        var valid = true;
        var redirectToStep = '';

        for (var i = 0; i < this.workflow.length && !found && valid; i++) {
            let item = this.workflow[i];

            if (item.step === step) {
                console.log("1- getFirstInvalidStep",item);
                found = true;
                redirectToStep = '';
            }
            else {
                console.log("2- getFirstInvalidStep",item);
                valid = item.valid;
                redirectToStep = item.step
            }
        }
        
        return redirectToStep;
    }
}