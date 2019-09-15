//simple checkboxes - toggles

let pricing = document.getElementById("itemPricing");

chrome.storage.local.get('itemPricing', function(result) {
    pricing.checked = result.itemPricing;
});

pricing.addEventListener("click", function () {
    chrome.storage.local.set({itemPricing: pricing.checked}, function() {});
});

let markscammers = document.getElementById("markScammers");

chrome.storage.local.get('markScammers', function(result) {
    markscammers.checked = result.markScammers;
});

markscammers.addEventListener("click", function () {
    chrome.storage.local.set({markScammers: markscammers.checked}, function() {});
});

let colorfulitems = document.getElementById("colorfulItems");

chrome.storage.local.get('colorfulItems', function(result) {
    colorfulitems.checked = result.colorfulItems;
});

colorfulitems.addEventListener("click", function () {
    chrome.storage.local.set({colorfulItems: colorfulitems.checked}, function() {});
});

let showrealstatus = document.getElementById("showRealStatus");

chrome.storage.local.get('showRealStatus', function(result) {
    showrealstatus.checked = result.showRealStatus;
});

showrealstatus.addEventListener("click", function () {
    chrome.storage.local.set({showRealStatus: showrealstatus.checked}, function() {});
});

let flagcomments = document.getElementById("flagScamComments");

chrome.storage.local.get('flagScamComments', function(result) {
    flagcomments.checked = result.flagScamComments;
});

flagcomments.addEventListener("click", function () {
    chrome.storage.local.set({flagScamComments: flagcomments.checked}, function() {});
});

let quickdecline = document.getElementById("quickDeclineOffers");

chrome.storage.local.get('quickDeclineOffer', function(result) {
    quickdecline.checked = result.quickDeclineOffer;
});

quickdecline.addEventListener("click", function () {
    chrome.storage.local.set({quickDeclineOffer: quickdecline.checked}, function() {});
});

let openintab = document.getElementById("openOfferInTab");

chrome.storage.local.get('openOfferInTab', function(result) {
    openintab.checked = result.openOfferInTab;
});

openintab.addEventListener("click", function () {
    chrome.storage.local.set({openOfferInTab: openintab.checked}, function() {});
});

let showrepbutton = document.getElementById("showPlusRepButton");

chrome.storage.local.get('showPlusRepButton', function(result) {
    showrepbutton.checked = result.showPlusRepButton;
});

showrepbutton.addEventListener("click", function () {
    chrome.storage.local.set({showPlusRepButton: showrepbutton.checked}, function() {});
});

let showreoccbutton = document.getElementById("showReoccButton");

chrome.storage.local.get('showReoccButton', function(result) {
    showreoccbutton.checked = result.showReoccButton;
});

showreoccbutton.addEventListener("click", function () {
    chrome.storage.local.set({showReoccButton: showreoccbutton.checked}, function() {});
});

let nsfw = document.getElementById("nsfw");

chrome.storage.local.get('nsfwFilter', function(result) {
    nsfw.checked = result.nsfwFilter;
});

nsfw.addEventListener("click", function () {
    chrome.storage.local.set({nsfwFilter: nsfw.checked}, function() {});
});

let hideotherprices = document.getElementById("hideOtherExtensionPrices");

chrome.storage.local.get('hideOtherExtensionPrices', function(result) {
    hideotherprices.checked = result.hideOtherExtensionPrices;
});

hideotherprices.addEventListener("click", function () {
    chrome.storage.local.set({hideOtherExtensionPrices: hideotherprices.checked}, function() {});
});

let updatenotifications = document.getElementById("updateNotifications");

chrome.storage.local.get('updateNotifications', function(result) {
    updatenotifications.checked = result.updateNotifications;
});

updatenotifications.addEventListener("click", function () {
    chrome.storage.local.set({updateNotifications: updatenotifications.checked}, function() {});
});

let switchToOtherInventory = document.getElementById("switchToOtherInventory");

chrome.storage.local.get('switchToOtherInventory', (result) => {
    switchToOtherInventory.checked = result.switchToOtherInventory;
});

switchToOtherInventory.addEventListener("click", () => {
    chrome.storage.local.set({switchToOtherInventory: switchToOtherInventory.checked}, () => {});
});

// checkboxes - toggles with additional logic

let tabsAPI = document.getElementById("tabsAPI");

