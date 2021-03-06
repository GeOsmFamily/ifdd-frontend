import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { Place } from 'src/app/places/place';
import { PlaceService } from 'src/app/places/place.service';
import { MapLocation } from '../map-location';

@Component({
  selector: 'app-new-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {
  private _mobileQueryListener: () => void;
  private searchText$ = new Subject<string>();
  @Input() isFull: boolean = true;
  @Input() isRounded: boolean = true;
  @Output() selected: EventEmitter<MapLocation|null> = new EventEmitter<MapLocation|null>()
  mobileQuery: MediaQueryList;
  places: MapLocation[] = [];
  showPlaces: boolean = false;
  loading: boolean = false;
  iconTypesMapping: any = {
    "siège d'organization": "star",
    "ville": "pin",
    "region": "pin",
    "zone d'intervention": "round"
  };
  place:string = '';

  constructor(
    private placeService: PlaceService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.searchText$
      .pipe(
        debounceTime(500),
        distinctUntilChanged(),
        switchMap((name: any) => {
          return this.placeService.searchPlaces(name);
        }),
      ).subscribe((places: MapLocation[]) => {
        this.places = places;
      })
  }

  search(name: string): void {
    this.showPlaces = name.length >= 3;
    this.searchText$.next(name);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  getIconType(type: string): string {
    return this.iconTypesMapping[type];
  }

  onSelect(place: MapLocation): void {
    this.place = `${place.name}`;
    this.showPlaces = false;
    this.selected.emit(place);
  }

  onClear(): void {
    this.place = '';
    this.showPlaces = false;
    this.selected.emit(null);
  }

  getOverlayOffset(): number {
    if (this.mobileQuery.matches) {
      return 0;
    }

    return 10;
  }

  getOverlayWidth(): number|string {
    if (this.mobileQuery.matches) {
      return '100%';
    }

    return 360;
  }

  getConnectedOverlayPanelClasses(): string[] {
    if (this.mobileQuery.matches) {
      return ['fixed', '!bottom-0', '!left-0', '!right-0'];
    }

    return [];
  }
}
