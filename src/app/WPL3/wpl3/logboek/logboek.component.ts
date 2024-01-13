import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'logboek',
  templateUrl: './logboek.component.html',
  styleUrls: ['./logboek.component.css']
})
export class LogboekComponent {

  constructor(
    private http: HttpClient

  ) {
  }

  downloadPdf() {
    let url: string = 'assets/wpl3/gesprekken/WPL3-Logboek_van_Hoppe_Robbe.pdf'
    this.http.get(url, {responseType: 'blob'})
      .subscribe((data: Blob) => {
        const downloadUrl = URL.createObjectURL(data);
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = 'WPL3-Logboek_van_Hoppe_Robbe.pdf'
        link.click();
      });
  }
}
