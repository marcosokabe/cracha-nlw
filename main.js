const LinksSocialMedia = {
  github: 'jakeliny2',
  youtube: 'jakelinygracielly',
  facebook: 'maykbrito',
  instagram: 'jakeliny.gracielly',
  twitter: 'jakelinytec'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
   
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfos(){
  const url=`https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
  .then(response => response.json()) 
  .then(data=> {
    //link com o github não funcionou por conta das restrições de conteúdo da fibra ótica
    userName.textContent = "Marcos Okabe"//data.name
    userBio.textContent = "marcosokabe bio from github"//data.bio
    userLink.href="https://github.com/marcosokabe"//data.html_url
    userImage.src = "https://lorempixel.com/185/185/people/" //data.avatar_url
    userLogin.textContent = "marcosokabe"//data.login
  })
    
}
getGitHubProfileInfos()