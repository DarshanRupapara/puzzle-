let i = 230;
function game(id) {
    if (id == 8) {

        if (document.getElementById('9').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('9').innerText = document.getElementById('8').innerText

            document.getElementById('bak-9').style.backgroundColor = 'black'
            document.getElementById('9').style.color = 'white'
            document.getElementById('bak-8').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('8').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;

        }
        else if (document.getElementById('7').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('7').innerText = document.getElementById('8').innerText

            document.getElementById('bak-7').style.backgroundColor = 'black'
            document.getElementById('7').style.color = 'white'
            document.getElementById('bak-8').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('8').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;

        }
        else if (document.getElementById('5').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('5').innerText = document.getElementById('8').innerText

            document.getElementById('bak-5').style.backgroundColor = 'black'
            document.getElementById('5').style.color = 'white'
            document.getElementById('bak-8').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('8').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;

        }


    }
    else if (id == 9) {
        if (document.getElementById('8').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('8').innerText = document.getElementById('9').innerText

            document.getElementById('bak-8').style.backgroundColor = 'black'
            document.getElementById('8').style.color = 'white'
            document.getElementById('bak-9').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('9').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('6').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('6').innerText = document.getElementById('9').innerText

            document.getElementById('bak-6').style.backgroundColor = 'black'
            document.getElementById('6').style.color = 'white'
            document.getElementById('bak-9').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('9').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 7) {
        if (document.getElementById('4').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('4').innerText = document.getElementById('7').innerText

            document.getElementById('bak-4').style.backgroundColor = 'black'
            document.getElementById('4').style.color = 'white'
            document.getElementById('bak-7').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('7').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('8').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('8').innerText = document.getElementById('7').innerText

            document.getElementById('bak-8').style.backgroundColor = 'black'
            document.getElementById('8').style.color = 'white'
            document.getElementById('bak-7').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('7').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 6) {
        if (document.getElementById('5').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('5').innerText = document.getElementById('6').innerText

            document.getElementById('bak-5').style.backgroundColor = 'black'
            document.getElementById('5').style.color = 'white'
            document.getElementById('bak-6').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('6').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('3').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('3').innerText = document.getElementById('6').innerText

            document.getElementById('bak-3').style.backgroundColor = 'black'
            document.getElementById('3').style.color = 'white'
            document.getElementById('bak-6').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('6').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('9').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('9').innerText = document.getElementById('6').innerText

            document.getElementById('bak-9').style.backgroundColor = 'black'
            document.getElementById('9').style.color = 'white'
            document.getElementById('bak-6').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('6').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 5) {
        if (document.getElementById('2').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('2').innerText = document.getElementById('5').innerText

            document.getElementById('bak-2').style.backgroundColor = 'black'
            document.getElementById('2').style.color = 'white'
            document.getElementById('bak-5').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('5').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('4').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('4').innerText = document.getElementById('5').innerText

            document.getElementById('bak-4').style.backgroundColor = 'black'
            document.getElementById('4').style.color = 'white'
            document.getElementById('bak-5').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('5').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('6').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('6').innerText = document.getElementById('5').innerText

            document.getElementById('bak-6').style.backgroundColor = 'black'
            document.getElementById('6').style.color = 'white'
            document.getElementById('bak-5').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('5').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('8').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('8').innerText = document.getElementById('5').innerText

            document.getElementById('bak-8').style.backgroundColor = 'black'
            document.getElementById('8').style.color = 'white'
            document.getElementById('bak-5').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('5').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 4) {

        if (document.getElementById('1').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('1').innerText = document.getElementById('4').innerText

            document.getElementById('bak-1').style.backgroundColor = 'black'
            document.getElementById('1').style.color = 'white'
            document.getElementById('bak-4').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('4').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('5').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('5').innerText = document.getElementById('4').innerText

            document.getElementById('bak-5').style.backgroundColor = 'black'
            document.getElementById('5').style.color = 'white'
            document.getElementById('bak-4').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('4').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('7').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('7').innerText = document.getElementById('4').innerText

            document.getElementById('bak-7').style.backgroundColor = 'black'
            document.getElementById('7').style.color = 'white'
            document.getElementById('bak-4').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('4').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }

    }
    else if (id == 3) {
        if (document.getElementById('2').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('2').innerText = document.getElementById('3').innerText

            document.getElementById('bak-2').style.backgroundColor = 'black'
            document.getElementById('2').style.color = 'white'
            document.getElementById('bak-3').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('3').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('6').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('6').innerText = document.getElementById('3').innerText

            document.getElementById('bak-6').style.backgroundColor = 'black'
            document.getElementById('6').style.color = 'white'
            document.getElementById('bak-3').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('3').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 2) {

        if (document.getElementById('1').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('1').innerText = document.getElementById('2').innerText

            document.getElementById('bak-1').style.backgroundColor = 'black'
            document.getElementById('1').style.color = 'white'
            document.getElementById('bak-2').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('2').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('3').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('3').innerText = document.getElementById('2').innerText

            document.getElementById('bak-3').style.backgroundColor = 'black'
            document.getElementById('3').style.color = 'white'
            document.getElementById('bak-2').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('2').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('5').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('5').innerText = document.getElementById('2').innerText

            document.getElementById('bak-5').style.backgroundColor = 'black'
            document.getElementById('5').style.color = 'white'
            document.getElementById('bak-2').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('2').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
    }
    else if (id == 1) {

        if (document.getElementById('2').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "" && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('2').innerText = document.getElementById('1').innerText

            document.getElementById('bak-2').style.backgroundColor = 'black'
            document.getElementById('2').style.color = 'white'
            document.getElementById('bak-1').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('1').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves  : ' + i;


        }
        else if (document.getElementById('4').innerText == "" && i <= 230 && i > 0 && document.getElementById('win').innerHTML === "") {
            i--
            document.getElementById('4').innerText = document.getElementById('1').innerText

            document.getElementById('bak-4').style.backgroundColor = 'black'
            document.getElementById('4').style.color = 'white'
            document.getElementById('bak-1').style.backgroundColor = 'rgb(211, 205, 205)'
            document.getElementById('1').innerHTML = ''
            document.getElementById('count').innerHTML = 'Total Remaining moves   : ' + i;


        }

    }

    if (document.getElementById('1').innerHTML === '1'
        && document.getElementById('2').innerHTML === '2'
        && document.getElementById('3').innerHTML === '3'
        && document.getElementById('4').innerHTML === '4'
        && document.getElementById('5').innerHTML === '5'
        && document.getElementById('6').innerHTML === '6'
        && document.getElementById('7').innerHTML === '7'
        && document.getElementById('8').innerHTML === '8'
        && document.getElementById('9').innerHTML === '') {

        document.getElementById('win').innerHTML = 'You won this game in ' + (230 - i) + ' moves';
        // i = 231;
    }
    else if (i === 0) {
        document.getElementById('win').innerHTML = 'Sorry You loss'
        document.getElementById('count').style.color = 'rgb(209, 173, 173)'
    }

}
