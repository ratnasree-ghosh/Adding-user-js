

var add_btn =  document.getElementById("add-btn");
var count = 1;

add_btn.addEventListener("click" , (e)=> {
    e.preventDefault();

    var user_name = document.getElementById("username").value;
    var user_profession = document.getElementById("profession").value;
    var user_age = document.getElementById("age").value;

    

    if(user_name == '' || user_age == '' || user_profession == ''){

        if(document.getElementsByClassName("succ")[0].style.display = "block"){
            document.getElementsByClassName("succ")[0].style.display = "none";
        }
        
        document.getElementsByClassName("err")[0].style.display = "block";
    }else{
        if(document.getElementsByClassName("err")[0].style.display = "block"){
            document.getElementsByClassName("err")[0].style.display = "none";
        }
        document.getElementsByClassName("succ")[0].style.display = "block";

        var arr = [count, user_name, user_profession, user_age];
        count++;
        console.log(arr);

        

        var users = document.createElement("div");

        users.setAttribute("id", `${arr[0]}`);
        users.setAttribute("class", "users");

        users.innerHTML = 
       ` <div class="user">
            <span>${arr[0]}</span>
            <span> Name: ${arr[1]}</span>
            <span> Profession: ${arr[2]}</span>
            <span> Age: ${arr[3]}</span>
        </div>
        <button onClick="deleteUser(${arr[0]})" id="delete-btn">Delete</button>`
    
        
        var para = document.getElementById("employee-para");
       
        para.appendChild(users);
        
        if(para.hasChildNodes()==true){
            document.getElementById("span").style.display = "none";
        }

        document.getElementById("form").reset();
        
    }

    
    
    
});

if(document.getElementById("employee-para").hasChildNodes()==false){
    document.getElementById("span").style.display = "flex";
}

function deleteUser(id){
    
    var test = id.toString();
    
    
    var itemToBeDeleted = document.getElementById(test);
    
    document.getElementById("employee-para").removeChild(itemToBeDeleted);
 
}






