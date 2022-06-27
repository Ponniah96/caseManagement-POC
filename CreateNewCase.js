var caseValue;
var CaseTypeValue= new Array();
var attributes=new Array();
        
document.addEventListener("DOMContentLoaded", function() { 
    CaseTypeValue=JSON.parse(localStorage['caseTypeValue']);
    attributes=JSON.parse(localStorage['attributes']);
    var select=document.getElementById('selectcasetype');
    for(var i=0;i<CaseTypeValue.length;i++){
        select.options[select.options.length] = new Option(CaseTypeValue[i], CaseTypeValue[i]);
    }
    
});

function changeCaseType(event){
    document.getElementById("getAttributes").classList.remove('disable'); 
    caseValue=event;
}

function displayAttributes(){
    var count=0;
    var caseFieldValue=document.getElementById("caseFieldValue");
    if(caseFieldValue.classList.contains('list-added')){
        document.getElementById('individual-section').remove();
        caseFieldValue.classList.remove('list-added');
    }
    var individualSection=document.createElement('div');
    individualSection.id='individual-section';
    for(var j=0;j<attributes.length;j++){
        if(attributes[j].newCaseValue==caseValue){
            count=count+1;
            var parent=document.createElement('div');
            parent.className='row m-1em';        
            if(attributes[j].newCaseTypeMandatory==true){
                if(attributes[j].newCaseTypeName.length>0){
                    var label=document.createElement('label');
                    label.className='col-3 f-12 gray required padding-top';
                    label.htmlFor=attributes[j].newCaseTypeName;
                    label.innerText=attributes[j].newCaseTypeName;
                    label.id="caseFieldLabel"+j;
                    parent.appendChild(label);
                }
                if(attributes[j].newCaseTypeElement.length>0){
                    if(attributes[j].newCaseTypeElement=="dropdown"){
                        var select=document.createElement('select');
                        select.className='col-3 f-12 padding-input';
                        select.required=true;
                        select.id=attributes[j].newCaseTypeName;  
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        optionsValue.splice(0,0,"Please Select");
                        for(var i=0;i<optionsValue.length;i++){
                            select.options[select.options.length] = new Option(optionsValue[i], optionsValue[i]);
                        }          
                        parent.appendChild(select);
                    }
                    else if(attributes[j].newCaseTypeElement=="radio"){
                        var radioParent=document.createElement('div');
                        radioParent.className='col-3 f-12 gray padding-top';
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            var radioSubParent=document.createElement('div');                        
                            var radioInput=document.createElement('input');
                            radioInput.type="radio";
                            radioInput.name=attributes[j].newCaseTypeName;
                            radioInput.required=true;
                            radioInput.id=optionsValue[i];
                            radioInput.value=optionsValue[i];
                            radioSubParent.appendChild(radioInput);
                            var radioLabel=document.createElement('label');
                            radioLabel.htmlFor=optionsValue[i];
                            radioLabel.innerText=optionsValue[i];
                            radioSubParent.appendChild(radioLabel);
                            radioParent.appendChild(radioSubParent);
                        }                          
                        parent.appendChild(radioParent);
                    }
                    else if(attributes[j].newCaseTypeElement=="checkbox"){
                        var checkboxParent=document.createElement('div');
                        checkboxParent.className='col-3 f-12 gray padding-top';
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            var checkboxSubParent=document.createElement('div');                        
                            var checkboxInput=document.createElement('input');
                            checkboxInput.type="checkbox";
                            checkboxInput.name=attributes[j].newCaseTypeName;
                            checkboxInput.required=true;
                            checkboxInput.id=optionsValue[i];
                            checkboxInput.value=optionsValue[i];
                            checkboxSubParent.appendChild(checkboxInput);
                            var checkboxLabel=document.createElement('label');
                            checkboxLabel.htmlFor=optionsValue[i];
                            checkboxLabel.innerText=optionsValue[i];
                            checkboxSubParent.appendChild(checkboxLabel);
                            checkboxParent.appendChild(checkboxSubParent);
                        }                          
                        parent.appendChild(checkboxParent);
                    }
                    else{
                        var input=document.createElement('input');
                        input.className='col-3 f-12 gray gray-border padding-input';
                        input.type=attributes[j].newCaseTypeElement;
                        input.required=true;
                        input.id=attributes[j].newCaseTypeName;            
                        parent.appendChild(input);
                    }
                    
                }
            }
            else{
                if(attributes[j].newCaseTypeName.length>0){
                    var label=document.createElement('label');
                    label.className='col-3 f-12 gray padding-top';
                    label.for=attributes[j].newCaseTypeName;
                    label.innerText=attributes[j].newCaseTypeName;
                    label.id="caseFieldLabel"+j;
                    parent.appendChild(label);
                }
                if(attributes[j].newCaseTypeElement.length>0){
                    if(attributes[j].newCaseTypeElement=="dropdown"){
                        var select=document.createElement('select');
                        select.className='col-3 f-12 padding-input';
                        select.required=true;
                        select.id=attributes[j].newCaseTypeName;  
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            select.options[select.options.length] = new Option(optionsValue[i], optionsValue[i]);
                        }          
                        parent.appendChild(select);
                    }
                    else if(attributes[j].newCaseTypeElement=="radio"){
                        var radioParent=document.createElement('div');
                        radioParent.className='col-3 f-12 gray padding-top';
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            var radioSubParent=document.createElement('div');                        
                            var radioInput=document.createElement('input');
                            radioInput.type="radio";
                            radioInput.name=attributes[j].newCaseTypeName;
                            radioInput.required=true;
                            radioInput.id=optionsValue[i];
                            radioInput.value=optionsValue[i];
                            radioSubParent.appendChild(radioInput);
                            var radioLabel=document.createElement('label');
                            radioLabel.htmlFor=optionsValue[i];
                            radioLabel.innerText=optionsValue[i];
                            radioSubParent.appendChild(radioLabel);
                            radioParent.appendChild(radioSubParent);
                        }                          
                        parent.appendChild(radioParent);
                    }
                    else if(attributes[j].newCaseTypeElement=="checkbox"){
                        var checkboxParent=document.createElement('div');
                        checkboxParent.className='col-3 f-12 gray padding-top';
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            var checkboxSubParent=document.createElement('div');                        
                            var checkboxInput=document.createElement('input');
                            checkboxInput.type="checkbox";
                            checkboxInput.name=attributes[j].newCaseTypeName;
                            checkboxInput.required=true;
                            checkboxInput.id=optionsValue[i];
                            checkboxInput.value=optionsValue[i];
                            checkboxSubParent.appendChild(checkboxInput);
                            var checkboxLabel=document.createElement('label');
                            checkboxLabel.htmlFor=optionsValue[i];
                            checkboxLabel.innerText=optionsValue[i];
                            checkboxSubParent.appendChild(checkboxLabel);
                            checkboxParent.appendChild(checkboxSubParent);
                        }                          
                        parent.appendChild(checkboxParent);
                    }
                    else{
                        var input=document.createElement('input');
                        input.className='col-3 f-12 gray gray-border padding-input';
                        input.type=attributes[j].newCaseTypeElement;
                        input.id=attributes[j].newCaseTypeName;            
                        parent.appendChild(input);
                    }                    
                }
            }
            individualSection.appendChild(parent);
        }        
    }
    if(count>0){
        var submitParent=document.createElement('div');
        submitParent.className="row m-1em";
        var submit=document.createElement('input');
        submit.type="submit";
        submit.value="Submit"
        submit.className="btn-primary ";       
        submitParent.appendChild(submit);
        individualSection.appendChild(submitParent);  
        caseFieldValue.appendChild(individualSection);
        caseFieldValue.classList.add('list-added');
        document.getElementById('caseFieldValueSection').classList.remove('display-none');  
    }
    else{
        alert('No Fields avaiable in this case');
    }
}

