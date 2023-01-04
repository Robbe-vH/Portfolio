import { Component } from '@angular/core';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PortfolioWebsite';
  faAnglesUp = faAnglesUp;

  //homepage hier als enige op true zetten
  resumeIsClicked = false;
  projectsIsClicked = true;
  mobielNavIsClicked = false;
  contactIsClicked = false;

  //Alle andere pagina's op false en zichzelf op true zetten
  ClickResume(): void {
    this.contactIsClicked = false;
    this.projectsIsClicked = false;
    this.resumeIsClicked = true;
  }
  ClickProjects(): void {
    this.contactIsClicked = false;
    this.resumeIsClicked = false;
    this.projectsIsClicked = true;
  }
  ClickContact(): void {
    this.resumeIsClicked = false;
    this.projectsIsClicked = false;
    this.contactIsClicked = true;
  }

// show / hide functie
  DropDown(): void {
    this.mobielNavIsClicked = !this.mobielNavIsClicked
  }
}
