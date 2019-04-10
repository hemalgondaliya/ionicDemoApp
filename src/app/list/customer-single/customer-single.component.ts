import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Customer} from '../../modal/customer';
import _ from 'lodash';


@Component({
    selector: 'customer-single',
    templateUrl: 'customer-single.component.html',
    styleUrls: ['customer-single.component.scss']
})
export class CustomerSingleComponent implements OnInit {

    @Input() customer: Customer;

    propertyMap: any;

    custPropertyArray: Array<any>;

    constructor(public modalController: ModalController) {
        this.custPropertyArray = new Array<any>();
        this.propertyMap = {
            'firstName': 'First Name',
            'lastName': 'Last Name',
            'referenceName': 'Reference Name',
            'billNumber': 'Bill No',
            'date': 'Date',
            'item': 'Item',
            'phoneNumber': 'Mobile',
            'address': 'Address',
            'email': 'email',
            'deliveryPerson': 'Delivery'
        };
    }

    async dismissModal() {
        await this.modalController.dismiss();
    }

    prepareIterationOverObject() {
        const keys = Object.keys(this.customer);
        _.forEach(keys, (key: string) => {
            this.custPropertyArray.push({key: this.propertyMap[key], value: this.customer[key]});
        });
    }

    ngOnInit(): void {
        this.prepareIterationOverObject();
    }
}
