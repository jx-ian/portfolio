declare var bootstrap: any;

import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  standalone: false,
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {

  collapseAndScroll(event: Event, sectionId: string) {
    event.preventDefault();
    const collapseElement = document.getElementById('collapsibleNavbar');
    if (collapseElement) {
      const bsCollapse = bootstrap.Collapse.getOrCreateInstance(collapseElement);
      bsCollapse.hide();
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 400); // Match collapse transition duration
    }
  }

}
