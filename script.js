function validateForm() {
         
            const pib = document.getElementById('pib');
            const group = document.getElementById('group');
            const phone = document.getElementById('phone');
            const address = document.getElementById('address');
            const email = document.getElementById('email');

        
            
        
            const regPib = /^[a-zA-Zа-яА-ЯїЇіІєЄґҐ']+\s[a-zA-Zа-яА-ЯїЇіІєЄґҐ']\.[a-zA-Zа-яА-ЯїЇіІєЄґҐ']\.$/;
            
     
            const regGroup = /^[a-zA-Zа-яА-ЯїЇіІєЄґҐ]{2}-\d{2}$/;

          
            const regPhone = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

     
            const regAddress = /^м\.\s[a-zA-Zа-яА-ЯїЇіІєЄґҐ\s-]+$/;

        
            const regEmail = /^\w+@\w+\.com$/;

            let isValid = true;
            let resultText = "Введені дані:\n";

        
            function checkField(field, regex, fieldName) {
                if (regex.test(field.value)) {
                    field.classList.remove('error');
                    resultText += `${fieldName}: ${field.value}\n`;
                    return true;
                } else {
                    field.classList.add('error');
                    return false;
                }
            }

      
            isValid &= checkField(pib, regPib, "ПІБ");
            isValid &= checkField(group, regGroup, "Група");
            isValid &= checkField(phone, regPhone, "Телефон");
            isValid &= checkField(address, regAddress, "Адреса");
            isValid &= checkField(email, regEmail, "E-mail");

            if (isValid) {
          
                const win = window.open("", "ResultWindow", "width=400,height=400");
                win.document.write("<pre>" + resultText + "</pre>");
            } else {
                alert("Будь ласка, виправте помилки, виділені червоним.");
            }
        }

       
        
        const table = document.getElementById('myTable');
        const variant = 10; 

   
        let counter = 1;
        for (let i = 0; i < 6; i++) { 
            const row = document.createElement('tr');
            for (let j = 0; j < 6; j++) {
                const cell = document.createElement('td');
                cell.textContent = counter;
                cell.id = 'cell-' + counter; 
                row.appendChild(cell);
                counter++;
            }
            table.appendChild(row);
        }

        
        const targetCell = document.getElementById('cell-' + variant);

   
        function getRandomColor() {
            return '#' + Math.floor(Math.random()*16777215).toString(16);
        }

        if (targetCell) {
         
            targetCell.addEventListener('mouseover', function() {
                this.style.backgroundColor = getRandomColor();
            });

            targetCell.addEventListener('click', function() {
                const colorPicker = document.getElementById('colorPicker');
                this.style.backgroundColor = colorPicker.value;
                this.style.color = 'black'; 
            });

         
            targetCell.addEventListener('dblclick', function() {
                const parentRow = this.parentElement; 
                const cells = Array.from(parentRow.children); 
                const startIndex = cells.indexOf(this); 
                
                const colorPicker = document.getElementById('colorPicker');
                const selectedColor = colorPicker.value;

                
                for (let i = startIndex; i < cells.length; i += 2) {
                    cells[i].style.backgroundColor = selectedColor;
                    cells[i].style.color = 'white'; 
                }
            });
        }