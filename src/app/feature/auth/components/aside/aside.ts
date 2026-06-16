import { ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aside',
  imports: [],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {
  @ViewChild('svgRef') svgRef!: ElementRef<SVGSVGElement>;

  glowPos = { x: 300, y: 300 };

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(e: MouseEvent): void {
    if (!this.svgRef?.nativeElement) return;
    const rect = this.svgRef.nativeElement.getBoundingClientRect();
    this.glowPos = {
      x: ((e.clientX - rect.left) / rect.width) * 600,
      y: ((e.clientY - rect.top) / rect.height) * 600,
    };
    this.cdr.markForCheck();
  }
}
