import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test-session';

  constructor(private _httpClient: HttpClient) {
  }
  
  testOne() {
    console.log("Hello from Test One!");

    this.callInfo('?name=TestXX1');
  }

  testTwo() {
    console.log("Hello from Test Two!");

    this.callInfo('');
  }

  callInfo(queryString: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient.get('api/baseses/info' + queryString)
        .subscribe((response: any) => {
            console.log("response", response);
            resolve(response);
          }, 
          reject
        );
    });
  }
}
