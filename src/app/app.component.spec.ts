import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates the portfolio starter', () => {
    expect(component).toBeTruthy();
  });

  it('renders the site navigation and routed page outlet', () => {
    const page = fixture.nativeElement as HTMLElement;

    expect(page.querySelector('a[routerLink="/projects"]')?.textContent).toContain('Projects');
    expect(page.querySelector('router-outlet')).toBeTruthy();
  });
});
