var messageArr = ""
var totalField = 0
var fieldNames = ['#', '#', '#', '#', '#'];
var url = ""


function extractWord() {
    message = document.getElementById('message').value
    if (message != "") {
        message = "start: " + message + " end:"
        message = message.split(' ');
        messageArr = message.filter(function (value) {
            return value !== ""
        })
        console.log(messageArr);
        document.getElementById('form').style.display = "block"
        document.getElementById('addMore').style.display = "block"
        document.getElementById('sub').style.display = "block"

        var dataDropdwon = message.map(function (word, index) {
            wordWithIndex = index + "#" + word;
            return '<option value="' + wordWithIndex + '">' + word + '</option>';
        }).join('')
        document.getElementById('data-1').innerHTML = dataDropdwon;
        document.getElementById('till-1').innerHTML = dataDropdwon
        document.getElementById('priority-1').value = 1
        document.getElementById('linefeed-1').value = 4

    } else {
        alert("Please enter a valid message");
    }
}

function addMore() {
    totalField = totalField + 1
    if (totalField == 1) {
        var label1 = document.getElementById('label-1').value
        var priority1 = document.getElementById('priority-1').value
        if (label1 != "" && priority1 != "") {
            document.getElementById('field-2').style.display = "block"
            var inputFields = document.querySelectorAll('#field-2 input, #field-2 select');
            inputFields.forEach(function (element, index) {
                console.log(element)
                element.setAttribute('name', fieldNames[index]);
            });
            var dataDropdwon = message.map(function (word, index) {
                wordWithIndex = index + "#" + word;
                return '<option value="' + wordWithIndex + '">' + word + '</option>';
            }).join('')
            document.getElementById('data-2').innerHTML = dataDropdwon;
            document.getElementById('till-2').innerHTML = dataDropdwon

            document.getElementById('priority-2').value = 2
            document.getElementById('linefeed-2').value = 4


        } else {
            alert("please fill all the fields")
            totalField = totalField - 1
        }
    }
    if (totalField == 2) {
        var label2 = document.getElementById('label-2').value
        var priority2 = document.getElementById('priority-2').value
        if (label2 != "" && priority2 != "") {
            document.getElementById('field-3').style.display = "block"
            var inputFields = document.querySelectorAll('#field-3 input, #field-3 select');
            inputFields.forEach(function (element, index) {
                console.log(element)
                element.setAttribute('name', fieldNames[index]);
            });
            var dataDropdwon = message.map(function (word, index) {
                wordWithIndex = index + "#" + word;
                return '<option value="' + wordWithIndex + '">' + word + '</option>';
            }).join('')
            document.getElementById('data-3').innerHTML = dataDropdwon;
            document.getElementById('till-3').innerHTML = dataDropdwon


            document.getElementById('priority-3').value = 3
            document.getElementById('linefeed-3').value = 4

        } else {
            alert("please fill all the fields")
            totalField = totalField - 1
        }
    }
    if (totalField == 3) {
        var label3 = document.getElementById('label-3').value
        var priority3 = document.getElementById('priority-3').value
        if (label3 != "" && priority3 != "") {
            document.getElementById('field-4').style.display = "block"
            var inputFields = document.querySelectorAll('#field-4 input, #field-4 select');
            inputFields.forEach(function (element, index) {
                console.log(element)
                element.setAttribute('name', fieldNames[index]);
            });
            var dataDropdwon = message.map(function (word, index) {
                wordWithIndex = index + "#" + word;
                return '<option value="' + wordWithIndex + '">' + word + '</option>';
            }).join('')
            document.getElementById('data-4').innerHTML = dataDropdwon;
            document.getElementById('till-4').innerHTML = dataDropdwon

            document.getElementById('priority-4').value = 4
            document.getElementById('linefeed-4').value = 4

        } else {
            alert("please fill all the fields")
            totalField = totalField - 1
        }
    }
    if (totalField == 4) {
        var label4 = document.getElementById('label-4').value
        var priority4 = document.getElementById('priority-4').value
        if (label4 != "" && priority4 != "") {
            document.getElementById('field-5').style.display = "block"
            var inputFields = document.querySelectorAll('#field-5 input, #field-5 select');
            inputFields.forEach(function (element, index) {
                console.log(element)
                element.setAttribute('name', fieldNames[index]);
            });
            var dataDropdwon = message.map(function (word, index) {
                wordWithIndex = index + "#" + word;
                return '<option value="' + wordWithIndex + '">' + word + '</option>';
            }).join('')
            document.getElementById('data-5').innerHTML = dataDropdwon;
            document.getElementById('till-5').innerHTML = dataDropdwon

            document.getElementById('priority-5').value = 5
            document.getElementById('linefeed-5').value = 4

        } else {
            alert("please fill all the fields")
            totalField = totalField - 1
        }

    }
}

function changeType() {
    document.getElementById('message').value = ""
    document.getElementById('add-type').style.display = "block"
    document.getElementById('field-2').style.display = "none"
    document.getElementById('field-3').style.display = "none"
    document.getElementById('field-4').style.display = "none"
    document.getElementById('field-5').style.display = "none"
    var inputFields = document.querySelectorAll('#label input, #label select');
    console.log(inputFields);
    inputFields.forEach(function (element) {
        console.log(element);
        element.value = ""
    });
    document.getElementById('data-type').disabled = true
    totalField = 0

}

