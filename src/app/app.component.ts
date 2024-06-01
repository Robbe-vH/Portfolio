import {Component} from '@angular/core';
import {faAnglesUp} from '@fortawesome/free-solid-svg-icons';


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
  projectsIsClicked = false;
  mobielNavIsClicked = false;
  contactIsClicked = false;
  wpl3IsClicked: boolean = false;
  wpl4IsClicked: boolean = true;

  //Alle andere pagina's op false en zichzelf op true zetten

  ClickResume(): void {
    this.contactIsClicked = false;
    this.wpl3IsClicked = false;
    this.projectsIsClicked = false;
    this.resumeIsClicked = true;
    this.wpl4IsClicked = false;
  }

  ClickProjects(): void {
    this.contactIsClicked = false;
    this.wpl3IsClicked = false;
    this.resumeIsClicked = false;
    this.projectsIsClicked = true;
    this.wpl4IsClicked = false;
  }

  ClickContact(): void {
    this.wpl3IsClicked = false;
    this.resumeIsClicked = false;
    this.projectsIsClicked = false;
    this.contactIsClicked = true;
    this.wpl4IsClicked = false;
  }

  ClickWPL3() {
    this.resumeIsClicked = false;
    this.projectsIsClicked = false;
    this.contactIsClicked = false;
    this.wpl3IsClicked = true;
    this.wpl4IsClicked = false;
  }

  ClickWPL4() {
    this.resumeIsClicked = false;
    this.projectsIsClicked = false;
    this.contactIsClicked = false;
    this.wpl3IsClicked = false;
    this.wpl4IsClicked = true;
  }
// show / hide functie
  DropDown(): void {
    this.mobielNavIsClicked = !this.mobielNavIsClicked
  }


}
