import { LightningElement } from 'lwc';
import USER_IMAGE from '@salesforce/resourceUrl/user_image'
import SAMPLE_IMAGE from '@salesforce/resourceUrl/image'
export default class SampleImages extends LightningElement {
    userImage = USER_IMAGE
    sampleImage = SAMPLE_IMAGE
}