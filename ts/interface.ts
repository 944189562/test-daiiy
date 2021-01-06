interface LabelledValue {
    label: string;
}

function printLabel(labelledObj: LabelledValue){
    console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'size 10 Object'}
printLabel(myObj)

