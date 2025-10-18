import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
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
      description: "A personal portfolio website showcasing my projects and skills. This portfolio is built using Angular and features a responsive design, interactive elements, and a clean layout to effectively present my work and experience.",
      detailedDescription: "This personal portfolio website is designed to showcase my projects, skills, and experience in a professional manner. Built using Angular, the site features a responsive design that adapts to various screen sizes, ensuring a seamless user experience across devices. Interactive elements such as project cards and modals allow visitors to explore my work in detail. The clean layout and intuitive navigation make it easy for users to find information about my background and expertise.",
      image: ["image/imgnotfound.png"],
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS"]
    },
    {
      id: 2,
      title: "NFLPICKEM",
      description: "A full-stack web application for NFL game prediction contests, featuring secure authentication, group competitions, and real-time leaderboards.",
      detailedDescription: "NFL Pick'em is a full-stack web application that enables users to compete in NFL game prediction contests through a sophisticated pick'em platform. Built with a Spring Boot 3.0 backend (Java 17) and Angular 15 frontend, the application features secure session-based authentication, role-based access control, and a RESTful API architecture. Users can create or join competition groups, submit weekly predictions against point spreads, and track their performance on real-time leaderboards. The system includes comprehensive admin tools for managing games, scores, and user permissions, while the MySQL database employs a normalized schema with composite keys to handle complex many-to-many relationships between users, groups, games, and picks. This project demonstrates proficiency in enterprise Java development, modern frontend frameworks, API design, database architecture, and delivering a complete production-ready sports gaming application.",
      image: ["image/imgnotfound.png"],
      link: "https://github.com/jx-ian",
      tags: ["Angular", "TypeScript", "HTML", "CSS", "Spring Boot", "Java", "MySQL"]
    },
    // {
    //   id: 3,
    //   title: "Portfolio",
    //   description: "A personal portfolio website showcasing my projects and skills.",
    //   image: "https://i.imgur.com/4Z5b1kH.png",
    //   link: "https://github.com/jx-ian",
    //   tags: ["Angular", "TypeScript", "HTML", "CSS"]
    // },
    // {
    //   id: 4,
    //   title: "Portfolio",
    //   description: "A personal portfolio website showcasing my projects and skills.",
    //   image: "https://i.imgur.com/4Z5b1kH.png",
    //   link: "https://github.com/jx-ian",
    //   tags: ["Angular", "TypeScript", "HTML", "CSS"]
    // },
  ]


  // This method returns the list of project cards
  getProjects(): ProjectCards[] {
    return this.projects;
  }

  // This property holds the currently selected project card for displaying in a modal
  selectedProject: ProjectCards | null = null;

  // This method sets the selected project card
  selectProject(project: ProjectCards) {
    this.selectedProject = project;
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
  detailedDescription: string;
  image: string[];
  link: string;
  tags: string[];
}