import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Portfolio-New';
  hamburgerIsTrue :boolean = false
  showingProjects : any;
  testimonials = [
    {
      image: '../assets/services4.png',
      title: 'Static Websites',
      content: 'We make static websites with beautiful landing pages, ensuring fast responsiveness and better user experience.'
    },
    {
      image: '../assets/services1.png',
      title: 'Dynamic Websites',
      content: 'We create dynamic website pages and functionality to make websites awesome, fast, and provide a smooth user experience.'
    },
    {
      image: '../assets/services.png',
      title: 'Bug Fixes',
      content: 'We fix bugs in websites within our tech stack, addressing issues like responsive design glitches and form validation to seamless API integrations.'
    }
  ];
  
  projects = [
    {
      image: '../assets/projects/Project 1.png',
      title: 'Hotel Management',
    },
    {
      image: '../assets/projects/Project 2.png',
      title: 'Food App',
    },
    {
      image: '../assets/projects/Project 3.png',
      title: 'Socail MEdia ',
    },
    {
      image: '../assets/projects/Project 3.png',
      title: 'Static Websites',
    },
    {
      image: '../assets/projects/Project 5.png',
      title: 'Static Websites',
    },
    {
      image: '../assets/projects/Project 1.png',
      title: 'Static Websites',
    }
  ]
  currentTestimonialIndex = 0;
  transitioning: boolean = true;

  currentSection: 'personal' | 'qualifications' | 'skills' = 'personal';

  showSection(section: 'personal' | 'qualifications' | 'skills') {
    this.currentSection = section;
  }
  

  ngOnInit(): void {
    setInterval(() => {
      this.showNextTestimonial();
    }, 3000); // Switch testimonials every 5 seconds

    this.showProjects(0,2)
  }
  showNextTestimonial() {
    this.currentTestimonialIndex = (this.currentTestimonialIndex + 1) % this.testimonials.length;
  }

  showProjects(num1:number,num2:number){
    this.transitioning = true;
    setTimeout(() => {
      this.showingProjects = this.projects.slice(num1, num2);
      this.transitioning = false;
    }, 600);  }
}
