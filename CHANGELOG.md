# Changelog
All notable changes to this project will be documented in this file.

## [1.3.0] - Unreleased
### Changed
- redesign color system
- implement font managment

## [any] - Unreleased
### Added
- `if` directive works for `slots` in `rm-tabbed-pages` component
- implement documentation
- `ClickAwayListener`
- `ListController`
### Change
- avoid `rm-select` from opening menu when focused and the tab is resumed
- trap focus when open `rm-menu` if `prevent-focus` is not set
- return an id from `pointerController` for any listener
- implement `pointerController.unbind(id: number)` function to remove the listener with given `id`
- filterable `rm-select` does not reset value when typed

## [1.2.7] - 2020-11-14
###Added
###Changed
- Fixed bug in `rm-app-bar`: calling `update` during unmount lifecycle

## [1.2.6] - 2020-11-13
###Added
###Changed
- Fixed bug in `rm-app-bar` with `elevation-threshold`

## [1.2.4] - 2020-10-25
### Added
- 'focus-trap' on `rm-menu`
### Changed
- fixed pressing `enter` on closed `rm-select` selects last selected by `enter` option
- new transition bezier-curve on `ripple`
- bug exporting in amd.full using 'externalizer.js'

## [1.2.3] - 2020-10-22
### Added
- `inherit-width` prop of `rm-menu` for inherit or not the width of the opening element
- `closeMenu` prop of `slot`s inside `rm-menu` for close the menu
### Changed
- updated to `riot@5.0.0`

## [1.2.2] - 2020-08-01
### Added
- `rm-menu` option for keeping highlight on element
- `rm-menu` align with opening element (e.g. `rm-button`) (implemented `setAnchorElement` method in `rm-menu`)
- `rm-menu` keeps highlight only if `keep-highlight` attribute is set
- `rm-menu` close on click out only if `prevent-close-on-click-out` is not set
### Changed
- `pointerController` remove window listeners when it has no callback
- `pointerController` doesn't create the controller if no callback passed
- `rm-button` uses `pointerController` for opening the overlay

## [1.2.1] - 2020-07-30
## Added
- programmatic opening and closing for `rm-menu`

## [1.2.0] - 2020-07-29
### Added
- `rm-list-subheader` component
- `rm-menu` component
- `rm-menu-item` component
- `rm-textfield-container` component
- `pointerController`
### Changed
- `ripple`