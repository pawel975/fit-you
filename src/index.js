const apiKey = process.env.API_KEY;
fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${apiKey}`).then(response => response.json()).then(data => console.log(data));