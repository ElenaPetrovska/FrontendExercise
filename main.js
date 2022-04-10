// function readTextFile(file, callback) {
//     var rawFile = new XMLHttpRequest();
//     rawFile.overrideMimeType("application/json");
//     rawFile.open("GET", file, true);
//     rawFile.onreadystatechange = function() {
//         if (rawFile.readyState === 4 && rawFile.status == "200") {
//             callback(rawFile.responseText);
//         }
//     }
//     rawFile.send(null);
// }

// readTextFile("/Users/User/Desktop/Frontend/data.json", function(text){
//     var data = JSON.parse(text);
//     console.log(data);
// });
let data=[
    {
        "image": "https://placekitten.com/600/400",
        "caption": "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2018-03-12 03:00:00",
        "likes": "123",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/100/100"
    },
    {
        "image": "https://placekitten.com/600/410",
        "caption": "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        "type": "image",
        "source_type": "instagram",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2019-01-12 03:00:00",
        "likes": "0",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/150/100"
    },
    {
        "image": "https://placekitten.com/600/420",
        "caption": "",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2017-01-21 03:00:00",
        "likes": "9866555",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/100/150"
    },
    {
        "image": "https://placekitten.com/600/430",
        "caption": "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-12 03:00:00",
        "likes": "2",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/120/120"
    },
    {
        "image": "https://placekitten.com/600/440",
        "caption": "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2018-04-12 03:00:00",
        "likes": "12343",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/50/50"
    },
    {
        "image": "https://placekitten.com/600/440",
        "caption": "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-12 03:00:00",
        "likes": "123",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/101/101"
    },
    {
        "image": "https://placekitten.com/800/400",
        "caption": "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-12 03:00:00",
        "likes": "12",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/150/120"
    },
    {
        "image": "https://placekitten.com/600/500",
        "caption": "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2017-12-12 03:00:00",
        "likes": "23",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/140/140"
    },
    {
        "image": "https://placekitten.com/700/400",
        "caption": "Pellentesque lacinia volutpat turpis non fermentum. Cras at pellentesque augue. Aliquam eget metus sit amet turpis consectetur posuere.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2017-12-08 03:00:00",
        "likes": "0",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/100/100"
    },
    {
        "image": "https://placekitten.com/700/500",
        "caption": "Duis in facilisis lectus. Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-02-12 03:00:00",
        "likes": "0",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/102/102"
    },
    {
        "image": "https://placekitten.com/800/600",
        "caption": "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor. Vivamus ultricies congue arcu eu porttitor. Integer libero tortor, volutpat a purus id, mattis tristique tortor. ",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-12 03:00:00",
        "likes": "2",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/103/100"
    },
    {
        "image": "https://placekitten.com/700/600",
        "caption": "Duis in facilisis lectus.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2020-12-12 03:00:00",
        "likes": "1",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/40/100"
    },
    {
        "image": "https://placekitten.com/1600/1400",
        "caption": "Nulla molestie erat erat, quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-15 03:00:00",
        "likes": "2324",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/80/100"
    },
    {
        "image": "https://placekitten.com/1600/400",
        "caption": "Aliquam odio libero, malesuada et iaculis a, facilisis bibendum dolor.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-10-12 03:00:00",
        "likes": "1223",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/80/80"
    },
    {
        "image": "https://placekitten.com/2000/4000",
        "caption": "Quis tempor enim sodales vitae. Sed tempus, libero fringilla rhoncus ullamcorper, justo elit dignissim ex, nec elementum quam sem in urna.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2016-12-12 03:00:00",
        "likes": "12223",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/110/110"
    },
    {
        "image": "https://placekitten.com/900/600",
        "caption": " Suspendisse finibus lorem nibh, facilisis ullamcorper nunc consequat sit amet. Curabitur ultricies magna ante, ac eleifend lorem auctor porta. Nullam volutpat aliquet lorem, et posuere ex aliquet eu. Quisque elementum sem mauris, a mattis est scelerisque vitae. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut quis massa eget ligula euismod sagittis id congue quam. Duis vestibulum eros sed tincidunt rutrum. Pellentesque in malesuada velit.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2017-12-12 03:00:00",
        "likes": "0",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/110/100"
    },
    {
        "image": "https://placekitten.com/600/410",
        "caption": "Quisque metus nisi, consequat et molestie eget, facilisis ac odio. Nam lorem libero, efficitur ac velit at, egestas tempor arcu. Nullam pharetra ex eget orci lobortis malesuada. Maecenas eget porta felis. Aliquam porttitor, nibh nec ullamcorper fermentum, eros velit lobortis justo, pretium consectetur turpis enim ut nunc. Fusce convallis, ex ut ultrices sodales, ante quam venenatis arcu, vitae mollis magna urna vel eros. Aliquam a sapien nisi. Nullam convallis malesuada suscipit. ",
        "type": "image",
        "source_type": "instagram",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2019-01-12 03:00:00",
        "likes": "0",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/150/100"
    },
    {
        "image": "https://placekitten.com/600/420",
        "caption": "",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2017-01-21 03:00:00",
        "likes": "9866555",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/100/150"
    },
    {
        "image": "https://placekitten.com/600/430",
        "caption": "Etiam eu blandit nisi. Aliquam rutrum faucibus mauris, sed egestas odio viverra at. In elementum sit amet sapien vitae bibendum.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://www.facebook.com/EmbedSocial/",
        "date": "2019-12-12 03:00:00",
        "likes": "2",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/120/120"
    },
    {
        "image": "https://placekitten.com/600/440",
        "caption": "Vivamus a sem sit amet nisi pretium pretium. Curabitur blandit ut lectus non bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris leo odio, consectetur a lorem vitae, aliquet placerat orci. Phasellus varius ante sit amet quam mollis, eu efficitur tortor blandit.",
        "type": "image",
        "source_type": "facebook",
        "source_link": "https://instagram.com/embedsocial/",
        "date": "2018-04-12 03:00:00",
        "likes": "12343",
        "name": "John Smith",
        "profile_image": "https://placekitten.com/g/50/50"
    }
]


