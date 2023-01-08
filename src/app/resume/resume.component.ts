import { Component, OnInit } from "@angular/core";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faGlobeEurope, faPhoneFlip } from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'portfolio-ResumePagina',
    templateUrl: './resume.component.html',
    styleUrls: ['./resume.component.css']
})

export class ResumePagina {
    envelope = faEnvelope;
    phone = faPhoneFlip;
    globe = faGlobeEurope;
    linkedIn = faLinkedinIn;

    kaartjes: boolean[] = [true, false, false, false, false]; 
        

    // Deze functie maakt een slideshow voor de kaartjes met een time-out van 1,5s.
    ngOnInit() {
        const sleep = (time: number) => {
            return new Promise(resolve => setTimeout(resolve, time))
        }
        const SlideShow = async () => {
            while (true) {
                
                for (let i = 0; i < 5; i++) {
                    console.log("Yeet" + i);
                    this.kaartjes[i] = true;
                    if (i >= 1) {
                        this.kaartjes[i - 1] = false;
                    }
                    await sleep(15000);
                }
                this.kaartjes[4] = false;
            }
        }
        SlideShow();
    }
}