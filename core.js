(function () {
  'use strict';

  // ═══════════════ الثوابت ═══════════════
  const APP_NAME = 'الذكي';
  const APP_VERSION = '5.0.0';

  const VIEW_TITLES = {
    home: 'الذكي',
    new: 'تحضير جديد',
    result: 'الخطة الدرسية',
    archive: 'الأرشيف',
    library: 'المكتبة',
    settings: 'الإعدادات',
    bank: 'دروس واختبارات'
  };

  // ═══════════════ التنقل ═══════════════
  function showView(name) {
    $$('.view').forEach(v => {
      v.hidden = v.dataset.view !== name;
    });
    $('#appbarTitle').textContent = VIEW_TITLES[name] || 'الذكي';
    $('#btnBack').hidden = name === 'home';
    window.scrollTo(0, 0);
  }

  // ... بقية الكود ...

  // ═══════════════ ربط الدرس بالواقع ═══════════════
  window.generateRealWorldConnection = async function(e) {
    // ...
    const styledHtml = `
      <style>...</style>
      <div class="real-world-body">${parsedContent}</div>
      <div style="margin-top: 40px; text-align: center; padding-top: 15px; border-top: 2px dashed #cbd5e1; color: #64748b; font-size: 14px; font-weight: bold;">
        ✨ تم التوليد بواسطة المساعد الذكي - تطبيق الذكي
      </div>
    `;
    // ...
  };

  // ═══════════════ الموجه الشخصي ═══════════════
  window.generateTeachingMentor = async function(e) {
    // ...
    const styledHtml = `
      <style>...</style>
      <div class="mentor-body">${parsedContent}</div>
      <div style="margin-top: 40px; text-align: center; padding-top: 15px; border-top: 2px dashed #cbd5e1; color: #64748b; font-size: 14px; font-weight: bold;">
        👨‍🏫 تم إعداد هذا التوجيه بواسطة المساعد الذكي - تطبيق الذكي (Offline-First Ready)
      </div>
    `;
    // ...
  };

  // ═══════════════ البحث الشامل ═══════════════
  async function openGlobalSearch() {
    // ...
    resultsDiv.innerHTML = '<div style="text-align: center; color: #94A3B8; font-weight: bold; margin-top: 50px; font-size: 1.2rem;">🔍 اكتب كلمة للبحث في جميع أقسام الذكي...</div>';
    // ...
  }

  // ═══════════════ زر الرجوع ═══════════════
  document.addEventListener('deviceready', function () {
    document.addEventListener('backbutton', function (e) {
      e.preventDefault();
      if (closeTopmostOverlay()) return;
      if (state.viewStack.length > 1) {
        goBack();
        return;
      }
      if (navigator.app && navigator.app.exitApp) {
        if (confirm('هل تريد الخروج من تطبيق الذكي؟')) navigator.app.exitApp();
      }
    }, false);
  }, false);

  // ... بقية الكود ...
})();