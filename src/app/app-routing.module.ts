import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstStepComponent } from './firstStep/firststep.component';
import { SecondStepComponent }  from './secondStep/secondstep.component';
import { SecondStepAComponent }  from './secondStepA/secondstepa.component';
import { ThirdStepComponent } from './thirdStep/thirdstep.component'; 
import { FourthStepComponent }  from './fourthStep/fourthstep.component'; 
import { FinalStepComponent } from './finalStep/finalstep.component';
import { ResultComponent }  from './result/result.component'; 

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';
 
export const appRoutes: Routes = [
    { path: 'firststep',  component: FirstStepComponent, data: { state: 'home'} },
    { path: 'secondstep',  component: SecondStepComponent, canActivate: [WorkflowGuard], data: { state: 'step2'} },
    { path: 'secondstepa',  component: SecondStepAComponent, canActivate: [WorkflowGuard], data: { state: 'step2a'} },
    { path: 'thirdstep',  component: ThirdStepComponent, canActivate: [WorkflowGuard] },
    { path: 'fourthstep',  component: FourthStepComponent, canActivate: [WorkflowGuard] },
    { path: 'finalstep',  component: FinalStepComponent, canActivate: [WorkflowGuard] },
    { path: 'result',  component: ResultComponent, canActivate: [WorkflowGuard] },
    { path: '',   redirectTo: '/firststep', pathMatch: 'full' },
    { path: '**', component: FirstStepComponent }
];  
  
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}