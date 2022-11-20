// url : https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true
// secondary url : https://unstats.un.org/SDGAPI/v1/sdg/Goal/{goalCode}/Target/List?includechildren=true


async function getTarget() {
    const baseUrl = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true'
    const response = await fetch(baseUrl); 
    const data = await response.json();

    console.log('answer from API', data)
    displayTarget(data)
}
getTarget()

const targets = getTarget;

function displayTarget(data) {
    const displaySpace = document.querySelector('.display-space')
    let targets = '';
    for (let i=0; i<data.length; i++) {
        targets += `<div class='targets'> ${data[i].title} </div>` 
    }
    displaySpace.innerHTML = targets;

}
