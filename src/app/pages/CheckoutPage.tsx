import { useState } from "react";
import { useNavigate } from "react-router";
import { Navigation } from "../components/Navigation";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Separator } from "../components/ui/separator";
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Package, Check, AlertCircle } from "lucide-react";

// ─────────────────────────────────────────────
// 토스페이먼츠 설정
// TODO: 발급받은 실제 클라이언트 키로 교체하세요
// https://developers.tosspayments.com/ 에서 발급
const TOSS_CLIENT_KEY = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq"; // 테스트 키
// ─────────────────────────────────────────────

declare global {
  interface Window {
    TossPayments: (clientKey: string) => {
      requestPayment: (method: string, options: Record<string, unknown>) => Promise<void>;
    };
  }
}

const PAYMENT_METHODS = [
  {
    id: "card",
    label: "Credit / Debit Card",
    subLabel: "Visa, Mastercard, UnionPay",
    icon: "💳",
  },
  {
    id: "alipay",
    label: "Alipay 支付宝",
    subLabel: "중국 알리페이",
    icon: "🔵",
  },
  {
    id: "wechatpay",
    label: "WeChat Pay 微信支付",
    subLabel: "위챗페이",
    icon: "🟢",
  },
  {
    id: "linepay",
    label: "LINE Pay",
    subLabel: "대만 / 일본",
    icon: "💚",
  },
];

