import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  openLinkedInProfile(): void {
    window.open('https://www.linkedin.com/in/parag-unhale', '_blank');
  }
  openGithubProfile(): void {
    window.open('https://github.com/ParagUnhale1998', '_blank');
  }
  openTwitterProfile(): void {
    window.open('https://twitter.com/paragunhale1998', '_blank');
  }
}
