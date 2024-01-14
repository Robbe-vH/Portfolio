import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'ontwikkelingsgesprekken',
  templateUrl: './ontwikkelingsgesprekken.component.html',
  styleUrls: ['./ontwikkelingsgesprekken.component.css']
})
export class OntwikkelingsgesprekkenComponent {

  constructor(
    private http: HttpClient
  ) {
  }

  downloadPdf(file: string) {
    let url: string = 'assets/wpl3/gesprekken/'
    let filename = '';
    if (file == 'ontwikkeling') {
      filename = 'WPL3-Feedback_Ontwikkeling_van_Hoppe_Robbe.pdf'
    } else if (file == 'functionering') {
      filename = 'WPL3-Verslag_Functioneringsgesprek_van_Hoppe_Robbe.pdf'

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
