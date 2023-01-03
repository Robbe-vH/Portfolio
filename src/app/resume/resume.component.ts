import { Component } from "@angular/core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeEurope, faLink, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'portfolio-ResumePagina',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})

export class ResumePagina {
    envelope = faEnvelope;
    phone = faPhoneFlip;
    globe = faGlobeEurope;
    linkedIn= faLinkedinIn;
}