// Fungsi untuk menghitung persegi
function calculateSquare() {
    const side = parseFloat(document.getElementById('square-side').value);
    if (isNaN(side) || side <= 0) {
        alert('Masukkan panjang sisi yang valid!');
        return;
    }
    
    const area = side * side;
    const perimeter = 4 * side;
    
    document.getElementById('square-area').textContent = area.toFixed(2);
    document.getElementById('square-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('square-result').style.display = 'block';
}

// Fungsi untuk menghitung persegi panjang
function calculateRectangle() {
    const length = parseFloat(document.getElementById('rectangle-length').value);
    const width = parseFloat(document.getElementById('rectangle-width').value);
    
    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        alert('Masukkan panjang dan lebar yang valid!');
        return;
    }
    
    const area = length * width;
    const perimeter = 2 * (length + width);
    
    document.getElementById('rectangle-area').textContent = area.toFixed(2);
    document.getElementById('rectangle-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('rectangle-result').style.display = 'block';
}

// Fungsi untuk menghitung segitiga
function calculateTriangle() {
    const base = parseFloat(document.getElementById('triangle-base').value);
    const height = parseFloat(document.getElementById('triangle-height').value);
    const side1 = parseFloat(document.getElementById('triangle-side1').value);
    const side2 = parseFloat(document.getElementById('triangle-side2').value);
    
    if (isNaN(base) || isNaN(height) || isNaN(side1) || isNaN(side2) || 
        base <= 0 || height <= 0 || side1 <= 0 || side2 <= 0) {
        alert('Masukkan nilai yang valid untuk semua sisi dan tinggi!');
        return;
    }
    
    const area = 0.5 * base * height;
    const perimeter = base + side1 + side2;
    
    document.getElementById('triangle-area').textContent = area.toFixed(2);
    document.getElementById('triangle-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('triangle-result').style.display = 'block';
}

// Fungsi untuk menghitung lingkaran
function calculateCircle() {
    const radius = parseFloat(document.getElementById('circle-radius').value);
    
    if (isNaN(radius) || radius <= 0) {
        alert('Masukkan jari-jari yang valid!');
        return;
    }
    
    const area = Math.PI * radius * radius;
    const perimeter = 2 * Math.PI * radius;
    
    document.getElementById('circle-area').textContent = area.toFixed(2);
    document.getElementById('circle-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('circle-result').style.display = 'block';
}

// Fungsi untuk menghitung jajar genjang
function calculateParallelogram() {
    const base = parseFloat(document.getElementById('parallelogram-base').value);
    const height = parseFloat(document.getElementById('parallelogram-height').value);
    const side = parseFloat(document.getElementById('parallelogram-side').value);
    
    if (isNaN(base) || isNaN(height) || isNaN(side) || base <= 0 || height <= 0 || side <= 0) {
        alert('Masukkan nilai yang valid untuk alas, tinggi, dan sisi miring!');
        return;
    }
    
    const area = base * height;
    const perimeter = 2 * (base + side);
    
    document.getElementById('parallelogram-area').textContent = area.toFixed(2);
    document.getElementById('parallelogram-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('parallelogram-result').style.display = 'block';
}

// Fungsi untuk menghitung trapesium
function calculateTrapezoid() {
    const base1 = parseFloat(document.getElementById('trapezoid-base1').value);
    const base2 = parseFloat(document.getElementById('trapezoid-base2').value);
    const height = parseFloat(document.getElementById('trapezoid-height').value);
    const side1 = parseFloat(document.getElementById('trapezoid-side1').value);
    const side2 = parseFloat(document.getElementById('trapezoid-side2').value);
    
    if (isNaN(base1) || isNaN(base2) || isNaN(height) || isNaN(side1) || isNaN(side2) || 
        base1 <= 0 || base2 <= 0 || height <= 0 || side1 <= 0 || side2 <= 0) {
        alert('Masukkan nilai yang valid untuk semua sisi dan tinggi!');
        return;
    }
    
    const area = 0.5 * (base1 + base2) * height;
    const perimeter = base1 + base2 + side1 + side2;
    
    document.getElementById('trapezoid-area').textContent = area.toFixed(2);
    document.getElementById('trapezoid-perimeter').textContent = perimeter.toFixed(2);
    document.getElementById('trapezoid-result').style.display = 'block';
} 