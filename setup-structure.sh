#!/bin/bash
# setup-structure.sh
# ✅ Clean my121shop-rn project structure (36 folders + 268 files)

echo "📦 Creating clean my121shop-rn structure..."

# Root files
touch .env.example .env.local .firebaserc .gitignore .eslintrc.cjs .prettierrc \
eslint.config.js README.md package.json package-lock.json vite.config.js \
tailwind.config.js postcss.config.js index.html service-worker.js \
workbox-config.js firebase.json firestore.rules firestore.indexes.json \
storage.rules start.sh fix-firebase.sh fix-vite.sh apply_code.sh fill_all_code.sh

# vscode
mkdir -p .vscode
touch .vscode/settings.json

# github workflows
mkdir -p .github/workflows
touch .github/workflows/deploy.yml

# functions + helpers + schedulers
mkdir -p functions/helpers functions/schedulers
touch functions/index.js functions/package.json
touch functions/helpers/{admin.js,abandonedCart.js,cod.js,csvImport.js,invoices.js,notifications.js,payouts.js,paypal.js,qr.js,razorpay.js,recommendations.js,wallet.js,inventorySync.js,affiliate.js,analytics.js,returns.js,shipping.js,reviews.js,searchSync.js,vendor.js}
touch functions/schedulers/{index.js,package.json,abandonedCartReminder.js,payoutScheduler.js,inventorySyncScheduler.js,flashSaleScheduler.js,loyaltyPointsScheduler.js,referralBonusScheduler.js,affiliateReportScheduler.js,backupScheduler.js}

# public
mkdir -p public/assets public/icons public/qrcodes
touch public/favicon.svg public/logo.svg public/manifest.json public/robots.txt

# src base
mkdir -p src/assets src/components src/context src/hooks src/locales src/middlewares src/pages/Auth src/pages/User src/pages/Admin src/pages/Rider src/pages/Vendor src/pages/Reseller src/services src/tests/components src/tests/services src/tests/hooks src/tests/utils src/tests/unit src/tests/integration src/tests/e2e src/themes src/utils
touch src/{main.jsx,App.jsx,router.jsx,firebase.js,index.css,constants.js,utils.js,sw-registration.js}

# components
touch src/components/{AddToCartButton.jsx,AddressForm.jsx,AdminOrderRow.jsx,AdminProductForm.jsx,AdminRoute.jsx,AdminSidebar.jsx,CSVUploader.jsx,ChartCard.jsx,CheckoutButton.jsx,ConfirmDialog.jsx,CouponInput.jsx,FlashSaleBadge.jsx,FlashSaleBanner.jsx,Footer.jsx,Header.jsx,ImageUploader.jsx,LoadingSpinner.jsx,LoyaltyWidget.jsx,Navbar.jsx,NotificationToast.jsx,OrderStatusStepper.jsx,Pagination.jsx,PaymentMethodSelector.jsx,PaymentSummary.jsx,PreOrderBadge.jsx,PriceTag.jsx,ProductCard.jsx,ProductReviews.jsx,ProtectedRoute.jsx,QRConfirm.jsx,QRScanner.jsx,QuantitySelector.jsx,RatingStars.jsx,ReferralWidget.jsx,RiderMap.jsx,RiderOrderCard.jsx,RiderRoute.jsx,SavedInstruments.jsx,SearchBar.jsx,SearchInput.jsx,ShareButtons.jsx,StockAlertButton.jsx,VariantSelector.jsx,VendorProfileCard.jsx,VendorRoute.jsx,VendorSidebar.jsx,CartItem.jsx,OrderSummary.jsx,LotteryBanner.jsx,ChatBox.jsx,WishlistCard.jsx}

# context
touch src/context/{AdminContext.jsx,AuthContext.jsx,CartContext.jsx,LoyaltyContext.jsx,ReferralContext.jsx,AffiliateContext.jsx}

# hooks
touch src/hooks/{useAuth.js,useCart.js,useDebounce.js,useDeliverySlots.js,useFirestoreQuery.js,useFlashSaleTimer.js,useLoyalty.js,useNotifications.js,usePWA.js,usePaymentMethods.js,useReferral.js,useVariants.js}

# locales
touch src/locales/{en.json,hi.json,gu.json,bn.json,ta.json}

# middlewares
touch src/middlewares/{authMiddleware.js,validationMiddleware.js,authGuard.js,adminGuard.js,vendorGuard.js,riderGuard.js,logger.js,errorHandler.js}

# pages/Auth
touch src/pages/Auth/{Login.jsx,Signup.jsx,ForgotPassword.jsx,OTPLogin.jsx,NotFound.jsx}

# pages/User
touch src/pages/User/{Home.jsx,Cart.jsx,Checkout.jsx,Orders.jsx,OrderDetails.jsx,ProductDetails.jsx,Profile.jsx,Wishlist.jsx,WishlistShare.jsx,ResellerDashboard.jsx}

# pages/Admin
touch src/pages/Admin/{Dashboard.jsx,Products.jsx,ProductEdit.jsx,BulkUpload.jsx,Orders.jsx,Cancellations.jsx,Returns.jsx,StockAlerts.jsx,Coupons.jsx,FlashSales.jsx,PreOrders.jsx,Riders.jsx,Vendors.jsx,Payouts.jsx,Reports.jsx,Analytics.jsx,Settings.jsx}

# pages/Rider
touch src/pages/Rider/{RiderPanel.jsx,RiderOrders.jsx,RiderMap.jsx,RiderOrderDetails.jsx}

# pages/Vendor
touch src/pages/Vendor/{VendorPanel.jsx,VendorOrders.jsx,VendorProducts.jsx,VendorPayouts.jsx,VendorStorefront.jsx}

# pages/Reseller
touch src/pages/Reseller/{ResellerDashboard.jsx,AffiliateDashboard.jsx}

# services
touch src/services/{auth.js,users.js,products.js,orders.js,cart.js,payments.js,coupons.js,flashSales.js,preorders.js,returns.js,cancellations.js,stockAlerts.js,inventorySync.js,vendors.js,riders.js,payouts.js,reports.js,analytics.js,notifications.js,loyalty.js,wallet.js,referral.js,affiliate.js,commissions.js,shipping.js,search.js,recommendations.js,reviews.js,chat.js,dropshipping.js,storage.js,geo.js}

# tests
touch src/tests/components/{App.test.jsx,Navbar.test.jsx,ProductCard.test.jsx,Cart.test.jsx}
touch src/tests/services/{orders.test.js,payments.test.js,auth.test.js}
touch src/tests/hooks/{useAuth.test.js,useCart.test.js}
touch src/tests/utils/{currency.test.js,validators.test.js}
touch src/tests/unit/{cartContext.test.js,utils.test.js,filters.test.js}
touch src/tests/integration/{checkoutFlow.test.js,loginFlow.test.js}
touch src/tests/e2e/{fullPurchase.test.js,adminDashboard.test.js}

# themes
touch src/themes/{dark-theme.css,light-theme.css,theme.js,ThemeProvider.jsx,ThemeToggle.jsx,tailwind.theme.js}

# utils
touch src/utils/{aiRecommendations.js,barcode.js,constants.js,currency.js,dates.js,filters.js,firebaseCollections.js,geo.js,helpers.js,paypal.js,pwa.js,qr.js,razorpay.js,validators.js,stockAlerts.js,orderStatus.js,lotteryHelpers.js,formatDate.js}

echo "✅ Done. Structure ready (36 folders + 268 files)."
