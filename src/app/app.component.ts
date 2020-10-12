import { Component } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shopkart';
   deviceInfo = null;
  isMobilevar = false;
  isDesktopvar = false;
  constructor(private deviceService: DeviceDetectorService) {
    this.getDeviceInfo();
    this.isMobileDevice();
    this.isDesktopDevice();
    
   }

  ngOnInit() {
  }
  

  getDeviceInfo(){
    this.deviceInfo = this.deviceService.getDeviceInfo();
  }
  isMobileDevice(){
    this.isMobilevar = this.deviceService.isMobile();
  }
  isDesktopDevice(){
    this.isDesktopvar = this.deviceService.isDesktop();
  }
}
