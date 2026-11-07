(function () {
	'use strict';

	var STORAGE_KEY = 'porydex-theme';

	function getSavedTheme() {
		try {
			return window.localStorage.getItem(STORAGE_KEY) || '';
		} catch (e) {
			return '';
		}
	}

	function getTheme() {
		return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
	}

	function persistTheme(theme) {
		try {
			window.localStorage.setItem(STORAGE_KEY, theme);
		} catch (e) {}
	}

	function updateToggle(theme) {
		var buttons = document.querySelectorAll('.pfx-theme-button');
		if (!buttons.length) return;

		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			var buttonTheme = button.getAttribute('data-theme-value') === 'dark' ? 'dark' : 'light';
			var isActive = buttonTheme === theme;

			button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
			button.setAttribute('title', isActive ? 'Current theme' : 'Switch to ' + buttonTheme + ' theme');
			button.className = button.className.replace(/\bcur\b/g, '').replace(/\s{2,}/g, ' ').replace(/^\s+|\s+$/g, '');
			if (isActive) button.className += ' cur';
		}
	}

	function setTheme(theme, shouldPersist) {
		theme = theme === 'dark' ? 'dark' : 'light';
		document.documentElement.setAttribute('data-theme', theme);
		updateToggle(theme);
		if (shouldPersist) persistTheme(theme);
	}

	function bindToggle() {
		var buttons = document.querySelectorAll('.pfx-theme-button');
		if (!buttons.length) return;

		for (var i = 0; i < buttons.length; i++) {
			var button = buttons[i];
			if (button.__porydexThemeBound) continue;
			button.__porydexThemeBound = true;
			button.addEventListener('click', function (event) {
				var nextTheme = event.currentTarget.getAttribute('data-theme-value');
				setTheme(nextTheme, true);
			});
		}
		updateToggle(getTheme());
	}

	if (!getSavedTheme() && window.matchMedia) {
		var media = window.matchMedia('(prefers-color-scheme: dark)');
		if (media.addEventListener) {
			media.addEventListener('change', function (event) {
				if (getSavedTheme()) return;
				setTheme(event.matches ? 'dark' : 'light', false);
			});
		} else if (media.addListener) {
			media.addListener(function (event) {
				if (getSavedTheme()) return;
				setTheme(event.matches ? 'dark' : 'light', false);
			});
		}
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', bindToggle);
	} else {
		bindToggle();
	}
})();