chrome.permissions.contains({permissions: ['tabs']}, function(result) {
    tabsAPI.checked = result;
});

tabsAPI.addEventListener("click", function () {
    if(tabsAPI.checked){
        chrome.permissions.request({permissions: ['tabs']}, function(granted) {
            tabsAPI.checked = granted;
        });
    }
    else{
        chrome.permissions.remove({permissions: ['tabs']}, function(removed) {});
    }
});

let tradersbump = document.getElementById("tradersBump");

chrome.storage.local.get('tradersBump', function(result) {
    let optionOn = result.tradersBump;
    chrome.permissions.contains({permissions: ['tabs'], origins: ['*://csgotraders.net/*']}, function(result) {
        if(optionOn && result){
            tradersbump.checked = result;
        }
    });
});

tradersbump.addEventListener("click", function () {
    if(tradersbump.checked){
        chrome.permissions.request({permissions: ['tabs'], origins: ['*://csgotraders.net/*']}, function(granted) {
            tradersbump.checked = granted;
            chrome.storage.local.set({tradersBump: granted}, function() {});
        });
    }
    else{
        chrome.storage.local.set({tradersBump: tradersbump.checked}, function() {});
    }
});

let loungebump = document.getElementById("loungeBump");

chrome.storage.local.get('loungeBump', function(result) {
    let optionOn = result.loungeBump;
    chrome.permissions.contains({permissions: ['tabs'], origins: ['*://csgolounge.com/*']}, function(result) {
        if(optionOn && result){
            loungeBump.checked = result;
        }
    });
});

loungebump.addEventListener("click", function () {
    chrome.storage.local.set({loungeBump: loungebump.checked}, function() {});
});

loungebump.addEventListener("click", function () {
    if(loungebump.checked){
        chrome.permissions.request({permissions: ['tabs'], origins: ['*://csgolounge.com/*']}, function(granted) {
            loungebump.checked = granted;
            chrome.storage.local.set({loungebump: granted}, function() {});
        });
    }
    else{
        chrome.storage.local.set({loungebump: loungebump.checked}, function() {});
    }
});

// textbox modals

repmessage = document.getElementById("reputationMessageValue");
repmessageprint = document.getElementById("reputationMessagePrinted");
repmessagesave = document.getElementById("reputationMessageValueSave");

chrome.storage.local.get(['reputationMessage'], function(result) {
    repmessageprint.textContent = result.reputationMessage.substring(0,8)+"...";
    repmessage.value = result.reputationMessage;
});

repmessagesave.addEventListener("click", function () {
    let newmessage = repmessage.value;
    repmessageprint.textContent = newmessage.substring(0,8)+"...";
    chrome.storage.local.set({reputationMessage: newmessage}, function() {});
});

reoccmessage = document.getElementById("reoccuringMessageValue");
reoccmessageprint = document.getElementById("reoccuringMessagePrinted");
reoccmessagesave = document.getElementById("reoccuringMessageValueSave");

chrome.storage.local.get(['reoccuringMessage'], function(result) {
    reoccmessageprint.textContent = result.reoccuringMessage.substring(0,8)+"...";
    reoccmessage.value = result.reoccuringMessage;
});

reoccmessagesave.addEventListener("click", function () {
    let newmessage = reoccmessage.value;
    reoccmessageprint.textContent = newmessage.substring(0,8)+"...";
    chrome.storage.local.set({reoccuringMessage: newmessage}, function() {});
});

apikey = document.getElementById("steamAPIKeyValue");
apikeyprint = document.getElementById("steamAPIKeyPrinted");
apikeysave = document.getElementById("steamAPIKeyValueSave");

chrome.storage.local.get(['steamAPIKey', 'apiKeyValid'], function(result) {
    if(result.apiKeyValid){
        apikeyprint.textContent = result.steamAPIKey.substring(0,8)+"...";
        apikey.value = result.steamAPIKey;
    }
    else{
        apikeyprint.textContent = "Not set";
        apikey.value = "Not set";
    }
});

