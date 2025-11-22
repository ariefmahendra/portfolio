import { Directive, ElementRef, Renderer2, OnInit } from '@angular/core';

@Directive({
    selector: '[appScrollAnimation]',
    standalone: true
})
export class ScrollAnimationDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.renderer.addClass(this.el.nativeElement, 'visible');
                    observer.unobserve(this.el.nativeElement); // Only animate once
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        observer.observe(this.el.nativeElement);
    }
}
