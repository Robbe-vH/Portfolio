import { Component } from "@angular/core";

@Component({
    selector: 'resume-tabel',
    templateUrl: 'tabel.component.html',
    styleUrls: ['tabel.component.css']
})
export class ResumeTabel {
    TC = false;
    Bpost = false;
    Pauwels = false;
    Speel = false;
    Karting = false;

    RijTc() {
        this.TC = true;
        this.Bpost = false;
        this.Pauwels = false;
        this.Speel = false;
        this.Karting = false;
    }

    RijBpost() {
        this.TC = false;
        this.Bpost = true;
        this.Pauwels = false;
        this.Speel = false;
        this.Karting = false;
    }

    RijPauwels() {
        this.TC = false;
        this.Bpost = false;
        this.Pauwels = true;
        this.Speel = false;
        this.Karting = false;
    }

    RijSpeel() {
        this.TC = false;
        this.Bpost = false;
        this.Pauwels = false;
        this.Speel = true;
        this.Karting = false;
    }

    RijKarting() {
        this.TC = false;
        this.Bpost = false;
        this.Pauwels = false;
        this.Speel = false;
        this.Karting = true;
    }
}