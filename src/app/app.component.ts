import { FooterComponent } from './footer/footer.component';
import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';


import { ContactComponent } from './contact/contact.component';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavComponent, HeaderComponent, ExperienceComponent, SkillComponent, FooterComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
  showBackToTop = false;

  @HostListener('window:scroll')
  checkScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.showBackToTop = scrollPosition >= 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
