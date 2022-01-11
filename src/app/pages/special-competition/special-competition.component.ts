import { Component, EventEmitter, Input, OnInit, Output, AfterViewInit, ViewChild, ElementRef  } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { DcService } from '../../services/dc.service';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import $ from 'jquery';

declare var $: any;
const apiUrl =environment.apiUrl;

interface Post {
  startDate: Date;
  endDate: Date;
  //startTime: Time;
  //endTime: Time;
}

@Component({
  selector: 'app-special-competition',
  templateUrl: './special-competition.component.html',
  styleUrls: ['./special-competition.component.scss']
})
export class SpecialCompetitionComponent implements OnInit {


	formContent: any;
  	formData: any;
  	activeStepIndex: number;

    image_type: string = '';
    showCropper = false;
      //image cropping
      imageChangedEvent: any = '';
      croppedImage: any = '';

  	//uploadedFiles: Array <any> = [];
  	//uploadedFiles: any[] = [];


  	public currentStep = 0;
    private sumbitted = false;
    private isStepValid = (index: number): boolean => {
        return this.getGroupAt(index).valid
    }
    private shouldValidate = (): boolean => {
        return this.sumbitted === true;
    }

    //

    uploadedFiles: Array<File>;
    isProcessed: boolean = false;
    isError: boolean;
    errorData: [];
    fileData: any[];

    errorCode : number;
    errorDesc : string;
    selectedType: any = '';
    narrationType: any = 'narration';
    notificationType: any = '';
    masterForm: Array<FormGroup>;
    formVar: FormGroup;
    preview: string;
    audienceLogo : string;
    appLogo : string;
    companyLogo: string;
    notificationLogo:string;
    narrationOptions: string = 'url';
    audSrc:string;
    dateString:string;
    timeString: string;
    percentDone: any = 0;
    showModal : boolean;
    showCropModal: boolean;
    showTargetAudience : boolean = false;
    slotData : any = [];
    countryData : any = [];
    nationalityData: any = [];
    broadcasterData : any = [];
    broadcasterCom : any = [];
    slot_9: boolean = true;
    slot_12: boolean = true;
    slot_3: boolean = true;
    slot_6: boolean = true;
    loading : boolean;
    showWaiting_time: string;
    showNarration_time : string;
    oneToSixtyArray: any = [];
    post: Post = {
	    startDate: new Date(Date.now()),
	    endDate: new Date(Date.now()),
	    //startTime: new Time(Time.now()),
  		//endTime: new Time(Time.now())
	  }
    min : Date;
    myDate = new Date(Date.now());
    myDate1 = new Date(Date.now());
    private afterViewInitExecuted = false;

    public invalidMoment =  new Date().toISOString();
    //public min = new Date(2021, 1, 3, 10, 30);
    //public min = new Date().toISOString();
    public max = new Date(2021, 3, 21, 20, 30);
check_validation: boolean = false;
  constructor(public fb: FormBuilder, private http: HttpClient, private dataService: DcService,private alertService: ToasterService, private router:Router) {

    const currentDate = new Date();
    this.min = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate());
    //this.minDate = {year:currentDate.getFullYear(), month:currentDate.getMonth()+1, day: currentDate.getDate()};

