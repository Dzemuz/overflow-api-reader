import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="main-container container-fluid">
    <app-header></app-header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <footer class="footer pb-3">
      <p class="py-4 text-center">2020 © Adam Jujka</p>
    </footer>
  </div>
 `
})
export class AppComponent {
  
}