apikeysave.addEventListener("click", function () {
    let newapikey = apikey.value;
    chrome.runtime.sendMessage({apikeytovalidate: newapikey}, function(response) {
        if(response.valid){
            chrome.storage.local.set({steamAPIKey: newapikey, apiKeyValid: true}, function() {
                apikeyprint.textContent = newapikey.substring(0,8)+"...";
                let warningDiv = document.getElementById("invalidAPIWarning");
                if(warningDiv != null){
                    warningDiv.remove();
                }
                //document.getElementById("steamAPIkeyModal").modal("hide");
                $("#steamAPIkeyModal").modal("hide"); //TODO figure out how to lose jquery here
            });
        }
        else{
            let invalidDiv = document.createElement("div");
            invalidDiv.classList.add("warning");
            invalidDiv.id="invalidAPIWarning";
            invalidDiv.innerHTML = '<i class="fas fa-exclamation-triangle"></i> <span class="warning">Could not validate your API key, it\'s either incorrect or Steam is down at the moment</span>';
            apikey.parentNode.insertBefore(invalidDiv, apikey.nextSibling);
        }
    });
});

// number inputs
numberoflistings = document.getElementById("numberOfListings");

chrome.storage.local.get('numberOfListings', function(result) {numberoflistings.value = result.numberOfListings});

numberoflistings.addEventListener("input", function () {
    let number = parseInt(this.value);
    if(number<10){
        number = 10;
    }
    else if(number>100){
        number = 100;
    }
    chrome.storage.local.set({numberOfListings: number}, function() {});
});

//select

let currencySelect = document.getElementById("currency");

let keys = Object.keys(currencies);
for (let key of keys){
    let option = document.createElement("option");
    option.value = currencies[key].short;
    option.text = currencies[key].short + " - " + currencies[key].long;
    currencySelect.add(option);
}

chrome.storage.local.get('currency', function(result) {
    document.querySelector('#currency [value="' + result.currency + '"]').selected = true;
});

currencySelect.addEventListener("click", function () {
    let currency = currencySelect.options[currencySelect.selectedIndex].value;
    chrome.storage.local.set({currency: currency}, function() {
        updateExchangeRates();
    });
});

let pricingProviderSelect = document.getElementById("pricingProvider");
let aboutTheProvider = document.getElementById("aboutTheProvider");
let pricingModeSelect = document.getElementById("pricingMode");
let aboutTheMode = document.getElementById("aboutTheMode");
let providers = Object.keys(pricingProviders);
for (let provider of providers){
    let option = document.createElement("option");
    option.value = pricingProviders[provider].name;
    option.text = pricingProviders[provider].long;
    pricingProviderSelect.add(option);
}

chrome.storage.local.get(['pricingProvider', 'pricingMode'], function(result) {
    let provider = result.pricingProvider;
    document.querySelector('#pricingProvider [value="' + provider + '"]').selected = true;
    aboutTheProvider.innerText = pricingProviders[provider].description;
    let modes = Object.keys(pricingProviders[provider].pricing_modes);
    for (let mode of modes){
        let option = document.createElement("option");
        option.value = pricingProviders[provider].pricing_modes[mode].name;
        option.text = pricingProviders[provider].pricing_modes[mode].long;
        pricingModeSelect.add(option);
    }
    document.querySelector('#pricingMode [value="' + result.pricingMode + '"]').selected = true;
    aboutTheMode.innerText = pricingProviders[provider].pricing_modes[result.pricingMode].description;
});

pricingProviderSelect.addEventListener("click", function () {
    let provider = pricingProviderSelect.options[pricingProviderSelect.selectedIndex].value;
    aboutTheProvider.innerText = pricingProviders[provider].description;
    chrome.storage.local.get('pricingProvider', function(result) {
        if(provider !== result.pricingProvider){
            pricingModeSelect.innerHTML = "";
            let modes = Object.keys(pricingProviders[provider].pricing_modes);
            for (let mode of modes){
                let option = document.createElement("option");
                option.value = pricingProviders[provider].pricing_modes[mode].name;
                option.text = pricingProviders[provider].pricing_modes[mode].long;
                pricingModeSelect.add(option);
            }
            if(provider === pricingProviders.csgobackpack.name){
                document.querySelector('#pricingMode [value="7_days_average"]').selected = true;
            }
            else if(provider === pricingProviders.bitskins.name){
                document.querySelector('#pricingMode [value="bitskins"]').selected = true;
            }
            let selectedMode = pricingModeSelect.options[pricingModeSelect.selectedIndex].value;
            aboutTheMode.innerText = pricingProviders[provider].pricing_modes[selectedMode].description;
            chrome.storage.local.set({pricingProvider: provider, pricingMode: selectedMode}, function() {
                updatePrices();
            });
        }
    });
});

