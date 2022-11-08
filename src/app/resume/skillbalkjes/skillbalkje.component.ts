import { Component, ViewChild, ElementRef, HostListener, Input } from "@angular/core";

@Component({
    selector: 'resume-skillbalkje',
    templateUrl: './skillbalkje.component.html',
    styleUrls: [`./skillbalkje.component.css`]
})
export class SkillBalkje {
    divWidth = 0;
    @Input() maxWidth: number;
    id = 0;
   

    @ViewChild('skillbar', { static: false })
    private testDiv: ElementRef<HTMLDivElement>;
    isDivScrolledIntoView: boolean;

    @HostListener('window:scroll', ['$event'])
    isScrolledIntoView() {
        if (this.testDiv) {
            const rect = this.testDiv.nativeElement.getBoundingClientRect();
            const topShown = rect.top >= 0;
            const bottomShown = rect.bottom <= window.innerHeight;
            this.isDivScrolledIntoView = topShown && bottomShown;
            console.log(this.isDivScrolledIntoView)
            
        }

        if (this.isDivScrolledIntoView) {
            setTimeout(() => {this.move()}, 100);
        }
    }

    move(): void {
        console.log(this.divWidth);
        this.id = window.setInterval(() => {
            if (this.divWidth < this.maxWidth) {

                this.divWidth++;
            }
        }, 70);
    }
}