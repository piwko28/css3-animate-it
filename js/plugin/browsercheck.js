/* BROWSER */
jQuery.browser = {};
jQuery.browser.chrome = /chrom(e|ium)/.test(navigator.userAgent.toLowerCase()) && !(/opr/.test(navigator.userAgent.toLowerCase()));
jQuery.browser.opera = /(opera|opr)/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie7 = /msie 7/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie8 = /msie 8/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie9 = /msie 9/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie10 = /msie 10/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie11 = /trident.*rv:11/.test(navigator.userAgent.toLowerCase());
jQuery.browser.ie = jQuery.browser.ie7 ||
                     jQuery.browser.ie8 ||
                     jQuery.browser.ie9 ||
                     jQuery.browser.ie10 ||
                     jQuery.browser.ie11;
jQuery.browser.ff = /mozilla/.test(navigator.userAgent.toLowerCase()) &&
											!(/(compatible)/.test(navigator.userAgent.toLowerCase())) &&
											!(jQuery.browser.ie ||
											jQuery.browser.chrome ||
											jQuery.browser.opera);

/* DEVICES */
jQuery.device = {};
jQuery.device.android = /android/i.test(navigator.userAgent.toLowerCase());
jQuery.device.blackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
jQuery.device.webOs = /webos/i.test(navigator.userAgent.toLowerCase());
jQuery.device.windowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPad = /ipad/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPhone = /iphone/i.test(navigator.userAgent.toLowerCase());
jQuery.device.iPod = /ipod/i.test(navigator.userAgent.toLowerCase());
jQuery.device.mobile = jQuery.device.android ||
                        jQuery.device.blackBerry ||
                        jQuery.device.webOs ||
                        jQuery.device.windowsPhone ||
                        jQuery.device.iDevice;
jQuery.device.nonMobile = !jQuery.device.mobile;

/* PLATFORM */
jQuery.platform = {};
jQuery.platform.windows = navigator.appVersion.indexOf("Win")!=-1;
jQuery.platform.macOs = navigator.appVersion.indexOf("Mac")!=-1;
jQuery.platform.unix = navigator.appVersion.indexOf("X11")!=-1;
jQuery.platform.linux = navigator.appVersion.indexOf("Linux")!=-1;
jQuery.platform.unknown = !(jQuery.platform.windows ||
                            jQuery.platform.macOs || 
                            jQuery.platform.unix || 
                            jQuery.platform.linux);

function envoronmentDetect(browser, device, os) {
  var html = $("html");
  if(browser) {
    if(jQuery.browser.chrome) html.addClass('chrome');
    if(jQuery.browser.opera) html.addClass('opera');
    if(jQuery.browser.ff) html.addClass('ff');
    if(jQuery.browser.ie7) html.addClass('ie7');
    if(jQuery.browser.ie8) html.addClass('ie8');
    if(jQuery.browser.ie9) html.addClass('ie9');
    if(jQuery.browser.ie10) html.addClass('ie10');
    if(jQuery.browser.ie11) html.addClass('ie11');
    if(jQuery.browser.ie) html.addClass('ie');
  }
  if(device) {
    if(jQuery.device.android) html.addClass('android');
    if(jQuery.device.blackBerry) html.addClass('blackberry');
    if(jQuery.device.webOs) html.addClass('webos');
    if(jQuery.device.windowsPhone) html.addClass('windowsphone');
    if(jQuery.device.iDevice) html.addClass('idevice');
    if(jQuery.device.iPad) html.addClass('ipad');
    if(jQuery.device.iPhone) html.addClass('iphone');
    if(jQuery.device.iPod) html.addClass('ipod');
    if(jQuery.device.mobile) html.addClass('mobile');
    if(jQuery.device.nonMobile) html.addClass('nonmobile');
  }
  if(os) {
    if(jQuery.platform.windows) html.addClass('windows');
    if(jQuery.platform.macOs) html.addClass('macos');
    if(jQuery.platform.unix) html.addClass('unix');
    if(jQuery.platform.linux) html.addClass('linux');
  }
}