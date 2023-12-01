import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Portfolio-New';
  hamburgerIsTrue :boolean = false
 
  currentSection: 'personal' | 'qualifications' | 'skills' = 'personal';

  showSection(section: 'personal' | 'qualifications' | 'skills') {
    this.currentSection = section;
  }
}
