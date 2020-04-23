import {
  Component, OnInit, AfterViewInit, Input, ChangeDetectorRef,
  ComponentFactoryResolver, ViewChild, ViewContainerRef
} from '@angular/core';
import { IUser } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

// Components
import { AccountComponent } from './account/account.component';
import { AppearanceComponent } from './appearance/appearance.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { SubscriptionComponent } from './subscription/subscription.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, AfterViewInit {

  // Store user to show it in all of the components for this design
  @Input() user: IUser;
  // Routes will be added dynamically
  @ViewChild('router', { read: ViewContainerRef }) content: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // Routing
    if (this.router.url.endsWith('settings/account')) {
      const factory = this.resolver.resolveComponentFactory(AccountComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('settings/appearance')) {
      const factory = this.resolver.resolveComponentFactory(AppearanceComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('settings/statistics')) {
      const factory = this.resolver.resolveComponentFactory(StatisticsComponent);
      const componentRef = this.content.createComponent(factory);
    }
    else if (this.router.url.endsWith('settings/subscription')) {
      const factory = this.resolver.resolveComponentFactory(SubscriptionComponent);
      const componentRef = this.content.createComponent(factory);
    }
    // Left at the end to not detect changed but until the end
    this.cdRef.detectChanges();
  }

}
