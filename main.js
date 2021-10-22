const LinksSocialMedia = {
  github: 'davisllv',
  youtube: 'UCmLT5OSs-64e4N5uBHb0xRA',
  facebook: 'davi.dasilva.1048',
  instagram: 'davisllv',
  twitter: 'daviizeeraa'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}
changeSocialMediaLinks()

function getGitHubProfileInfo() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) // resposta da url, guarda em objeto, mas não em json
    .then(response => response.json()) // Está transformando em json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      gitHubName.textContent = data.login
    })
  // .then(data => (linkGitHub.textContent = data.link))
}

getGitHubProfileInfo()
