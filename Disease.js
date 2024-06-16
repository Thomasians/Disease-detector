document.getElementById('diseaseForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var formData = new FormData(this);
    fetch('DetectDiseaseServlet', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('result').innerText = 'Prediction: ' + data.prediction + ', Probability: ' + data.probability;
    })
    .catch(error => console.error('Error:', error));
});
