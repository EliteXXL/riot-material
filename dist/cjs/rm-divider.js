'use strict';

var rmDivider = {
  'css': `rm-divider,[is="rm-divider"]{ display: block; padding: 8px 0; } rm-divider::after,[is="rm-divider"]::after{ content: ""; top: 8px; height: 1px; left: 0; right: 0; display: block; margin-bottom: -1px; background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-background, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-black-surface rm-divider::after,.rm-black-surface [is="rm-divider"]::after{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-black, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-dark-surface rm-divider::after,.rm-dark-surface [is="rm-divider"]::after{ background: rgba(255, 255, 255, .12); background: rgba(var(--color-on-dark, 255, 255, 255), var(--color-opacity-tertiary, .12)); } .rm-light-surface rm-divider::after,.rm-light-surface [is="rm-divider"]::after{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-light, 0, 0, 0), var(--color-opacity-tertiary, .12)); } .rm-white-surface rm-divider::after,.rm-white-surface [is="rm-divider"]::after{ background: rgba(0, 0, 0, .12); background: rgba(var(--color-on-white, 0, 0, 0), var(--color-opacity-tertiary, .12)); } rm-divider[inset]:not([inset="false"])::after,[is="rm-divider"][inset]:not([inset="false"])::after{ left: 72px; }`,
  'exports': null,
  'template': null,
  'name': 'rm-divider'
};

module.exports = rmDivider;
