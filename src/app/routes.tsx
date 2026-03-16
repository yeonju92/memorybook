import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { UploadPage } from "./pages/UploadPage";
import { ProcessingPage } from "./pages/ProcessingPage";
import { DraftResultPage } from "./pages/DraftResultPage";
import { EditPage } from "./pages/EditPage";
import { PreviewPage } from "./pages/PreviewPage";
import { ProductOptionsPage } from "./pages/ProductOptionsPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage";
import { OrderTrackingPage } from "./pages/OrderTrackingPage";
import { MyOrdersPage } from "./pages/MyOrdersPage";
import { MyAccountPage } from "./pages/MyAccountPage";
import { FAQPage } from "./pages/FAQPage";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/upload",
    Component: UploadPage,
  },
  {
    path: "/processing",
    Component: ProcessingPage,
  },
  {
    path: "/draft-result",
    Component: DraftResultPage,
  },
  {
    path: "/edit",
    Component: EditPage,
  },
  {
    path: "/preview",
    Component: PreviewPage,
  },
  {
    path: "/product-options",
    Component: ProductOptionsPage,
  },
  {
    path: "/checkout",
    Component: CheckoutPage,
  },
  {
    path: "/order-confirmation",
    Component: OrderConfirmationPage,
  },
  {
    path: "/order-tracking/:orderId",
    Component: OrderTrackingPage,
  },
  {
    path: "/my-orders",
    Component: MyOrdersPage,
  },
  {
    path: "/account",
    Component: MyAccountPage,
  },
  {
    path: "/faq",
    Component: FAQPage,
  },
  {
    path: "*",
    Component: NotFound,
  },
]);
