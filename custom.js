document.addEventListener("DOMContentLoaded", function() {
    // Define a mapping of placeholders to image URLs
    var imageMap = {
      '[[Profile]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc785cccf8c5e1eebf8_profile.webp',
      '[[Account Settings]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc830e5c0f1f7315676_settings.webp',
      '[[Dropdown]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc764ea4d5010c30ab4_dropdown.webp',
      '[[Feed Label]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc765f9155c51f0aa31_feed_label.webp',
      '[[Gear]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc743684ca994d2d8bb_gear.webp',
      '[[Follow]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc7b636704d4619abb3_follow.webp',
      '[[Pick a Feed]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/65136dc7f811d17b6891877c_pick_a_feed.webp',
      '[[Clipboard]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/651392fce0b8553d4c8481b9_clipboard.png',
      '[[Create]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/651392fb4a095aedb48b0e6c_create.png',
      '[[Camera]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/651392fb9ce90eda6bd79fbb_camera.png',
      '[[New Feed]]': 'https://uploads-ssl.webflow.com/64e501aae02e4985916b14da/6514c2c3f8d574135fc51e40_new_feed.webp',
    };

    // Select all Rich Text elements on the page
    var richTextElements = document.querySelectorAll('.w-richtext'); // Adjust the selector if necessary

    richTextElements.forEach(function(element) {
      var htmlContent = element.innerHTML;

      // Replace each placeholder with the corresponding image
      for (var placeholder in imageMap) {
        var imageUrl = imageMap[placeholder];
        var altText = placeholder.replace(/\[\[|\]\]/g, ''); // Remove brackets to use as alt and title text
        var imageHtml = '<img src="' + imageUrl + '" style="height: 20px; width: auto; display: inline; vertical-align: middle;" alt="' + altText + '" title="' + altText + '">';
        htmlContent = htmlContent.replace(new RegExp(placeholder.replace(/\]/g, "\\]").replace(/\[/g, "\\["), 'g'), imageHtml);
      }

      element.innerHTML = htmlContent;
    });
  });

document.addEventListener("DOMContentLoaded", function() {
    // Check if the device is a tablet or mobile
    if (window.innerWidth <= 1024) {

      // Select all Rich Text elements on the page
      var richTextElements = document.querySelectorAll('.w-richtext'); // Adjust the selector if necessary

      richTextElements.forEach(function(element) {
        var htmlContent = element.innerHTML;

        // Define regex patterns and replacement strings for each case
        var replacements = {
          '\\bClick\\b': 'Tap',
          '\\bclick\\b': 'tap',
          '\\bClicking\\b': 'Tapping',
          '\\bclicking\\b': 'tapping',
          '\\bClickable\\b': 'Tapable',
          '\\bclickable\\b': 'tapable'
        };

        // Replace each pattern with the corresponding replacement string
        for (var pattern in replacements) {
          var regex = new RegExp(pattern, 'g');
          htmlContent = htmlContent.replace(regex, replacements[pattern]);
        }

        element.innerHTML = htmlContent;
      });
    }
  });