pricingModeSelect.addEventListener("click", function () {
    let mode = pricingModeSelect.options[pricingModeSelect.selectedIndex].value;
    let provider = pricingProviderSelect.options[pricingProviderSelect.selectedIndex].value;
    aboutTheMode.innerText = pricingProviders[provider].pricing_modes[mode].description;
    chrome.storage.local.set({pricingMode: mode}, function() {
        updatePrices();
    });
});


let inventorySortingSelect = document.getElementById("inventorySortingMethod");

let inventorySortingModes = Object.keys(sortingModes);
for (let modes of inventorySortingModes){
    let option = document.createElement("option");
    option.value = sortingModes[modes].key;
    option.text = sortingModes[modes].name;
    inventorySortingSelect.add(option);
}

chrome.storage.local.get('inventorySortingMode', function(result) {
    document.querySelector('#inventorySortingMethod [value="' + result.inventorySortingMode + '"]').selected = true;
});

inventorySortingSelect.addEventListener("click", function () {
    let inventorySortingMode = inventorySortingSelect.options[inventorySortingSelect.selectedIndex].value;
    chrome.storage.local.set({inventorySortingMode: inventorySortingMode}, function() {});
});

let offerSortingSelect = document.getElementById("offerSortingMode");

let offerSortingModes = Object.keys(sortingModes);
for (let modes of inventorySortingModes){
    let option = document.createElement("option");
    option.value = sortingModes[modes].key;
    option.text = sortingModes[modes].name;
    offerSortingSelect.add(option);
}

chrome.storage.local.get('offerSortingMode', function(result) {
    document.querySelector('#offerSortingMode [value="' + result.offerSortingMode + '"]').selected = true;
});

offerSortingSelect.addEventListener("click", function () {
    let offerSortingMode = offerSortingSelect.options[offerSortingSelect.selectedIndex].value;
    chrome.storage.local.set({offerSortingMode: offerSortingMode}, function() {});
});


// list

let popupLinksToShow = document.getElementById('popupLinksToShow');

chrome.storage.local.get('popupLinks', (result) => {
    result.popupLinks.forEach(link =>{
        let linkDiv = document.createElement('div');
        let linkElement = document.createElement('span');

        linkElement.id = link.id;
        linkElement.innerText = link.name;
        if(link.active) linkElement.classList.add('active');

        linkDiv.appendChild(linkElement);

        linkElement.addEventListener('click', (event) =>{
            // does not allow to remove the options one so users can always find their way back here
            if(event.target.id !== 'options'){
                event.target.classList.toggle('active');
                chrome.storage.local.get('popupLinks', (result) =>{
                    result.popupLinks.forEach(link =>{if(link.id === event.target.id) link.active =! link.active});
                    chrome.storage.local.set({popupLinks: result.popupLinks}, () =>{});
                });
            }
        });

        let defaultPopupLinkIDs = [];
        defaultPopupLinks.forEach(link =>{defaultPopupLinkIDs.push(link.id)});
        if(!defaultPopupLinkIDs.includes(link.id)) {
            let removeLinkElement = document.createElement('span');
            removeLinkElement.innerText = 'Delete';
            removeLinkElement.classList.add('delete');
            removeLinkElement.id = link.id;

            linkDiv.appendChild(removeLinkElement);

            removeLinkElement.addEventListener('click', (event) =>{
                chrome.storage.local.get('popupLinks', (result) => {
                    let newpopupLinks = [];
                    result.popupLinks.forEach(link => {
                            if (link.id !== event.target.id) newpopupLinks.push(link)
                        }
                    );
                    chrome.storage.local.set({popupLinks: newpopupLinks}, () => {location.reload()});
                });
            });
        }

        popupLinksToShow.appendChild(linkDiv);
    });
});

// form

document.getElementById('savePopupLink').addEventListener('click', () =>{
    let linkName = document.getElementById('popupLinkName').value;
    let linkID = linkName.replace(/\W/g, '').toLowerCase();  // removes non-alphanumeric chars - https://stackoverflow.com/questions/9364400/remove-not-alphanumeric-characters-from-string-having-trouble-with-the-char
    let linkURL = document.getElementById('popupLinURL').value;
    chrome.storage.local.get('popupLinks', (result) => {
        result.popupLinks.push({
            id: linkID,
            name: linkName,
            url: linkURL,
            active: true
        });
        chrome.storage.local.set({popupLinks: result.popupLinks}, () =>{location.reload();});
    });
});

