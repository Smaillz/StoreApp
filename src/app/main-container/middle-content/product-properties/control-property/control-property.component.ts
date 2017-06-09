import {Component, Input, NgZone, OnChanges, OnInit, SimpleChanges} from "@angular/core";
import {rotateArrow, showFormField} from "../../../animation/prop-form.animation";
import {IProperty} from "../../../../model/IProperty";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpService} from "../../../../service/http.service";
import {ExchangeDataService} from "../../../../service/exchangeData.service";

@Component({
  selector: "control-prop",
  templateUrl: "control-property.component.html",
  styleUrls: ["control-property.component.less"],
  animations: [showFormField(), rotateArrow()],
  host: {'[@isVisabilityForm]': 'show'}
})
export class ControlPropertyComponent implements OnChanges, OnInit {

  @Input()
  private property = <IProperty>{};

  private isVisability: boolean = false;
  show: string = "shown";
  // private property = <IProperty>{};
  // private properties: IProperty[];
  private propertyForm: FormGroup;

  constructor(private fb: FormBuilder,
              private httpService: HttpService,
              private exchange: ExchangeDataService,
              private ngZone: NgZone) {
    this.propertyForm = this.fb.group({
      name: [this.property.name, [Validators.required, Validators.minLength(3)]],
      type: [this.property.type, Validators.required],
      priority: [this.property.priority, Validators.required],
      id: [this.property.id]
    });

    this.propertyForm.valueChanges.subscribe(data => {
      this.property = <IProperty>data;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.property) {
      this.propertyForm.patchValue(this.property);
    }
  }

  ngOnInit(): void {
  }

  addProperty() {
    this.exchange.spinner = true;
    this.httpService.updateProperty(this.property)
      .subscribe(() => {
        this.ngZone.run(() => {
          this.exchange.spinner = false;
          this.cleanForm();
        })
      });
  }

  showForm() {
    this.isVisability = !this.isVisability;
    this.show = this.isVisability ? "shown" : "hidden";
  }

  cleanForm() {
    this.propertyForm.reset();
  }
}
