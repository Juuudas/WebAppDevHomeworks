window.onload = function() {


    fetch("https://api.npoint.io/0cfe27a7c5f30dbbf3c1")
        .then((response) => response.json())
        .then(posts => {
            
            for (let post of posts){
                console.log(post)
                const div = document.createElement('div')
                const date = document.createElement('span')
                const profilepic = document.createElement('img')
                const like = document.createElement('img')
                var anchorlike=document.createElement('a');
                anchorlike.href='#';
                var anchorprofilepic=document.createElement('a');
                anchorprofilepic.href='#';
                profilepic.className = "profilepic"
                profilepic.setAttribute("width", "6%")
                like.setAttribute("width", "7%")
                profilepic.src = post.profilepic
                like.src = post.like
                date.textContent = post.creation
                const p = document.createElement('p')
                p.textContent = post.caption
                const img = document.createElement("img");
                img.className = "jspic"
                img.src = post.picture;
                anchorlike.appendChild(like)
                anchorprofilepic.appendChild(profilepic)
                div.appendChild(anchorprofilepic)
                div.appendChild(date)
                div.appendChild(img)
                div.appendChild(p)
                div.appendChild(anchorlike)
                const body = document.getElementsByClassName("flex-container")
                body[0].appendChild(div)
                
            }
            

        })
}