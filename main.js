// 1. إنشاء كائن Worker وتحديد مسار الملف
const myWorker = new Worker('worker.js');

// 2. إرسال بيانات للـ Worker للبدء في المعالجة
myWorker.postMessage(1000000000); // إرسال الرقم 1 مليار

// 3. استقبال النتيجة عند انتهاء الـ Worker
myWorker.onmessage = function(event) {
    console.log('النتيجة القادمة من الخلفية:', event.data);
};

// 4. معالجة أي أخطاء إن وجدت
myWorker.onerror = function(error) {
    console.error('حدث خطأ في الـ Worker:', error.message);
};