// export preferences

chrome.storage.local.get([
    'quickDeclineOffer', 'openOfferInTab', 'showPlusRepButton', 'reputationMessage', 'showReoccButton', 'reoccuringMessage',
    'nsfwFilter', 'flagScamComments', 'steamAPIKey', 'apiKeyValid', 'showRealStatus', 'colorfulItems',
    'loungeBump', 'tradersBump', 'markScammers', 'numberOfListings', 'itemPricing', 'pricingProvider', 'pricingMode',
    'currency', 'exchangeRate', 'hideOtherExtensionPrices','inventorySortingMode',
    'notifyOnUpdate', 'offerSortingMode', 'switchToOtherInventory', 'popupLinks', 'steamIDOfUser'], (result) =>{

    let JSONContent = 'data:application/json,';

    let preferencesJSON = {
        version: 1,
        type: "preferences",
        preferences: {
            quickDeclineOffer: result.quickDeclineOffer,
            openOfferInTab: result.openOfferInTab,
            showPlusRepButton: result.showPlusRepButton,
            reputationMessage: result.reputationMessage,
            showReoccButton: result.showReoccButton,
            reoccuringMessage: result.reoccuringMessage,
            nsfwFilter: result.nsfwFilter,
            flagScamComments: result.flagScamComments,
            steamAPIKey: result.steamAPIKey,
            apiKeyValid: result.apiKeyValid,
            showRealStatus: result.showRealStatus,
            colorfulItems: result.colorfulItems,
            loungeBump: result.loungeBump,
            tradersBump: result.tradersBump,
            markScammers: result.markScammers,
            numberOfListings: result.numberOfListings,
            itemPricing: result.itemPricing,
            pricingProvider: result.pricingProvider,
            pricingMode: result.pricingMode,
            currency: result.currency,
            exchangeRate: result.exchangeRate,
            hideOtherExtensionPrices: result.hideOtherExtensionPrices,
            inventorySortingMode: result.inventorySortingMode,
            notifyOnUpdate: result.notifyOnUpdate,
            offerSortingMode: result.offerSortingMode,
            switchToOtherInventory: result.switchToOtherInventory,
            popupLinks: result.popupLinks,
            steamIDOfUser: result.steamIDOfUser
        }
    };

    JSONContent += encodeURIComponent(JSON.stringify(preferencesJSON));

    let exportPreferences = document.getElementById('export_preferences');
    exportPreferences.setAttribute('href', JSONContent);
});

// export bookmarks

chrome.storage.local.get('bookmarks', (result) =>{

    let JSONContent = 'data:application/json,';

    JSONContent += encodeURIComponent(JSON.stringify(result.bookmarks));

    let exportBookmarks = document.getElementById('export_bookmarks');
    exportBookmarks.setAttribute('href', JSONContent);
});

//import preferences

let importPrefInput = document.getElementById('import_preferences');

