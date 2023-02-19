import { Component } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MAIN_ROUTING_LINKS } from '../../constants/routing-constants';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css']
})
export class MobileMenuComponent {
  public links = MAIN_ROUTING_LINKS;

  
  constructor(private _bottomSheetRef: MatBottomSheetRef<MobileMenuComponent>) { }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
