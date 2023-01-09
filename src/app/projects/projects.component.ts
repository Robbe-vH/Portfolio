import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Router } from '@angular/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faWindows } from '@fortawesome/free-brands-svg-icons';
import { faCalendar, faCheck, faList, faLocationArrow, faNewspaper, faUser, faXmark} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'projects-portfolio',
  templateUrl: 'projects.component.html',
  styleUrls: ['projects.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class Projects implements OnInit {
  list = faList;
  location = faLocationArrow;
  check = faCheck;
  xMark = faXmark;
  newsPaper = faNewspaper;
  windows = faWindows;
  calendar = faCalendar;
  user = faUser;

  constructor(
    private router: Router
  ) {

  }

  ngOnInit(): void {

    var buildUrl = "assets/platformer/Build";
    var config = {
      dataUrl: buildUrl + "/Build_Prod.data",
      frameworkUrl: buildUrl + "/Build_Prod.framework.js",
      codeUrl: buildUrl + "/Build_Prod.wasm",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "RobbevH",
      productName: "Portfolio Platformer",
      productVersion: "0.1",
      devicePixelRatio: 0
    };

    let container = document.querySelector("#unity-container") || new Element();
    var canvas: HTMLElement = document.querySelector("#unity-canvas") || new HTMLElement();
    var loadingBar: HTMLElement = document.querySelector("#unity-loading-bar") || new HTMLElement();
    var progressBarFull: HTMLElement = document.querySelector("#unity-progress-bar-full") || new HTMLElement();
    var fullscreenButton: HTMLElement = document.querySelector("#unity-fullscreen-button") || new HTMLElement();
    var mobileWarning: HTMLElement = document.querySelector("#unity-warning") || new HTMLElement();

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
      config.devicePixelRatio = 1;
      mobileWarning.style.display = "block";
      setTimeout(() => {
        mobileWarning.style.display = "none";
      }, 5000);
    } else {
      canvas.style.width = "80%";
      canvas.style.height = "60%";
    }
    loadingBar.style.display = "block";

    createUnityInstance(canvas, config, (progress: any) => {
      progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance: any) => {
      loadingBar.style.display = "none";
      fullscreenButton.onclick = () => {
        unityInstance.SetFullscreen(1);
      };
    }).catch((message: any) => {
      alert(message);
    });

  }
}