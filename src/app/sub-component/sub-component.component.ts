import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-sub-component",
  templateUrl: "./sub-component.component.html",
  styleUrls: ["./sub-component.component.css"]
})
export class SubComponentComponent implements OnInit {
  @Input() description: string | undefined;

  @Input() firstTest: string | undefined;
  @Input() secondTest: string | undefined;
  @Input() thirdTest: string | undefined;
  @Input() forthTest: string | undefined;

  constructor() {}

  ngOnInit() {}
}
