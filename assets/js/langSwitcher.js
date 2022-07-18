'use strict';
(function() {
  /**
   * @param {?} acURL
   * @param {!Object} v
   * @return {?}
   */
  $.MultiLanguage = function(acURL, v) {
    var b = this;
    if (v == null) {
      /** @type {null} */
      v = null;
    }
    return $.getJSON(acURL, function($$sailsSDKParams) {
      var i;
      var subwikiList;
      var subwiki;
      var newNodeLists;
      if (v !== null) {
        localStorage.MultiLanguage = v;
      } else {
        if (typeof localStorage.MultiLanguage === "undefined") {
          v = localStorage.MultiLanguage = $$sailsSDKParams.config["default"];
        } else {
          v = localStorage.MultiLanguage;
        }
      }
      subwikiList = $$sailsSDKParams.language[v];
      /** @type {!Array} */
      newNodeLists = [];
      for (i in subwikiList) {
        subwiki = subwikiList[i];
        if ($(i).get(0).tagName.toLowerCase() === "title") {
          document.title = subwiki;
          continue;
        }
        if (i.length > 0) {
          newNodeLists.push($(i).html(subwikiList[i]));
        } else {
          newNodeLists.push(void 0);
        }
      }
      return newNodeLists;
    });
  };
}).call(this);