  // Reactive Form
    this.formVar = this.fb.group({
    	logo: [null],
      	competitionName: [''],
      	description: [''],
      	excelFile: [null],
      	zipFile: [null],
      	//startTime:[formatTime(this.post.startTime, 'HH:ss', 'en')],
        //endTime: [formatTime(this.post.endTime, 'HH;ss', 'en')],
        startTime:[''],
        endTime: ['00:00'],
        startDate: [formatDate(this.post.startDate, 'yyyy-MM-dd', 'en')],
      	endDate: [formatDate(this.post.endDate, 'yyyy-MM-dd', 'en')],
        promotion_type: [''],
        instragramUrl: [''],
        twitterUrl: [''],
        snapchatUrl: [''],
        facebookUrl:[''],
        app_logo : [''],
        app_name : [''],
        apple_store_url : [''],
        google_play_url : [''],
        affiliate_url : [''],
        narration_type : ['narration'],
        narration_url : [''],
        narration_text : [''],
        narration_time : ['00:00'],
        company_logo : [''],
        company_name : [''],
        company_link : [''],
        company_about : [''],
        live_stream_url: [''],
        gender : [''],
        state : [''],
        area_locality : [''],
        age_range : [''],
        nationality : [''],
        city : [''],
        country : [''],
        push_notification : ['yes'],
        audience_description : [''],
        title : [''],
        image_upload : [''],
        slot_time:[''],
        competition_type:['special'],
        imageInput: [],
        waiting_time: ['00:15'],
        broadcaster:[0],
        startDateTime:  [''],
        bypass_audience: ['yes'],
        minute_time: [''],
        second_time: [''],
        narration_minute_time: [''],
        narration_second_time: [''],
        notification_type: [''],
        notification_text:[''],
        notification_logo:[''],
        apple_schema: ['']
    }) }

  @ViewChild('figAudio', {static: false}) figAudio: ElementRef; // audio tag reference

  // ViewChild is used to access the input element.
  @ViewChild('variable', {static: false})
  // this InputVar is a reference to our input.
  InputVar: ElementRef;
  reset()
  {
    // We will clear the value of the input
    // field using the reference variable.
    this.InputVar.nativeElement.value = "";
  }

  ngOnInit(): void {
    //this.formContent = STEP_ITEMS;
    this.formData = {};
    console.log(`jQuery version: ${$.fn.jquery}`);
    this.getSlotDetail();
    this.getBroadcaster();
    this.getCountry();
    this.getSeconds();
    //document.getElementById('buttonNextHide').style.display = 'none';
  }
  /* Start*/

  get f() { return this.formVar.controls; }

  /*public formVar = new FormGroup({
        accountDetails: new FormGroup({
            competitionName: new FormControl('', Validators.required),
            logo: new FormControl(null, Validators.required),
            description: new FormControl('', [Validators.required]),
            zipFile: new FormControl(null, Validators.required),
            excelFile: new FormControl(null, Validators.required)
        }),
        dataDetails: new FormGroup({
            fullName: new FormControl('', [Validators.required]),
            country: new FormControl('', [Validators.required]),
            gender: new FormControl(null, [Validators.required]),
            about: new FormControl('')
        }),
        dateTime: new FormGroup({
            startTime: new FormControl(null, Validators.required),
            startDate: new FormControl('', Validators.required),
            endTime: new FormControl(null, Validators.required),
            endDate: new FormControl('', Validators.required)
        }),
        promotion: new FormGroup({
            paymentType: new FormControl(null, Validators.required),
            cardNumber: new FormControl('', Validators.required),
            cvc: new FormControl('', [
                Validators.required,
                Validators.maxLength(3),
                Validators.minLength(3)
            ]),
            expirationDate: new FormControl('', Validators.required),
            cardHolder: new FormControl('', Validators.required)
        })
    });*/

    public get currentGroup(): FormGroup {
        return this.getGroupAt(this.currentStep);
    }

    public next(): void {
    	/*if (this.currentStep == 0) {
    		this.upload();
    	}*/

        this.currentStep += 1;

    }

    public prev(): void {
        this.currentStep -= 1;
    }

    private getSeconds(){
      for(var value = 0; value < 60; value++) {
        var values ;
        if(value.toString().length < 2) {
          values = "0"+value
        }else{
          values = value
        }

        this.oneToSixtyArray.push(values);
      }
    }
    changeBypassAudience(event){
      console.log(event.target.value);
      var isSetAudience = event.target.value;
      if(isSetAudience == 'yes'){
        this.showTargetAudience = false;
      }else{
        this.showTargetAudience = true;
      }
    }
    getCountry(){
      this.dataService.getCountry().subscribe(broadcaster => {
        this.countryData = broadcaster.data;
        //console.log('broadcaster '+JSON.stringify(broadcaster));
      });
      this.dataService.getNationality().subscribe(national => {
        this.nationalityData = national.data;
        //console.log('nationalityData '+JSON.stringify(this.nationalityData));
      });

    }

    getBroadcaster(){
      this.dataService.getBroadcaster().subscribe(broadcaster => {
        this.broadcasterData = broadcaster.data;
        //console.log('broadcaster '+JSON.stringify(broadcaster));
      })
    }
    broadcasteronChange(event, formValue){
      let broadcaster_id = event.target.value;
      console.log(broadcaster_id);
      this.dataService.getBroadcasterData(broadcaster_id).subscribe(broadcaster => {
        this.broadcasterCom = broadcaster.data;
        console.log('broadcaster '+JSON.stringify(broadcaster));
        if(broadcaster.data!=null){
          for (let i = 0; i < broadcaster.data.length; i++) {

            var format = 'yyyy-MM-dd';
            var myDate = broadcaster.data[i].start_date; //'2019-06-29';
            var locale = 'en-US';
            var formattedDate = formatDate(myDate, format, locale);
            console.log('formattedDate', formattedDate);

            var dbDate = new Date(formattedDate + ' ' + broadcaster.data[i].slot_time);
            var dateObj = new Date(formValue.startDate + ' ' + formValue.slot_time);
            console.log('dbDate', dbDate.getTime());
            console.log('dateObj', dateObj.getTime());
            if(dbDate.getTime() == dateObj.getTime()){
              Swal.fire('','You have already assigned this broadcater.','error');
              this.formVar.controls['broadcaster'].reset();
              return;
            }
          }
        }
      })

      /* var dateObj = new Date(formValue.startDate + ' ' + formValue.startTime);
      console.log('dateObj', dateObj);
      console.log('this.myDate', this.myDate);
      if(dateObj >= this.myDate){

      } */
    }

    public onSubmit(): void {
        this.sumbitted = true;
        this.loading = true;
        console.log('submit');
        if (!this.formVar.valid) {
          //this.formVar.markAllAsTouched();
          //this.stepper.validateSteps();
        }
        console.log('Submitted data', this.formVar.value);

        if (typeof this.fileData == 'undefined' && this.fileData != 0) {
          Swal.fire('','You have to upload question first.','error');
          return;
        }
        this.dataService.addCompetition(this.formVar.value, this.fileData)
          .subscribe((event: HttpEvent<any>) => { console.log('event.type '+event.type);
		        switch (event.type) {
		            case HttpEventType.Sent:
		                console.log('Request has been made!');
		                break;
		            case HttpEventType.ResponseHeader:
		                console.log('Response header has been received!');
		                break;
		            case HttpEventType.UploadProgress:
		                this.percentDone = Math.round(event.loaded / event.total * 100);
		                console.log(`Uploaded! ${this.percentDone}%`);
		                break;
		            case HttpEventType.Response:
		            	 console.log('event.body.message '+ event.body.message);
			            //console.log('User successfully created!', event.body);
			            if (event.body.message == 'Record inserted') {
			            	this.alertService.pop('success', 'Special Competiton added successfully!');
			            	this.router.navigate(['/special']);
			            }else{
			            	this.alertService.pop('error', event.body.message);
			           }
                 this.percentDone = false;
                 this.loading = false;
		      	}
		      },
          err=>{
            this.loading = false;
          })
    }

  private getGroupAt(index: number): FormGroup {
      const groups = Object.keys(this.formVar.controls).map(groupName =>
          this.formVar.get(groupName)
          ) as FormGroup[];

      return groups[index];
  }

  /* Start again*/
  /*setFormPreview(): void {
    this.formData = this.formVar.reduce(
      (formVar, currentForm) => ({ ...formVar, ...currentForm.value }),
      {}
    );

    this.masterFormFields = Object.keys(this.formData);
	}*/
	private getSlotDetail() {
        this.dataService.getSlotSpecial().subscribe(sloted => {
        //this.slotData = sloted[0];
        //console.log('slotData '+JSON.stringify(sloted));
        const resObj = JSON.parse(JSON.stringify(sloted));
        //console.log(resObj)
        //const resObj =  [{"id":38,"slot_time":"12"}]
        const result = resObj.find( ({ slot_time }) => slot_time === '12' );

        //console.log(result.slot_time)
        for (var i = 0; i < resObj.length; i++) {
		    console.log(resObj[i]['slot_time']);
		    if(resObj[i]['slot_time'] == '09:00'){
		    	this.slot_9  = true;
		    }
		    if(resObj[i]['slot_time'] == '12:00'){
		    	this.slot_12 = false;
		    }
		    if(resObj[i]['slot_time'] == '15:00'){
		    	this.slot_3  = false;
		    }
		    if(resObj[i]['slot_time'] == '18:00'){
		    	this.slot_6  = false;
		    }
		}

        /*this.form.patchValue({
            title: categories[0].title,
            description: categories[0].description,
            status: categories[0].status,
            //is_active: categories.is_active,
            id: categories[0].id
          });
          this.preview = this.s3_url+categories[0].icon;*/
        });
  }
  checkSlot(value){
    console.log(value.slot_time);
    if(value.slot_time == ''){
      //Swal('', 'Please select slot time first.', 'error');
      $.isValid = false;
      return;
    }
  }

	// Image Preview
	dataURItoBlob(dataURI) {
    var binary = atob(dataURI.split(',')[1]);
    var array = [];
    for (var i = 0; i < binary.length; i++) {
       array.push(binary.charCodeAt(i));
    }
    return new Blob([new Uint8Array(array)], {
        type: 'image/jpg'
    });
  }

  imageCropped(event: ImageCroppedEvent, image_type) {
    // this.croppedImage = event.base64;
     console.log('image_type', image_type);
    // console.log(event);
    if(image_type == 'logo'){
      const base64 = event.base64;
      const imageName = 'logo.png';
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

      this.formVar.patchValue({
        logo: imageFile
      });
      this.formVar.get('logo').updateValueAndValidity()
      // File Preview
      this.preview = event.base64;
    }else if(image_type == 'image_upload'){
      const base64 = event.base64;
      const imageName = 'image_upload.png';
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

      this.formVar.patchValue({
        image_upload: imageFile
      });
      this.formVar.get('image_upload').updateValueAndValidity()
      // File Preview
      this.audienceLogo = event.base64;
    }else if(image_type == 'app_logo'){
      const base64 = event.base64;
      const imageName = 'app_logo.png';
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

      this.formVar.patchValue({
        app_logo: imageFile
      });
      this.formVar.get('app_logo').updateValueAndValidity()
      // File Preview
      this.appLogo = event.base64;
    }else if(image_type == 'company_logo'){
      const base64 = event.base64;
      const imageName = 'company_logo.png';
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

      this.formVar.patchValue({
        company_logo: imageFile
      });
      this.formVar.get('company_logo').updateValueAndValidity()
      // File Preview
      this.companyLogo = event.base64;
    }else if(image_type == 'notification_logo'){
      const base64 = event.base64;
      const imageName = 'notification_logo.png';
      const imageBlob = this.dataURItoBlob(base64);
      const imageFile = new File([imageBlob], imageName, { type: 'image/png' });

      this.formVar.patchValue({
        notification_logo: imageFile
      });
      this.formVar.get('notification_logo').updateValueAndValidity()
      // File Preview
      this.notificationLogo = event.base64;
    }


  }
  imageLoaded() {
    /* show cropper */
    //this.showCropper = true;
    console.log('Image loaded');
  }
  cropperReady() {
      /* cropper ready */
      console.log('cropper Ready');
  }
  loadImageFailed() {
      /* show message */
      Swal.fire('','Please upload image only','error');
  }

  closePopup(){
    this.showCropModal = false;
  }

	// Image Preview
	uploadCompetitionLogo(event) {
    this.imageChangedEvent = '';
      let fileIn = event.target.files[0]; // <--- File Object for future use.
      this.formVar.controls['imageInput'].setValue(fileIn ? fileIn.name : ''); // <-- Set Value for Validation
      this.imageChangedEvent = event;
      this.showCropModal = true;
      this.image_type = 'logo';
	     const file = (event.target as HTMLInputElement).files[0];
       console.log('file', file);
       console.log('this.imageChangedEvent', this.imageChangedEvent)
	}


	uploadAudienceLogo(event) {
	    const file = (event.target as HTMLInputElement).files[0];
      this.imageChangedEvent = event;
      this.showCropModal = true;
      this.image_type = 'image_upload';
	    // this.formVar.patchValue({
	    //   image_upload: file
	    // });
	    // this.formVar.get('image_upload').updateValueAndValidity()

	    // // File Preview
	    // const reader = new FileReader();
	    // reader.onload = () => {
	    //   this.audienceLogo = reader.result as string;
	    // }
	    // reader.readAsDataURL(file)
	}

	uploadAppLogo(event) {
    this.imageChangedEvent = '';
	    const file = (event.target as HTMLInputElement).files[0];
      this.imageChangedEvent = event;
      this.showCropModal = true;
      this.image_type = 'app_logo';
      console.log('app_logofile', file);
      console.log('this.imageChangedEvent', this.imageChangedEvent);
	}
	uploadCompanyLogo(event) {
	    const file = (event.target as HTMLInputElement).files[0];
      this.imageChangedEvent = event;
      this.showCropModal = true;
      this.image_type = 'company_logo';
  }
  uploadNotificationLogo(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.imageChangedEvent = event;
    this.showCropModal = true;
    this.image_type = 'notification_logo';
}
  notificationonChange(event) {
    this.notificationType = event.target.value;
  }

  audFileSelected(event: any) { console.log('this.audSrc');
    if (event.target.files && event.target.files[0] && this.afterViewInitExecuted) {
      const file = (event.target as HTMLInputElement).files[0];
      this.formVar.patchValue({
        narration_url: file
      });
      this.formVar.get('narration_url').updateValueAndValidity()

      this.audSrc = URL.createObjectURL(event.target.files[0]);
      console.log(this.audSrc);
      this.figAudio.nativeElement.src = this.audSrc;
    }
  }

	setFormPreview(formValue){
    this.formData = formValue;
    var dateStringISO = new Date(this.formData.startDateTime).toLocaleString('en-IN', {timeZone: "Asia/Kolkata"})
    this.dateString = dateStringISO.split(',')[0];
    this.timeString = dateStringISO.split(',')[1];
    console.log(this.dateString);
    console.log(this.timeString);

    //this.showWaiting_time = '00:'+formValue.minute_time+':'+formValue.second_time;
    //this.showNarration_time = '00:'+formValue.narration_minute_time+':'+formValue.narration_second_time;
    this.showWaiting_time = '00:'+formValue.minute_time+':'+'00';
    this.showNarration_time = '00:00:'+formValue.narration_second_time;
	}
  onChange(event) {
    this.selectedType = event.target.value;
    if (String(this.selectedType) == "social_media") {
      this.check_validation = true;
    } else {
      this.check_validation = false;
    }
  }

  checkValid() {
    if (this.formVar.value.instragramUrl != '' || this.formVar.value.twitterUrl != '' || this.formVar.value.snapchatUrl != '' || this.formVar.value.facebookUrl != '') {
      return false;
    } else {
      return true;
    }
  }
	narrationonChange(event) {
	    this.narrationType = event.target.value;
  }
  narrationOption(event) {
    this.narrationOptions = event.target.value;
  }

  fileChange(element) {

    if (typeof (this.uploadedFiles) == "undefined") {
      this.uploadedFiles = new Array<File>();
      this.uploadedFiles.push(element.target.files[0]);
    }
    else {
      this.uploadedFiles.push(element.target.files[0]);
    }
    //console.log(this.uploadedFiles);
  }

	upload() {

        //debugger;
        /*if(typeof(this.selectedCategory)=="undefined" || this.selectedCategory==""){
          alert("Category is required!");
          return;
        }
        if(typeof(this.selectedSubCategory)=="undefined" || this.selectedSubCategory==""){
          alert("Sub Category is required!");
          return;
        }
        if(typeof(this.selectedLanguage)=="undefined" || this.selectedLanguage==""){
          alert("Language is required!");
          return;
        }*/
        //console.log('fileChange');
        //console.log(this.uploadedFiles);
        //console.log('End fileChange');
        if (typeof this.uploadedFiles == 'undefined' && this.uploadedFiles != 0) {
          Swal.fire('','You have to select xlsx and zip file.','error');
          return;
        }
        this.showLoader();
        this.loading = true;
        //document.getElementById('buttonNextHide').style.display = 'none';
        let formData = new FormData();
        for (var i = 0; i < this.uploadedFiles.length; i++) {
          formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
        }
        //const url = 'http://localhost:3000/api/upload';
        this.http.post(apiUrl+'competition/api/upload', formData)
          .subscribe((response) => {
            this.isProcessed=true;
            if (response["error_code"] == 2) {
              this.isError = true;
              this.errorData = response["data"];
              this.uploadedFiles = new Array<File>();
              //this.formVar.reset();
              this.formVar.controls['excelFile'].reset();
              this.formVar.controls['zipFile'].reset();
            }
            else if (response["error_code"] == 0) {
              //this.errorData = response["data"];
              this.fileData = response["data"];
              //console.log(this.fileData);

              this.isError=false;
              this.isProcessed=true;
              //document.getElementById('buttonNextHide').style.display = 'block';
            }else if (response["error_code"] == 1) {
              this.isError = false;
              this.isProcessed=false;
              this.errorData = response["data"];
              this.errorCode = response["error_code"];
              this.errorDesc = response["err_desc"];
              //this.formVar.reset();
              this.formVar.controls['excelFile'].reset();
              this.formVar.controls['zipFile'].reset();
            }
            this.hideLoader();
            this.loading = false;
            console.log('response receved is ', response);
        },
        err=>{
          this.loading = false;
        });
  }
  // Function is defined
  hideLoader() {

      // Setting display of spinner
      // element to none
      document.getElementById('loading-s')
          .style.display = 'none';
  }
  showLoader() {

      // Setting display of spinner
      // element to none
      document.getElementById('loading-s')
          .style.display = 'block';
  }

  onClick(event)
	{
	    this.showModal = true; // Show-Hide Modal Check
	    // this.UserId = event.target.id;
	    // this.Firstname = document.getElementById("firstname"+this.UserId).innerHTML;
	    // this.Lastname = document.getElementById("lastname"+this.UserId).innerHTML;
	    // this.Email = document.getElementById("email"+this.UserId).innerHTML;
	}
	//Bootstrap Modal Close event
	hide()
	{
	    this.showModal = false;
	}

  ngAfterViewInit(){
    this.afterViewInitExecuted = true; // for mp3 upload excution
    var self = this;
    $(document).ready(function () {
      var today = new Date().toISOString().split('T')[0];
      var todayTime = new Date().toISOString().split('T')[1];
      var tt = todayTime.split('.')[0];
      // console.log(today);
      // console.log(todayTime);
      // console.log(tt);
      //document.getElementsByName("start_time")[0].setAttribute('min', today);
      //document.getElementById("start_date").setAttribute("min", today);
      //document.getElementById("end_date").setAttribute("min", today);
      //document.getElementById("start_time").setAttribute("min", tt);

      /* $('#dateOfArrival').datetimepicker({
        format : 'L',
        minDate : new Date(),
        keepInvalid : true
      }).on('dp.change', function(e){
        // Set timepicker value to let the timepicker work
        $("#timeOfArrival").data("DateTimePicker").date(e.date);
        $("#timeOfArrival").data("DateTimePicker").minDate(e.date);
      });

      $('#timeOfArrival').datetimepicker({
        format : 'LT',
        minDate : moment(),
        useCurrent: false
      }); */

      /* $(".uploadButton").click(function() {
        console.log(self.fileData);
        if (typeof self.fileData == 'undefined' && self.fileData != 0) {
          Swal.fire('','You have to upload question data first.','error');

          var isValid =false;
          $('.uploadButton').closest(".form-group").addClass("has-error");
          return false;
        }
      }); */
      /* $(".check-slot").click(function() {
        //console.log($('input[name=slot_time]:checked').length);
        if ($('input[name=slot_time]:checked').length == 0) {
          //var slot = $('input[name=slot_time]')
          //$('input[name=slot_time]').validity.valid
          var isValid =false;
          //$($('input[name=slot_time]')).closest(".form-group").addClass("has-error");
        }
      }); */

      /* $(".check-slot").click(function() {
        var form = $("#myform");
        form.validate({
          rules: {
            slot_time: {
              required: true
            }
          },
          messages: {
            slot_time: {
              required: "This is required.",
              //minlength: "Too short."
            }
          }
        });
         if (form.valid() === true) {
          $(".slide.one").removeClass("active");
          $(".slide.two").addClass("active");
        }
      }); */

		    var navListItems = $('div.setup-panel div a'),
		        allWells = $('.setup-content'),
		        allNextBtn = $('.nextBtn'),
		        allPrevBtn = $('.prevBtn');

		    allWells.hide();

		    navListItems.click(function (e) {
		        e.preventDefault();
		        var $target = $($(this).attr('href')),
		            $item = $(this);

		        if (!$item.hasClass('disabled')) {
		            navListItems.removeClass('btn-success').addClass('active');
		            $item.addClass('btn-success');
		            allWells.hide();
		            $target.show();
		            $target.find('input:eq(0)').focus();
		        }
		    });

		    allPrevBtn.click(function () {
		        var curStep = $(this).closest(".setup-content"),
		            curStepBtn = curStep.attr("id"),
		            prevStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().prev().children("a"),
		            curInputs = curStep.find("input[type='text'],input[type='url']"),
		            isValid = true;
		            //alert(curStepBtn);
		        $(".form-group").removeClass("has-error");
		        for (var i = 0; i < curInputs.length; i++) {
		            if (!curInputs[i].validity.valid) {
		                //isValid = false;
		                //$(curInputs[i]).closest(".form-group").addClass("has-error");
		            }
		        }

		        if (isValid) prevStepWizard.removeAttr('disabled').trigger('click');
		    });

		    allNextBtn.click(function () {
		        var curStep = $(this).closest(".setup-content"),
		            curStepBtn = curStep.attr("id"),
		            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
		            curInputs = curStep.find("input[type='text'],input[type='tel'],input[type='radio'],input[type='url'],input[type='file'],input[type='date'],input[type='time'],textarea, select"),
                isValid = true;

            console.log(self.fileData);
            if (typeof self.fileData == 'undefined' && self.fileData != 0) {
              Swal.fire('','You have to upload question data first.','error');

              isValid =false;
              $('.uploadButton').closest(".form-group").addClass("has-error");
              return false;
            }

		        $(".form-group").removeClass("has-error");
		        for (var i = 0; i < curInputs.length; i++) {
		            if (!curInputs[i].validity.valid) {
		                isValid = false;
		                $(curInputs[i]).closest(".form-group").addClass("has-error");
		            }
		        }

		        if (isValid) nextStepWizard.removeAttr('disabled').trigger('click');
		    });

		    $('div.setup-panel div a.btn-success').trigger('click');
		});
  }
}
