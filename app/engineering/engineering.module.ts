import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';

import { EngineeringListComponent } from './engineering-list.component';
import { EngineeringDetailComponent } from './engineering-detail.component';

import { EngineeringService } from './engineering.service';



@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'engineering', component: EngineeringListComponent },
      { path: 'engineering/:colCode',
        component: EngineeringDetailComponent
      }
    ])
  ],
  declarations: [
    EngineeringListComponent,
    EngineeringDetailComponent
  ],
  providers: [
    EngineeringService,
  ]
})
export class EngineeringModule {}
