let elements = document.getElementsByTagName('*');
alert(`Total amount of elements on the page: ${elements.length}`)
const saveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    alert('��������� ����: ' + this.lastInput
        + '\n' + '������� ����: ' + currentInput);

    this.lastInput = currentInput;
}