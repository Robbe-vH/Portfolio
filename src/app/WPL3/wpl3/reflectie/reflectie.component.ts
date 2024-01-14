import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'reflectie',
  templateUrl: './reflectie.component.html',
  styleUrls: ['./reflectie.component.css']
})
export class ReflectieComponent {

  constructor(
    private http: HttpClient
  ) {
  }

  downloadPdf() {
    let url: string = 'assets/wpl3/reflectie/Reflectie_leerdoelen_van_Hoppe_Robbe.pdf';

    this.http.get(url, {responseType: 'blob'})
      .subscribe((data: Blob) => {
        const downloadUrl = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'Reflectie_leerdoelen_van_Hoppe_Robbe.pdf';
        link.click();
      });
  }
}
