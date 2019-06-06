import { Directive, OnInit, ElementRef, Inject, Input } from '@angular/core';
import { JQ_TOKEN } from '../service/jQuery.service';

@Directive({
  selector: '[simpleModalTrigger]'
})
export class ModalTriggerDirective implements OnInit{

  private el: HTMLElement;
  @Input('simpleModalTrigger') modalId: string;

  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener('click', e => {
      console.log(this.modalId);
      this.$('#'+this.modalId).modal({});
    });
  }

}
