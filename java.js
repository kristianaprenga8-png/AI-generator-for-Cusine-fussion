document.querySelector("#poem-form").addEventListener("submit", generatePoem);

function generatePoem(event) {
  event.preventDefault();

  let instructions = document.querySelector("#user-instructions").value;
  let resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "⏳ Generating your poem...";

  let apiKey = "YOUR_API_KEY";
  let prompt = `Write a short poem based on these instructions: ${instructions}`;

  let apiUrl = "https://api.shecodes.io/ai/v1/generate";

  axios
    .post(apiUrl, {
      prompt: prompt,
      key: apiKey,
    })
    .then((response) => {
      resultDiv.innerHTML = response.data.answer;
    })
    .catch(() => {
      resultDiv.innerHTML = "❌ Error: Could not generate poem.";
    });
}