function addType() {
    document.getElementById('data-type').disabled = false
    getAll()
}

function submitForm() {
    if (totalField == 0) {
        label1 = document.getElementById('label-1').value
        if (label1 != "") {
            getAll()
            baseURL = "http://127.0.0.1:5501/new%20design/index.html?" + url
            window.location.href = baseURL
        } else {
            alert("label cannot be empty")
        }
    } else if (totalField == 1) {
        label1 = document.getElementById('label-2').value
        if (label1 != "") {
            getAll()
            baseURL = "http://127.0.0.1:5501/new%20design/index.html?" + url
            window.location.href = baseURL
        } else {
            alert("label cannot be empty")
        }
    } else if (totalField == 2) {
        label1 = document.getElementById('label-3').value
        if (label1 != "") {
            getAll()
            baseURL = "http://127.0.0.1:5501/new%20design/index.html?" + url
            window.location.href = baseURL
        } else {
            alert("label cannot be empty")
        }
    } else if (totalField == 3) {
        label1 = document.getElementById('label-4').value
        if (label1 != "") {
            getAll()
            baseURL = "http://127.0.0.1:5501/new%20design/index.html?" + url
            window.location.href = baseURL
        } else {
            alert("label cannot be empty")
        }
    } else if (totalField == 4) {
        label1 = document.getElementById('label-5').value
        if (label1 != "") {
            getAll()
            baseURL = "http://127.0.0.1:5501/new%20design/index.html?" + url
            window.location.href = baseURL
        } else {
            alert("label cannot be empty")
        }
    }
}

function getAll() {
    var inputFields = document.querySelectorAll('#form input, #form select');
    var formDataArray = [];
    inputFields.forEach(function (element) {
        var formData = {};
        formData[element.name] = element.value;
        formDataArray.push(formData);
    });
    console.log(formDataArray);
    // You can now use formDataArray as needed
    function filterEmptyValues(array) {
        return array.filter(obj => {
            // Check if every value in the object is not empty
            return Object.values(obj).every(value => value !== '');
        });
    }
    const filteredArray = filterEmptyValues(formDataArray);
    console.log(filteredArray);
    function convertToQueryString(array) {
        return array.map(obj => Object.values(obj).join('&'));
    }
    const queryStringArray = convertToQueryString(filteredArray).join('&')
    url = url + queryStringArray + "#$"
    console.log(url);
}

function preview() {
    label1 = document.getElementById('label-1').value
    data1 = document.getElementById('data-1').value
    till1 = document.getElementById('till-1').value
    sIndex1 = document.getElementById('data-1').selectedIndex
    eIndex1 = document.getElementById('till-1').selectedIndex
    value1 = messageArr.slice(sIndex1 + 1, eIndex1)


    label2 = document.getElementById('label-2').value
    data2 = document.getElementById('data-2').value
    till2 = document.getElementById('till-2').value
    sIndex2 = document.getElementById('data-2').selectedIndex
    eIndex2 = document.getElementById('till-2').selectedIndex
    if (sIndex2 == -1 && eIndex2 == -1) {
        sIndex2 = 0
        eIndex2 = 0
    }
    value2 = messageArr.slice(sIndex2 + 1, eIndex2)


    label3 = document.getElementById('label-3').value
    data3 = document.getElementById('data-3').value
    till3 = document.getElementById('till-3').value
    sIndex3 = document.getElementById('data-3').selectedIndex
    eIndex3 = document.getElementById('till-3').selectedIndex
    if (sIndex3 == -1 && eIndex3 == -1) {
        sIndex3 = 0
        eIndex3 = 0
    }
    value3 = messageArr.slice(sIndex3 + 1, eIndex3)


    label4 = document.getElementById('label-4').value
    data4 = document.getElementById('data-4').value
    till4 = document.getElementById('till-4').value
    sIndex4 = document.getElementById('data-4').selectedIndex
    eIndex4 = document.getElementById('till-4').selectedIndex
    if (sIndex4 == -1 && eIndex4 == -1) {
        sIndex4 = 0
        eIndex4 = 0
    }
    value4 = messageArr.slice(sIndex4 + 1, eIndex4)


    label5 = document.getElementById('label-5').value
    data5 = document.getElementById('data-5').value
    till5 = document.getElementById('till-5').value
    sIndex5 = document.getElementById('data-5').selectedIndex
    eIndex5 = document.getElementById('till-5').selectedIndex
    if (sIndex5 == -1 && eIndex5 == -1) {
        sIndex5 = 0
        eIndex5 = 0
    }
    value5 = messageArr.slice(sIndex5 + 1, eIndex5)

    document.getElementById('label_1').innerHTML = label1
    document.getElementById('value_1').innerHTML = value1

    document.getElementById('label_2').innerHTML = label2
    document.getElementById('value_2').innerHTML = value2

    document.getElementById('label_3').innerHTML = label3
    document.getElementById('value_3').innerHTML = value3

    document.getElementById('label_4').innerHTML = label4
    document.getElementById('value_4').innerHTML = value4

    document.getElementById('label_5').innerHTML = label5
    document.getElementById('value_5').innerHTML = value5

    openPopup()

}

function openPopup() {
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}

