import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  instagramUrl: string = "assets/instagram-logo.png";
  githubUrl: string = "assets/github-logo.png";
  telegramUrl: string = "assets/telegram-logo.png";
  linkedinUrl: string = "assets/linkedin-logo.png";

}
