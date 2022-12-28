var api_key = config.API_Key;

document.getElementById("convert-button").addEventListener("click",getInput);


function getInput(){
    var x = document.getElementById("code-language").value;
    if(x=="Python"){
        var a = document.getElementById("ip-text").value;
        const apiURL = 'https://api.openai.com/v1/edits';
        const token = api_key;
        var data = {
        "model": "text-davinci-edit-001",
        "input": a,
        "instruction": "Covert to python",
        "temperature": 0.7,
        "top_p": 1
      }
    
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type','application/json');
    
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
    
        fetch(apiURL, options)
            .then(response => response.json())
            .then(a => { document.getElementById("op-text").innerHTML = a.choices[0].text})
            .catch(error => console.error(error));
    }
    else if(x=="C++"){
        var a = document.getElementById("ip-text").value;
        const apiURL = 'https://api.openai.com/v1/edits';
        const token = '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';
        var data = {
        "model": "text-davinci-edit-001",
        "input": a,
        "instruction": "Covert to C++",
        "temperature": 0.7,
        "top_p": 1
      }
    
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type','application/json');
    
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
    
        fetch(apiURL, options)
            .then(response => response.json())
            .then(a => { document.getElementById("op-text").innerHTML = a.choices[0].text})
            .catch(error => console.error(error));
    }
    else if(x=="Java"){
        var a = document.getElementById("ip-text").value;
        const apiURL = 'https://api.openai.com/v1/edits';
        const token = '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';
        var data = {
        "model": "text-davinci-edit-001",
        "input": a,
        "instruction": "Covert to Java",
        "temperature": 0.7,
        "top_p": 1
      }
    
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type','application/json');
    
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
    
        fetch(apiURL, options)
            .then(response => response.json())
            .then(a => { document.getElementById("op-text").innerHTML = a.choices[0].text})
            .catch(error => console.error(error));
    }
    else if(x=="C#"){
        var a = document.getElementById("ip-text").value;
        const apiURL = 'https://api.openai.com/v1/edits';
        const token = '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';
        var data = {
        "model": "text-davinci-edit-001",
        "input": a,
        "instruction": "Covert to C#",
        "temperature": 0.7,
        "top_p": 1
      }
    
        const headers = new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type','application/json');
    
        const options = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data)
        };
    
        fetch(apiURL, options)
            .then(response => response.json())
            // .then(b => console.log(b.choices[0].text))
            .then(a => { document.getElementById("op-text").innerHTML = a.choices[0].text})
            .catch(error => console.error(error));
    }  
    
 }



