/**
 * External dependencies
 */

import React from 'react';

/**
 * Internal dependencies
 */
import Gridicon from '../index';

const icons = [
	'add-image',
	'add-outline',
	'add',
	'align-center',
	'align-image-center',
	'align-image-left',
	'align-image-none',
	'align-image-right',
	'align-justify',
	'align-left',
	'align-right',
	'arrow-down',
	'arrow-left',
	'arrow-right',
	'arrow-up',
	'aside',
	'attachment',
	'audio',
	'bell',
	'block',
	'bold',
	'book',
	'bookmark-outline',
	'bookmark',
	'briefcase',
	'bug',
	'calendar',
	'camera',
	'caption',
	'cart',
	'chat',
	'checkmark-circle',
	'checkmark',
	'chevron-down',
	'chevron-left',
	'chevron-right',
	'chevron-up',
	'clear-formatting',
	'clipboard',
	'cloud-download',
	'cloud-outline',
	'cloud-upload',
	'cloud',
	'code',
	'cog',
	'comment',
	'computer',
	'coupon',
	'create',
	'credit-card',
	'crop',
	'cross-circle',
	'cross-small',
	'cross',
	'custom-post-type',
	'customize',
	'domains',
	'dropdown',
	'ellipsis-circle',
	'ellipsis',
	'external',
	'filter',
	'flag',
	'flip-horizontal',
	'flip-vertical',
	'folder-multiple',
	'folder',
	'fullscreen-exit',
	'fullscreen',
	'gift',
	'globe',
	'grid',
	'heading-h1',
	'heading-h2',
	'heading-h3',
	'heading-h4',
	'heading-h5',
	'heading-h6',
	'heading',
	'heart-outline',
	'heart',
	'help-outline',
	'help',
	'history',
	'house',
	'image-multiple',
	'image-remove',
	'image',
	'indent-left',
	'indent-right',
	'info-outline',
	'info',
	'ink',
	'institution',
	'italic',
	'layout-blocks',
	'layout',
	'line-graph',
	'link-break',
	'link',
	'list-checkmark',
	'list-ordered-rtl',
	'list-ordered',
	'list-unordered',
	'location',
	'lock',
	'mail',
	'mention',
	'menu',
	'menus',
	'microphone',
	'minus-small',
	'minus',
	'money',
	'multiple-users',
	'my-sites-horizon',
	'my-sites',
	'nametag',
	'next-page',
	'not-visible',
	'notice-outline',
	'notice',
	'offline',
	'pages',
	'pause',
	'pencil',
	'phone',
	'pin',
	'plans',
	'play',
	'plugins',
	'plus-small',
	'plus',
	'popout',
	'posts',
	'print',
	'product-downloadable',
	'product-external',
	'product-virtual',
	'product',
	'quote',
	'read-more',
	'reader-follow-conversation',
	'reader-follow',
	'reader-following-conversation',
	'reader-following',
	'reader',
	'reblog',
	'redo',
	'refresh',
	'refund',
	'reply',
	'resize',
	'rotate',
	'scheduled',
	'search',
	'share-computer',
	'share-ios',
	'share',
	'shipping',
	'shutter',
	'sign-out',
	'site',
	'spam',
	'speaker',
	'special-character',
	'star-outline',
	'star',
	'stats',
	'stats-alt',
	'stats-down',
	'stats-down-alt',
	'stats-up',
	'stats-up-alt',
	'status',
	'strikethrough',
	'sync',
	'tablet',
	'tag',
	'text-color',
	'themes',
	'thumbs-up',
	'time',
	'trash',
	'trophy',
	'types',
	'underline',
	'undo',
	'user-add',
	'user-circle',
	'user',
	'video-camera',
	'video-remove',
	'video',
	'visible',
	'zoom-in',
	'zoom-out',
];

export default function GridiconExample() {
	function handleClick( icon ) {
		const toCopy = `<Gridicon icon="${ icon }" />`;
		window.prompt( 'Copy component code:', toCopy );
	}

	return (
		// eslint-disable-next-line wpcalypso/jsx-classname-namespace
		<div className="design-assets__group">
			<h2>
				<a href="/devdocs/design/social-logo">Social Logo</a>
			</h2>
			<div>
				{ icons.map( ( icon ) => (
					<Gridicon key={ icon } icon={ icon } size={ 48 } onClick={ () => handleClick( icon ) } />
				) ) }
			</div>
		</div>
	);
}

GridiconExample.displayName = 'Gridicon';
