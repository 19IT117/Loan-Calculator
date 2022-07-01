// Listen for submit
document.querySelector('#loan-form').addEventListener('submit',function(e){
  //show loader
  //hide results
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'block';
  setTimeout(calculateResults, 1000);
  e.preventDefault();
});

function calculateResults(e){
  document.getElementById('results').style.display = 'block';
  document.getElementById('loading').style.display = 'none';
  console.log('calculation in progress');
  const amount = document.querySelector('#amount');
  const interest = document.querySelector('#interest');
  const years = document.querySelector('#years');
  const montlyPayment = document.querySelector('#monthly-payment');
  const totalPayment = document.querySelector('#total-payment');
  const totalInterst = document.querySelector('#total-interest');
  const principal = parseFloat(amount.value);
  const InterestRate = parseFloat(interest.value)/100/12;
  const PaymentsDuration = parseFloat(years.value)*12;
  const x = Math.pow(1+ InterestRate, PaymentsDuration);
  if(isNaN(principal) || isNaN(InterestRate) || isNaN(PaymentsDuration)){
    showError("Check Your Number");
  }
  totalInterst.value = (x*principal - principal).toFixed(2);
  totalPayment.value = (x*principal).toFixed(2); 
 // const monthly = (totalPayment.value);
  montlyPayment.value = ((totalPayment.value)/PaymentsDuration).toFixed(2);
  const monthly = montlyPayment.value;
  e.preventDefault();
  
}

function showError(error){
  const errorDiv = document.createElement('div');

  // Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  errorDiv.className = 'alert alert-danger';

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);
  setTimeout(clearError, 3000);
  document.getElementById('results').style.display = 'none';
  document.getElementById('loading').style.display = 'none';
}
function clearError(){
  document.querySelector('.alert').remove();
}