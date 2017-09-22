"use strict";



define('dummy/adapters/application', ['exports', 'ember-data/adapters/json-api', 'dummy/config/environment'], function (exports, _jsonApi, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _jsonApi.default.extend({
    namespace: _environment.default.rootURL + 'api'
  });
});
define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/components/basic-dropdown', ['exports', 'ember-basic-dropdown/components/basic-dropdown'], function (exports, _basicDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDropdown.default;
    }
  });
});
define('dummy/components/basic-dropdown/content-element', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content-element'], function (exports, _contentElement) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _contentElement.default;
    }
  });
});
define('dummy/components/basic-dropdown/content', ['exports', 'ember-basic-dropdown/components/basic-dropdown/content'], function (exports, _content) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _content.default;
    }
  });
});
define('dummy/components/basic-dropdown/trigger', ['exports', 'ember-basic-dropdown/components/basic-dropdown/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('dummy/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('dummy/components/paper-autocomplete-content', ['exports', 'ember-paper/components/paper-autocomplete-content'], function (exports, _paperAutocompleteContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteContent.default;
});
define('dummy/components/paper-autocomplete-dropdown', ['exports', 'ember-paper/components/paper-autocomplete-dropdown'], function (exports, _paperAutocompleteDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteDropdown.default;
});
define('dummy/components/paper-autocomplete-highlight', ['exports', 'ember-paper/components/paper-autocomplete-highlight'], function (exports, _paperAutocompleteHighlight) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteHighlight.default;
    }
  });
});
define('dummy/components/paper-autocomplete-options', ['exports', 'ember-paper/components/paper-autocomplete-options'], function (exports, _paperAutocompleteOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocompleteOptions.default;
    }
  });
});
define('dummy/components/paper-autocomplete-trigger-container', ['exports', 'ember-paper/components/paper-autocomplete-trigger-container'], function (exports, _paperAutocompleteTriggerContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTriggerContainer.default;
});
define('dummy/components/paper-autocomplete-trigger', ['exports', 'ember-paper/components/paper-autocomplete-trigger'], function (exports, _paperAutocompleteTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperAutocompleteTrigger.default;
});
define('dummy/components/paper-autocomplete', ['exports', 'ember-paper/components/paper-autocomplete'], function (exports, _paperAutocomplete) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperAutocomplete.default;
    }
  });
});
define('dummy/components/paper-backdrop', ['exports', 'ember-paper/components/paper-backdrop'], function (exports, _paperBackdrop) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperBackdrop.default;
});
define('dummy/components/paper-button', ['exports', 'ember-paper/components/paper-button'], function (exports, _paperButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperButton.default;
});
define('dummy/components/paper-card-actions', ['exports', 'ember-paper/components/paper-card-actions'], function (exports, _paperCardActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardActions.default;
});
define('dummy/components/paper-card-avatar', ['exports', 'ember-paper/components/paper-card-avatar'], function (exports, _paperCardAvatar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardAvatar.default;
});
define('dummy/components/paper-card-content', ['exports', 'ember-paper/components/paper-card-content'], function (exports, _paperCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardContent.default;
});
define('dummy/components/paper-card-header-headline', ['exports', 'ember-paper/components/paper-card-header-headline'], function (exports, _paperCardHeaderHeadline) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderHeadline.default;
});
define('dummy/components/paper-card-header-subhead', ['exports', 'ember-paper/components/paper-card-header-subhead'], function (exports, _paperCardHeaderSubhead) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderSubhead.default;
});
define('dummy/components/paper-card-header-text', ['exports', 'ember-paper/components/paper-card-header-text'], function (exports, _paperCardHeaderText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderText.default;
});
define('dummy/components/paper-card-header-title', ['exports', 'ember-paper/components/paper-card-header-title'], function (exports, _paperCardHeaderTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeaderTitle.default;
});
define('dummy/components/paper-card-header', ['exports', 'ember-paper/components/paper-card-header'], function (exports, _paperCardHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardHeader.default;
});
define('dummy/components/paper-card-icon-actions', ['exports', 'ember-paper/components/paper-card-icon-actions'], function (exports, _paperCardIconActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardIconActions.default;
});
define('dummy/components/paper-card-image', ['exports', 'ember-paper/components/paper-card-image'], function (exports, _paperCardImage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardImage.default;
});
define('dummy/components/paper-card-media', ['exports', 'ember-paper/components/paper-card-media'], function (exports, _paperCardMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardMedia.default;
});
define('dummy/components/paper-card-title-media', ['exports', 'ember-paper/components/paper-card-title-media'], function (exports, _paperCardTitleMedia) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleMedia.default;
});
define('dummy/components/paper-card-title-text', ['exports', 'ember-paper/components/paper-card-title-text'], function (exports, _paperCardTitleText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitleText.default;
});
define('dummy/components/paper-card-title', ['exports', 'ember-paper/components/paper-card-title'], function (exports, _paperCardTitle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCardTitle.default;
});
define('dummy/components/paper-card', ['exports', 'ember-paper/components/paper-card'], function (exports, _paperCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCard.default;
});
define('dummy/components/paper-checkbox', ['exports', 'ember-paper/components/paper-checkbox'], function (exports, _paperCheckbox) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperCheckbox.default;
});
define('dummy/components/paper-chips', ['exports', 'ember-paper/components/paper-chips'], function (exports, _paperChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperChips.default;
});
define('dummy/components/paper-contact-chips', ['exports', 'ember-paper/components/paper-contact-chips'], function (exports, _paperContactChips) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContactChips.default;
});
define('dummy/components/paper-content', ['exports', 'ember-paper/components/paper-content'], function (exports, _paperContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperContent.default;
});
define('dummy/components/paper-dialog-actions', ['exports', 'ember-paper/components/paper-dialog-actions'], function (exports, _paperDialogActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogActions.default;
    }
  });
});
define('dummy/components/paper-dialog-container', ['exports', 'ember-paper/components/paper-dialog-container'], function (exports, _paperDialogContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContainer.default;
    }
  });
});
define('dummy/components/paper-dialog-content', ['exports', 'ember-paper/components/paper-dialog-content'], function (exports, _paperDialogContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogContent.default;
    }
  });
});
define('dummy/components/paper-dialog-inner', ['exports', 'ember-paper/components/paper-dialog-inner'], function (exports, _paperDialogInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialogInner.default;
    }
  });
});
define('dummy/components/paper-dialog', ['exports', 'ember-paper/components/paper-dialog'], function (exports, _paperDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperDialog.default;
    }
  });
});
define('dummy/components/paper-divider', ['exports', 'ember-paper/components/paper-divider'], function (exports, _paperDivider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperDivider.default;
});
define('dummy/components/paper-form', ['exports', 'ember-paper/components/paper-form'], function (exports, _paperForm) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperForm.default;
});
define('dummy/components/paper-grid-list', ['exports', 'ember-paper/components/paper-grid-list'], function (exports, _paperGridList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridList.default;
    }
  });
});
define('dummy/components/paper-grid-tile-footer', ['exports', 'ember-paper/components/paper-grid-tile-footer'], function (exports, _paperGridTileFooter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTileFooter.default;
    }
  });
});
define('dummy/components/paper-grid-tile', ['exports', 'ember-paper/components/paper-grid-tile'], function (exports, _paperGridTile) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperGridTile.default;
    }
  });
});
define('dummy/components/paper-icon', ['exports', 'ember-paper/components/paper-icon'], function (exports, _paperIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperIcon.default;
});
define('dummy/components/paper-ink-bar', ['exports', 'ember-paper/components/paper-ink-bar'], function (exports, _paperInkBar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperInkBar.default;
    }
  });
});
define('dummy/components/paper-input', ['exports', 'ember-paper/components/paper-input'], function (exports, _paperInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperInput.default;
});
define('dummy/components/paper-item', ['exports', 'ember-paper/components/paper-item'], function (exports, _paperItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperItem.default;
});
define('dummy/components/paper-list', ['exports', 'ember-paper/components/paper-list'], function (exports, _paperList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperList.default;
});
define('dummy/components/paper-menu-content-inner', ['exports', 'ember-paper/components/paper-menu-content-inner'], function (exports, _paperMenuContentInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContentInner.default;
    }
  });
});
define('dummy/components/paper-menu-content', ['exports', 'ember-paper/components/paper-menu-content'], function (exports, _paperMenuContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuContent.default;
    }
  });
});
define('dummy/components/paper-menu-item', ['exports', 'ember-paper/components/paper-menu-item'], function (exports, _paperMenuItem) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenuItem.default;
    }
  });
});
define('dummy/components/paper-menu', ['exports', 'ember-paper/components/paper-menu'], function (exports, _paperMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperMenu.default;
    }
  });
});
define('dummy/components/paper-optgroup', ['exports', 'ember-paper/components/paper-optgroup'], function (exports, _paperOptgroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperOptgroup.default;
    }
  });
});
define('dummy/components/paper-option', ['exports', 'ember-paper/components/paper-option'], function (exports, _paperOption) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperOption.default;
});
define('dummy/components/paper-progress-circular', ['exports', 'ember-paper/components/paper-progress-circular'], function (exports, _paperProgressCircular) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressCircular.default;
    }
  });
});
define('dummy/components/paper-progress-linear', ['exports', 'ember-paper/components/paper-progress-linear'], function (exports, _paperProgressLinear) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperProgressLinear.default;
    }
  });
});
define('dummy/components/paper-radio-group', ['exports', 'ember-paper/components/paper-radio-group'], function (exports, _paperRadioGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioGroup.default;
    }
  });
});
define('dummy/components/paper-radio-proxiable', ['exports', 'ember-paper/components/paper-radio-proxiable'], function (exports, _paperRadioProxiable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadioProxiable.default;
    }
  });
});
define('dummy/components/paper-radio', ['exports', 'ember-paper/components/paper-radio'], function (exports, _paperRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperRadio.default;
    }
  });
});
define('dummy/components/paper-reset-button', ['exports', 'ember-paper/components/paper-reset-button'], function (exports, _paperResetButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperResetButton.default;
    }
  });
});
define('dummy/components/paper-select-content', ['exports', 'ember-paper/components/paper-select-content'], function (exports, _paperSelectContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectContent.default;
    }
  });
});
define('dummy/components/paper-select-header', ['exports', 'ember-paper/components/paper-select-header'], function (exports, _paperSelectHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectHeader.default;
    }
  });
});
define('dummy/components/paper-select-menu-inner', ['exports', 'ember-paper/components/paper-select-menu-inner'], function (exports, _paperSelectMenuInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenuInner.default;
    }
  });
});
define('dummy/components/paper-select-menu-trigger', ['exports', 'ember-paper/components/paper-select-menu-trigger'], function (exports, _paperSelectMenuTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelectMenuTrigger.default;
});
define('dummy/components/paper-select-menu', ['exports', 'ember-paper/components/paper-select-menu'], function (exports, _paperSelectMenu) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectMenu.default;
    }
  });
});
define('dummy/components/paper-select-options', ['exports', 'ember-paper/components/paper-select-options'], function (exports, _paperSelectOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectOptions.default;
    }
  });
});
define('dummy/components/paper-select-search', ['exports', 'ember-paper/components/paper-select-search'], function (exports, _paperSelectSearch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectSearch.default;
    }
  });
});
define('dummy/components/paper-select-trigger', ['exports', 'ember-paper/components/paper-select-trigger'], function (exports, _paperSelectTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSelectTrigger.default;
    }
  });
});
define('dummy/components/paper-select', ['exports', 'ember-paper/components/paper-select'], function (exports, _paperSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSelect.default;
});
define('dummy/components/paper-sidenav-container', ['exports', 'ember-paper/components/paper-sidenav-container'], function (exports, _paperSidenavContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenavContainer.default;
    }
  });
});
define('dummy/components/paper-sidenav-inner', ['exports', 'ember-paper/components/paper-sidenav-inner'], function (exports, _paperSidenavInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavInner.default;
});
define('dummy/components/paper-sidenav-toggle', ['exports', 'ember-paper/components/paper-sidenav-toggle'], function (exports, _paperSidenavToggle) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenavToggle.default;
});
define('dummy/components/paper-sidenav', ['exports', 'ember-paper/components/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSidenav.default;
});
define('dummy/components/paper-slider', ['exports', 'ember-paper/components/paper-slider'], function (exports, _paperSlider) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSlider.default;
});
define('dummy/components/paper-snackbar-text', ['exports', 'ember-paper/components/paper-snackbar-text'], function (exports, _paperSnackbarText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSnackbarText.default;
    }
  });
});
define('dummy/components/paper-speed-dial-actions-action', ['exports', 'ember-paper/components/paper-speed-dial-actions-action'], function (exports, _paperSpeedDialActionsAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActionsAction.default;
    }
  });
});
define('dummy/components/paper-speed-dial-actions', ['exports', 'ember-paper/components/paper-speed-dial-actions'], function (exports, _paperSpeedDialActions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialActions.default;
    }
  });
});
define('dummy/components/paper-speed-dial-trigger', ['exports', 'ember-paper/components/paper-speed-dial-trigger'], function (exports, _paperSpeedDialTrigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDialTrigger.default;
    }
  });
});
define('dummy/components/paper-speed-dial', ['exports', 'ember-paper/components/paper-speed-dial'], function (exports, _paperSpeedDial) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSpeedDial.default;
    }
  });
});
define('dummy/components/paper-subheader', ['exports', 'ember-paper/components/paper-subheader'], function (exports, _paperSubheader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSubheader.default;
});
define('dummy/components/paper-switch', ['exports', 'ember-paper/components/paper-switch'], function (exports, _paperSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperSwitch.default;
});
define('dummy/components/paper-tab', ['exports', 'ember-paper/components/paper-tab'], function (exports, _paperTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTab.default;
    }
  });
});
define('dummy/components/paper-tabs', ['exports', 'ember-paper/components/paper-tabs'], function (exports, _paperTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTabs.default;
    }
  });
});
define('dummy/components/paper-toast-inner', ['exports', 'ember-paper/components/paper-toast-inner'], function (exports, _paperToastInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastInner.default;
    }
  });
});
define('dummy/components/paper-toast-text', ['exports', 'ember-paper/components/paper-toast-text'], function (exports, _paperToastText) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToastText.default;
    }
  });
});
define('dummy/components/paper-toast', ['exports', 'ember-paper/components/paper-toast'], function (exports, _paperToast) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToast.default;
    }
  });
});
define('dummy/components/paper-toaster', ['exports', 'ember-paper/components/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('dummy/components/paper-toolbar-tools', ['exports', 'ember-paper/components/paper-toolbar-tools'], function (exports, _paperToolbarTools) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbarTools.default;
});
define('dummy/components/paper-toolbar', ['exports', 'ember-paper/components/paper-toolbar'], function (exports, _paperToolbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperToolbar.default;
});
define('dummy/components/paper-tooltip-inner', ['exports', 'ember-paper/components/paper-tooltip-inner'], function (exports, _paperTooltipInner) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltipInner.default;
    }
  });
});
define('dummy/components/paper-tooltip', ['exports', 'ember-paper/components/paper-tooltip'], function (exports, _paperTooltip) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperTooltip.default;
    }
  });
});
define('dummy/components/paper-virtual-repeat-scroller', ['exports', 'ember-paper/components/paper-virtual-repeat-scroller'], function (exports, _paperVirtualRepeatScroller) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeatScroller.default;
});
define('dummy/components/paper-virtual-repeat', ['exports', 'ember-paper/components/paper-virtual-repeat'], function (exports, _paperVirtualRepeat) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _paperVirtualRepeat.default;
});
define('dummy/components/power-select-multiple', ['exports', 'ember-power-select/components/power-select-multiple'], function (exports, _powerSelectMultiple) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectMultiple.default;
    }
  });
});
define('dummy/components/power-select-multiple/trigger', ['exports', 'ember-power-select/components/power-select-multiple/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('dummy/components/power-select', ['exports', 'ember-power-select/components/power-select'], function (exports, _powerSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelect.default;
    }
  });
});
define('dummy/components/power-select/before-options', ['exports', 'ember-power-select/components/power-select/before-options'], function (exports, _beforeOptions) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _beforeOptions.default;
    }
  });
});
define('dummy/components/power-select/options', ['exports', 'ember-power-select/components/power-select/options'], function (exports, _options) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _options.default;
    }
  });
});
define('dummy/components/power-select/placeholder', ['exports', 'ember-power-select/components/power-select/placeholder'], function (exports, _placeholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _placeholder.default;
    }
  });
});
define('dummy/components/power-select/power-select-group', ['exports', 'ember-power-select/components/power-select/power-select-group'], function (exports, _powerSelectGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _powerSelectGroup.default;
    }
  });
});
define('dummy/components/power-select/search-message', ['exports', 'ember-power-select/components/power-select/search-message'], function (exports, _searchMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _searchMessage.default;
    }
  });
});
define('dummy/components/power-select/trigger', ['exports', 'ember-power-select/components/power-select/trigger'], function (exports, _trigger) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _trigger.default;
    }
  });
});
define('dummy/components/transition-group', ['exports', 'ember-css-transitions/components/transition-group'], function (exports, _transitionGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionGroup.default;
    }
  });
});
define('dummy/components/virtual-each', ['exports', 'virtual-each/components/virtual-each/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/helpers/-paper-underscore', ['exports', 'ember-paper/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('dummy/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_and.andHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_and.andHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/cancel-all', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.cancelHelper = cancelHelper;


  var CANCEL_REASON = "the 'cancel-all' template helper was invoked";

  function cancelHelper(args) {
    var cancelable = args[0];
    if (!cancelable || typeof cancelable.cancelAll !== 'function') {
      Ember.assert('The first argument passed to the `cancel-all` helper should be a Task or TaskGroup (without quotes); you passed ' + cancelable, false);
    }

    return (0, _helpers.taskHelperClosure)('cancelAll', [cancelable, CANCEL_REASON]);
  }

  exports.default = Ember.Helper.helper(cancelHelper);
});
define('dummy/helpers/ember-power-select-is-group', ['exports', 'ember-power-select/helpers/ember-power-select-is-group'], function (exports, _emberPowerSelectIsGroup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsGroup', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsGroup.emberPowerSelectIsGroup;
    }
  });
});
define('dummy/helpers/ember-power-select-is-selected', ['exports', 'ember-power-select/helpers/ember-power-select-is-selected'], function (exports, _emberPowerSelectIsSelected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectIsSelected', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectIsSelected.emberPowerSelectIsSelected;
    }
  });
});
define('dummy/helpers/ember-power-select-true-string-if-present', ['exports', 'ember-power-select/helpers/ember-power-select-true-string-if-present'], function (exports, _emberPowerSelectTrueStringIfPresent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.default;
    }
  });
  Object.defineProperty(exports, 'emberPowerSelectTrueStringIfPresent', {
    enumerable: true,
    get: function () {
      return _emberPowerSelectTrueStringIfPresent.emberPowerSelectTrueStringIfPresent;
    }
  });
});
define('dummy/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_equal.equalHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_equal.equalHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gt.gtHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gt.gtHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_gte.gteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_gte.gteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_isArray.isArrayHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_isArray.isArrayHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('dummy/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lt.ltHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lt.ltHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_lte.lteHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_lte.lteHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_notEqual.notEqualHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_notEqual.notEqualHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_not.notHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_not.notHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_or.orHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_or.orHelper);
  }

  exports.default = forExport;
});
define('dummy/helpers/perform', ['exports', 'ember-concurrency/-helpers'], function (exports, _helpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.performHelper = performHelper;
  function performHelper(args, hash) {
    return (0, _helpers.taskHelperClosure)('perform', args, hash);
  }

  exports.default = Ember.Helper.helper(performHelper);
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('dummy/helpers/task', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function taskHelper(_ref) {
    var _ref2 = _toArray(_ref),
        task = _ref2[0],
        args = _ref2.slice(1);

    return task._curry.apply(task, _toConsumableArray(args));
  }

  exports.default = Ember.Helper.helper(taskHelper);
});
define('dummy/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var forExport = null;

  if (Ember.Helper) {
    forExport = Ember.Helper.helper(_xor.xorHelper);
  } else if (Ember.HTMLBars.makeBoundHelper) {
    forExport = Ember.HTMLBars.makeBoundHelper(_xor.xorHelper);
  }

  exports.default = forExport;
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-cli-mirage', ['exports', 'ember-cli-mirage/utils/read-modules', 'dummy/config/environment', 'dummy/mirage/config', 'ember-cli-mirage/server', 'lodash/assign'], function (exports, _readModules, _environment, _config, _server, _assign2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.startMirage = startMirage;
  var getWithDefault = Ember.getWithDefault;
  exports.default = {
    name: 'ember-cli-mirage',
    initialize: function initialize(application) {
      if (arguments.length > 1) {
        // Ember < 2.1
        var container = arguments[0],
            application = arguments[1];
      }

      if (_shouldUseMirage(_environment.default.environment, _environment.default['ember-cli-mirage'])) {
        startMirage(_environment.default);
      }
    }
  };
  function startMirage() {
    var env = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _environment.default;

    var environment = env.environment;
    var discoverEmberDataModels = getWithDefault(env['ember-cli-mirage'] || {}, 'discoverEmberDataModels', true);
    var modules = (0, _readModules.default)(env.modulePrefix);
    var options = (0, _assign2.default)(modules, { environment: environment, baseConfig: _config.default, testConfig: _config.testConfig, discoverEmberDataModels: discoverEmberDataModels });

    return new _server.default(options);
  }

  function _shouldUseMirage(env, addonConfig) {
    if (typeof FastBoot !== 'undefined') {
      return false;
    }
    var userDeclaredEnabled = typeof addonConfig.enabled !== 'undefined';
    var defaultEnabled = _defaultEnabled(env, addonConfig);

    return userDeclaredEnabled ? addonConfig.enabled : defaultEnabled;
  }

  /*
    Returns a boolean specifying the default behavior for whether
    to initialize Mirage.
  */
  function _defaultEnabled(env, addonConfig) {
    var usingInDev = env === 'development' && !addonConfig.usingProxy;
    var usingInTest = env === 'test';

    return usingInDev || usingInTest;
  }
});
define('dummy/initializers/ember-concurrency', ['exports', 'ember-concurrency'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-concurrency',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('dummy/initializers/truth-helpers', ['exports', 'ember-truth-helpers/utils/register-helper', 'ember-truth-helpers/helpers/and', 'ember-truth-helpers/helpers/or', 'ember-truth-helpers/helpers/equal', 'ember-truth-helpers/helpers/not', 'ember-truth-helpers/helpers/is-array', 'ember-truth-helpers/helpers/not-equal', 'ember-truth-helpers/helpers/gt', 'ember-truth-helpers/helpers/gte', 'ember-truth-helpers/helpers/lt', 'ember-truth-helpers/helpers/lte'], function (exports, _registerHelper, _and, _or, _equal, _not, _isArray, _notEqual, _gt, _gte, _lt, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() /* container, application */{

    // Do not register helpers from Ember 1.13 onwards, starting from 1.13 they
    // will be auto-discovered.
    if (Ember.Helper) {
      return;
    }

    (0, _registerHelper.registerHelper)('and', _and.andHelper);
    (0, _registerHelper.registerHelper)('or', _or.orHelper);
    (0, _registerHelper.registerHelper)('eq', _equal.equalHelper);
    (0, _registerHelper.registerHelper)('not', _not.notHelper);
    (0, _registerHelper.registerHelper)('is-array', _isArray.isArrayHelper);
    (0, _registerHelper.registerHelper)('not-eq', _notEqual.notEqualHelper);
    (0, _registerHelper.registerHelper)('gt', _gt.gtHelper);
    (0, _registerHelper.registerHelper)('gte', _gte.gteHelper);
    (0, _registerHelper.registerHelper)('lt', _lt.ltHelper);
    (0, _registerHelper.registerHelper)('lte', _lte.lteHelper);
  }

  exports.default = {
    name: 'truth-helpers',
    initialize: initialize
  };
});
define('dummy/instance-initializers/clear-double-boot', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;

  // Taken from ember-fastboot:
  // https://github.com/ember-fastboot/ember-cli-fastboot/blob/master/app/instance-initializers/browser/clear-double-boot.js
  function initialize(instance) {
    var ref, originalDidCreateRootView;

    if ((ref = _environment.default.EmberSeleniumBuild) != null ? ref.dontClearDoubleBoot : void 0) {
      return;
    }

    originalDidCreateRootView = instance.didCreateRootView;
    instance.didCreateRootView = function () {
      Ember.$(instance.rootElement + ' .ember-view').remove();

      originalDidCreateRootView.apply(instance, arguments);
    };
  }

  exports.default = {
    name: 'clear-double-boot',
    initialize: initialize
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('dummy/mirage/config', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {

    // These comments are here to help you get started. Feel free to delete them.

    /*
      Config (with defaults).
       Note: these only affect routes defined *after* them!
    */

    // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
    this.namespace = 'api'; // make this `/api`, for example, if your API is namespaced
    // this.timing = 400;      // delay for each request, automatically set to 0 during testing

    /*
      Shorthand cheatsheet:
       this.get('/posts');
      this.post('/posts');
      this.get('/posts/:id');
      this.put('/posts/:id'); // or this.patch
      this.del('/posts/:id');
       http://www.ember-cli-mirage.com/docs/v0.3.x/shorthands/
    */
    this.get('/guides/:id');
    this.get('/guides');
  };
});
define('dummy/mirage/fixtures/guides', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _environment.default.APP.GUIDES.GUIDE_FIXTURES;
});
define('dummy/mirage/models/guide', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.Model.extend({});
});
define('dummy/mirage/scenarios/default', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (server) {

    /*
      Seed your development database using your factories.
      This data will not be loaded in your tests.
    */

    server.loadFixtures('guides');
  };
});
define('dummy/mirage/serializers/application', ['exports', 'ember-cli-mirage'], function (exports, _emberCliMirage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberCliMirage.JSONAPISerializer.extend({});
});
define('dummy/mixins/transition-mixin', ['exports', 'ember-css-transitions/mixins/transition-mixin'], function (exports, _transitionMixin) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _transitionMixin.default;
    }
  });
});
define('dummy/models/guide', ['exports', 'ember-data'], function (exports, _emberData) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberData.default.Model.extend({
    body: _emberData.default.attr('string')
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('guides', { path: '/' }, function () {
      this.route('guide', { path: '/guide/:id' });
      this.route('table-of-contents', { path: '/' });
    });
  });

  exports.default = Router;
});
define('dummy/routes/guides', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      var store = this.get('store');

      return store.findAll('guide');
    }
  });
});
define('dummy/routes/guides/guide', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model(_ref) {
      var id = _ref.id;

      return this.get('store').findRecord('guide', id);
    }
  });
});
define('dummy/routes/guides/table-of-contents', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    model: function model() {
      return this.modelFor('guides');
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('dummy/services/constants', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      inject = Ember.inject,
      computed = Ember.computed,
      EObject = Ember.Object;
  exports.default = Service.extend({

    sniffer: inject.service('sniffer'),

    webkit: computed(function () {
      return (/webkit/i.test(this.get('sniffer.vendorPrefix'))
      );
    }),

    vendorProperty: function vendorProperty(name) {
      var prefix = this.get('sniffer.vendorPrefix').toLowerCase();
      return this.get('webkit') ? '-webkit-' + name.charAt(0) + name.substring(1) : name;
    },


    CSS: computed('webkit', function () {
      var webkit = this.get('webkit');
      return {
        /* Constants */
        TRANSITIONEND: 'transitionend' + (webkit ? ' webkitTransitionEnd' : ''),
        ANIMATIONEND: 'animationend' + (webkit ? ' webkitAnimationEnd' : ''),

        TRANSFORM: this.vendorProperty('transform'),
        TRANSFORM_ORIGIN: this.vendorProperty('transformOrigin'),
        TRANSITION: this.vendorProperty('transition'),
        TRANSITION_DURATION: this.vendorProperty('transitionDuration'),
        ANIMATION_PLAY_STATE: this.vendorProperty('animationPlayState'),
        ANIMATION_DURATION: this.vendorProperty('animationDuration'),
        ANIMATION_NAME: this.vendorProperty('animationName'),
        ANIMATION_TIMING: this.vendorProperty('animationTimingFunction'),
        ANIMATION_DIRECTION: this.vendorProperty('animationDirection')
      };
    }),

    KEYCODE: EObject.create({
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      LEFT_ARROW: 37,
      UP_ARROW: 38,
      RIGHT_ARROW: 39,
      DOWN_ARROW: 40,
      TAB: 9
    }),

    MEDIA: {
      'xs': '(max-width: 599px)',
      'gt-xs': '(min-width: 600px)',
      'sm': '(min-width: 600px) and (max-width: 959px)',
      'gt-sm': '(min-width: 960px)',
      'md': '(min-width: 960px) and (max-width: 1279px)',
      'gt-md': '(min-width: 1280px)',
      'lg': '(min-width: 1280px) and (max-width: 1919px)',
      'gt-lg': '(min-width: 1920px)',
      'xl': '(min-width: 1920px)',
      'print': 'print'
    },

    MEDIA_PRIORITY: ['xl', 'gt-lg', 'lg', 'gt-md', 'md', 'gt-sm', 'sm', 'gt-xs', 'xs', 'print']
  });
});
define('dummy/services/paper-sidenav', ['exports', 'ember-paper/services/paper-sidenav'], function (exports, _paperSidenav) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperSidenav.default;
    }
  });
});
define('dummy/services/paper-toaster', ['exports', 'ember-paper/services/paper-toaster'], function (exports, _paperToaster) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _paperToaster.default;
    }
  });
});
define('dummy/services/sniffer', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      computed = Ember.computed;


  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var lowercase = function lowercase(string) {
    return isString(string) ? string.toLowerCase() : string;
  };

  var toInt = function toInt(str) {
    return parseInt(str, 10);
  };

  exports.default = Service.extend({
    vendorPrefix: '',
    transitions: false,
    animations: false,
    _document: null,
    _window: null,

    android: computed('', function () {
      return toInt((/android (\d+)/.exec(lowercase((this.get('_window').navigator || {}).userAgent)) || [])[1]);
    }),

    init: function init() {
      this._super.apply(this, arguments);
      if (typeof FastBoot !== 'undefined') {
        return;
      }

      var _document = document;
      var _window = window;

      this.setProperties({
        _document: _document,
        _window: _window
      });

      var bodyStyle = _document.body && _document.body.style;
      var vendorPrefix = void 0;
      var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

      var transitions = false;
      var animations = false;
      var match = void 0;

      if (bodyStyle) {
        for (var prop in bodyStyle) {
          if (match = vendorRegex.exec(prop)) {
            vendorPrefix = match[0];
            vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
            break;
          }
        }

        if (!vendorPrefix) {
          vendorPrefix = 'WebkitOpacity' in bodyStyle && 'webkit';
        }

        transitions = !!('transition' in bodyStyle || vendorPrefix + 'Transition' in bodyStyle);
        animations = !!('animation' in bodyStyle || vendorPrefix + 'Animation' in bodyStyle);

        if (this.get('android') && (!transitions || !animations)) {
          transitions = isString(bodyStyle.webkitTransition);
          animations = isString(bodyStyle.webkitAnimation);
        }
      }

      this.set('transitions', transitions);
      this.set('animations', animations);

      this.set('vendorPrefix', vendorPrefix);
    }
  });
});
define('dummy/services/text-measurer', ['exports', 'ember-text-measurer/services/text-measurer'], function (exports, _textMeasurer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _textMeasurer.default;
    }
  });
});
define('dummy/services/util', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Service = Ember.Service,
      $ = Ember.$;


  var Util = Service.extend({
    disableScrollAround: function disableScrollAround(element) {
      var util = this;
      var $document = $(window.document);

      util.disableScrollAround._count = util.disableScrollAround._count || 0;
      ++util.disableScrollAround._count;
      if (util.disableScrollAround._enableScrolling) {
        return util.disableScrollAround._enableScrolling;
      }

      var _$document$get = $document.get(0),
          body = _$document$get.body;

      var restoreBody = disableBodyScroll();
      var restoreElement = disableElementScroll();

      return util.disableScrollAround._enableScrolling = function () {
        if (! --util.disableScrollAround._count) {
          restoreBody();
          restoreElement();
          delete util.disableScrollAround._enableScrolling;
        }
      };

      // Creates a virtual scrolling mask to absorb touchmove, keyboard, scrollbar clicking, and wheel events
      function disableElementScroll() {
        var zIndex = 50;
        var scrollMask = $('<div class="md-scroll-mask" style="z-index: ' + zIndex + '">\n          <div class="md-scroll-mask-bar"></div>\n        </div>');
        body.appendChild(scrollMask[0]);

        scrollMask.on('wheel', preventDefault);
        scrollMask.on('touchmove', preventDefault);
        $document.on('keydown', disableKeyNav);

        return function restoreScroll() {
          scrollMask.off('wheel');
          scrollMask.off('touchmove');
          scrollMask[0].parentNode.removeChild(scrollMask[0]);
          $document.off('keydown', disableKeyNav);
          delete util.disableScrollAround._enableScrolling;
        };

        // Prevent keypresses from elements inside the body
        // used to stop the keypresses that could cause the page to scroll
        // (arrow keys, spacebar, tab, etc).
        function disableKeyNav(e) {
          // -- temporarily removed this logic, will possibly re-add at a later date
          return;
          if (!element[0].contains(e.target)) {
            e.preventDefault();
            e.stopImmediatePropagation();
          }
        }

        function preventDefault(e) {
          e.preventDefault();
        }
      }

      // Converts the body to a position fixed block and translate it to the proper scroll
      // position
      function disableBodyScroll() {
        var htmlNode = body.parentNode;
        var restoreHtmlStyle = htmlNode.getAttribute('style') || '';
        var restoreBodyStyle = body.getAttribute('style') || '';
        var scrollOffset = body.scrollTop + body.parentElement.scrollTop;
        var clientWidth = body.clientWidth;


        if (body.scrollHeight > body.clientHeight) {
          applyStyles(body, {
            position: 'fixed',
            width: '100%',
            top: -scrollOffset + 'px'
          });

          applyStyles(htmlNode, {
            overflowY: 'scroll'
          });
        }

        if (body.clientWidth < clientWidth) {
          applyStyles(body, { overflow: 'hidden' });
        }

        return function restoreScroll() {
          body.setAttribute('style', restoreBodyStyle);
          htmlNode.setAttribute('style', restoreHtmlStyle);
          body.scrollTop = scrollOffset;
        };
      }

      function applyStyles(el, styles) {
        for (var key in styles) {
          el.style[key] = styles[key];
        }
      }
    },
    enableScrolling: function enableScrolling() {
      var method = this.disableScrollAround._enableScrolling;
      method && method();
    },
    supplant: function supplant(template, values, pattern) {
      pattern = pattern || /\{([^\{\}]*)\}/g;
      return template.replace(pattern, function (a, b) {
        var p = b.split('.');
        var r = values;
        try {
          for (var s in p) {
            if (p.hasOwnProperty(s)) {
              r = r[p[s]];
            }
          }
        } catch (e) {
          r = a;
        }
        return typeof r === 'string' || typeof r === 'number' ? r : a;
      });
    },

    nextTick: function (window, prefixes, i, p, fnc) {
      while (!fnc && i < prefixes.length) {
        fnc = window[prefixes[i++] + 'equestAnimationFrame'];
      }
      return fnc && fnc.bind(window) || window.setImmediate || function (fnc) {
        window.setTimeout(fnc, 0);
      };
    }(window, 'r webkitR mozR msR oR'.split(' '), 0)

  });

  exports.default = Util;
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "tUIV3R0s", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"id\",\"main\"],[9,\"class\",\"layout-column\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"main\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/transition-group", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eLaWLNx4", "block": "{\"symbols\":[\"&default\"],\"statements\":[[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/transition-group.hbs" } });
});
define("dummy/templates/guides", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "NnnbTJfu", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/guides.hbs" } });
});
define("dummy/templates/guides/guide", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "5DlbaFDo", "block": "{\"symbols\":[],\"statements\":[[1,[20,[\"model\",\"body\"]],true]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/guides/guide.hbs" } });
});
define("dummy/templates/guides/table-of-contents", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "24/67imY", "block": "{\"symbols\":[\"guide\"],\"statements\":[[4,\"each\",[[19,0,[\"model\"]]],null,{\"statements\":[[4,\"link-to\",[\"guides.guide\",[19,1,[\"id\"]]],null,{\"statements\":[[0,\"    \"],[1,[19,1,[\"id\"]],false],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/guides/table-of-contents.hbs" } });
});
define('dummy/tests/mirage/mirage.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | mirage');

  QUnit.test('mirage/config.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/config.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/fixtures/guides.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/fixtures/guides.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/models/guide.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/models/guide.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/scenarios/default.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/scenarios/default.js should pass ESLint\n\n');
  });

  QUnit.test('mirage/serializers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'mirage/serializers/application.js should pass ESLint\n\n');
  });
});
define('dummy/utils/clamp', ['exports', 'ember-paper/utils/clamp'], function (exports, _clamp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _clamp.default;
    }
  });
});


