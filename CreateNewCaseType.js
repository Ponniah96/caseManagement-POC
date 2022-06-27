var attributes=new Array();
var CaseTypeValue=new Array();
var count=0;
function displayAlert(){
    var newCaseValue=document.getElementById("casetypename");
    if(newCaseValue.value.length>0){
        document.getElementById('id01').style.display='block';
    }
    else{
       alert("Please Enter New Case Type Value");
    }                
}         

function formSubmitted(){    
    var newCaseValue=document.getElementById("casetypename").value;
    var newCaseTypeName=document.getElementById("attrName").value;
    var newCaseTypeElement=document.getElementById("datalist").value;
    var newCaseTypeMandatory=document.getElementById("mandatory").checked;
    var newCaseTypeOptions;
    var optionsArray=[];
    for(var i=0;i<count;i++){
        var optionValue=document.getElementById("option-input"+i);
        optionsArray.push(optionValue.value);
    }
    newCaseTypeOptions=optionsArray.join(',');
    var json={};
    json.newCaseValue=newCaseValue;
    json.newCaseTypeName=newCaseTypeName;
    json.newCaseTypeElement=newCaseTypeElement;
    json.newCaseTypeMandatory=newCaseTypeMandatory;
    json.newCaseTypeOptions=newCaseTypeOptions;
    attributes.push(json);
    if(CaseTypeValue.length>0){
      for(var i=0;i<CaseTypeValue.length;i++){
        if(CaseTypeValue[i]==newCaseValue){
            break;
        }
        if(i==(CaseTypeValue.length-1)){
            CaseTypeValue.push(newCaseValue);
        }
      }
     
    }  
    else{
        CaseTypeValue.push(newCaseValue)
    }              
    localStorage["attributes"]=JSON.stringify(attributes);
    localStorage["caseTypeValue"]=JSON.stringify(CaseTypeValue);
    console.log(JSON.parse(localStorage['attributes']));
    console.log(JSON.parse(localStorage['caseTypeValue']));
    document.getElementById("attrName").value='';
    document.getElementById("datalist").value='';
    document.getElementById("mandatory").checked=false;
    document.getElementById('id01').style.display='none';
    if(attributes.length>0){
        document.getElementById('save-details').classList.remove("disable");
    }
    if(json.newCaseTypeElement=="dropdown"||json.newCaseTypeElement=="radio" ||json.newCaseTypeElement=="checkbox"){
        document.getElementById('option-subparent-subsection').remove();
        document.getElementById('option-parent-section').classList.add('display-none');
        count=0;
    }    
}

function changeInputType(e){
    if(e=="dropdown"||e=="radio" ||e=="checkbox"){
        if(count>0){
            document.getElementById('option-subparent-subsection').remove();
            var subParent=document.createElement('div');
            subParent.id="option-subparent-subsection";
            var parent=document.getElementById('option-subparent-section');
            parent.appendChild(subParent);
            count=0;
            addItem();            
            document.getElementById('option-parent-section').classList.remove('display-none');
        }
        else{
            var subParent=document.createElement('div');
            subParent.id="option-subparent-subsection";
            var parent=document.getElementById('option-subparent-section');
            parent.appendChild(subParent);
            addItem();
            document.getElementById('option-parent-section').classList.remove('display-none');
        }
        
    }
}

function addItem(){
    var subParent=document.getElementById('option-subparent-section');
    var subParentSubSection=document.getElementById('option-subparent-subsection');
    var subParentChild=document.createElement('div');
    subParentChild.id="option-subparent-child-section"
    subParentChild.className='row m-1em';
    var label=document.createElement('label');
    label.className='col-6 f-12 gray padding-top required';
    label.htmlFor="Option-"+count;
    label.innerText="Option-"+count;
    label.id="option"+count;
    subParentChild.appendChild(label);
    var inputDiv=document.createElement('div');
    inputDiv.className='col-6'
    var input=document.createElement('input');
    input.className='f-12 gray gray-border padding-input';
    input.type='text';
    input.id="option-input"+count; 
    input.required=true;
    inputDiv.appendChild(input);
    subParentChild.appendChild(inputDiv);
    subParentSubSection.appendChild(subParentChild);
    subParent.appendChild(subParentSubSection);
    count=count+1;
}