export function CheckoutPage() {
  const navigate = useNavigate();
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [shipping, setShipping] = useState("standard");

  // 주문 정보
  const bookPrice = 89;
  const shippingPrice = shipping === "express" ? 35 : 15;
  const total = bookPrice + shippingPrice;

  // 폼 상태
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postal: "",
    country: "tw",
  });

  const updateForm = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const isFormValid = () => {
    return form.firstName && form.lastName && form.email &&
      form.phone && form.address && form.city && form.postal;
  };

  const loadTossScript = (): Promise<void> => {
    return new Promise((resolve, reject) => {
      if (window.TossPayments) { resolve(); return; }
      const script = document.createElement("script");
      script.src = "https://js.tosspayments.com/v1/payment";
      script.onload = () => resolve();
      script.onerror = () => reject(new Error("토스페이먼츠 스크립트 로드 실패"));
      document.head.appendChild(script);
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid()) {
      setError("필수 항목을 모두 입력해주세요.");
      return;
    }
    setError("");
    setProcessing(true);

    try {
      await loadTossScript();
      const tossPayments = window.TossPayments(TOSS_CLIENT_KEY);
      const orderId = "MB-" + Date.now() + "-" + Math.random().toString(36).substring(2, 7).toUpperCase();

      // 결제 수단에 따라 분기
      const methodMap: Record<string, string> = {
        card: "카드",
        alipay: "알리페이",
        wechatpay: "위챗페이",
        linepay: "토스페이",
      };

      await tossPayments.requestPayment(methodMap[paymentMethod] || "카드", {
        amount: total * 1300, // USD → KRW 환산 (실제 환율 적용 필요)
        orderId: orderId,
        orderName: "MemoryBook - Korea Travel Photobook",
        customerName: `${form.firstName} ${form.lastName}`,
        customerEmail: form.email,
        successUrl: `${window.location.origin}/order-confirmation?orderId=${orderId}`,
        failUrl: `${window.location.origin}/checkout?error=payment_failed`,
      });

    } catch (err: unknown) {
      const error = err as { code?: string; message?: string };
      if (error.code === "USER_CANCEL") {
        setError("결제가 취소되었습니다.");
      } else {
        setError(error.message || "결제 중 오류가 발생했습니다. 다시 시도해주세요.");
      }
      setProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h1 className="text-5xl tracking-tight mb-4">Checkout</h1>
          <p className="text-xl text-gray-600">
            Complete your order and bring your memories home
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3 text-red-700">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">

              {/* Shipping Information */}
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-medium">1</div>
                  <h3 className="text-2xl">Shipping Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="mb-2 block">First Name *</Label>
                    <Input id="firstName" required value={form.firstName}
                      onChange={(e) => updateForm("firstName", e.target.value)}
                      placeholder="Given name" className="rounded-xl py-6" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="mb-2 block">Last Name *</Label>
                    <Input id="lastName" required value={form.lastName}
                      onChange={(e) => updateForm("lastName", e.target.value)}
                      placeholder="Family name" className="rounded-xl py-6" />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="email" className="mb-2 block">Email *</Label>
                  <Input id="email" type="email" required value={form.email}
                    onChange={(e) => updateForm("email", e.target.value)}
                    placeholder="your@email.com" className="rounded-xl py-6" />
                </div>

                <div className="mt-6">
                  <Label htmlFor="phone" className="mb-2 block">Phone Number *</Label>
                  <Input id="phone" type="tel" required value={form.phone}
                    onChange={(e) => updateForm("phone", e.target.value)}
                    placeholder="+886 912 345 678" className="rounded-xl py-6" />
                </div>

                <div className="mt-6">
                  <Label htmlFor="address" className="mb-2 block">Street Address *</Label>
                  <Input id="address" required value={form.address}
                    onChange={(e) => updateForm("address", e.target.value)}
                    className="rounded-xl py-6" />
                </div>

                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <Label htmlFor="city" className="mb-2 block">City *</Label>
                    <Input id="city" required value={form.city}
                      onChange={(e) => updateForm("city", e.target.value)}
                      className="rounded-xl py-6" />
                  </div>
                  <div>
                    <Label htmlFor="postal" className="mb-2 block">Postal Code *</Label>
                    <Input id="postal" required value={form.postal}
                      onChange={(e) => updateForm("postal", e.target.value)}
                      className="rounded-xl py-6" />
                  </div>
                </div>

                <div className="mt-6">
                  <Label htmlFor="country" className="mb-2 block">Country *</Label>
                  <Select value={form.country} onValueChange={(v) => updateForm("country", v)}>
                    <SelectTrigger id="country" className="rounded-xl py-6">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tw">🇹🇼 Taiwan (台灣)</SelectItem>
                      <SelectItem value="cn">🇨🇳 China (中国)</SelectItem>
                      <SelectItem value="jp">🇯🇵 Japan (日本)</SelectItem>
                      <SelectItem value="hk">🇭🇰 Hong Kong (香港)</SelectItem>
                      <SelectItem value="sg">🇸🇬 Singapore</SelectItem>
                      <SelectItem value="us">🇺🇸 United States</SelectItem>
                      <SelectItem value="gb">🇬🇧 United Kingdom</SelectItem>
                      <SelectItem value="de">🇩🇪 Germany</SelectItem>
                      <SelectItem value="fr">🇫🇷 France</SelectItem>
                      <SelectItem value="au">🇦🇺 Australia</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </Card>

              {/* Shipping Method */}
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-medium">2</div>
                  <h3 className="text-2xl">Shipping Method</h3>
                </div>

                <RadioGroup value={shipping} onValueChange={setShipping}>
                  <label htmlFor="standard"
                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-colors mb-3 ${shipping === "standard" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="standard" id="standard" />
                      <div>
                        <div className="font-medium">Standard Shipping</div>
                        <div className="text-sm text-gray-600">7–14 business days</div>
                      </div>
                    </div>
                    <div className="text-lg font-medium">$15</div>
                  </label>

                  <label htmlFor="express"
                    className={`flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-colors ${shipping === "express" ? "border-gray-900 bg-gray-50" : "border-gray-200 hover:border-gray-400"}`}>
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="express" id="express" />
                      <div>
                        <div className="font-medium">Express Shipping</div>
                        <div className="text-sm text-gray-600">3–5 business days</div>
                      </div>
                    </div>
                    <div className="text-lg font-medium">$35</div>
                  </label>
                </RadioGroup>
              </Card>

              {/* Payment Method */}
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-medium">3</div>
                  <h3 className="text-2xl">Payment Method</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {PAYMENT_METHODS.map((method) => (
                    <button
                      key={method.id}
                      type="button"
                      onClick={() => setPaymentMethod(method.id)}
                      className={`flex items-center gap-3 p-4 border-2 rounded-xl text-left transition-all ${
                        paymentMethod === method.id
                          ? "border-gray-900 bg-gray-50"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      <span className="text-2xl">{method.icon}</span>
                      <div>
                        <div className="font-medium text-sm">{method.label}</div>
                        <div className="text-xs text-gray-500">{method.subLabel}</div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="p-4 bg-blue-50 rounded-xl flex items-start gap-3">
                  <span className="text-blue-600 text-lg">🔒</span>
                  <div className="text-sm text-blue-700">
                    <strong>토스페이먼츠</strong>로 안전하게 처리됩니다.
                    결제 정보는 암호화되어 저장되지 않습니다.
                    {paymentMethod === "alipay" && " · 알리페이 앱으로 QR 결제"}
                    {paymentMethod === "wechatpay" && " · 위챗 앱으로 QR 결제"}
                  </div>
                </div>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <Package className="w-6 h-6 text-gray-600" />
                  <h3 className="text-2xl">Order Summary</h3>
                </div>

                <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                  <div className="text-sm text-gray-600 mb-1">Book Title</div>
                  <div className="font-medium">Seoul Adventures</div>
                  <div className="text-sm text-gray-600 mt-2">24 pages · Hardcover · 10" × 12"</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Photobook</span>
                    <span>${bookPrice}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-700">Shipping</span>
                    <span>${shippingPrice}</span>
                  </div>
                </div>

                <Separator className="my-6" />

                <div className="flex items-center justify-between text-2xl mb-2">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
                <div className="text-sm text-gray-500 mb-8">
                  ≈ ₩{(total * 1300).toLocaleString()} KRW
                </div>

                <Button
                  type="submit"
                  disabled={processing || !isFormValid()}
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white py-6 text-lg rounded-full disabled:opacity-50"
                >
                  {processing ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Pay $${total} · ${PAYMENT_METHODS.find(m => m.id === paymentMethod)?.label}`
                  )}
                </Button>

                <div className="mt-6 space-y-2 text-xs text-gray-600">
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    Free returns within 30 days
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    100% satisfaction guarantee
                  </p>
                  <p className="flex items-center gap-2">
                    <Check className="w-3 h-3 text-green-600" />
                    Powered by Toss Payments
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
