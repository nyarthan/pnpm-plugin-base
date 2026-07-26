function updateConfig(config) {
  /**
   * Dependencies must have been published at least 7 days (10_080 minutes) ago.
   * @see {@link https://pnpm.io/settings#minimumreleaseage}
   */
  config.minimumReleaseAge = 10_080;

  /**
   * Exclude internal dependencies.
   * @see {@link https://pnpm.io/settings#minimumreleaseageexclude}
   */
  config.minimumReleaseAgeExclude = ["@nyarthan/*"];

  /**
   * Only allow install scripts of explicitely listed depoendencies.
   * @see {@link https://pnpm.io/settings#strictdepbuilds}
   */
  config.strictDepBuilds = true;

  /** @see {@link https://pnpm.io/settings#allowbuilds} */
  config.allowBuilds = {
    ...config.allowBuilds,

    /**
     * Only shows a banner (in russia).
     * @see {@link https://github.com/medikoo/es5-ext/blob/main/_postinstall.js}
     */
    "es5-ext": false,

    /**
     *  Only shows a banner.
     * @see {@link https://github.com/zloirock/core-js/blob/master/packages/core-js/postinstall.js}
     */
    "core-js-pure": false,

    /**
     * Only shows a banner.
     * @see {@link https://github.com/zloirock/core-js/blob/master/packages/core-js/postinstall.js}
     * */
    "core-js": false,

    /**
     * Only required for legacy `npm` versions.
     * @see {@link https://github.com/unrs/unrs-resolver/blob/main/npm/package.json}
     * @see {@link https://github.com/un-ts/napi-postinstall}
     * */
    "unrs-resolver": false,

    /**
     * Sets up husky.
     * @see {@link https://github.com/JesusTheHun/storybook-addon-remix-react-router/blob/14b256e4b4c896e0c739e9fef69f66651038a028/package.json#L59}
     * */
    "storybook-addon-remix-react-router": false,
  };

  /**
   * Install dependencies at their exact version (no semver range).
   * @see {@link https://pnpm.io/settings#saveprefix}
   */
  config.savePrefix = "";

  /**
   * Fail if project or dependencies have incompativle engine (e.g. node) version.
   * @see {@link https://pnpm.io/settings#enginestrict}
   */
  config.engineStrict = true;

  return config;
}

export const hooks = {
  updateConfig,
};
