# Changelog
All notable changes to this project will be documented in this file.

## [2.1.18] - 2021-01-31
- update dependencies

## [2.1.17] - 2021-01-07
- update dependencies

## [2.1.16] - 2021-01-06
- update dependencies

## [2.1.15] - 2021-01-05
- update dependencies

## [2.1.14] - 2021-01-04
- update dependencies

## [2.1.13] - 2021-01-04
- update dependencies

## [2.1.12] - 2021-01-03
- update dependencies

## [2.1.11] - 2021-01-03
- update dependencies

## [2.1.9] - 2021-01-03
- update dependencies

## [2.1.8] - 2021-01-03
- update dependencies

## [2.1.7] - 2021-01-03
- update dependencies

## [2.1.6] - 2021-01-03
- update dependencies
- update README

## [2.1.5] - 2021-01-03
- update dependencies
- update README

## [2.1.4] - 2020-12-27
- dist previous version

## [2.1.3] - 2020-12-27
- update dependencies

## [2.1.2] - 2020-12-27
- update dependencies

## [2.1.1] - 2020-12-24
- update dependencies
- add beforeFocusListener export

## [2.1.0] - 2020-12-24
- add "rm-circular-avatar", "rm-list-group", "rm-list-image"
- update dependencies
- add logo
- update README

## [next major] - Unreleased
- redesign color system
- implement font managment

## [any] - Unreleased
- `if` directive works for `slots` in `rm-tabbed-pages` component
- implement documentation
- `ClickAwayListener`
- `ListController`

- avoid `rm-select` from opening menu when focused and the tab is resumed
- trap focus when open `rm-menu` if `prevent-focus` is not set
- return an id from `pointerController` for any listener
- implement `pointerController.unbind(id: number)` function to remove the listener with given `id`
- filterable `rm-select` does not reset value when typed
- tabbed pages does not unmount page during motion

## [2.0.12] - 2020-12-02
- change dist structure
- update entry points in "package.json"
- set "package.json" files
- set "package.json" keywords

## [2.0.11] - 2020-12-01
- update sub-packages
- change rollup.config.js

## [2.0.10] - 2020-11-30
- fix "package.json" entry point

## [2.0.9] - 2020-11-30
- update all sub-packages
- update rollup.config.js
- update README

## [2.0.8] - 2020-11-27
- update rm-tabbed-pages sub-package

## [2.0.7] - 2020-11-27
- update rm-tabbed-pages sub-package
- treating "riot" dependency as external during bundling
- tidy up rollup config: same result, more concise

## [2.0.6] - 2020-11-26
- update dependencies
- update README

## [2.0.5] - 2020-11-26
- update sub-packages
- update README

## [2.0.4] - 2020-11-22
- update `rm-textfield`

## [2.0.2] - 2020-11-22
- update README
- update sub-packages

## [2.0.0] - 2020-11-22
- split the components and submodule to external packages
- remove `rm-textarea`, `rm-tabs`, `rm-bottom-sheet`, `rm-ripple` (to be restored)
- update all dependencies

## [1.2.13] - 2020-11-20
- uses `what-input` to figure what input is used for interaction
- defaults `ripple.instantHighlight = true` to `rm-button:not([variant=flat]):not([variant=icon])` and button of tabbed pages
- `rm-button.isText()` is `rm-button.isFlat()`

## [1.2.10] - 2020-11-20
- fix `rm-button[disable]` having mouse enter ripple
- fix color rm-textfield
- set more duration on ripple
- fix color of button of tabbed pages

## [1.2.9] - 2020-11-18
- `rm-textfield`.`isFullWidth()`
- `rm-textfield`.`isDisabled()`

- fixed `rm-textfield` full-width
- fixed the way scope is created in `rm-tabbed-pages`

## [1.2.8] - 2020-11-15
- `rm-menu` keeps requesting frame animation if `!root.isConnected` but still appear to be mounted

## [1.2.7] - 2020-11-14
- Fixed bug in `rm-app-bar`: calling `update` during unmount lifecycle

## [1.2.6] - 2020-11-13
- Fixed bug in `rm-app-bar` with `elevation-threshold`

## [1.2.4] - 2020-10-25
- 'focus-trap' on `rm-menu`

- fixed pressing `enter` on closed `rm-select` selects last selected by `enter` option
- new transition bezier-curve on `ripple`
- bug exporting in amd.full using 'externalizer.js'

## [1.2.3] - 2020-10-22
- `inherit-width` prop of `rm-menu` for inherit or not the width of the opening element
- `closeMenu` prop of `slot`s inside `rm-menu` for close the menu

- updated to `riot@5.0.0`

## [1.2.2] - 2020-08-01
- `rm-menu` option for keeping highlight on element
- `rm-menu` align with opening element (e.g. `rm-button`) (implemented `setAnchorElement` method in `rm-menu`)
- `rm-menu` keeps highlight only if `keep-highlight` attribute is set
- `rm-menu` close on click out only if `prevent-close-on-click-out` is not set

- `pointerController` remove window listeners when it has no callback
- `pointerController` doesn't create the controller if no callback passed
- `rm-button` uses `pointerController` for opening the overlay

## [1.2.1] - 2020-07-30
- programmatic opening and closing for `rm-menu`

## [1.2.0] - 2020-07-29
- `rm-list-subheader` component
- `rm-menu` component
- `rm-menu-item` component
- `rm-textfield-container` component
- `pointerController`

- `ripple`