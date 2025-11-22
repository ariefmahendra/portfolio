import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  headerUrl: string = "/assets/header.png";
  headerAlt: string = "Header Logo";
}
