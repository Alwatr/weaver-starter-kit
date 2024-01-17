/* eslint-disable max-len */

export function message(key: keyof typeof i18nResources): string {
  return i18nResources[key];
}

const i18nResources = {
  startup_message: 'ربات شروع به کار کرد ⚡️',
  setting_subscribe_button: 'عضویت ✅',
  setting_subscribed_button: 'لغو عضویت 🚫',
  start_message:
    '🖤 سلام بر مادر خوبی‌ها\n🏴 سلام بر فرزند منتقمش مهدی\n🫶 سلام بر محبین‌شان\n\nاین ربات اینجاست تا توی سختی و شلوغی‌‌های زندگی‌مون، به صورت روزانه تذکری باشه برای خدمت‌گذاری بهتر به حضرت زهرا سلام‌الله‌علیها و فرزند بزرگوار ایشان.\nیادمون نره، شاه‌راهِ عزیز شدن توی قلب امام زمان‌مون، نوکری و خدمتگزاری برای مادر ایشون هستش',
  help_message:
    '🖤 سلام بر مادر خوبی‌ها\n🏴 سلام بر فرزند منتقمش مهدی\n🫶 سلام بر محبین‌شان\n\nاین ربات اینجاست تا توی سختی و شلوغی‌‌های زندگی‌مون، به صورت روزانه تذکری باشه برای خدمت‌گذاری بهتر به حضرت زهرا سلام‌الله‌علیها و فرزند بزرگوار ایشان.\nیادمون نره، شاه‌راهِ عزیز شدن توی قلب امام زمان‌مون، نوکری و خدمتگزاری برای مادر ایشون هستش',
  subscribed_successfully_message: 'عضویت با موفقیت انجام شد',
  unsubscribed_successfully_message: 'عضویت شما با موفقیت لغو شد',
  admin_added_successfully: 'شما با موفقیت به لیست ادمین‌ها اضافه شدید!',
  send_notify_message: 'پیام مورد نظر برای ارسال به تمام کاربران را ارسال کنید.',
  approval_notify_message: 'پیام برای تمامی کاربران ارسال شود؟',
  cancel_message: 'عملیات کنسل شد!',
  notified_successfully_message: 'پیام برای ${userCount} نفر با موفقیت ارسال شد',
  send_set_content_message: 'برای ثبت محتوا، پیام مورد نظر خود را ارسال کنید.',
  set_day_set_content_message: 'محتوا دریافت شد، لطفا روز مورد نظر را ارسال کنید.',
  invalid_day_set_content_message: 'روز مورد نظر معتبر نیست!',
  ok_set_content_message: 'محتوا با موفقیت ثبت شد.',
  send_next_day_countdown_day: 'روزشمار ${day} روز مانده به فاطمیه این محتوا می‌باشد.',
  send_get_content_null_message: 'محتوایی برای ${day} روز مانده به فاطمیه (امروز) یافت نشد!',
  get_content_null: 'محتوایی برای ${day} روز مانده به فاطمیه یافت نشد!',
  content_command_param_error: 'روز مورد نظر معتبر نیست.',
  content_command_replied_message_error: 'پیام محتوا یافت نشد!',
  send_content_message_not_exists: 'پیام اصلی محتوا یافت نشد!',
  ok_update_content_message: 'محتوا با موفقیت به روز شد.',
  invitation_message:
    '🖤 سلام بر مادر خوبی‌ها\n🏴 سلام بر فرزند منتقمش مهدی\n🫶 سلام بر محبین‌شان\n\nاین ربات اینجاست تا توی سختی و شلوغی‌‌های زندگی‌مون، به صورت روزانه تذکری باشه برای خدمت‌گذاری بهتر به حضرت زهرا سلام‌الله‌علیها و فرزند بزرگوار ایشان.\nیادمون نره، شاه‌راهِ عزیز شدن توی قلب امام زمان‌مون، نوکری و خدمتگزاری برای مادر ایشون هستش',
  content_list_header: 'لیست محتواها:\n',
  ok_get_content_message: 'لیست محتواها با موفقیت ارسال شد.',
  ok_delete_content_message: 'محتوا با موفقیت حذف شد.',
  invitation_message_sent: 'دعوت‌نامه با موفقیت برای ${count} نفر از اعضای ربات فرستاده شد.',
  send_day_count_down_success: 'روزشمار امروز با موفقیت برای ${count} نفر از اعضای ربات فرستاده شد.',
  admin_notify_subscribed: 'کاربر ${chatId} در روزشمار عضو شد.',
  admin_notify_unsubscribed: 'کاربر ${chatId} از روزشمار لفت داد.',
  send_day_countdown_content_failed: 'ارسال روزشمار به کاربر ${chatId} با مشکل روبرو شد: ${error}',
} as const;
