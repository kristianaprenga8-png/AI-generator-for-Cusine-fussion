
document.querySelector("#dish-form").addEventListener("submit", generateDish);

function generateDish(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions").value;
  let resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "⏳ Generating your German–French dish...";

  let apiKey = "66db02e29ab4305o5a5c75fc1b23aet8";

  let prompt = `Create a German–French fusion cuisine idea based on these instructions: ${instructions}. Include a dish name, description, and optional recipe.`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${apiKey}`;

  axios
    .get(apiUrl)
    .then((response) => {
      resultDiv.innerHTML = response.data.answer;
    })
    .catch((error) => {
      console.log(error);
      resultDiv.innerHTML = "❌ Error: Could not generate dish.";
    });
}