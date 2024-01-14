import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'opdrachten',
  templateUrl: './opdrachten.component.html',
  styleUrls: ['./opdrachten.component.css']
})
export class OpdrachtenComponent {

  constructor(
    private http: HttpClient
  ) {
  }

  downloadPdf(file: string) {
    let url: string = 'assets/wpl3/opdrachten/'
    let filename = '';
    if (file == 'pitch') {
      filename = 'Pitch_Qcify_van_Hoppe_Robbe.pdf'
    } else if (file == 'probleem') {
      filename = 'Probleemsituatie_van_Hoppe_Robbe.pdf'

    }
    url += filename;

    this.http.get(url, {responseType: 'blob'})
      .subscribe((data: Blob) => {
        const downloadUrl = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        link.click();
      });
  }
}
