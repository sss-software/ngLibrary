import { NgModule } from "@angular/core"

import { DynamicFormModule } from 'src/app/shared/dynamic-form/dynamic-form.module'
import { CheckoutDataModule } from '../checkout-data/checkout-data.module'

import { CheckoutUserFormComponent } from './checkout-user-form/smart/checkout-user-form.component'

@NgModule({
  imports: [
    DynamicFormModule,
    CheckoutDataModule
  ],
  declarations: [
    CheckoutUserFormComponent
  ],
  exports: [
    CheckoutUserFormComponent
  ]
})
export class CheckoutWidgetsModule {
  constructor() {
    console.log('[CheckoutWidgetsModule] constructor()')
  }
}