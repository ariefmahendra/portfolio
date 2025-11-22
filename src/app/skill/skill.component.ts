import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

@Component({
  selector: 'app-skill',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  mongodbUrl: string = "/assets/mongodb-logo.svg";
  angularUrl: string = "/assets/angular-icon.svg";
  reactUrl: string = "/assets/react-icon.svg";
  bootstrapUrl: string = "/assets/bootstrap-icon.svg";
  tailwindUrl: string = "/assets/tailwind-icon.svg";
  springUrl: string = "/assets/spring-icon.svg";
  laravelUrl: string = "/assets/laravel-icon.svg";
  golangUrl: string = "/assets/golang-icon.svg";
  javaUrl: string = "/assets/java-icon.svg";
  htmlUrl: string = "/assets/html-icon.svg";
  cssUrl: string = "/assets/css-icon.svg";
  javascriptUrl: string = "/assets/javascript-icon.svg";
  typescriptUrl: string = "/assets/typescript-icon.svg";
  phpUrl: string = "/assets/php-icon.svg";
  csharpUrl: string = "/assets/csharp-icon.svg";
  dotnetUrl: string = "/assets/netframework-icon.svg";
  jenkinsUrl: string = "/assets/jenkins-icon.svg";
  openshiftUrl: string = "/assets/openshift-icon.svg";
  oracleUrl: string = "/assets/oracle-icon.png";
}   