define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("dummy/app")["default"].create({"GUIDES":{"GUIDES_DATA_ARRAY":[{"type":"guides","id":"01-introduction"},{"type":"guides","id":"02-getting-started"},{"type":"guides","id":"03-our-first-spec"},{"type":"guides","id":"04-booting-the-app"},{"type":"guides","id":"05-async-testing"},{"type":"guides","id":"appendix-a"},{"type":"guides","id":"appendix-b"},{"type":"guides","id":"using-the-ember-generator"}],"GUIDE_IDS":["01-introduction","02-getting-started","03-our-first-spec","04-booting-the-app","05-async-testing","appendix-a","appendix-b","using-the-ember-generator"],"GUIDE_FIXTURES":[{"id":"01-introduction","body":"<h1 id=\"introduction\">Introduction</h1>\n<h2 id=\"about-this-tutorial\">About this Tutorial</h2>\n<p>This is the beginning of the end-to-end spec testing tutorial, going through this tutorial should be the first steps in helping not only write step-by-step spec tests, but also get you started into the world of javascript programming.</p>\n<p>The structure of this tutorial is unabashedly stolen from <a href=\"http://learnyousomeerlang.com/introduction\">LearnYouSomeErlang</a>, which is in turn inspired by <a href=\"http://learnyouahaskell.com/introduction\">LearnYouSomeHaskell</a>. If you're truly aspiring to joy the autistic ranks of a software developer, sooner or later, you probably should go through those other tutorials. But for now, let's start with spec testing with javascript.</p>\n<h2 id=\"what-are-spec-tests\">What are Spec Tests?</h2>\n<p>Spec tests, also called Acceptance tests in Ember land, is a type of software test that treats the entirety of an application as a black box, we make assertions directly on the visual appearance of the app, and we drive the app by simulating user interactions. The advantage of these tests is that they directly and actually test your app exactly as your end users will eventually see it.</p>\n<p>In many ways, if the world of software bug hunting is a disease, then unit tests are what the developers use in the development of curative drugs, while end-to-end spec tests are the doctors who give you your daily dose of health.</p>\n<p><img src=\"https://gist.githubusercontent.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/c5b125cfebd37f0c1d17cc87d3ed5a415f404fd4/00-daily-dose.png\" alt=\"piccolo gives you your daily dose\" /></p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"/\">Previous</a></p>\n<p><a href=\"./02-getting-started\">Next</a></p>"},{"id":"02-getting-started","body":"<h1 id=\"getting-started\">Getting Started</h1>\n<h2 id=\"what-you-need-to-dive-in\">What you need to dive in</h2>\n<p>TL;DR</p>\n<ul>\n<li>yarn</li>\n<li>ember-cli</li>\n<li>nvm</li>\n<li>nodejs 6.10.x</li>\n<li>google chrome</li>\n</ul>\n<p>Sounds good so far? Great! If not, it's not like you have a choice if you've been assigned to QA for your job. So you'd best prepare your body and let's get started!</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/a6d9e41584fdce7bc240962914fa6c33c956b30a/01-body-is-ready.jpg\" alt=\"reggie's body is ready for some spec tests\" width=\"256\" height=\"auto\" /></p>\n<p>The journey of a 1000 miles begins with 1 step, and that first step we will take will be in our safe sandbox. Suppose you've been assigned to perform QA for a Netflix-clone streaming app called Crapollo, but you've never written JavaScript before. What should you do?</p>\n<p>First, you'll need to get access to the sandbox repo. You probably already have this, but if not, get access to the Sony repo by talking to your manager. Once this is done, use git to clone the repo:</p>\n<pre><code class=\"zsh language-zsh\">git <span class=\"hljs-keyword\">clone</span> <span class=\"hljs-title\">git</span>@github.com:foxnewsnetwork/crapollo.git</code></pre>\n<p>While this is cloning, this is the perfect opportunity to setup with <code>yarn</code> and <code>ember-cli</code> both of which we will need. In addition, if for whatever reason you don't have <a href=\"https://www.google.com/chrome/browser/desktop/index.html\">Google Chrome on your computer, now is a good time to download and install it</a></p>\n<p><img src=\"https://www.google.com/chrome/assets/common/images/chrome_logo_2x.png?mmfb=a5234ae3c4265f687c7fffae2760a907\" alt=\"get google chrome, we test with it\" /></p>\n<pre><code class=\"zsh language-zsh\"><span class=\"hljs-keyword\">brew </span><span class=\"hljs-keyword\">install </span>yarn\nnpm <span class=\"hljs-keyword\">install </span>-g ember-cli</code></pre>\n<p>When all this is done, it's time to <code>cd crapollo</code> and setup the environment:</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/a6d9e41584fdce7bc240962914fa6c33c956b30a/01-cd-apollo-ps4.png\" alt=\"go into the crapollo directory via shell\" /></p>\n<p>Next, checkout the branch corresponding to this chapter and install all the dependencies.</p>\n<pre><code class=\"zsh language-zsh\">git checkout -b getting-<span class=\"hljs-literal\">started</span> origin/getting-<span class=\"hljs-literal\">started</span>\nnpm install</code></pre>\n<p>This should take a million years, but eventually this should finish and, congrats, you're now setup to develop and test our crapollo project.</p>\n<p><img src=\"https://i.amz.mshcdn.com/DwsIlvbRG3T0Rtb1xss4yqskHW4=/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F529652%2Ff651862e-4cfe-4a4e-b227-2e9b73347ad7.jpg\" alt=\"party parrots\" width=\"100%\" height=\"auto\" /></p>\n<h2 id=\"run-the-tests\">Run the tests!</h2>\n<p>Before we write any tests, let's first run the tests and get a feel for what is happening.</p>\n<p>Run test the ember test server with the following shell command:</p>\n<pre><code class=\"zsh language-zsh\">ember test --<span class=\"hljs-keyword\">server</span> --filter=<span class=\"hljs-string\">'Acceptance'</span></code></pre>\n<p>Ember will take some time to build, but eventually, an automated Google Chrome instance will pop up with the currently spec tests being run:</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/5166c817cccc6b73316b6edd40997b0287721dba/01-mocha-spec-chrome.png\" alt=\"currently, our spec tests are run in the google chrome browser via mocha\" /></p>\n<p>Meanwhile, your terminal should enter the ember test server mode using <code>testem.js</code>:</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/5166c817cccc6b73316b6edd40997b0287721dba/01-ember-test-server.png\" alt=\"we use testem as the nodejs test driver\" /></p>\n<p>If everything went correctly, you should have seen the above two images replicated on your computer. If not, bother <a href=\"https://github.com/tom\">@tom</a>.chen and have him fix this, otherwise, take some time to go over the generated report.</p>\n<blockquote>\n  <p>PS: don't worry if any of these terms are confusing at, everything will make sense over time</p>\n</blockquote>\n<p>Once you've done this, it's time to jump in at the deep end and try writing it on your own.</p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"./01-introduction\">Previous</a></p>\n<p><a href=\"./03-our-first-spec\">Next</a></p>"},{"id":"03-our-first-spec","body":"<h1 id=\"our-first-spec\">Our First Spec</h1>\n<h2 id=\"diving-in-the-deep-end\">Diving in the deep end</h2>\n<p>At this point, there's probably a lot you don't know (or if there isn't, just sit tight anyway), but there's nothing like jumping in at the deep end to learn something.</p>\n<h2 id=\"tldr\">TL;DR</h2>\n<p>Here's the end result of what we will be writing up <code>tests/acceptance/specs/hello-world-test.js</code></p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> { expect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'chai'</span>;\n\ndescribe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  it(<span class=\"hljs-string\">'should be ok'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(<span class=\"hljs-literal\">true</span>).to.be.ok;\n  });\n});</code></pre>\n<p>And we will run that test with the following command:</p>\n<pre><code class=\"zsh language-zsh\">ember test --<span class=\"hljs-keyword\">server</span> --filter=<span class=\"hljs-string\">'specs/hello-world'</span></code></pre>\n<p>You should then see the following results:</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-tldr-results.png\" alt=\"Your first spec test passes\" /></p>\n<h2 id=\"manual-new-setup\">Manual new setup</h2>\n<p>First, we'll create our first new test. Type the following into your terminal:</p>\n<pre><code class=\"zsh language-zsh\">touch tests<span class=\"hljs-regexp\">/acceptance/</span>specs<span class=\"hljs-regexp\">/hello-world-test.js</span></code></pre>\n<p>This will create a new empty file called <code>hello-world-test.js</code> file. Open this file with your favorite editor and write in the following:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, <span class=\"hljs-literal\">it</span> } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> { expect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'chai'</span>;</code></pre>\n<p>This statement tells the ember framework to grab the two functions <code>describe</code> and <code>it</code> from a <code>node_module</code> called <code>mocha</code></p>\n<p>Similarly, we import the <code>expect</code> function from <code>chai</code></p>\n<h2 id=\"bdd-basics-and-mocha\">BDD Basics and Mocha</h2>\n<p>BDD or \"Behavior driven development\" is a form of software development wherein the developer writes tests based upon how the written software should behave. Like most of modern web development, DBB has its origins in Ruby on Rails, and is still alive and well even today in the world of client-side javascript.</p>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-dhh-at-rails-conf.png\" alt=\"David Heinemeier Hansson is to web development what Mohummand was to medieval religious development\" /></p>\n<p><a href=\"https://mochajs.org/\">Mocha, the testing framework we use</a>, is the javascript implementation of the rails testing <code>RSpec</code> testing framework. BDD ships with its own domain specific language (abbreviated DSL) for writing tests, let's meet two of them right now:</p>\n<p><code>describe</code> and <code>it</code></p>\n<h3 id=\"describe-blocks\">Describe blocks</h3>\n<p><code>describe</code> is a function that takes 2 arguments, one is a description of the associated block of tests, and the other is the block of tests</p>\n<p><strong>Aside</strong></p>\n<blockquote>\n  <p>Q: what's a function?</p>\n  <p>A: The exact definition of a function is best understood by what they do: they group a bunch of instructions together into batch that can be reused.</p>\n</blockquote>\n<p>By convention, <code>describe</code> block descriptions start with <code>Acceptance |</code>, next is the type of <code>Page</code>, <code>Sanity</code>, <code>Functional</code>, or perhaps <code>GKQA</code>, followed by the file location, in this case <code>specs/hello-world</code></p>\n<pre><code class=\"javascript language-javascript\">describe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n\n})</code></pre>\n<p><strong>Important</strong><br />\nYou must begin each description with the word <code>Acceptance |</code>, this is because all the tests including developer's unit tests, are all run with the <code>ember test</code> command. However, while unit tests can run and finish in under a minute for the full suite, each individual spec test might take up to 6 minutes to run individually. If you don't prepend all these slow spec tests with <code>Acceptance |</code>, there is no way for the developer to just run their unit tests during development.</p>\n<p>For reference, developers run just the unit tests with the following command:</p>\n<pre><code class=\"zsh language-zsh\">ember test -<span class=\"hljs-selector-tag\">i</span> --<span class=\"hljs-attribute\">filter</span>=<span class=\"hljs-string\">'Acceptance'</span> --serve</code></pre>\n<p>Notably the only difference between running just the acceptance suite and running everything except the acceptance suite is the <code>-i</code> flag (meaning to invert).</p>\n<p>You might notice <code>() =&gt; {}</code>, this is a function declaration using the \"fat arrow\" es6 syntax. We'll go over function declarations and the javascript <code>function</code> keyword later.</p>\n<h3 id=\"it-tests\">It tests</h3>\n<p>Now that we've setup our top test block, we're ready to put some tests into it. In mocha, tests begin with the function <code>it</code>. They do this so that the code is theoretically \"readable\".</p>\n<pre><code class=\"javascript language-javascript\">describe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  it(<span class=\"hljs-string\">'should do be sane'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n\n  })\n})</code></pre>\n<p>Like the <code>describe</code> block, the <code>it</code> block starts with a description, and then comes the block wherein we will put our assertions</p>\n<h3 id=\"expect-assertions\">Expect assertions</h3>\n<p>Finally, we get to the crux of the tests - the assertion. This is where we tell the computer that we are expecting some result, and to compare it against result. <a href=\"http://chaijs.com/api/bdd/\">Chai.js provides with the tool to build these assertions</a> in the form of <code>expect</code></p>\n<p>Here's how it works:</p>\n<pre><code class=\"javascript language-javascript\">describe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  it(<span class=\"hljs-string\">'should do be sane'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(<span class=\"hljs-literal\">true</span>).to.be.<span class=\"hljs-literal\">true</span>;\n  });\n});</code></pre>\n<p>The <code>expect</code> function takes as its first argument any object and wraps it inside a special test object to which we can attach predicate chains that perform our assertions. In this case, we've used the boolean <code>true</code> and attached on the predicate chains to check that <code>true</code> is <code>true</code>.</p>\n<p>We expect this painfully obvious statement to be true and to therefore pass our given test. Typically, we would never write tests like this in real life, but it is quite common when we're making sure our test suite is running.</p>\n<p>For reference, the chains that are possible to an <code>expect(something)</code> call are:</p>\n<ul>\n<li>to</li>\n<li>be</li>\n<li>been</li>\n<li>is</li>\n<li>that</li>\n<li>which</li>\n<li>and</li>\n<li>has</li>\n<li>have</li>\n<li>with</li>\n<li>at</li>\n<li>of</li>\n<li>same</li>\n<li>but</li>\n<li>does</li>\n</ul>\n<h2 id=\"running-the-test\">Running the test</h2>\n<p>Now that we have written our first spec test, let's run it and see what happens. Open up your terminal and type in the following</p>\n<pre><code class=\"zsh language-zsh\">ember <span class=\"hljs-built_in\">test</span> --serve --filter=<span class=\"hljs-string\">'specs/hello-world'</span></code></pre>\n<p>If you see the following, congrats, everything works!</p>\n<p><img src=\"/images/our-first-spec/expected-results.png\" alt=\"expected results in your browser\" /></p>\n<h3 id=\"breaking-down-the-results\">Breaking down the results</h3>\n<p>The report is pretty self-explanatory. The text we wrote into our <code>describe('Acceptance | Sanity | specs/hello-world', () =&gt; { ... })</code> block is now showing up as a big header.</p>\n<p>Similar, our test written in our <code>it('should be ok', () =&gt; { ... })</code> is showing up under the describe block. The little green check signifies that our assertion that where we <code>expect(true).to.be.true;</code> was, indeed, true.</p>\n<p>All one of our tests passed, none failed, and the tests ran for a duration of 70ms.</p>\n<p>Next up, we will actually boot up the crapollo app and write our first <em>real</em> test.</p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"./02-getting-started\">Previous</a></p>\n<p><a href=\"./04-booting-the-app\">Next</a></p>"},{"id":"04-booting-the-app","body":"<h1 id=\"booting-the-app\">Booting the App</h1>\n<p>So far we've got our feet wet with writing our first spec test, but we've yet to actually test Apollo! In this chapter, we'll boot the app for real and try our best to write a real end-to-end test:</p>\n<p><img src=\"/images/booting-the-app/real-boy-now.png\" alt=\"I'm a real SDET now\" /></p>\n<h2 id=\"tldr\">TL;DR</h2>\n<p>In this chapter we'll meet the following functions:</p>\n<ul>\n<li><code>startApp</code></li>\n<li><code>destroyApp</code></li>\n<li><code>before</code></li>\n<li><code>after</code></li>\n</ul>\n<p>And we will add to our <code>hello-world-test.js</code> file until it looks like the following:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, before, after } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> { expect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'chai'</span>;\n<span class=\"hljs-keyword\">import</span> startApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/start-app'</span>;\n<span class=\"hljs-keyword\">import</span> destroyApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/destroy-app'</span>;\n\ndescribe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  let application;\n  before(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    application = startApp();\n  });\n  after(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    destroyApp(application);\n  });\n\n  it(<span class=\"hljs-string\">'should be ok'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application).to.be.ok;\n  });\n});</code></pre>\n<p>Running the same old command:</p>\n<pre><code class=\"zsh language-zsh\">ember test --<span class=\"hljs-keyword\">server</span> --filter=<span class=\"hljs-string\">'specs/hello-world'</span></code></pre>\n<p>We should see the same thing we saw in the previous section</p>\n<h2 id=\"intermediate-bdd-tools\">Intermediate BDD Tools</h2>\n<p>This time, we will learn about mocha's tools for setting up the testing environment.</p>\n<h3 id=\"before\">before</h3>\n<p>Suppose we have a bunch of tests that look like:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\ndescribe(<span class=\"hljs-string\">'apollo test basics'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  it(<span class=\"hljs-string\">'should app to be ok'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    const application = startApp();\n    expect(application).to.be.ok;\n    destroyApp(application);\n  });\n\n  it(<span class=\"hljs-string\">'should not suck'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    const application = startApp();\n    expect(application.notSuck).to.be.<span class=\"hljs-literal\">true</span>;\n    destroyApp(application);\n  });\n\n  it(<span class=\"hljs-string\">'should not cause developers to kill themselves'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    const application = startApp();\n    expect(application.developers).to.have.property(<span class=\"hljs-string\">'shouldKillSelf'</span>, <span class=\"hljs-literal\">false</span>);\n    destroyApp(application);\n  });\n});</code></pre>\n<p>In each test, you'll notice we are spinning up an app, testing something, then tear-downing our app. This is good and all, but we really don't want to repeat ourselves so much, so let's clean this up with a <code>before</code> statement:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, before } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\ndescribe(<span class=\"hljs-string\">'crapollo test basics II'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  let application;\n  before(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    application = startApp()\n  });\n  it(<span class=\"hljs-string\">'should be ok'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application).to.be.ok\n    destroyApp(application);\n  });\n  it(<span class=\"hljs-string\">'should not suck'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application.notSuck).to.be.<span class=\"hljs-literal\">true</span>;\n    destroyApp(application);\n  });\n  it(<span class=\"hljs-string\">'should not cause developers to kill themselves'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application.developers).to.have.property(<span class=\"hljs-string\">'shouldKillSelf'</span>, <span class=\"hljs-literal\">false</span>);\n    destroyApp(application);\n  });\n});</code></pre>\n<p>Now, <code>application</code> will be made once and for all the tests in our <code>apollo tests basics II</code> block, which saves us some writing and a lot of time in spinning up new application instances for each test.</p>\n<h3 id=\"after\">after</h3>\n<p>But there is a problem, right now, we <code>startApp</code> our app once before all of our tests, but we <code>destroyApp</code> 3 times (once at the end of each test). If we've only created 1 app, we certainly can't go about destroying 3 of them. Instead, we want to destroy the app just once after we finish all our tests.</p>\n<p>Luckily, the <code>after</code> function does exact this:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, before, after } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\ndescribe(<span class=\"hljs-string\">'crapollo test basics III'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  let application;\n  before(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    application = startApp()\n  });\n  after(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    destroyApp(application);\n  })\n  it(<span class=\"hljs-string\">'should be ok'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application).to.be.ok;\n  });\n  it(<span class=\"hljs-string\">'should not suck'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application.notSuck).to.be.<span class=\"hljs-literal\">true</span>;\n  });\n  it(<span class=\"hljs-string\">'should not cause developers to kill themselves'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(application.developers).to.have.property(<span class=\"hljs-string\">'shouldKillSelf'</span>, <span class=\"hljs-literal\">false</span>);\n  });\n});</code></pre>\n<h3 id=\"aside-functions-scopes-and-contexts\">Aside: Functions, Scopes, and Contexts</h3>\n<blockquote>\n  <p>Questions: Why didn't we put everything in the <code>before</code> block?</p>\n</blockquote>\n<pre><code class=\"javascript language-javascript\">before(() =&gt; {\n  const application = startApp()<span class=\"hljs-comment\">;</span>\n})<span class=\"hljs-comment\">;</span>\nit('should be ok', () =&gt; {\n  expect(<span class=\"hljs-name\">application</span>).to.be.ok<span class=\"hljs-comment\">;</span>\n})<span class=\"hljs-comment\">;</span></code></pre>\n<p>and instead put <code>let application</code> outside the <code>before</code> function?</p>\n<p>This is because <code>const</code>, <code>let</code>, and <code>var</code> are declare their variables only within the <code>{ }</code> block they live in (this is called \"scope\"). The <code>before</code> block and the <code>it</code> block have their own <code>{ }</code> neighborhood scopes, and so we need to put the <code>let application</code> declaration in the <code>describe</code> block's <code>{ }</code> that the others live in.</p>\n<p><a href=\"./appendix-a\">Check out Appendix A for a tutorial on javascript functions</a></p>\n<h2 id=\"test-helpers\">Test Helpers</h2>\n<p>Next are the test helpers. Where <code>before</code> and <code>after</code> are functions that come as a part of the mocha testing framework, <code>startApp</code> and <code>destroyApp</code> are particular to our ember app, and are created by the ember team to provide us with an easy macro to spin up a test version of our ember app.</p>\n<p>The two we will go over right now are <code>startApp</code> and its complement <code>destroyApp</code>:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> startApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/start-app'</span>;\n<span class=\"hljs-keyword\">import</span> destroyApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/destroy-app'</span>;</code></pre>\n<h3 id=\"startapp\">startApp</h3>\n<p>So what does <code>startApp</code> do? </p>\n<p>From the function name, it seems to suggest it starts our app. And that's indeed true. The exact details of how it does this is encapulsated from us, but suffice it to say, it provides us a way to start up our entire Apollo 2 application and interact with it in much the same way a real user would.</p>\n<p>In addition, the <code>startApp</code> function returns a reference to our application. This <code>application</code> is the ember object that is the root of our ember application. <a href=\"https://emberjs.com/api/ember/2.15/classes/Ember.Application?show=inherited%2Cprotected%2Cprivate\">You can read the API docs here</a></p>\n<p>But for our purposes, we won't actually be using the <code>application</code> object under normal circumstances, instead, the effect of calling <code>startApp</code> merely serves the purpose of creating the little app we see at the bottom right corner of our test chrome page:</p>\n<p><img src=\"/images/booting-the-app/apollo-app-in-testing-2.png\" alt=\"this is what startApp creates that we then use to test\" /></p>\n<h3 id=\"destroyapp\">destroyApp</h3>\n<p>Once we have <code>startApp</code>, we need to also <code>destroyApp</code> once we're finished with it. This sort of cleaning up after yourelf is good practice not just in programming, but also in real life. After all, after you have dinner, you don't leave the dishes around for someone else to find out and be annoyed by, you clean your dishes and put them back into the cupboard for the next meal.</p>\n<p>In spec testing, if you ever <code>startApp</code>, you must always remember to <code>destroyApp</code> also:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, before, after } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> startApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/start-app'</span>;\n<span class=\"hljs-keyword\">import</span> destroyApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/destroy-app'</span>;\n\ndescribe(<span class=\"hljs-string\">'before-after'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  let application;\n  before(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    application = startApp();\n  });\n  after(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    destroyApp(application);\n  });\n  <span class=\"hljs-regexp\">//</span> My Tests Here...\n});</code></pre>\n<h2 id=\"summary\">Summary</h2>\n<p>In this chapter, we learned about how to setup and load the Apollo 2 app. However, we haven't actually run any tests against it. In the next chapter, we will go over actually testing the app.</p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"./03-out-first-spec\">Previous</a></p>\n<p><a href=\"./05-async-testing\">Next</a></p>"},{"id":"05-async-testing","body":"<h1 id=\"async-testing\">Async Testing</h1>\n<p>If you've been following this tutorial and running your tests as we go, you'll have noticed that once you run <code>ember test --filter='Acceptance' --server</code> it takes some period of time before your test chrome tab pops up, some more time for the tests to load, some more time for the app to load, and yet more time for each test to run.</p>\n<p>The very nature that a lot of these things like booting our app takes time means we'll have to learn how to deal with time in our testing before we can properly test our app.</p>\n<p><img src=\"/images/async-testing/nature-of-time.png\" alt=\"E2E testing must necessarily incorporate the idea of time\" /></p>\n<h2 id=\"tldr\">TL;DR</h2>\n<p>In this chapter, we'll learn about how to use <code>async function</code> and the <code>await</code> keyword. We will meet the <code>waitUntil</code> utility helper. In addition, we will also sneak a preview of the <code>home</code> page object and its <code>visit</code> method and <code>isLoaded</code> property.</p>\n<p>We will modify our <code>hello-world-test.js</code> to look like:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, before, after } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> { expect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'chai'</span>;\n<span class=\"hljs-keyword\">import</span> startApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'apollo2/tests/helpers/start-app'</span>;\n<span class=\"hljs-keyword\">import</span> destroyApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'apollo2/tests/helpers/destroy-app'</span>;\n<span class=\"hljs-keyword\">import</span> home <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'apollo2/tests/pages/home'</span>;\n<span class=\"hljs-keyword\">import</span> { waitUntil } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'apollo2/tests/helpers/wait'</span>;\n\ndescribe(<span class=\"hljs-string\">'Acceptance | Sanity | specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  let application;\n  before(async () =&gt; {\n    application = startApp();\n    <span class=\"hljs-keyword\">await</span> waitUntil(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> home.isLoaded);\n  });\n  after(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    destroyApp(application);\n  });\n\n  it(<span class=\"hljs-string\">'should be loaded'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n    expect(home.isLoaded).to.be.<span class=\"hljs-literal\">true</span>;\n  });\n});</code></pre>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"./booting-the-app\">Previous</a></p>\n<p><a href=\"./intro-to-page-objects\">Next</a></p>"},{"id":"appendix-a","body":"<h1 id=\"appendix-a-javascript-crash-course\">Appendix A: Javascript Crash Course</h1>\n<p>Welcome to the JavaScript crash course. JavaScript is a weird language; some people woud even say it's a \"badly designed\" language. However, it is the gun the industry has chosen to conquer the world of front-end design.</p>\n<p><img src=\"/images/appendix-a/javascript-is-a-gun.png\" alt=\"javascript is a badly designed gun\" /></p>\n<p>If you're new to programming JavaScript, there is no way in hell you'll walk out of this chapter being a master of modern JavaScript (also known as ECMAScript). But there is no harm in trying, so let's get started!</p>\n<h2 id=\"philosophy\">Philosophy</h2>\n<p>First things first: progamming language is, at the end of the day, a human language. It might have its own grammar that's different from our familiar language of English, but it doesn't change the fact it tries to express ideas in much the same way English does.</p>\n<p>With this basic philosophy in mind, let's move onto the grammar of JavaScript:</p>\n<h2 id=\"objects\">Objects</h2>\n<p>Everything in JavaScript is an object. But what's an object?</p>\n<p>Without getting into theory or abstraction, an object is to JavaScript what nouns are to English. Notably, an object does stuff.</p>\n<p>We declare basic objects like so:</p>\n<pre><code class=\"javascript language-javascript\">const <span class=\"hljs-attr\">myObject</span> = {};\n<span class=\"hljs-keyword\">let</span> <span class=\"hljs-attr\">myObject2</span> = {};\nvar <span class=\"hljs-attr\">myObject3</span> = {};</code></pre>\n<p>Say we have the English sentence \"dog barks\", in JavaScript, we would express that idea like so:</p>\n<pre><code class=\"javascript language-javascript\">dog.bark()<span class=\"hljs-comment\">;</span></code></pre>\n<p>Similarly, the statement \"barking of dog\" can be expressed as:</p>\n<pre><code class=\"javascript language-javascript\">barking(<span class=\"hljs-name\">dog</span>)<span class=\"hljs-comment\">;</span></code></pre>\n<h2 id=\"declarations\">Declarations</h2>\n<p>In JavaScript, there are 3 ways to declare variables (also known as objects): <code>const</code>, <code>let</code>, and <code>var</code>. The difference between the three types of declarations have to do with \"scope\" and \"mutability\".</p>\n<h3 id=\"block-scope-and-immutable\">Block Scope and Immutable</h3>\n<p><code>const</code>, short of constant, declares a variable that won't change and has block scope. What is block scope? A block is set of stuff enclosed in a <code>{ }</code>:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-built_in\">console</span>.log(dog); <span class=\"hljs-comment\">// not in scope</span>\n<span class=\"hljs-keyword\">if</span> (something) {\n  <span class=\"hljs-comment\">// In a block</span>\n  <span class=\"hljs-keyword\">const</span> dog = <span class=\"hljs-string\">'dog'</span>;\n  <span class=\"hljs-built_in\">console</span>.log(dog); <span class=\"hljs-comment\">// in scope</span>\n\n  dog = <span class=\"hljs-string\">'cat'</span>; <span class=\"hljs-comment\">// can't reassign</span>\n}\n<span class=\"hljs-built_in\">console</span>.log(dog); <span class=\"hljs-comment\">// not in scope</span></code></pre>\n<p>Bear in mind that, in JavaScript <code>=</code> is assignment, not \"equals to\". And the statement <code>dog = 'cat'</code> is an attempt to reassign <code>dog</code> to another value. This is not allowed because we declared <code>dog</code> with <code>const</code> which means it can only be assigned once and never changed</p>\n<h3 id=\"block-scope-and-mutable\">Block Scope and Mutable</h3>\n<p>If we wanted to be able to change <code>dog</code> to have another value, we'd use the <code>let</code> keyword:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">if</span> (something) {\n  let dog = <span class=\"hljs-string\">'dog'</span>;\n\n  dog = <span class=\"hljs-string\">'rover'</span>; <span class=\"hljs-regexp\">//</span> dog now stores rover\n}\nconsole.log(dog); <span class=\"hljs-regexp\">//</span> <span class=\"hljs-keyword\">not</span> <span class=\"hljs-keyword\">in</span> scope</code></pre>\n<p><code>let</code> has the same \"block scope\" rules as <code>const</code></p>\n<h3 id=\"function-scope-and-mutable\">Function Scope and Mutable</h3>\n<p>Finally there is <code>var</code> which is effectively deprecated in modern JavaScript, but you might see it in older time. <code>var</code> is like <code>let</code> except it hoists the variable up to closest function scope.</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">barking</span>(<span class=\"hljs-params\">dog</span>) </span>{\n  <span class=\"hljs-keyword\">if</span> (dog) {\n    <span class=\"hljs-keyword\">if</span> (dog.name === <span class=\"hljs-string\">'rover'</span>) {\n      <span class=\"hljs-keyword\">var</span> cu = <span class=\"hljs-string\">'ck'</span>;\n    }\n  }\n  <span class=\"hljs-built_in\">console</span>.log(cu); <span class=\"hljs-comment\">// this is ok</span>\n}</code></pre>\n<h2 id=\"function-theory\">Function Theory</h2>\n<p>In our previous example, I introduced the <code>function</code> keyword, but what is a function? A function is to JavaScript what verbs are to English. They package together a block of instructions (also known as a closure) and gives them a name so you can reuse it.</p>\n<p>For example, in English, the verb <code>bark</code> can be defined as:</p>\n<blockquote>\n  <p><strong>bark</strong>: the act of first breathing in air, then opening your mouth, then quickly letting out air in quick gutteral bursts</p>\n</blockquote>\n<p>And in javascript, we can do the same thing:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">bark</span><span class=\"hljs-params\">(you)</span> <span class=\"hljs-comment\">{\n  breathIn(you);\n  openMouth(you);\n  quicklyBurstOutAir(you);\n}</span></span></code></pre>\n<blockquote>\n  <p><strong>note</strong>: remember, everything in JavaScript is an object, even functions</p>\n</blockquote>\n<h2 id=\"context\">Context</h2>\n<p>In JavaScript, you'll often see the keyword <code>this</code> being throw around in functions. So what is <code>this</code>?</p>\n<p><code>this</code> is an object that is implicitly passed into every function depending upon how the function is used (<code>call</code>ed).</p>\n<p>In English, our cadre of pronouns all play the role of JavaScript's <code>this</code>. Consider the sentence \"he got fired\", depending upon the context of that sentence, \"he\" can refer to completely different people. In javascript, we can express the same idea as:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">getFired</span><span class=\"hljs-params\">()</span> </span>{\n  <span class=\"hljs-keyword\">this</span>.unemployed = <span class=\"hljs-literal\">true</span>;\n  <span class=\"hljs-keyword\">this</span>.isPoor = <span class=\"hljs-literal\">true</span>;\n}</code></pre>\n<p>In English, we can use the \"he got fired\" in an context like \"Tom is a new UX developer, he got fired\", which in JavaScript becomes:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UXDeveloper</span> {</span>\n  getFired: getFired\n}\n\nconst tom = <span class=\"hljs-function\"><span class=\"hljs-keyword\">new</span> <span class=\"hljs-title\">UXDeveloper</span>();\n\n<span class=\"hljs-title\">tom</span>.<span class=\"hljs-title\">getFired</span>();</span></code></pre>\n<p>In this case, we've attached our previously written <code>getFired</code> function to the class prototype <code>UXDeveloper</code>, we've then indicated that <code>tom</code> is a <code>new</code> instance of a <code>UXDeveloper</code>, then, when we performed <code>tom.getFired()</code> javascript was smart enough to figure out that <code>this</code> referred to <code>tom</code>.</p>\n<p>In other words, blocks created with the <code>function</code> keyword has a fluid <code>this</code> pronoun that can be used to refer to different things in different contexts.</p>\n<blockquote>\n  <p><strong>Note</strong>: When you're at the topmost block scope level, <code>this</code> refers to the <code>window</code> object that is a reference to the browser window</p>\n</blockquote>\n<h2 id=\"fat-arrows\">Fat Arrows</h2>\n<p>Of course, the malleability of the JavaScript <code>this</code> is also one of its greatest weaknesses, as it can be very hard for the developer to intuitive know from looking at function what <code>this</code> is actually referring to.</p>\n<p>This is where the \"fat arrow\" syntax comes in:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">const</span> whatIsThis = <span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">this</span>;\n}\n\n<span class=\"hljs-class\"><span class=\"hljs-keyword\">class</span> <span class=\"hljs-title\">UXDeveloper</span> </span>{\n  whatIsThis: whatIsThis\n}\n\n<span class=\"hljs-keyword\">const</span> tom = <span class=\"hljs-keyword\">new</span> UXDeveloper();\ntom.whatIsThis(); <span class=\"hljs-comment\">// the `window` object</span></code></pre>\n<p>When you create a function with a fat arrow, the <code>this</code> pronoun refers to the context where the function was declared (this is called \"lexical scope\"), and this didn't change even if we attached that function to something else.</p>\n<h2 id=\"homework\">Homework</h2>\n<p>Have a good feel for how javascript works now? Crank through the next few homework problems at your desk!</p>\n<h3 id=\"q-get-familiar-calling-functions\">Q: Get familiar calling functions!</h3>\n<p>Given to two following two functions:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">greet</span>(<span class=\"hljs-params\">person</span>) </span>{\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`hey <span class=\"hljs-subst\">${person}</span>, `</span>;\n}\n\n<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">areFired</span>(<span class=\"hljs-params\">someone</span>) </span>{\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-string\">`<span class=\"hljs-subst\">${someone}</span> are fired!`</span>;\n}</code></pre>\n<p>And the object:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-attribute\">let person</span> = <span class=\"hljs-string\">'tom'</span>;</code></pre>\n<p>Use the function to construct the sentence <code>'hey tom, you are fired!'</code></p>\n<h3 id=\"q-writing-your-own-functions\">Q: Writing your own functions</h3>\n<p>Remember, functions can take other functions as arguments and return other functions</p>\n<p>Create a <code>myFun</code> that can be used like so to make the following statements true:</p>\n<pre><code class=\"javascript language-javascript\">myFun(<span class=\"hljs-symbol\">'sony</span>') === <span class=\"hljs-symbol\">'oh</span> no, sony <span class=\"hljs-keyword\">is</span> finished';\nmyFun(<span class=\"hljs-symbol\">'microsoft</span>') === <span class=\"hljs-symbol\">'oh</span> no, microsoft <span class=\"hljs-keyword\">is</span> finished';</code></pre>\n<h3 id=\"q-functions-as-arguments-and-return-values\">Q: Functions as arguments and return values</h3>\n<p>In JavaScript, functions are also objects and can be used as arguments and return values.</p>\n<p>Given the following 2 functions:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">plus1</span>(number) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">number</span> + <span class=\"hljs-number\">1</span>;\n}\n\n<span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">times4</span>(number) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">number</span> * <span class=\"hljs-number\">4</span>;\n}</code></pre>\n<p>Fill in the contents of the following function:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">myHigherFun</span><span class=\"hljs-params\">(number)</span> </span>{\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-comment\">// your code here!</span>\n}</code></pre>\n<p>Such that the following test statement is true:</p>\n<pre><code class=\"javascript language-javascript\">myFun(<span class=\"hljs-number\">4</span>) === <span class=\"hljs-number\">20</span></code></pre>\n<h2 id=\"solutions\">Solutions</h2>\n<p>At least attempt each problem before looking at the solutions!</p>\n<h3 id=\"s-calling-functions\">S: Calling Functions</h3>\n<pre><code class=\"javascript language-javascript\">areFired(<span class=\"hljs-name\">greet</span>(<span class=\"hljs-name\">person</span>))<span class=\"hljs-comment\">;</span></code></pre>\n<h3 id=\"s-writing-functions\">S: Writing functions</h3>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">myFun</span>(company) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">`oh</span> no, ${company} <span class=\"hljs-keyword\">is</span> finished`;\n}</code></pre>\n<h3 id=\"s-higher-order-functions\">S: Higher Order functions</h3>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">myHigherFun</span>(number) {\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-type\">times4(plus1(number))</span>;\n}</code></pre>\n<p><a href=\"https://www.codewars.com/?language=javascript\">For the really motivated, do some code katas from the internet!</a></p>\n<h2 id=\"links\">Links</h2>\n<p><a href=\"/\">Table of Contents</a></p>\n<p><a href=\"./conclusion\">Previous</a></p>\n<p><a href=\"./appendix-b\">Next</a></p>"},{"id":"appendix-b","body":"<h1 id=\"appendix-b-javascript-and-time\">Appendix B: JavaScript and Time</h1>\n<p>At the end of the day, front-end JavaScript is used build user interactions. And one of the most salient features of an user is that he or she isn't there all the time. Furthermore, many times when we make requests to remote data sources, we have to wait some period of time before we get results back. So how does JavaScript handle the idea of time?</p>\n<p>Modern JavaScript has <code>async</code> functions, <code>promise</code>s, and <code>future</code>s to handle all this, but before we can understand what they are and how to use, them, we must go back to the very beginning:</p>\n<p><img src=\"/images/appendix-b/back-to-reddit.png\" alt=\"let's go back\" /></p>\n<h2 id=\"callbacks\">Callbacks</h2>\n<p>In the very beginning, JavaScript handled this with callbacks. But what's a callback?</p>\n<p>It's exactly what it shoulds like, it's function that will be \"called\" when a result gets \"back\" to us. For example:</p>\n<pre><code class=\"javascript language-javascript\">ajax(<span class=\"hljs-string\">'/user/session'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n  <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'Hey, user got back to us with the following result'</span>, result);\n})</code></pre>\n<p>In this case, the function <code>ajax</code> took 2 arguments: the first one being the uri we wanted to hit, and the second being a our \"callback function\" that should be called whenever the function <code>ajax</code> finishes doing whatever it needs to do. </p>\n<h2 id=\"problem-with-callbacks\">Problem with Callbacks</h2>\n<p>For a period of about a decade, every single website was built using this sort of <code>callback</code> framework. But there were many problems with this approach, notably, it was incredibly hard work with the <code>result</code> we got back from Kamaji in any sensible way.</p>\n<p>For example, if we wanted to model the English sentence \"Make a request to Kamaji, extract the product ID from the results, use that to make a request to Pegasus, get the entitlementID from there, then launch the game via PSCLOUD\", we'd have to do:</p>\n<pre><code class=\"javascript language-javascript\">ajax(<span class=\"hljs-string\">'/user/session'</span>, <span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n  const productId = result.product_id;\n  ajax(`<span class=\"javascript\">/game/${productId}</span>`, <span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n    const entitlementId = result.defaultSku.entitlement_id\n    streamLauncher.launchGame(productId, entitlementId, <span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n      <span class=\"hljs-built_in\">console</span>.log(<span class=\"hljs-string\">'launched game!'</span>, result);\n    })\n  })\n})</code></pre>\n<p><img src=\"/images/appendix-b/thicc.png\" alt=\"callbacks lead to thick nesting\" /></p>\n<p>Notice how thickly nested this is; as an industry, web-development found this sort of thicc nesting abhorrent, having no choice, we lived under the heavy and oppressive reign of the thick callback stack.</p>\n<p>Many developers, unable to stock such thickness and unable to find these big beautiful code curves to be understandable, fled in droves to the neighboring lands of Ruby, Python, and other flatter languages</p>\n<p><img src=\"/images/appendix-b/ruby.png\" alt=\"ruby is flatter than JS callbacks\" /></p>\n<h2 id=\"promises\">Promises</h2>\n<p>Sometime in 2012, JavaScript engineers managed to devise a way to make JavaScript almost as flat as Ruby using a construct called a <code>Promise</code>.</p>\n<p>A Promise is an object that represents the result of a calculation that can't be completed right away. A good real life analog of a JS Promise is a pre-order for your favorite game console (say the Switch). You've already paid for the Switch, and Nintendo has sent you confirmation email with your recipt that reprsents their promise that they will eventually ship the Switch to you, but you haven't actually received your Switch at the moment you paid for the it.</p>\n<p>If we invented an <code>ajaxPromise</code> function, we would be able to model our above English sentence as:</p>\n<pre><code class=\"javascript language-javascript\">ajaxPromise(<span class=\"hljs-string\">'/user/session'</span>)\n.<span class=\"hljs-keyword\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n  const productId = result.product_id;\n  <span class=\"hljs-keyword\">return</span> ajaxPromise(`<span class=\"javascript\">/product/${productId}</span>`);\n})\n.<span class=\"hljs-keyword\">then</span>(<span class=\"hljs-function\"><span class=\"hljs-params\">(result)</span> =&gt;</span> {\n  <span class=\"hljs-keyword\">return</span> streamLauncherPromise.launchGame(result)\n})</code></pre>\n<p>Here, <code>then</code> is a method on the <code>promise</code> that allows to register a callback function that can return either our desired result or yet another promise. We can then attain some level of flatness by chaining promises together.</p>\n<blockquote>\n  <p><strong>note</strong>: The first library to do this, was a library called bluebird.</p>\n</blockquote>\n<h2 id=\"async-functions\">Async Functions</h2>\n<p>But what if we wanted to go flatter? Without modifying the exact bone/skeletal/DNA structure of the javascript language itself, this wasn't possible. However, some time in 2015, engineers at Mozilla proposed to the World Web Committee exactly this change to the language. </p>\n<p><img src=\"/images/appendix-b/firefox.png\" alt=\"mozilla really, really, really likes flat\" /></p>\n<p>So for the ES2017 version of JavaScript, <code>async</code> and <code>await</code> will come in as an alternative way to work with promises that will produce maximum flatness.</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">async</span> <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span> <span class=\"hljs-title\">requestLaunchGame</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">const</span> { productId } = <span class=\"hljs-keyword\">await</span> ajaxPromise(<span class=\"hljs-string\">'/user/session'</span>);\n  <span class=\"hljs-keyword\">const</span> { entitlementId } = <span class=\"hljs-keyword\">await</span> ajaxPromise(<span class=\"hljs-string\">`/product/<span class=\"hljs-subst\">${productId}</span>`</span>);\n  <span class=\"hljs-keyword\">return</span> <span class=\"hljs-keyword\">await</span> streamLauncherPromise.launchGame({ productId, entitlementId });\n}</code></pre>\n<p>Here, the <code>then</code> and its associated callbacks are replaced with <code>await</code> which can be used in dangerously flat functions we designate as <code>async</code>.</p>\n<p>And that's it for now!</p>"},{"id":"using-the-ember-generator","body":"<h2 id=\"using-the-ember-cli-generator\">Using the ember cli generator</h2>\n<p>Firstly, in your terminal, type in the following:</p>\n<pre><code class=\"zsh language-zsh\">ember <span class=\"hljs-keyword\">generate</span> acceptance-test specs/hello-world</code></pre>\n<p>This will use <code>ember-cli</code> to write a skeleton (aka boilerplate) file for our spec test. In Ember CLI convention, what we call \"spec tests\" are called \"acceptance tests\". This is a difference in diction we should be aware of.</p>\n<blockquote>\n  <p>Interesting tidbit: we have this difference in terminology because developer unfamilarity with ember-cli</p>\n</blockquote>\n<p><img src=\"https://gist.github.com/foxnewsnetwork/ea10218f33686a0767e41d1df2070149/raw/8fa4425e9e4c8207d80c074cd713898ac3d60a11/02-generate-acceptance-test.png\" alt=\"generate the spec test\" /></p>\n<p>Open up the newly generated file in your favorite editor; it should look something like this:</p>\n<pre><code class=\"javascript language-javascript\"><span class=\"hljs-keyword\">import</span> { describe, it, beforeEach, afterEach } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'mocha'</span>;\n<span class=\"hljs-keyword\">import</span> { expect } <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'chai'</span>;\n<span class=\"hljs-keyword\">import</span> startApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/start-app'</span>;\n<span class=\"hljs-keyword\">import</span> destroyApp <span class=\"hljs-keyword\">from</span> <span class=\"hljs-string\">'crapollo/tests/helpers/destroy-app'</span>;\n\ndescribe(<span class=\"hljs-string\">'Acceptance | specs/hello world'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n  <span class=\"hljs-keyword\">let</span> application;\n\n  beforeEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    application = startApp();\n  });\n\n  afterEach(<span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    destroyApp(application);\n  });\n\n  it(<span class=\"hljs-string\">'can visit /specs/hello-world'</span>, <span class=\"hljs-function\"><span class=\"hljs-keyword\">function</span>(<span class=\"hljs-params\"></span>) </span>{\n    visit(<span class=\"hljs-string\">'/specs/hello-world'</span>);\n\n    <span class=\"hljs-keyword\">return</span> andThen(<span class=\"hljs-function\"><span class=\"hljs-params\">()</span> =&gt;</span> {\n      expect(currentURL()).to.equal(<span class=\"hljs-string\">'/specs/hello-world'</span>);\n    });\n  });\n});</code></pre>\n<p>Ember made some assumptions regarding what we want to test and did its best to write the test for us. Unfortunately, for our immediate purposes, it's almost entirely wrong.</p>"}]}});
}
//# sourceMappingURL=dummy.map