function formSubmission(e){
   for(var j=0;j<attributes.length;j++){
    if(attributes[j].newCaseValue==caseValue){
        if(attributes[j].newCaseTypeName.length>0){
            if(attributes[j].newCaseTypeElement=="radio" ||attributes[j].newCaseTypeElement=="checkbox"){
               var length=document.getElementsByName(attributes[j].newCaseTypeName).length;
               for(var i=0;i<length;i++){
                   if(document.getElementsByName(attributes[j].newCaseTypeName)[i].checked==true){
                     var newCaseTypeElementValue=document.getElementsByName(attributes[j].newCaseTypeName)[i].value;
                     attributes[j].newCaseTypeElementValue=newCaseTypeElementValue;
                     break;
                   }
               }
            }
            else{
                var newCaseTypeElementValue=document.getElementById(attributes[j].newCaseTypeName).value;
                attributes[j].newCaseTypeElementValue=newCaseTypeElementValue;                
            }
        }
    }
   }
   localStorage["attributes"]=JSON.stringify(attributes);
   document.getElementById('individual-section').remove();
   document.getElementById("caseFieldValue").classList.remove('list-added');
   document.getElementById('caseFieldValueSection').classList.add('display-none');  
   document.getElementById('showAttributes').classList.remove('display-none');
}


function showCaseDetails(){
    var popupContainerParent=document.getElementsByClassName('w3-container')[1];
    var popupContainer=document.createElement('div');
    popupContainer.id='popup-container';
    for(var j=0;j<attributes.length;j++){
        if(attributes[j].newCaseValue==caseValue){
            var parent=document.createElement('div');
            parent.className="row  m-1em "
            var showAttribute=document.createElement('div');
            showAttribute.className="col-6 f-12 gray text-center";
            showAttribute.innerText=attributes[j].newCaseTypeName;
            parent.appendChild(showAttribute);
            var showAttributeValue=document.createElement('div');
            showAttributeValue.className="col-6 f-12 gray ";
            showAttributeValue.innerText=attributes[j].newCaseTypeElementValue;
            parent.appendChild(showAttributeValue);
            popupContainer.appendChild(parent);
        }
    }
    var br=document.createElement('br');
    popupContainer.appendChild(br);
    popupContainer.appendChild(br);
    popupContainer.appendChild(br);
    popupContainerParent.appendChild(popupContainer)
    document.getElementById('id03').style.display='block';    
}

function popupClose(){
    document.getElementById('id03').style.display='none';
    document.getElementById('popup-container').remove();
    
}


