import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { KoreanText } from '../interface/koreanText';

@Component({
  selector: 'app-conversion',
  templateUrl: './conversion.component.html',
  styleUrls: ['./conversion.component.scss']
})
export class ConversionComponent implements OnInit {

  koreanText: KoreanText = {
    value: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

  convertHansi(): void {
    console.log(this.koreanText.value);
  }

}
