import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FirstStepComponent }    from './firstStep/firststep.component';
import { SecondStepComponent }   from './secondStep/secondstep.component';
import { ThirdStepComponent }   from './thirdStep/thirdstep.component'; 

import { WorkflowGuard }        from './workflow/workflow-guard.service';
import { WorkflowService }      from './workflow/workflow.service';
 

export const appRoutes: Routes = [
    // 1st Route
    { path: 'firststep',  component: FirstStepComponent },
    // 2nd Route
    { path: 'secondstep',  component: SecondStepComponent, canActivate: [WorkflowGuard] },
     // 3rd Route
    { path: 'thirdstep',  component: ThirdStepComponent, canActivate: [WorkflowGuard] },
    { path: '',   redirectTo: '/firststep', pathMatch: 'full' },
    // 6th Route
    { path: '**', component: FirstStepComponent }
]; 
 
@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule],
  providers: [WorkflowGuard]
})

export class AppRoutingModule {}