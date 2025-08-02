const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// السماح بقراءة البيانات من النماذج
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// خدمة ملفات الواجهة من مجلد public
app.use(express.static(path.join(__dirname, 'public')));

// الراوت الرئيسي - index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// صفحة النجاح - success.html
app.get('/success', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// صفحة الإلغاء - cancel.html
app.get('/cancel', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'cancel.html'));
});

// بدء تشغيل الخادم
app.listen(PORT, () => {
  console.log(`✅ الخادم يعمل على http://localhost:${PORT}`);
});