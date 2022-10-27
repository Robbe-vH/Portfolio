import { Component, Output } from "@angular/core";

@Component({
    selector: 'resume-skillbalkje',
    templateUrl: './skillbalkje.component.html',
    styleUrls: [`./skillbalkje.component.css`]
})
export class SkillBalkje {
    divWidth = 0;
    id = 0;
    portfolioIsClicked = false;
    contactIsClicked = false;

    move(): void {
        console.log(this.divWidth);
        this.id = window.setInterval(() => { 
            if (this.divWidth < 50) {
            
                this.divWidth++;
        }
         }, 10);
    }
}