function likeCounter(i,like)
{
   
    let img = document.getElementById('myHeart-'+i);
    if(img.src.match("heartLike"))
    {       
         img.src = "images/heartDislike.svg";
         like =  parseInt(like) ;
         document.getElementById("likes-"+i).innerHTML=like;
    }
    else
    {
        img.src = "images/heartLike.svg";
        like =  parseInt(like) + 1;
        document.getElementById("likes-"+i).innerHTML=like;
        
    }
        

}


function fbOrInsta(source_type)
 {
     if(source_type === "facebook")
     {
         return `<img src="images/facebook.svg"></img>`
     }
     else(source_type === "instagram")
     {
         return `<img src="images/instagram-logo.svg"></img>`
     }
}


let temp=0;
let listOfLikes = [];

function showFourCards()
{
    for(i=temp;i<temp+4;i++)
    {
        

        let profile_image = data[i].profile_image;
        //console.log(profile_image);
        let name =data[i].name;
        let date = data[i].date;
        let source_type = data[i].source_type;
        let image = data[i].image;
        let caption = data[i].caption;
        let likes = data[i].likes;

        listOfLikes.push(likes);

        let cardItem = `
        <div class="instagram-card">
        
            <div class="instagram-card-header">
              <img class="profile-img" src="${profile_image}" />
              <br>
              <div class="user-name">${name} <br/> ${date}</div> 
              
              <div class="logo">${fbOrInsta(source_type)}</div>
              
            </div>
          
            <div class="intagram-card-image">
              <img class="card-img" src="${image}" />
            </div>
          
            <div class="instagram-card-content">
            <div>${caption}</div>
            
            </div>
            <hr>
            
            <div class="instagram-card-footer">
                <img id= "myHeart-${i}" onclick="likeCounter(${i},${likes})" src="images/heartDislike.svg" style="width:20px;"></img>
                <div id="likes-${i}">${likes}</div>
            </div>
          </div>
          </br>
          `; 

        document.getElementById("myData").innerHTML = document.getElementById("myData").innerHTML +  cardItem;
    }
    temp= temp+4;


}

showFourCards();