importPrefInput.addEventListener('change', event => {
    let file = event.target.files[0];
    let fr = new FileReader();

    fr.addEventListener('load', event => {
       let inputAsJSON = JSON.parse(event.target.result);
       if (parseInt(inputAsJSON.version) === 1) {
           if(inputAsJSON.preferences.quickDeclineOffer !== undefined) chrome.storage.local.set({quickDeclineOffer: inputAsJSON.preferences.quickDeclineOffer}, ()=>{});
           if(inputAsJSON.preferences.openOfferInTab !== undefined) chrome.storage.local.set({openOfferInTab: inputAsJSON.preferences.openOfferInTab}, ()=>{});
           if(inputAsJSON.preferences.showPlusRepButton !== undefined) chrome.storage.local.set({showPlusRepButton: inputAsJSON.preferences.showPlusRepButton}, () =>{});
           if(inputAsJSON.preferences.reputationMessage !== undefined) chrome.storage.local.set({reputationMessage: inputAsJSON.preferences.reputationMessage}, () =>{});
           if(inputAsJSON.preferences.showReoccButton !== undefined) chrome.storage.local.set({showReoccButton: inputAsJSON.preferences.showReoccButton}, () =>{});
           if(inputAsJSON.preferences.reoccuringMessage !== undefined) chrome.storage.local.set({reoccuringMessage: inputAsJSON.preferences.reoccuringMessage}, () =>{});
           if(inputAsJSON.preferences.nsfwFilter !== undefined) chrome.storage.local.set({nsfwFilter: inputAsJSON.preferences.nsfwFilter}, () =>{});
           if(inputAsJSON.preferences.flagScamComments !== undefined) chrome.storage.local.set({flagScamComments: inputAsJSON.preferences.flagScamComments}, () =>{});
           if(inputAsJSON.preferences.steamAPIKey !== undefined) chrome.storage.local.set({steamAPIKey: inputAsJSON.preferences.steamAPIKey}, () =>{});
           if(inputAsJSON.preferences.apiKeyValid !== undefined) chrome.storage.local.set({apiKeyValid: inputAsJSON.preferences.apiKeyValid}, () =>{});
           if(inputAsJSON.preferences.showRealStatus !== undefined) chrome.storage.local.set({showRealStatus: inputAsJSON.preferences.showRealStatus}, () =>{});
           if(inputAsJSON.preferences.colorfulItems !== undefined) chrome.storage.local.set({colorfulItems: inputAsJSON.preferences.colorfulItems}, () =>{});
           if(inputAsJSON.preferences.loungeBump !== undefined) chrome.storage.local.set({loungeBump: inputAsJSON.preferences.loungeBump}, () =>{});
           if(inputAsJSON.preferences.tradersBump !== undefined) chrome.storage.local.set({tradersBump: inputAsJSON.preferences.tradersBump}, () =>{});
           if(inputAsJSON.preferences.markScammers !== undefined) chrome.storage.local.set({markScammers: inputAsJSON.preferences.markScammers}, () =>{});
           if(inputAsJSON.preferences.numberOfListings !== undefined) chrome.storage.local.set({numberOfListings: inputAsJSON.preferences.numberOfListings}, () =>{});
           if(inputAsJSON.preferences.itemPricing !== undefined) chrome.storage.local.set({itemPricing: inputAsJSON.preferences.itemPricing}, () =>{});
           if(inputAsJSON.preferences.pricingProvider !== undefined) chrome.storage.local.set({pricingProvider: inputAsJSON.preferences.pricingProvider},() =>{});
           if(inputAsJSON.preferences.pricingMode !== undefined) chrome.storage.local.set({pricingMode: inputAsJSON.preferences.pricingMode}, () =>{});
           if(inputAsJSON.preferences.currency !== undefined) chrome.storage.local.set({currency: inputAsJSON.preferences.currency}, () =>{});
           if(inputAsJSON.preferences.exchangeRate !== undefined) chrome.storage.local.set({exchangeRate: inputAsJSON.preferences.exchangeRate}, () =>{});
           if(inputAsJSON.preferences.hideOtherExtensionPrices !== undefined) chrome.storage.local.set({hideOtherExtensionPrices: inputAsJSON.preferences.hideOtherExtensionPrices}, () =>{});
           if(inputAsJSON.preferences.inventorySortingMode !== undefined) chrome.storage.local.set({inventorySortingMode: inputAsJSON.preferences.inventorySortingMode}, () =>{});
           if(inputAsJSON.preferences.notifyOnUpdate !== undefined) chrome.storage.local.set({notifyOnUpdate: inputAsJSON.preferences.notifyOnUpdate}, () =>{});
           if(inputAsJSON.preferences.offerSortingMode !== undefined) chrome.storage.local.set({offerSortingMode: inputAsJSON.preferences.offerSortingMode}, () =>{});
           if(inputAsJSON.preferences.switchToOtherInventory !== undefined) chrome.storage.local.set({switchToOtherInventory: inputAsJSON.preferences.switchToOtherInventory}, () =>{});
           if(inputAsJSON.preferences.popupLinks !== undefined) chrome.storage.local.set({popupLinks: inputAsJSON.preferences.popupLinks}, () =>{});
           if(inputAsJSON.preferences.steamIDOfUser !== undefined) chrome.storage.local.set({steamIDOfUser: inputAsJSON.preferences.steamIDOfUser}, () =>{});
       }
       else console.log(inputAsJSON.version);
    });
    fr.readAsText(file);
});