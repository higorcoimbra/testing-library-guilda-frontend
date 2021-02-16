import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { RouterTestingModule } from  '@angular/router/testing';

describe('AppComponent', () => {
  it('should create the app', async () => {
    await render(AppComponent, {
      imports: [
        RouterTestingModule
      ]
    });
  });
});
