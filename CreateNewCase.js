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
                    label.for=attributes[j].newCaseTypeName;
                    label.innerText=attributes[j].newCaseTypeName;
                    label.id="caseFieldLabel"+j;
                    parent.appendChild(label);
                }
                if(attributes[j].newCaseTypeElement.length>0){
                    if(attributes[j].newCaseTypeElement=="dropdown"){
                        var select=document.createElement('select');
                        select.className='col-3 f-12 gray-border padding-input';
                        select.required=true;
                        select.id="caseFieldInput"+j;  
                        var optionsValue=attributes[j].newCaseTypeOptions.split(',');
                        for(var i=0;i<optionsValue.length;i++){
                            select.options[select.options.length] = new Option(optionsValue[i], optionsValue[i]);
                        }          
                        parent.appendChild(input);
                    }
                    else{
                        var input=document.createElement('input');
                        input.className='col-3 f-12 gray gray-border padding-input';
                        input.type=attributes[j].newCaseTypeElement;
                        input.required=true;
                        input.id="caseFieldInput"+j;            
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
                    var input=document.createElement('input');
                    input.className='col-3 f-12 gray gray-border padding-input';
                    input.type=attributes[j].newCaseTypeElement;
                    input.id="caseFieldInput"+j;            
                    parent.appendChild(input);
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


