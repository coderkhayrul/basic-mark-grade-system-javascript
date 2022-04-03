// Bangla 1st Paper Clear
function clear() {
    document.getElementById('b-1-total-mark').value = '';
    document.getElementById('b-1-point').value = '';
    document.getElementById('b-1-grade').value = '';
}

// GET BANGLE FIRST PAPER RESULT
function bangla_first(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('b-1-t-mark').value);
    var practical_mark= parseInt(document.getElementById('b-1-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('b-1-t-mark').value = '';
        document.getElementById('b-1-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="4.00";
        document.getElementById('b-1-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="3.75";
        document.getElementById('b-1-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="3.50";
        document.getElementById('b-1-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="3.25";
        document.getElementById('b-1-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="3.00";
        document.getElementById('b-1-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="2.75";
        document.getElementById('b-1-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="2.50";
        document.getElementById('b-1-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="2.25";
        document.getElementById('b-1-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="2.00";
        document.getElementById('b-1-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('b-1-total-mark').value=result;
        document.getElementById('b-1-point').value="0.00";
        document.getElementById('b-1-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('b-1-t-mark').value = '';
        document.getElementById('b-1-p-mark').value = '';
        clear();
    }
}

// GET BANGLE SECOND PAPER RESULT
function bangla_second(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('b-2-t-mark').value);
    var practical_mark= parseInt(document.getElementById('b-2-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('b-2-t-mark').value = '';
        document.getElementById('b-2-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="4.00";
        document.getElementById('b-2-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="3.75";
        document.getElementById('b-2-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="3.50";
        document.getElementById('b-2-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="3.25";
        document.getElementById('b-2-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="3.00";
        document.getElementById('b-2-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="2.75";
        document.getElementById('b-2-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="2.50";
        document.getElementById('b-2-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="2.25";
        document.getElementById('b-2-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="2.00";
        document.getElementById('b-2-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('b-2-total-mark').value=result;
        document.getElementById('b-2-point').value="0.00";
        document.getElementById('b-2-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('b-2-t-mark').value = '';
        document.getElementById('b-2-p-mark').value = '';
        clear();
    }
}

// GET ENGLISH FIRST PAPER RESULT
function english_first(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('e-1-t-mark').value);
    var practical_mark= parseInt(document.getElementById('e-1-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('e-1-t-mark').value = '';
        document.getElementById('e-1-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="4.00";
        document.getElementById('e-1-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="3.75";
        document.getElementById('e-1-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="3.50";
        document.getElementById('e-1-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="3.25";
        document.getElementById('e-1-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="3.00";
        document.getElementById('e-1-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="2.75";
        document.getElementById('e-1-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="2.50";
        document.getElementById('e-1-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="2.25";
        document.getElementById('e-1-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="2.00";
        document.getElementById('e-1-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('e-1-total-mark').value=result;
        document.getElementById('e-1-point').value="0.00";
        document.getElementById('e-1-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('e-1-t-mark').value = '';
        document.getElementById('e-1-p-mark').value = '';
        clear();
    }
}

// GET ENGLISH SECOND PAPER RESULT
function english_second(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('e-2-t-mark').value);
    var practical_mark= parseInt(document.getElementById('e-2-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('e-2-t-mark').value = '';
        document.getElementById('e-2-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="4.00";
        document.getElementById('e-2-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="3.75";
        document.getElementById('e-2-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="3.50";
        document.getElementById('e-2-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="3.25";
        document.getElementById('e-2-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="3.00";
        document.getElementById('e-2-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="2.75";
        document.getElementById('e-2-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="2.50";
        document.getElementById('e-2-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="2.25";
        document.getElementById('e-2-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="2.00";
        document.getElementById('e-2-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('e-2-total-mark').value=result;
        document.getElementById('e-2-point').value="0.00";
        document.getElementById('e-2-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('e-2-t-mark').value = '';
        document.getElementById('e-2-p-mark').value = '';
        clear();
    }
}

// GET MATHMETICS RESULT
function mathmetics(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('m-t-mark').value);
    var practical_mark= parseInt(document.getElementById('m-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('m-t-mark').value = '';
        document.getElementById('m-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="4.00";
        document.getElementById('m-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="3.75";
        document.getElementById('m-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="3.50";
        document.getElementById('m-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="3.25";
        document.getElementById('m-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="3.00";
        document.getElementById('m-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="2.75";
        document.getElementById('m-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="2.50";
        document.getElementById('m-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="2.25";
        document.getElementById('m-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="2.00";
        document.getElementById('m-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('m-total-mark').value=result;
        document.getElementById('m-point').value="0.00";
        document.getElementById('m-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('m-t-mark').value = '';
        document.getElementById('m-p-mark').value = '';
        clear();
    }
}

// GET PHYSICS RESULT
function physics(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('p-t-mark').value);
    var practical_mark= parseInt(document.getElementById('p-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('p-t-mark').value = '';
        document.getElementById('p-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="4.00";
        document.getElementById('p-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="3.75";
        document.getElementById('p-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="3.50";
        document.getElementById('p-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="3.25";
        document.getElementById('p-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="3.00";
        document.getElementById('p-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="2.75";
        document.getElementById('p-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="2.50";
        document.getElementById('p-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="2.25";
        document.getElementById('p-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="2.00";
        document.getElementById('p-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('p-total-mark').value=result;
        document.getElementById('p-point').value="0.00";
        document.getElementById('p-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('p-t-mark').value = '';
        document.getElementById('p-p-mark').value = '';
        clear();
    }
}

// GET CHEMISTRY RESULT
function chemistry(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('c-t-mark').value);
    var practical_mark= parseInt(document.getElementById('c-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('c-t-mark').value = '';
        document.getElementById('c-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="4.00";
        document.getElementById('c-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="3.75";
        document.getElementById('c-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="3.50";
        document.getElementById('c-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="3.25";
        document.getElementById('c-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="3.00";
        document.getElementById('c-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="2.75";
        document.getElementById('c-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="2.50";
        document.getElementById('c-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="2.25";
        document.getElementById('c-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="2.00";
        document.getElementById('c-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('c-total-mark').value=result;
        document.getElementById('c-point').value="0.00";
        document.getElementById('c-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('c-t-mark').value = '';
        document.getElementById('c-p-mark').value = '';
        clear();
    }
}

// GET ICT RESULT
function ict(){
    
    // Get Input Value
    var theory_mark = parseInt(document.getElementById('i-t-mark').value);
    var practical_mark= parseInt(document.getElementById('i-p-mark').value);
    
    // Input Value Addition
    var result = theory_mark + practical_mark;

    // Grade System
    if (result>=101) {
        alert('Please Enter Valid Mark');
        document.getElementById('i-t-mark').value = '';
        document.getElementById('i-p-mark').value = '';
        clear()
    }else if (result>=80) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="4.00";
        document.getElementById('i-grade').value="A+";
    }else if (result >= 79) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="3.75";
        document.getElementById('i-grade').value="A";
    }else if (result >= 74) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="3.50";
        document.getElementById('i-grade').value="A-";
    }else if (result >= 69) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="3.25";
        document.getElementById('i-grade').value="B+";
    }else if (result >= 64) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="3.00";
        document.getElementById('i-grade').value="B";
    }else if (result >= 59) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="2.75";
        document.getElementById('i-grade').value="B-";
    }else if (result >= 54) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="2.50";
        document.getElementById('i-grade').value="C+";
    }else if (result >= 49) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="2.25";
        document.getElementById('i-grade').value="C";
    }else if (result >= 40) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="2.00";
        document.getElementById('i-grade').value="D";
    }else if (result >= 0) {
        document.getElementById('i-total-mark').value=result;
        document.getElementById('i-point').value="0.00";
        document.getElementById('i-grade').value="F";
    }else{
        alert("Please Enter Valid Mark");
        document.getElementById('i-t-mark').value = '';
        document.getElementById('i-p-mark').value = '';
        clear();
    }
}

function calculate(){
    
    // FINAL RESULT
    var bangla1_result =  document.getElementById('b-1-total-mark').value;
    var bangla2_result =  document.getElementById('b-2-total-mark').value;
    var english1_result =  document.getElementById('e-1-total-mark').value;
    var english2_result =  document.getElementById('e-2-total-mark').value;
    var mathmetic_result =  document.getElementById('m-total-mark').value;
    var physics_result =  document.getElementById('p-total-mark').value;
    var chemistry_result =  document.getElementById('c-total-mark').value;
    var ict_result =  document.getElementById('i-total-mark').value;

    var full_result = parseInt(bangla1_result) + parseInt(bangla2_result) + parseInt(english1_result) + parseInt(english2_result) + parseInt(mathmetic_result) + parseInt(physics_result) +  parseInt(chemistry_result) +  parseInt(ict_result);
    document.getElementById('total-mark').value = full_result;

    // FINAL POINT
    var bangla1_point =  document.getElementById('b-1-point').value;
    var bangla2_point =  document.getElementById('b-2-point').value;
    var english1_point =  document.getElementById('e-1-point').value;
    var english2_point =  document.getElementById('e-2-point').value;
    var mathmetic_point =  document.getElementById('m-point').value;
    var physics_point =  document.getElementById('p-point').value;
    var chemistry_point =  document.getElementById('c-point').value;
    var ict_point =  document.getElementById('i-point').value;

    var full_point = parseFloat(bangla1_point) + parseFloat(bangla2_point) + parseFloat(english1_point) + parseFloat(english2_point) + parseFloat(mathmetic_point) + parseFloat(physics_point) +  parseFloat(chemistry_point) +  parseFloat(ict_point);
    document.getElementById('total-point').value = full_point;

    // FINAL GRADE
    var full_grade = full_point / 8;
    document.getElementById('total-grade').value = full_grade;
}