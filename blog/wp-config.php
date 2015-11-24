<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db515729912');

/** MySQL database username */
define('DB_USER', 'dbo515729912');

/** MySQL database password */
define('DB_PASSWORD', 'newton13blog');

/** MySQL hostname */
define('DB_HOST', 'db515729912.db.1and1.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '*#J1r6.MqH-Y;zN`6.#w{ .ZE2Uvhm2))+3Wfk;# Rq|z#-v-iO!&[QWU87.%-2_');
define('SECURE_AUTH_KEY',  'xb-nl<tzE#12?4 yZ^p9,} P[dO;s>1mk id+O)+a[`_R}(dv(#}>7X&<1p4Ctlk');
define('LOGGED_IN_KEY',    '2.wsz)+kU# 3x2>d0UVQTib=6H1MH@l+x|cjo7>Q0eKXHiC(i5!ATC6a*&o<kE([');
define('NONCE_KEY',        '+<XFWoDr#$da9@zp4NFMuva4~7`#7CAO>)c%Jlk^7*~hiQr+@&>jSmpLgQqmP6z+');
define('AUTH_SALT',        'uZ?#i %62:abCPR/Z>x! <X:DGX>a][`/WDY^$^t%Ds|Q<@^P1UJmG!:%0D[jOiE');
define('SECURE_AUTH_SALT', 'JcS6b[qF|F`(AH|np3Fm+v;z.nG,|bg]yA#&Q.21nvft:v$WG&30Xj[0J-V DxYb');
define('LOGGED_IN_SALT',   '}|jw@#XW}AN|hp2nk/5}c7!C1kl+iU(S]=HT,B<^cDl%u2i`c:. [M*&eE+A8.;8');
define('NONCE_SALT',       'nlI =3z+h)?=D;6&;TT_;@9~f4i6xw0^<htNaVM|qNFo|]esN@UW15V%e6QYclMC');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
