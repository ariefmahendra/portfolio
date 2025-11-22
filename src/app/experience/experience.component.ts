import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  portfolio1Url: string = "/assets/header.png";
  portfolio1Alt: string = "portfolio1";
  bookingRoomUrl: string = "/assets/booking-room.svg";
  mirocleUrl: string = "/assets/mirocle.svg";
  procurementUrl: string = "/assets/procurement.svg";
  enigmaLaundry: string = "/assets/enigma-laundry.svg";
  smartRemittanceUrl: string = "/assets/sr.png";
}
