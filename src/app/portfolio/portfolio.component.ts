import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

// The PortfolioComponent is responsible for displaying a list of project cards
export class PortfolioComponent {

  // The titleService is used to set the title of the page
  constructor(private titleService: Title){
    this.titleService.setTitle("Jia Xian - Portfolio");
  }
  
  // Projects is an array of project cards, each containing details about a project
  private projects: ProjectCards[] = [
    {
      id: 1,
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "https://i.imgur.com/4Z5b1kH.png",
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS"]
    },
    {
      id: 2,
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills. A personal portfolio website showcasing my projects and skills.",
      image: "https://i.imgur.com/4Z5b1kH.png",
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS"]
    },
    {
      id: 3,
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "https://i.imgur.com/4Z5b1kH.png",
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS"]
    },
    {
      id: 4,
      title: "Portfolio",
      description: "A personal portfolio website showcasing my projects and skills.",
      image: "https://i.imgur.com/4Z5b1kH.png",
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS"]
    },
  ]


  // This method returns the list of project cards
  getProjects(): ProjectCards[] {
    return this.projects;
  }

  // This method sets the tags background color based on the tag name
  getTagColor(tags: string): string {
    switch (tags.toLowerCase()) {
      case 'angular':
        return '#DD0031'; // Angular red
      case 'typescript':
        return '#3178C6'; // TypeScript blue
      case 'spring boot':
        return '#6DB33F'; // Spring Boot green
      case 'html':
        return '#E34F26'; // HTML orange
      case 'sql':
        return '#E34F26'; // SQL orange
      case 'mysql':
        return '#4479A1'; // MySQL blue
      case 'postgresql':
        return '#336791'; // PostgreSQL blue
      case 'mongodb':
        return '#47A248'; // MongoDB green
      case 'bootstrap':
        return '#563D7C'; // Bootstrap purple
      case 'tailwindcss':
        return '#38B2AC'; // Tailwind CSS teal
      case 'sass':
        return '#CC6699'; // SASS pink
      case 'css':
        return '#1572B6'; // CSS blue
      case 'javascript':
      return '#F7DF1E'; // JavaScript yellow
      case 'react':
        return '#61DAFB'; // React blue
      case 'nodejs':
        return '#339933'; // Node.js green
      case 'python':
        return '#3776AB'; // Python blue
      case 'java':
        return '#007396'; // Java blue
      case 'c':
        return '#00599C'; // C blue
      case 'c++':
        return '#00599C'; // C++ blue
      case 'c#':
        return '#178600'; // C# green
      case 'php':
        return '#777BB4'; // PHP purple
      case 'ruby':
        return '#CC342D'; // Ruby red
      case 'go':
        return '#00ADD8'; // Go blue
      case 'swift':
        return '#FA7343'; // Swift orange
      default:
        return '#6c757d'; // Default gray for unknown tags
    }
  }

}

//Data model for project cards
// This interface defines the structure of a project card object
export interface ProjectCards {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}