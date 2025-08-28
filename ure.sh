#!/bin/bash
# Final clean my121shop-rn structure (36 folders + 268 files)

set -e

echo "📦 Cleaning old repo..."
rm -rf my121shop-rn
mkdir my121shop-rn
cd my121shop-rn

echo "📂 Creating folders..."
mkdir -p public
mkdir -p src/{assets,components,contexts,hooks,pages/{Admin,Auth,User,Vendor,Rider,Reseller},layouts,services,utils,styles,tests/{unit,integration,e2e,components,services,hooks,utils},themes,locales,middlewares}
mkdir -p functions/{helpers,schedulers}
mkdir -p .github/workflows
mkdir -p .vscode

echo "📄 Creating files..."

# root
touch README.md package.json package-lock.json index.html vite.config.js postcss.config.js tailwind.config.js \
      .gitignore .env.example .env.local .firebaserc firebase.json firestore.rules firestore.indexes.json \
      storage.rules service-worker.js workbox-config.js eslint.config.js .eslintrc.cjs .prettierrc start.sh

# github + vscode
touch .github/workflows/deploy.yml .vscode/settings.json

# public
touch public/{favicon.svg,logo.svg,manifest.json,robots.txt}

# src main
touch src/{main.jsx,App.jsx,index.css,router.jsx,firebase.js,constants.js,utils.js,sw-registration.js}

# assets
touch src/assets/{logo.svg,placeholder.png}

# components (25+)
touch src/components/{Navbar.jsx,Footer.jsx,ProductCard.jsx,CartItem.jsx,Loader.jsx,ProtectedRoute.jsx,Header.jsx,ImageUploader.jsx,CheckoutButton.jsx,CouponInput.jsx,RatingStars.jsx,SearchBar.jsx,SearchInput.jsx,Pagination.jsx,ConfirmDialog.jsx,OrderSummary.jsx,OrderStatusStepper.jsx,FlashSaleBanner.jsx,FlashSaleBadge.jsx,LoyaltyWidget.jsx,ReferralWidget.jsx,WishlistCard.jsx,QuantitySelector.jsx,PriceTag.jsx,StockAlertButton.jsx,NotificationToast.jsx,ChatBox.jsx,RiderOrderCard.jsx,RiderMap.jsx,VendorSidebar.jsx,VendorProfileCard.jsx,AdminSidebar.jsx,AdminProductForm.jsx,AdminOrderRow.jsx,CSVUploader.jsx,VariantSelector.jsx,ShareButtons.jsx,QRScanner.jsx,QRConfirm.jsx,PaymentSummary.jsx,PaymentMethodSelector.jsx,AddToCartButton.jsx,LotteryBanner.jsx,SavedInstruments.jsx}

# contexts
touch src/contexts/{AuthContext.jsx,CartContext.jsx,AdminContext.jsx,LoyaltyContext.jsx,ReferralContext.jsx,AffiliateContext.jsx}

# hooks
touch src/hooks/{useAuth.js,useCart.js,useDebounce.js,useDeliverySlots.js,useFirestoreQuery.js,useFlashSaleTimer.js,useLoyalty.js,useNotifications.js,usePWA.js,usePaymentMethods.js,useReferral.js,useVariants.js}

# pages - User
touch src/pages/User/{Home.jsx,Shop.jsx,ProductDetails.jsx,Cart.jsx,Checkout.jsx,Orders.jsx,OrderDetails.jsx,Profile.jsx,Wishlist.jsx,WishlistShare.jsx,ResellerDashboard.jsx}

# pages - Auth
touch src/pages/Auth/{Login.jsx,Register.jsx,ForgotPassword.jsx,OTPLogin.jsx,Signup.jsx,NotFound.jsx}

# pages - Admin
touch src/pages/Admin/{Dashboard.jsx,Products.jsx,ProductEdit.jsx,Orders.jsx,Returns.jsx,Reports.jsx,Users.jsx,Riders.jsx,Vendors.jsx,Coupons.jsx,Settings.jsx,FlashSales.jsx,PreOrders.jsx,StockAlerts.jsx,Cancellations.jsx,Analytics.jsx,Payouts.jsx,BulkUpload.jsx}

# pages - Vendor
touch src/pages/Vendor/{VendorPanel.jsx,VendorProducts.jsx,VendorOrders.jsx,VendorPayouts.jsx,VendorStorefront.jsx}

# pages - Rider
touch src/pages/Rider/{RiderPanel.jsx,RiderOrders.jsx,RiderOrderDetails.jsx,RiderMap.jsx}

# pages - Reseller
touch src/pages/Reseller/{ResellerDashboard.jsx,AffiliateDashboard.jsx}

# layouts
touch src/layouts/{MainLayout.jsx,AdminLayout.jsx}

# services
touch src/services/{auth.js,products.js,orders.js,payments.js,cart.js,coupons.js,chat.js,riders.js,vendors.js,affiliate.js,referral.js,loyalty.js,recommendations.js,notifications.js,shipping.js,dropshipping.js,analytics.js,inventorySync.js,returns.js,reports.js,payouts.js,commissions.js,preorders.js,flashSales.js,search.js,reviews.js,stockAlerts.js,storage.js,users.js,wallet.js,geo.js}

# utils
touch src/utils/{formatPrice.js,validators.js,aiRecommendations.js,barcode.js,constants.js,currency.js,dates.js,filters.js,firebaseCollections.js,formatDate.js,geo.js,helpers.js,lotteryHelpers.js,orderStatus.js,paypal.js,pwa.js,qr.js,razorpay.js,stockAlerts.js}

# styles
touch src/styles/{tailwind.css,globals.css}

# themes
touch src/themes/{ThemeProvider.jsx,ThemeToggle.jsx,dark-theme.css,light-theme.css,theme.js,tailwind.theme.js}

# locales
touch src/locales/{en.json,hi.json,gu.json,bn.json,ta.json}

# middlewares
touch src/middlewares/{authGuard.js,adminGuard.js,vendorGuard.js,riderGuard.js,authMiddleware.js,errorHandler.js,logger.js,validationMiddleware.js}

# tests
touch src/tests/components/{App.test.jsx,Navbar.test.jsx,ProductCard.test.jsx,Cart.test.jsx}
touch src/tests/hooks/{useAuth.test.js,useCart.test.js}
touch src/tests/services/{auth.test.js,orders.test.js,payments.test.js}
touch src/tests/unit/{cartContext.test.js,filters.test.js,utils.test.js}
touch src/tests/utils/{currency.test.js,validators.test.js}
touch src/tests/integration/{checkoutFlow.test.js,loginFlow.test.js}
touch src/tests/e2e/{adminDashboard.test.js,fullPurchase.test.js}

# functions helpers
touch functions/helpers/{abandonedCart.js,admin.js,affiliate.js,analytics.js,cod.js,csvImport.js,inventorySync.js,invoices.js,notifications.js,payouts.js,paypal.js,qr.js,razorpay.js,recommendations.js,returns.js,reviews.js,searchSync.js,shipping.js,vendor.js,wallet.js}

# functions schedulers
touch functions/schedulers/{abandonedCartReminder.js,affiliateReportScheduler.js,backupScheduler.js,flashSaleScheduler.js,inventorySyncScheduler.js,loyaltyPointsScheduler.js,payoutScheduler.js,referralBonusScheduler.js,index.js,package.json}

# functions root
touch functions/{index.js,package.json}

echo "📊 Counting..."
echo -n "📂 Folders: "
find . -type d | wc -l
echo -n "📄 Files:   "
find . -type f | wc -l
echo "✅ Done. (36 folders + 268 files)"
