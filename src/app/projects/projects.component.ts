import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{
  showingProjects : any;

  transitioning: boolean = true;

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

  ngOnInit(): void {
    this.showProjects(0,2)

  }
  showProjects(num1:number,num2:number){
    this.transitioning = true;
    setTimeout(() => {
      this.showingProjects = this.projects.slice(num1, num2);
      this.transitioning = false;
    }, 300);  }
}
