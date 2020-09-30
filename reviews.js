window.onload = function(){
    console.log("window onload")
    let index=0;
    const MY_ARRAY =[
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
            name :"Susan Smith",
            role:"WEB DEVELOPER",
            info:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry"
        },
        
        
        {

            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
            name :"Anna Johnson",
            role:"WEB DESIGNER",
            info:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal."

        },
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
            name :"Peter Jones",
            role:"INTERN",
            info:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag."

        },
        {
            image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
            name :"Bill Anderson",
            role:"THE BOSS",
            info:"Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic."
        }
        
        ];


        document.getElementById("right_arrow").onclick = function(){
            console.log("entered")

            this.style.border = "1px solid blue";
            document.getElementById("left_arrow").style.border ="none";

           let display_name =  document.getElementById("name").innerText ;
           console.log(display_name)
            MY_ARRAY.forEach(function(e,i){
                
                    if(e.name == display_name){
                        

                        if(i < MY_ARRAY.length-1){
                        index= i+1; }
                        else{
                            index =0;

                        }

                    }

            })

            document.getElementById("image").src = MY_ARRAY[index]["image"];

            document.getElementById("name").innerHTML = MY_ARRAY[index]["name"];

            document.getElementById("role").innerHTML = MY_ARRAY[index]["role"];

            document.getElementById("review").innerHTML = MY_ARRAY[index]["info"];



        }

        document.getElementById("left_arrow").onclick = function(){
            
            this.style.border = "1px solid blue";
            document.getElementById("right_arrow").style.border ="none";

           let display_name =  document.getElementById("name").innerText ;
           console.log(display_name)
            MY_ARRAY.forEach(function(e,i){
                
                    if(e.name == display_name){
                        

                        if(i > 0){
                        index= i-1; }
                        else{
                            index = MY_ARRAY.length-1;

                        }

                    }

            })

            document.getElementById("image").src = MY_ARRAY[index]["image"];

            document.getElementById("name").innerHTML = MY_ARRAY[index]["name"];

            document.getElementById("role").innerHTML = MY_ARRAY[index]["role"];

            document.getElementById("review").innerHTML = MY_ARRAY[index]["info"];



        }
        document.getElementById("btn").onclick = function(){
            let random_index = Math.floor(Math.random()*4);


            document.getElementById("image").src = MY_ARRAY[random_index]["image"];

            document.getElementById("name").innerHTML = MY_ARRAY[random_index]["name"];

            document.getElementById("role").innerHTML = MY_ARRAY[random_index]["role"];

            document.getElementById("review").innerHTML = MY_ARRAY[random_index]["info"];


        }


      



}