import { NgModule } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  imports: [
    NgIconsModule.withIcons({heroUsers})
  ],
  exports: [
    NgIconsModule
  ]
})
export class HeroIconsModule {}