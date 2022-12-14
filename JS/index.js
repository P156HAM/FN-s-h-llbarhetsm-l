// url : https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=true
// secondary url : https://unstats.un.org/SDGAPI/v1/sdg/Goal/{goalCode}/Target/List?includechildren=true


async function getTarget() {
    const baseUrl = 'https://unstats.un.org/SDGAPI/v1/sdg/Goal/List?includechildren=false'
    const response = await fetch(baseUrl); 
    const data = await response.json();
    console.log('answer from API', data)
    displayTarget(data)
    displaySubTarget()
    
}
getTarget()

function displayTarget(data) {
    const displaySpace = document.querySelector('.display-space')
    let targets = '';
    for (let i=0; i<data.length; i++) {
        targets += `<div class='targets'> ${data[i].title} </div>
                    <button data-goal='${data[i].code}' class='button${i}'> Show more </button>` 
    }

    displaySpace.innerHTML = targets;
    
}

function displaySubTarget() {
    let btns = document.querySelectorAll('button');
    let area = document.querySelector('.display-area');
    btns.forEach((button) => {
        button.addEventListener('click', async () => {
            let code = button.getAttribute('data-goal')
            let response = await fetch(`https://unstats.un.org/SDGAPI/v1/sdg/Goal/${code}/Target/List?includechildren=true`)
            let targetData = await response.json(); 
            for (let i=0; i<targetData[0].targets.length; i++) {
                let displayArea = document.createElement('div');
                displayArea.innerHTML = targetData[0].targets[i].title;
                area.append(displayArea);
            }
        })
    });
}
