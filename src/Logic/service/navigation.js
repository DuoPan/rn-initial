import registry from 'Logic/service/registry';

/**
 * Page transactions.
 */
const transactionRegKey = '_SCREEN_PAGE_TRANSITION';

// Save the transition.
export function saveTransition(trans) {
  registry.register(transactionRegKey, trans);
}

/**
 * Page referrer urls.
 */
registry.register('_SCREEN_PAGE_REFERRER_URL', new Map());
const uriReferralMaps = registry.get('_SCREEN_PAGE_REFERRER_URL');

export function saveFromUri(fromUri, toUri) {
  // console.log('save from uri', fromUri, toUri);
  uriReferralMaps.set(toUri, fromUri);
}
export function loadFromUri(uri) {
  return uriReferralMaps.get(uri);
}
export function popFromUri(uri) {
  const fromUri = uriReferralMaps.get(uri);
  // console.log('pop from uri', fromUri, uri);
  // saveReferrerUri(null);
  if (fromUri) {
    uriReferralMaps.delete(uri);
  }
  return fromUri;
}

/**
 * Page navigation.
 */
export function createNavigation(history, location) {
  // Redirect to the uri.
  function redirect(uri, options = {
    transition: null,
    fromUri: null,
  }) {
    // Save transaction if any.
    if (options.transition) {
      saveTransition(options.transition);
    }
    // Save the referrer url if any.
    if (options.fromUri) {
      saveFromUri(options.fromUri, uri);
    }
    if (uri === location.pathname) {
      history.replace(uri);
    } else {
      history.push(uri);
    }
  }

  function redirectBack(options = {
    transition: null,
  }) {
    // Save transaction if any.
    if (options.transition) {
      saveTransition(options.transition);
    }
    history.goBack();
  }

  return {
    redirect,
    redirectBack,
  }
}