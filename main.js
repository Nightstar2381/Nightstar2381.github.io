document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // ป้องกันการรีเฟรชหน้าเพจเมื่อกดปุ่มค้นหา
    
    const query = document.getElementById('searchInput').value.trim().toLowerCase();  // รับคำค้นจากช่อง input
  
    // ข้อมูลที่เราต้องการค้นหา
    const data = [
      { name: 'ถังสีฟ้า กระดาษ', url: 'blue.html' },
      { name: 'ถังสีเขียว เศษผลไม้', url: 'green.html' },
      { name: 'ถังสีเหลือง ขวดพลาสติก', url: 'yellow.html' },
      { name: 'ถังสีแดง สารเคมี ถ่าน แบตเตอรี่', url: 'red.html' },
    ];
  
    // ค้นหาข้อมูลที่ตรงกับคำค้น
    const result = data.filter(item => item.name.toLowerCase().includes(query));
  
    if (result.length > 0) {
      window.location.href = result[0].url;  // เปลี่ยนเส้นทางไปยังหน้าที่ตรงกับคำค้น
    } else {
      // แสดง custom alert เมื่อไม่พบข้อมูล
      document.getElementById('alertMessage').textContent = '!!!ไม่พบข้อมูลที่ตรงกับคำค้นหา!!!';
      document.getElementById('customAlert').style.display = 'block';
    }
  });
  
  // ปิด alert เมื่อกดปุ่ม "ปิด"
  document.getElementById('closeAlert').addEventListener('click', function() {
    document.getElementById('customAlert').style.display = 'none';
  });
  
  function activeShowPage() {
    let content = setTimeout(showPage, 1000);
}

  function showPage() {
    document.getElementById('preloader').style.display = 'none';
    document.getElementById('pagecontent').style.display = 'block';
 }