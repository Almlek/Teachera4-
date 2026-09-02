// الاستماع للرسائل القادمة من الخيط الرئيسي
self.onmessage = function(event) {
    const data = event.data; // البيانات المرسلة
    
    // تنفيذ العملية الثقيلة (مثال: حساب مجموع أعداد)
    let result = 0;
    for (let i = 0; i < data; i++) {
        result += i;
    }

    // إرسال النتيجة بعد الانتهاء إلى الخيط الرئيسي
    self.postMessage(result);
};
