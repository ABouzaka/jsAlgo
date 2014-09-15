
///////////////////////////////////////////////WINDOW  obj///////////////////////////////////////////////////////////////////////////
WINDOW ={};
/**************this method  will trigger the 	MovemovieWindow function**************************/	  
		/*
			 WINDOW.move (id,Event[,Yplus,Xplus])
			 role :move the elment with the specified (id) to when the (Event) triggered

			 str parm1:specify the id of elment that will be moved
			 str par2:speicify when the window will move ex:click,mousemove
			 int par3:specify how much pixels down from the cursor to display the window
			 int par4:specify how much pixels to the right of the cursor to display the  window
		*/  	   
		 WINDOW.move = function (id,Event,Yplus,Xplus)
			   {
			   
					   if(window.addEventListener){//for chroime and FIREFOx:accept event as param arf
						   
						   document.addEventListener(Event,function(event){
							   moveWindow(event,id,Yplus,Xplus);
						   });
					   }
					   
					   else
					   {//FOR ie doesn't aceppt any event as param
							document.attachEvent("on"+Event,function(){
							   //set first param to null to bypass it to the second parm
							   moveWindow(null,id,Yplus,Xplus);
							    }); 
						   
					   }
			   }
					   
			 
/****************************************************************************************************/			
			   
/*****************this function will move the window***********************/			   
/*2)*/function moveWindow(EventParm,id,Yplus,Xplus)
		{
			  /********************GET scrollTop***************************/
			   //both chrome and safari cotians th esafari/ word
			   isChromeORsafari= navigator.userAgent.toLowerCase().indexOf('safari/') > -1;
				if(isChromeORsafari){//if browser is safari or chome
				    scrollTop =  document.getElementsByTagName('body')[0].scrollTop;//for safari and  chome
				} else { //if browser is IE and Firefox 
				    scrollTop = document.documentElement.scrollTop;//for IE and Firefox
				}
				/************************************************************/

         
		 /**************Positon  movieWindow according to mouse pos********************************************/
		   //cross browser event
			  var evt = EventParm || event;
		   /*3*/  document.getElementById(id).style.position = 'absolute';   
		    
			//set x value to evt.clientX if there is no arg passed to the Xplus; param  otherwise set it to evt.clientX+Xplus
			      X =  Xplus  ==  undefined ? evt.clientX : evt.clientX+Xplus; 
		   /*X*/  document.getElementById(id).style.left     =  X.toString()+"px";//convert cursor x pos to string then concainate it topx so we get ex('100px');
		
		
		  //set Y value to evt.clientY if there is no arg passed to the Yplus otherwise set it to evt.clientY+Yplus
		          Y =  Yplus  ==  undefined ? evt.clientY : evt.clientY+Yplus; 
		   /*5*/  document.getElementById(id).style.top     =  (Y+scrollTop).toString()+"px";
	    /************************************************************************************************************/
	
		}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

		
///////////////////////////////////////////////////////////////////////////STRING OBJ///////////////////////////////////////////////////////////////////////////
STRING= {};
//Remove is a subchild of STRING
STRING.remove ={};

	/*
	STRING.remove.firstChar(str,remove[,restriction])
	
	role     = remove all chacters or first matched regExp   from a string
	return   = the string after removing the charcter from it
	
	PARM
		str str               :the string that we will remove the char from
		str regExp removeChar : a regular expression represent the chacter that will be removed
		pred str restriction  :it is optinel so if user does'nt pass any arg to this parm the function will remove all chars
							 can be
							-f:to remove just first matched char in string
	*/
	STRING.remove.Char = function(str,removeChar,restriction)
		{
		
			switch(restriction){
				case undefined : restriction = "gi";break;// all occurences
				case "f"       : restriction = "i";break;//first   occcurence
			}
		
			pattern  = new RegExp(removeChar,restriction);//chacter that will be removed
			//replace the pattern with ''(epty) and store the subject in str
		
			
			
			str  = str.replace(pattern,'');//the subj  after removinf the pattern
			return  str;
		}
		
		
		
	  	/*
     	STRING.remove.firstChar(str,remove[,restriction])
	
	   role     =  create a specified number of spaces
	   return   =  spaces
	
	   PARM
		  int spaceNum : number of sapcezs that will be screated
	   */
		
	STRING.spaces= function(spaceNum){
		
		spaces ="";//intitimize th string var thta will be filled with string
		for(cp=1;cp<=spaceNum;cp+=1){//specify how much apaces you will create
		spaces += "&nbsp";}
		//return the sapces var after filling it with sapce var
		return spaces;
	}
		
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////HTMLELEMENT //////////////////////////////////
HTMLELEMENT ={};
	/*
	   HTMLELEMENT.create(str P_tag,str P_target,str P_Cont,P_ID,[,bool P_before])
	   role:create a html tag and puthtml or text content inside it
	   PARM
		str P_tag    : the name of the tag that you want to create ex :p b h1...
		str P_target : inside wich  elment you want to crearte the tag or put it after it
		str P_Cont   : the content that you wich to put in the  tag it can be html tag or plain text   
	    str P_ID      : the id that will be assigne to the created tag(p_tag)
	    str P_before  : if true the P_tag will be displayed before the P_target
	*/
	HTMLELEMENT.create = function(P_tag,P_target,P_Cont,P_ID,P_before)
	{
		 
		
		
		window.onload = function()
		{
			//I)CREATE AN ELMENT
					//1-create a new elment
					 var newElm = document.createElement(P_tag);
					 //2-specify a place of an existing elment where the newElm will be displayed 
					 var  ContDiv = document.getElementById(P_target);
					
					
					if(P_before){
						 //insert created new elment before  the (P_target
					   document.body.insertBefore(newElm,document.getElementById(P_target));
					}else{
						 //3-create empty tag inside the ContDiv
					  ContDiv.appendChild(newElm);
					}
					
					
					 
					
					  
		   //II)ASSIGN ATTRIBUTE TO CREATED ELMENT
			   //assign an id=ContDiv to the new created div
				newElm.setAttribute("id",P_ID);12
			 
		  
		  //II)PUT CONTENT INSIDE THE ELMENT
				   //get the Div cont that we have created an put the P_Cont isnide it
					document.getElementById(P_ID).innerHTML =P_Cont;
		            //insert created new elment ContDivbefore target elment
					
				
				   
			
		}
	}
///////////////////////////////////////////////////////////////////////////////////////

math = {}
       /*
	   role  : round a number to a specid decimal 
       ex    : roundNumber(5.28968, 3)  will roud up the thrid decimal value 9   so 5.28968 ==> 5.29
	    ex 2 : roundNumber(5.28368, 3) ==>5.284
   */
  math.roundNumber = function(rnum, rlength)
  {
	  var newnumber = Math.round(rnum*Math.pow(10,rlength))/Math.pow(10,rlength);
    return newnumber; // Output the result to the form field (change for your purposes)
	  
  }
	  



