class Calculator{
  constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
  }

  clear(){
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined
  }

  delete(){

  }

  appendNumber(number) {
    if (number === "." && this.currentOperand.includes('.')) return // Se c'è già un punto nel currentOperand, non se ne possono aggiungere altri
    this.currentOperand = this.currentOperand.toString() + number.toString() // La variabile currentOperand, creata qui è = a se stessa più il nuovo numero aggiunto, accodato come stringa
  }

  chooseOperation(operation){
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute(){

  }

  updateDisplay(){
    this.currentOperandTextElement.innerHTML = this.currentOperand // Il valore HTML dentro a [data-current-operand], rendilo = alla variabile currentOperand
    this.previousOperandTextElement.innerHTML = this.previousOperand
  }
}

const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const allClearButton = document.querySelector('[data-all-clear]');
const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () =>{
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})