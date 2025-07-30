document.getElementById("checkout").addEventListener("click", async () => {
  try {
    const res = await fetch("http://localhost:4242/create-checkout-session", {
      method: "POST",
    });

    const data = await res.json();

    if (data.url) {
      // ✅ تحويل المستخدم إلى صفحة الدفع من Stripe
      window.location.href = data.url;
    } else {
      alert("❌ لم يتم استلام رابط الدفع");
      console.error("❌ الرد من السيرفر:", data);
    }
  } catch (err) {
    alert("❌ حصل خطأ في الاتصال بالسيرفر");
    console.error("❌ الخطأ:", err);
  }
});