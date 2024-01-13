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

  downloadPdf() {
    let url: string = 'assets/wpl3/gesprekken/WPL3-Feedback_Ontwikkeling_van_Hoppe_Robbe.pdf'
    this.http.get(url, {responseType: 'blob'})
      .subscribe((data: Blob) => {
        const downloadUrl = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'WPL3-Feedback_Ontwikkeling_van_Hoppe_Robbe.pdf'
        link.click();
      });
  }

}
