import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.initializeApp();
  }

  async initializeApp() {
    await SplashScreen.show();

    setTimeout(async () => {
      await SplashScreen.hide();
    }, 3000);
  }
}
