// Initialize app
var myApp = new Framework7({
    "modalTitle": "^_^"
    /*preprocess: function (content, url, next) {
      alert(url);
        if (url === 'people.html') {
            var template = Template7.compile(content);
            var resultContent = template({
                title: 'People',
                people: ['John', 'Ivan', 'Mary']
            })

            return resultContent;
       }
       return resultContent;
    }*/
});
//alert(1);

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

//mainView.router.loadPage("indexRank.html");
//Load new content as new page
//mainView.router.load({pageName: 'about'});

// OR using .load method if need more options

//myApp.preprocess("","","")

// Handle Cordova Device Ready Event

$$(document).on('deviceready', function() {
    console.log("Device is ready!");
    window.open = cordova.InAppBrowser.open;

admob.initAdmob(appConfigArr["androidAdmobBannerID"],appConfigArr["androidAdmobInterstitialID"])
    // Set AdMobAds options:
  /*  window.plugins.AdMob.setOptions({
        publisherId: appConfigArr["androidAdmobBannerID"], // Required
        interstitialAdId: appConfigArr["androidAdmobInterstitialID"], // Optional
        tappxIdAndroid: "", // Optional
        tappxShare: 0.1,
        isTesting: false, // receiving test ads (do not test with real ads as your account will be banned)				// Optional
        bannerAtTop: false, // set to true, to put banner at top
        overlap: true, // set to true, to allow banner overlap webview
        offsetStatusBar: false, // set to true to avoid ios7 status bar overlap
        autoShow:true,
        autoShowBanner: true, // auto show banners ad when loaded
        autoShowInterstitial: true // auto show interstitials ad when loaded	// Optional
    });
*/
var admobParam=new  admob.Params();
      //admobParam.extra={'keyword':"admob phonegame"};
      //admobParam.isForChild=true;
      admobParam.isTesting=true;
admob.showBanner(admob.BannerSize.BANNER,admob.Position.BOTTOM_APP,admobParam);
    // Start showing banners (atomatic when autoShowBanner is set to true)
  //  window.plugins.AdMob.createBannerView();
  document.addEventListener(admob.Event.onInterstitialReceive, onInterstitialReceive, false);//show in ad receive event fun need add receive listener
   admob.cacheInterstitial();// load admob Interstitial
   function onInterstitialReceive(message) {//show in ad receive event fun
       admob.showInterstitial();
   }
    // Request interstitial (will present automatically when autoShowInterstitial is set to true)
    randomEvent(10, function() {
      admob.isInterstitialReady(function(isReady){
         if(isReady){
             admob.showInterstitial();
         }
     });
    });

    //navigator.vibrate([1000, 1000, 3000, 1000, 5000]);
});


// Now we need to run the code that will be executed only for About page.

// Option 1. Using page callback for page (for "about" page in this case) (recommended way):
myApp.onPageInit('about', function(page) {
    // Do something here for "about" page

})
myApp.onPageInit('twelveConstellationsDetail', function(page) {
    // Do something here for "about" page


})
// Option 2. Using one 'pageInit' event handler for all pages:
$$(document).on('pageInit', function(e) {
    // Get page data from event data
    //alert(1);
    var page = e.detail.page;
    //console.log(page.name);
    if (page.name === 'about') {
        // Following code will be executed for page with data-page attribute equal to "about"
        // myApp.alert('1Here comes About page');
    }
})

// Option 2. Using live 'pageInit' event handlers for each page
$$(document).on('pageInit', '.page[data-page="twelveConstellationsDetail"]', function(e) {
    // Following code will be executed for page with data-page attribute equal to "about"
    //myApp.alert('2Here comes About page');
    //alert(123);

    //$(".twelveConstellationsDetailContents").html(toCode($(".twelveConstellationsDetailContents").html(),1));


})


$$(document).on('pause', function(e) {

})


$$(document).on('resume', function(e) {

})
