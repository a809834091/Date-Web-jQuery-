$(function(){
   'use strict';

   window.Validator=function(val,rule){
     this.is_valid=function(new_val){
       if(new_val!==undefined)
       {val=new_val;}

        if(!rule.required&&!val)
        return true;

        var key;
        for(key in rule){
          if(key ==="required")
          continue;
        var r=  this["validator_"+key]();
          if(!r)return false;
        }
        return true;

     }

     this.validator_min=function(){
        val= parseFloat(val);
       return val>=rule.min;
     }

     this.validator_max=function(){
       val=parseFloat(val);
       return val<=rule.max;
     }

     this.validator_minlength=function(){
       val=val.toString();
       return val.length>=rule.minlength;
     }

     this.validator_maxlength=function(){
       val=val.toString();
       return val.length<=rule.maxlength;
     }

     this.validator_numeric=function(){
       if((rule.numeric)=== $.isNumeric(val))
       return true;
       return false;
     }

     this.validator_required=function(){
       var real=$.trim(val);

            if(!val&&val!==0)
             return false;
            else
             return true;


     }
     this.validator_pattern=function(){
       var reg=new RegExp(rule.pattern);
       return reg.test(val);
     }
   }
})
