# MemoryBook — Korea Travel Photobook Service

한국 여행 포토북 서비스 — 외국 관광객 대상

## 🚀 로컬 실행 (5분)

### 1. Node.js 설치 확인
```bash
node -v  # v18 이상 필요
```
없으면 https://nodejs.org 에서 다운로드

### 2. 의존성 설치 및 실행
```bash
npm install
npm run dev
```
→ http://localhost:5173 에서 확인

---

## 💳 토스페이먼츠 연동 설정

### 1. 가맹점 신청
https://developers.tosspayments.com/ 가입 후 가맹점 신청
- 사업자등록증 필요
- 심사 1~3일 소요

### 2. 클라이언트 키 교체
`src/app/pages/CheckoutPage.tsx` 파일에서:
```typescript
// 이 줄을 찾아서
const TOSS_CLIENT_KEY = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";

// 발급받은 실제 키로 교체
const TOSS_CLIENT_KEY = "live_ck_여기에실제키입력";
```

### 지원 결제 수단
- ✅ 알리페이 (支付宝) — 중국 본토
- ✅ 위챗페이 (微信支付) — 중국 본토
- ✅ LINE Pay — 대만/일본
- ✅ Visa / Mastercard / UnionPay
- ✅ Apple Pay / Google Pay

---

## ☁️ Vercel 배포 (무료, 10분)

### 방법 1 — GitHub 연동 (추천)
1. GitHub에 코드 업로드
2. https://vercel.com 에서 "New Project"
3. GitHub 저장소 선택 → Deploy
4. 자동으로 도메인 생성: `your-app.vercel.app`

### 방법 2 — Vercel CLI
```bash
npm install -g vercel
vercel
```

---

## 🎨 커스터마이징

### 브랜드명 변경
- `src/app/components/Navigation.tsx` → "MemoryBook" 수정
- `src/app/pages/LandingPage.tsx` → 브랜드명/카피 수정
- `index.html` → `<title>` 태그 수정

### 가격 변경
- `src/app/pages/ProductOptionsPage.tsx` → `basePrice` 수정
- `src/app/pages/CheckoutPage.tsx` → `bookPrice` 수정

### 색상 변경
- `src/styles/theme.css` → CSS 변수 수정

---

## 📦 다음 단계 (Gelato 연동)

### 자동 인쇄 주문 연동
1. https://gelato.com 계정 생성 (무료)
2. API 키 발급
3. `OrderConfirmationPage.tsx`에서 결제 완료 후 Gelato API 호출

```typescript
// 결제 완료 후 자동 발주 예시
const orderGelato = async (orderDetails) => {
  const response = await fetch('https://order.gelatoapis.com/v4/orders', {
    method: 'POST',
    headers: {
      'X-API-KEY': 'your-gelato-api-key',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      orderReferenceId: orderDetails.orderId,
      customerReferenceId: orderDetails.email,
      currency: 'USD',
      items: [{
        itemReferenceId: 'photobook-1',
        productUid: 'photobook_softcover_a4_portrait', // Gelato 제품 ID
        quantity: 1,
      }],
      shippingAddress: {
        firstName: orderDetails.firstName,
        lastName: orderDetails.lastName,
        addressLine1: orderDetails.address,
        city: orderDetails.city,
        postCode: orderDetails.postal,
        countryIsoCode: orderDetails.country.toUpperCase(),
        email: orderDetails.email,
      },
    }),
  });
  return response.json();
};
```

---

## 📱 QR 코드 생성 (게스트하우스 배치용)

배포 후 URL을 QR 코드로 만들어 방에 배치:
- https://qr.io 에서 무료 생성
- 중국어/영어 안내 문구와 함께 A4 출력

---

## 🆘 문제 해결

### "Cannot find module" 오류
```bash
npm install
```

### 포트 충돌
```bash
npm run dev -- --port 3000
```

### 빌드 오류
```bash
npm run build 2>&1 | head -50
```

---

## 📞 기술 지원
이 프로젝트는 Claude AI와 함께 구축되었습니다.
추가 기능이 필요하면 Claude에게 요청하세요!
