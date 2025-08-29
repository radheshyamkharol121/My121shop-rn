/**
 * Notifications Services (FCM)
 */
import { getMessaging, getToken, onMessage } from "firebase/messaging";

/**
 * Device token fetch करता है
 */
export const getDeviceToken = async () => {
  const messaging = getMessaging();
  return await getToken(messaging, { vapidKey: "YOUR_VAPID_KEY_HERE" });
};

/**
 * Foreground message listener
 * @param {Function} callback
 */
export const listenToMessages = (callback) => {
  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    callback(payload);
  });
};