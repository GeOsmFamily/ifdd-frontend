import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { OrgService } from 'src/app/orgs/org.service';
import { OrgsSdg as OrgSdg } from 'src/app/orgs/orgs-sdg';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnDestroy, OnInit {
  private _mobileQueryListener: () => void;
  private _open = false;
  mobileQuery: MediaQueryList;
  orgsBySdg: OrgSdg[] = [];
  selectedOrgSdg: OrgSdg | null = null;
  loading = false;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private orgService: OrgService) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.getOrgsBySdg();
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onSelectSdg(orgSdg: OrgSdg): void {
    this.selectedOrgSdg = orgSdg;
  }

  selectedOrgsCount(): number {
    if (this.selectedOrgSdg) {
      return this.selectedOrgSdg.orgsCount;
    }

    let count = 0;
    this.orgsBySdg.forEach(orgSdg => count += orgSdg.orgsCount);

    return count;
  }

  reinitialize(): void {
    this.selectedOrgSdg = null;
  }

  isOpen(): boolean {
    if (this.mobileQuery.matches) {
      return this._open;
    }

    return true;
  }

  toggle() {
    this._open = !this._open;
  }

  private getOrgsBySdg(): void {
    this.loading = true;
    this.orgService.getOrgsBySdg()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(data => {
        this.orgsBySdg = data;
        this.selectedOrgSdg = this.orgsBySdg[0];
      });
  }
}