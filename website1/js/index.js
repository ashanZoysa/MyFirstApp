function calculateSum(){

		var item;
		var qty;
		var unitPrice;
		var subTotal=0;
		var total=0;
		var dist;
		var deli;

		item=document.getElementById('itemCode').value;
		qty=document.getElementById('qty1').value;
		//dist=document.getElementById('dis').value;

		
	
		if(item=="item_001"){
			unitPrice=2100.00;
		}

			else if(item=="item_002"){
				unitPrice=800.00;
			}

				else if(item=="item_003"){
						unitPrice=1500.00;
				}

		else{
			alert("Invalid item Code !");
		}




		//distanceCalc
	

			/*if(dist<=3){
					deli=50.00;
				}

					else if(dist<=8){
						deli=75.00;
					}

						else if(dist<=15){
							deli=125.00;
						}

							else{
								deli=150.00; 
							}*/
			
			

		
		subTotal=(unitPrice*qty).toFixed(2);

		//total=(subTotal+deli).toFixed(2);


		document.getElementById('subTotal').innerHTML="Amount Due : Rs."+subTotal;
		//document.getElementById('delivery').innerHTML="Delivery Charge : Rs."+deli;
		//document.getElementById('total').innerHTML="Total Amount : Rs."+total;


}