
var setOpen='';
export function setPopupOpen(setOpen, value) {
  console.log("set popup called", value);
  setOpen(value);
}

 export function setpoupopen(value)
    { 
      console.log("set popup called",value);
      if(value === false){
        setOpen(false);
      }else {
          setOpen(true);

      }
      }