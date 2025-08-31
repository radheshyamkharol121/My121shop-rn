import emailjs from 'emailjs-com'

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID

export const sendOrderConfirmationEmail = async (orderData, customerEmail) => {
  try {
    const templateParams = {
      to_email: customerEmail,
      order_id: orderData.orderId,
      customer_name: orderData.customerName,
      order_date: new Date().toLocaleDateString('en-IN'),
      order_total: `₹${orderData.total.toLocaleString('en-IN')}`,
      shipping_address: orderData.shippingAddress,
      order_items: orderData.items.map(item => 
        `${item.name} x ${item.quantity} - ₹${(item.price * item.quantity).toLocaleString('en-IN')}`
      ).join('\n')
    }

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
    console.log('Order confirmation email sent successfully')
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

export const sendAdminNotificationEmail = async (orderData) => {
  try {
    const templateParams = {
      to_email: 'admin@my121shop.com',
      order_id: orderData.orderId,
      customer_name: orderData.customerName,
      customer_email: orderData.customerEmail,
      order_total: `₹${orderData.total.toLocaleString('en-IN')}`,
      payment_method: orderData.paymentMethod,
      order_date: new Date().toLocaleDateString('en-IN')
    }

    await emailjs.send(SERVICE_ID, 'admin_template', templateParams, USER_ID)
    console.log('Admin notification email sent successfully')
    return true
  } catch (error) {
    console.error('Failed to send admin email:', error)
    return false
  }
}
