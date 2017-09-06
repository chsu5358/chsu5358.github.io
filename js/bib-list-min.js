





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
  <link rel="dns-prefetch" href="https://assets-cdn.github.com">
  <link rel="dns-prefetch" href="https://avatars0.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars1.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars2.githubusercontent.com">
  <link rel="dns-prefetch" href="https://avatars3.githubusercontent.com">
  <link rel="dns-prefetch" href="https://github-cloud.s3.amazonaws.com">
  <link rel="dns-prefetch" href="https://user-images.githubusercontent.com/">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-7db951ed87f8f6cbd3a9e89c294e300cf23c1a83ad7ae64c70b8f99b21031340.css" integrity="sha256-fblR7Yf49svTqeicKU4wDPI8GoOteuZMcLj5myEDE0A=" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-4b2158409cc56f58dafd534ae676475b1bfe7cb057c415e2c5984e3c13b041e5.css" integrity="sha256-SyFYQJzFb1ja/VNK5nZHWxv+fLBXxBXixZhOPBOwQeU=" media="all" rel="stylesheet" />
  
  
  
  

  <meta name="viewport" content="width=device-width">
  
  <title>bib-publication-list/bib-list-min.js at master · vkaravir/bib-publication-list</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars0.githubusercontent.com/u/163030?v=4&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="vkaravir/bib-publication-list" property="og:title" /><meta content="https://github.com/vkaravir/bib-publication-list" property="og:url" /><meta content="bib-publication-list - Interactive publications lists with JavaScript + Bibtex" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  <link rel="web-socket" href="wss://live.github.com/_sockets/VjI6MTkyNjgxNDkxOjIwZTNhYzJiOTRlZDYxZTVmYzBlMDY0ODliZGFhZjQ3YWRkMzIzNmE2NTI5NzY4YWYzYjU0NjY3NzdlYTBkNzk=--7b4eccb909e1652c992c249ed620a2ee2677a42e">
  <meta name="pjax-timeout" content="1000">
  <link rel="sudo-modal" href="/sessions/sudo_modal">
  <meta name="request-id" content="E346:4AE2:3B7B876:60B7DE8:59AF8F97" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="E346:4AE2:3B7B876:60B7DE8:59AF8F97" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" /><meta content="25943986" name="octolytics-actor-id" /><meta content="chsu5358" name="octolytics-actor-login" /><meta content="e5c90d34184b53b0cbbc8835dfa9ef7cd4447ebaac5c7ab00838897a88ffa8b6" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged In">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="chsu5358">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="OGE4ZGZkZGY5YzlkYmNiYzliZmMxMmIzNjg4YjYwMTQ0Y2IxOTVkMDk2NTAwN2VmMzBkNTY2MzBiM2ZkYTI4MHx7InJlbW90ZV9hZGRyZXNzIjoiMTI4LjExOS4xNTAuMjMyIiwicmVxdWVzdF9pZCI6IkUzNDY6NEFFMjozQjdCODc2OjYwQjdERTg6NTlBRjhGOTciLCJ0aW1lc3RhbXAiOjE1MDQ2Nzc3OTIsImhvc3QiOiJnaXRodWIuY29tIn0=">

    <meta name="enabled-features" content="UNIVERSE_BANNER">

  <meta name="html-safe-nonce" content="7b24093cf8fa24d5c51cf8ff06b5d8134a80c0bc">

  <meta http-equiv="x-pjax-version" content="7f43de23603462da980a81f912c2e93e">
  

      <link href="https://github.com/vkaravir/bib-publication-list/commits/master.atom" rel="alternate" title="Recent Commits to bib-publication-list:master" type="application/atom+xml">

  <meta name="description" content="bib-publication-list - Interactive publications lists with JavaScript + Bibtex">
  <meta name="go-import" content="github.com/vkaravir/bib-publication-list git https://github.com/vkaravir/bib-publication-list.git">

  <meta content="163030" name="octolytics-dimension-user_id" /><meta content="vkaravir" name="octolytics-dimension-user_login" /><meta content="550841" name="octolytics-dimension-repository_id" /><meta content="vkaravir/bib-publication-list" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="550841" name="octolytics-dimension-repository_network_root_id" /><meta content="vkaravir/bib-publication-list" name="octolytics-dimension-repository_network_root_nwo" /><meta content="false" name="octolytics-dimension-repository_explore_github_marketplace_ci_cta_shown" />


    <link rel="canonical" href="https://github.com/vkaravir/bib-publication-list/blob/master/build/bib-list-min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">


  <meta name="u2f-support" content="true">

  </head>

  <body class="logged-in env-production emoji-size-boost page-blob">
    

  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="bg-black text-white p-3 show-on-focus js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



        
<header class="Header  f5" role="banner">
  <div class="d-flex px-3 flex-justify-between container-lg">
    <div class="d-flex flex-justify-between">
      <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


    </div>

    <div class="HeaderMenu d-flex flex-justify-between flex-auto">
      <div class="d-flex">
            <div class="">
              <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/search" class="js-site-search-form" data-scoped-search-url="/vkaravir/bib-publication-list/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/vkaravir/bib-publication-list/blob/master/build/bib-list-min.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>

            </div>

          <ul class="d-flex pl-2 flex-items-center text-bold list-style-none" role="navigation">
            <li>
              <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
                Pull requests
</a>            </li>
            <li>
              <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
                Issues
</a>            </li>
                <li>
                  <a href="/marketplace" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-selected-links=" /marketplace">
                    Marketplace
</a>                </li>
            <li>
              <a href="/explore" class="js-selected-navigation-item HeaderNavlink px-2" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship showcases showcases_search showcases_landing /explore">
                Explore
</a>            </li>
          </ul>
      </div>

      <div class="d-flex">
        
<ul class="user-nav d-flex flex-items-center list-style-none" id="user-links">
  <li class="dropdown js-menu-container js-header-notifications">
    <span class="d-inline-block  px-2">
      

    </span>
  </li>

  <li class="dropdown js-menu-container">
    <a class="HeaderNavlink tooltipped tooltipped-s js-menu-target d-flex px-2 flex-items-center" href="/new"
       aria-label="Create new…"
       aria-expanded="false"
       aria-haspopup="true"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret mt-1"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="vkaravir/bib-publication-list">This repository</span>
  </div>
    <a class="dropdown-item" href="/vkaravir/bib-publication-list/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="dropdown js-menu-container">

    <details class="dropdown-details d-flex pl-2 flex-items-center">
      <summary class="HeaderNavlink name"
        aria-label="View profile and more"
        data-ga-click="Header, show menu, icon:avatar">
        <img alt="@chsu5358" class="avatar" src="https://avatars2.githubusercontent.com/u/25943986?v=4&amp;s=40" height="20" width="20">
        <span class="dropdown-caret"></span>
      </summary>

      <ul class="dropdown-menu dropdown-menu-sw">
        <li class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">chsu5358</strong>
        </li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="/chsu5358" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a></li>
        <li><a class="dropdown-item" href="/chsu5358?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a></li>
          <li><a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, your gists, text:your gists">Your Gists</a></li>

        <li class="dropdown-divider"></li>

        <li><a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a></li>

        <li><a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a></li>

        <li><!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="5bPd6fLGvhmNMAoNRSugl5NJyseJAObmzw8FkosH84XwgsGt+7LT3RzS7yEDEYQs8mVRSa0o0kwC3nUmRwFPZA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
        </form></li>
      </ul>
    </details>
  </li>
</ul>


        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="sr-only right-0" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="0qxD2ro4zoFUeI4+ZPlLKrFKTYQVbw4dxzvoObMgrGXHnV+es0yjRcWaaxIiw2+R0GbWCjFHOrcK6piNfyYQhA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </div>
</header>


      

  </div>

  <div id="start-of-content" class="show-on-focus"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      





    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="RN9jlAV3ysHN+16s9xHXKbdjeDj/w5wAUDwiSPtknhCYsBKMWACsqWyYCHx6G834avhSIcka12CQEV3zELhQ4g==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="550841" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/vkaravir/bib-publication-list/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
            aria-label="Toggle repository notifications menu"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
                <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                Watch
            </span>
          </a>
            <a class="social-count js-social-count"
              href="/vkaravir/bib-publication-list/watchers"
              aria-label="10 users are watching this repository">
              10
            </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                        Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                        Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/unstar" class="starred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tkoXDbP6Whlm6ak1CdgRehyqoQzW9Wxu1zpXofCbmBtrSKm4Dz49Y2WQeuyZZe+J+yJW6ikg7VcEhqZ36m1xKg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar vkaravir/bib-publication-list"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/vkaravir/bib-publication-list/stargazers"
           aria-label="78 users starred this repository">
          78
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/star" class="unstarred" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="njysnEfYDWf0f5AOMofHLFCTQFWEZegt1Vcq7334tKXsSNQwuny2Sh0gw7P0zwZB1gsdscCyCyMLTYUx7rsErQ==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star vkaravir/bib-publication-list"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/vkaravir/bib-publication-list/stargazers"
           aria-label="78 users starred this repository">
          78
        </a>
</form>  </div>

  </li>

  <li>
          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/fork" class="btn-with-count" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="tOx7POsPpUcoZN40XeMGz8MTPomCcb0WP2j/9dF6axifG500HDM8JDwcyMVo/EK7kEsmwzyAfbwYPvbD/38BOw==" /></div>
            <button
                type="submit"
                class="btn btn-sm btn-with-count"
                data-ga-click="Repository, show fork modal, action:blob#show; text:Fork"
                title="Fork your own copy of vkaravir/bib-publication-list to your account"
                aria-label="Fork your own copy of vkaravir/bib-publication-list to your account">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
              Fork
            </button>
</form>
    <a href="/vkaravir/bib-publication-list/network" class="social-count"
       aria-label="38 users forked this repository">
      38
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/vkaravir" class="url fn" rel="author">vkaravir</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/vkaravir/bib-publication-list" data-pjax="#js-repo-pjax-container">bib-publication-list</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/vkaravir/bib-publication-list" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /vkaravir/bib-publication-list" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/vkaravir/bib-publication-list/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /vkaravir/bib-publication-list/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">5</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/vkaravir/bib-publication-list/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /vkaravir/bib-publication-list/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">0</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/vkaravir/bib-publication-list/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /vkaravir/bib-publication-list/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>
    <a href="/vkaravir/bib-publication-list/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /vkaravir/bib-publication-list/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/vkaravir/bib-publication-list/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/vkaravir/bib-publication-list/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
  <a href="/vkaravir/bib-publication-list/blob/17d3122649f377fd549effc02f17ab7417bc6135/build/bib-list-min.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

  <!-- blob contrib key: blob_contributors:v21:3c92377cdb171a6beff65775a93337eb -->

  <div class="file-navigation js-zeroclipboard-container">
    
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" aria-expanded="false" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/vkaravir/bib-publication-list/blob/master/build/bib-list-min.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

    <div class="BtnGroup float-right">
      <a href="/vkaravir/bib-publication-list/find/master"
            class="js-pjax-capture-input btn btn-sm BtnGroup-item"
            data-pjax
            data-hotkey="t">
        Find file
      </a>
      <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
    </div>
    <div class="breadcrumb js-zeroclipboard-target">
      <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/vkaravir/bib-publication-list"><span>bib-publication-list</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/vkaravir/bib-publication-list/tree/master/build"><span>build</span></a></span><span class="separator">/</span><strong class="final-path">bib-list-min.js</strong>
    </div>
  </div>


  <include-fragment class="commit-tease" src="/vkaravir/bib-publication-list/contributors/master/build/bib-list-min.js">
    <div>
      Fetching contributors&hellip;
    </div>

    <div class="commit-tease-contributors">
      <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
      <span class="loader-error">Cannot retrieve contributors at this time</span>
    </div>
</include-fragment>

  <div class="file">
    <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/vkaravir/bib-publication-list/raw/master/build/bib-list-min.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/vkaravir/bib-publication-list/blame/master/build/bib-list-min.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/vkaravir/bib-publication-list/commits/master/build/bib-list-min.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="x-github-client://openRepo/https://github.com/vkaravir/bib-publication-list?branch=master&amp;filepath=build%2Fbib-list-min.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:mac">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/edit/master/build/bib-list-min.js" class="inline-form js-update-url-with-hash" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eJyvo4Uqtyr17aR/TWKEHUaGOhW0cotOBCYvo5hLiVgvnaqDhQkHO6LAcveW43H9FUJ6aoAtA8oOy1CpB3L/xA==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and edit the file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/vkaravir/bib-publication-list/delete/master/build/bib-list-min.js" class="inline-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="YP9vZz0+PhlIuwbGDxtut7thQCyfMIgI9biaCz79KLPFZiHBaMDXsNkqY0CBc7Q80nzpA0z8Jtl0QG5/Fj0O5Q==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Fork this project and delete the file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      190 lines (190 sloc)
      <span class="file-info-divider"></span>
    107 KB
  </div>
</div>

    

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>!*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Javascript BibTex Parser v0.1</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright (c) 2008 Simon Fraser University</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * @author Steve Hannah &lt;shannah at sfu dot ca&gt;</span></td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * License:</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     This program is free software: you can redistribute it and/or modify</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     it under the terms of the GNU General Public License as published by</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     the Free Software Foundation, either version 3 of the License, or</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     (at your option) any later version.</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     This program is distributed in the hope that it will be useful,</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     but WITHOUT ANY WARRANTY; without even the implied warranty of</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the</span></td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     GNU General Public License for more details.</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     You should have received a copy of the GNU General Public License</span></td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *     along with this program.  If not, see &lt;http://www.gnu.org/licenses/&gt;.</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Credits:</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This library is a port of the PEAR Structures_BibTex parser written</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * in PHP (http://pear.php.net/package/Structures_BibTex).</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * In order to make porting the parser into javascript easier, I have made</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * use of many phpjs functions, which are distributed here under the MIT License:</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * More info at: http://kevin.vanzonneveld.net/techblog/category/php2js</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * php.js is copyright 2008 Kevin van Zonneveld.</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Portions copyright Ates Goral (http://magnetiq.com), Legaev Andrey,</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * _argos, Jonas Raoni Soares Silva (http://www.jsfromhell.com),</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Webtoolkit.info (http://www.webtoolkit.info/), Carlos R. L. Rodrigues, Ash</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Searle (http://hexmen.com/blog/), Tyler Akins (http://rumkin.com), mdsjack</span></td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (http://www.mdsjack.bo.it), Alexander Ermolaev</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (http://snippets.dzone.com/user/AlexanderErmolaev), Andrea Giammarchi</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * (http://webreflection.blogspot.com), Bayron Guevara, Cord, David, Karol</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Kowalski, Leslie Hoare, Lincoln Ramsay, Mick@el, Nick Callen, Peter-Paul</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Koch (http://www.quirksmode.org/js/beat.html), Philippe Baumann, Steve</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Clay, booeyOH</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Licensed under the MIT (MIT-LICENSE.txt) license.</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Permission is hereby granted, free of charge, to any person obtaining a</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * copy of this software and associated documentation files (the</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &quot;Software&quot;), to deal in the Software without restriction, including</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * without limitation the rights to use, copy, modify, merge, publish,</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * distribute, sublicense, and/or sell copies of the Software, and to</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * permit persons to whom the Software is furnished to do so, subject to</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The above copyright notice and this permission notice shall be included</span></td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * in all copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES </span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR </span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * OTHER DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Synopsis:</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ----------</span></td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This class provides the following functionality:</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    1. Parse BibTex into a logical data javascript data structure.</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *    2. Output parsed BibTex entries as HTML, RTF, or BibTex.</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *  </span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The following usage instructions have been copyed and adapted from the PHP instructions located</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * at http://pear.php.net/manual/en/package.structures.structures-bibtex.intro.php</span></td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Introduction</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * --------------</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Overview</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ----------</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This package provides methods to access information stored in a BibTex</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * file. During parsing it is possible to let the data be validated. In</span></td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addition. the creation of BibTex Strings as well as RTF Strings is also</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * supported. A few examples</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example 1. Loading a BibTex File and printing the parsed array</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &lt;script src=&quot;BibTex.js&quot;&gt;&lt;/script&gt;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &lt;script&gt;</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex = new BibTex();</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex.content = content; // the bibtex content as a string</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex-&gt;parse();</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * alert(print_r($bibtex-&gt;data,true));</span></td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * &lt;/script&gt;</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Options</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * --------</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Options can be set either in the constructor or with the method</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * setOption(). When setting in the constructor the options are given in an</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * associative array. The options are:</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	stripDelimiter (default: true) Stripping the delimiter surrounding the entries. </span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	validate (default: true) Validation while parsing. </span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	unwrap (default: false) Unwrapping entries while parsing. </span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	wordWrapWidth (default: false) If set to a number higher one</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    that the entries are wrapped after that amount of characters. </span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	wordWrapBreak (default: \n) String used to break the line (attached to the line). </span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	wordWrapCut (default: 0) If set to zero the line will we</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    wrapped at the next possible space, if set to one the line will be</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    wrapped exactly after the given amount of characters. </span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	removeCurlyBraces (default: false) If set to true Curly Braces will be removed. </span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example of setting options in the constructor:</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example 2. Setting options in the constructor</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex = new BibTex({&#39;validate&#39;:false, &#39;unwrap&#39;:true});</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example of setting options using the method setOption():</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example 62-3. Setting options using setOption</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex = new BibTex();</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex.setOption(&#39;validate&#39;, false);</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex.setOption(&#39;unwrap&#39;, true);</span></td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Stored Data</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ------------</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * The data is stored in the class variable data. This is a a list where</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * each entry is a hash table representing one bibtex-entry. The keys of</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the hash table correspond to the keys used in bibtex and the values are</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * the corresponding values. Some of these keys are:</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	cite - The key used in a LaTeX source to do the citing. </span></td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	entryType - The type of the entry, like techreport, book and so on. </span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	author - One or more authors of the entry. This entry is also a</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    list with hash tables representing the authors as entries. The</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    author has table is explained later. </span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	title - Title of the entry. </span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Author</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ------</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * As described before the authors are stored in a list. Every entry</span></td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * representing one author as a has table. The hash table consits of four</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * keys: first, von, last and jr. The keys are explained in the following</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * list:</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	first - The first name of the author. </span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	von - Some names have a &#39;von&#39; part in their name. This is usually a sign of nobleness. </span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	last - The last name of the author. </span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	-	jr - Sometimes a author is the son of his father and has the</span></td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    same name, then the value would be jr. The same is true for the</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * 	    value sen but vice versa. </span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Adding an entry</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * ----------------</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * To add an entry simply create a hash table with the needed keys and</span></td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * values and call the method addEntry().</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Example 4. Adding an entry</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex                         = new BibTex();</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * var addarray                   = {};</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;entryType&#39;]          = &#39;Article&#39;;</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;cite&#39;]               = &#39;art2&#39;;</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;title&#39;]              = &#39;Titel of the Article&#39;;</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;author&#39;] = [];</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;author&#39;][0][&#39;first&#39;] = &#39;John&#39;;</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;author&#39;][0][&#39;last&#39;]  = &#39;Doe&#39;;</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;author&#39;][1][&#39;first&#39;] = &#39;Jane&#39;;</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * addarray[&#39;author&#39;][1][&#39;last&#39;]  = &#39;Doe&#39;;</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * bibtex.addEntry(addarray);</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">function array(){return Array.prototype.slice.call(arguments);}function array_key_exists(key,search){if(!search||(search.constructor!==Array&amp;&amp;search.constructor!==Object)){return false;}return key in search;}function array_keys(input,search_value,strict){var tmp_arr=new Array(),strict=!!strict,include=true,cnt=0;for(key in input){include=true;if(search_value!=undefined){if(strict&amp;&amp;input[key]!==search_value){include=false;}else{if(input[key]!=search_value){include=false;}}}if(include){tmp_arr[cnt]=key;cnt++;}}return tmp_arr;}function array_values(input){var tmp_arr=[],key=&quot;&quot;;if(input&amp;&amp;typeof input===&quot;object&quot;&amp;&amp;input.change_key_case){return input.values();}for(key in input){tmp_arr[tmp_arr.length]=input[key];}return tmp_arr;}function in_array(needle,haystack,strict){var found=false,key,strict=!!strict;for(key in haystack){if((strict&amp;&amp;haystack[key]===needle)||(!strict&amp;&amp;haystack[key]==needle)){found=true;break;}}return found;}function sizeof(mixed_var,mode){return count(mixed_var,mode);}function count(mixed_var,mode){var key,cnt=0;if(mode==&quot;COUNT_RECURSIVE&quot;){mode=1;}if(mode!=1){mode=0;}for(key in mixed_var){cnt++;if(mode==1&amp;&amp;mixed_var[key]&amp;&amp;(mixed_var[key].constructor===Array||mixed_var[key].constructor===Object)){cnt+=count(mixed_var[key],1);}}return cnt;}function explode(delimiter,string,limit){var emptyArray={0:&quot;&quot;};if(arguments.length&lt;2||typeof arguments[0]==&quot;undefined&quot;||typeof arguments[1]==&quot;undefined&quot;){return null;}if(delimiter===&quot;&quot;||delimiter===false||delimiter===null){return false;}if(typeof delimiter==&quot;function&quot;||typeof delimiter==&quot;object&quot;||typeof string==&quot;function&quot;||typeof string==&quot;object&quot;){return emptyArray;}if(delimiter===true){delimiter=&quot;1&quot;;}if(!limit){return string.toString().split(delimiter.toString());}else{var splitted=string.toString().split(delimiter.toString());var partA=splitted.splice(0,limit-1);var partB=splitted.join(delimiter.toString());partA.push(partB);return partA;}}function implode(glue,pieces){return((pieces instanceof Array)?pieces.join(glue):pieces);}function join(glue,pieces){return implode(glue,pieces);}function split(delimiter,string){return explode(delimiter,string);}function str_replace(search,replace,subject){var f=search,r=replace,s=subject;var ra=is_array(r),sa=is_array(s),f=[].concat(f),r=[].concat(r),i=(s=[].concat(s)).length;while(j=0,i--){while(s[i]=s[i].split(f[j]).join(ra?r[j]||&quot;&quot;:r[0]),++j in f){}}return sa?s:s[0];}function strlen(string){return(&quot;&quot;+string).length;}function strpos(haystack,needle,offset){var i=haystack.indexOf(needle,offset);return i&gt;=0?i:false;}function strrpos(haystack,needle,offset){var i=haystack.lastIndexOf(needle,offset);return i&gt;=0?i:false;}function strtolower(str){return str.toLowerCase();}function strtoupper(str){return str.toUpperCase();}function substr(f_string,f_start,f_length){if(f_start&lt;0){f_start+=f_string.length;}if(f_length==undefined){f_length=f_string.length;}else{if(f_length&lt;0){f_length+=f_string.length;}else{f_length+=f_start;}}if(f_length&lt;f_start){f_length=f_start;}return f_string.substring(f_start,f_length);}function trim(str,charlist){if(!str){return&quot;&quot;;}var whitespace;if(!charlist){whitespace=&quot; \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000&quot;;}else{whitespace=charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g,&quot;$1&quot;);}for(var i=0;i&lt;str.length;i++){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(i);break;}}for(i=str.length-1;i&gt;=0;i--){if(whitespace.indexOf(str.charAt(i))===-1){str=str.substring(0,i+1);break;}}return whitespace.indexOf(str.charAt(0))===-1?str:&quot;&quot;;}function wordwrap(str,int_width,str_break,cut){var m=int_width,b=str_break,c=cut;var i,j,l,s,r;if(m&lt;1){return str;}for(i=-1,l=(r=str.split(&quot;\n&quot;)).length;++i&lt;l;r[i]+=s){for(s=r[i],r[i]=&quot;&quot;;s.length&gt;m;r[i]+=s.slice(0,j)+((s=s.slice(j)).length?b:&quot;&quot;)){j=c==2||(j=s.slice(0,m+1).match(/\S*(\s)?$/))[1]?m:j.input.length-j[0].length||c==1&amp;&amp;m||j.input.length+(j=s.slice(m).match(/^\S*/)).input.length;}}return r.join(&quot;\n&quot;);}function is_string(mixed_var){return(typeof(mixed_var)==&quot;string&quot;);}function ord(string){return string.charCodeAt(0);}function array_unique(array){var p,i,j,tmp_arr=array;for(i=tmp_arr.length;i;){for(p=--i;p&gt;0;){if(tmp_arr[i]===tmp_arr[--p]){for(j=p;--p&amp;&amp;tmp_arr[i]===tmp_arr[p];){}i-=tmp_arr.splice(p+1,j-p).length;}}}return tmp_arr;}function print_r(array,return_val){var output=&quot;&quot;,pad_char=&quot; &quot;,pad_val=4;var formatArray=function(obj,cur_depth,pad_val,pad_char){if(cur_depth&gt;0){cur_depth++;}var base_pad=repeat_char(pad_val*cur_depth,pad_char);var thick_pad=repeat_char(pad_val*(cur_depth+1),pad_char);var str=&quot;&quot;;if(obj instanceof Array||obj instanceof Object){str+=&quot;Array\n&quot;+base_pad+&quot;(\n&quot;;for(var key in obj){if(obj[key] instanceof Array||obj[key] instanceof Object){str+=thick_pad+&quot;[&quot;+key+&quot;] =&gt; &quot;+formatArray(obj[key],cur_depth+1,pad_val,pad_char);}else{str+=thick_pad+&quot;[&quot;+key+&quot;] =&gt; &quot;+obj[key]+&quot;\n&quot;;}}str+=base_pad+&quot;)\n&quot;;}else{str=obj.toString();}return str;};var repeat_char=function(len,pad_char){var str=&quot;&quot;;for(var i=0;i&lt;len;i++){str+=pad_char;}return str;};output=formatArray(array,0,pad_val,pad_char);if(return_val!==true){document.write(&quot;&lt;pre&gt;&quot;+output+&quot;&lt;/pre&gt;&quot;);return true;}else{return output;}}function is_array(mixed_var){return(mixed_var instanceof Array);}function BibTex(options){if(typeof options==&quot;undefined&quot;){options={};}this.data;this.content;this._delimiters;this.warnings;this._options;this.rtfstring;this.htmlstring;this.allowedEntryTypes;this.authorstring;this._delimiters={&#39;&quot;&#39;:&#39;&quot;&#39;,&quot;{&quot;:&quot;}&quot;};this.data=[];this.content=&quot;&quot;;this.warnings=[];this._options={stripDelimiter:true,validate:true,unwrap:false,wordWrapWidth:false,wordWrapBreak:&quot;\n&quot;,wordWrapCut:0,removeCurlyBraces:false,extractAuthors:true};for(option in options){test=this.setOption(option,options[option]);if(this.isError(test)){}}this.rtfstring=&#39;AUTHORS, &quot;{\b TITLE}&quot;, {i JOURNAL}, YEAR&#39;;this.htmlstring=&#39;AUTHORS, &quot;&lt;strong&gt;TITLE&lt;/strong&gt;&quot;, &lt;em&gt;JOURNAL&lt;/em&gt;, YEAR&lt;br /&gt;&#39;;this.allowedEntryTypes=array(&quot;article&quot;,&quot;book&quot;,&quot;booklet&quot;,&quot;confernce&quot;,&quot;inbook&quot;,&quot;incollection&quot;,&quot;inproceedings&quot;,&quot;manual&quot;,&quot;masterthesis&quot;,&quot;misc&quot;,&quot;phdthesis&quot;,&quot;proceedings&quot;,&quot;techreport&quot;,&quot;unpublished&quot;);this.authorstring=&quot;VON LAST, JR, FIRST&quot;;}BibTex.prototype={setOption:function(option,value){ret=true;if(array_key_exists(option,this._options)){this._options[option]=value;}else{ret=this.raiseError(&quot;Unknown option &quot;+option);}return ret;},parse:function(){this.warnings=[];this.data=[];var valid=true;var open=0;var entry=false;var charv=&quot;&quot;;var lastchar=&quot;&quot;;var buffer=&quot;&quot;;for(var i=0;i&lt;strlen(this.content);i++){charv=substr(this.content,i,1);if((0!=open)&amp;&amp;(&quot;@&quot;==charv)){if(!this._checkAt(buffer)){this._generateWarning(&quot;WARNING_MISSING_END_BRACE&quot;,&quot;&quot;,buffer);charv=&quot;}&quot;;i--;}}if((0==open)&amp;&amp;(&quot;@&quot;==charv)){entry=true;}else{if(entry&amp;&amp;(&quot;{&quot;==charv)&amp;&amp;(&quot;\\&quot;!=lastchar)){open++;}else{if(entry&amp;&amp;(&quot;}&quot;==charv)&amp;&amp;(&quot;\\&quot;!=lastchar)){open--;if(open&lt;0){valid=false;}if(0==open){entry=false;var entrydata=this._parseEntry(buffer);if(!entrydata){}else{this.data[this.data.length]=entrydata;}buffer=&quot;&quot;;}}}}if(entry){buffer+=charv;}lastchar=charv;}if(1==open){entrydata=this._parseEntry(buffer);if(!entrydata){valid=false;}else{this.data[this.data.length]=entrydata;buffer=&quot;&quot;;open=0;}}if(0!=open){valid=false;}if(this._options.validate){cites=[];for(var i=0;i&lt;this.data.length;i++){cites[cites.length]=this.data[i][&quot;cite&quot;];}unique=array_unique(cites);if(cites.length!=sizeof(unique)){notuniques=[];for(var i=0;i&lt;cites.length;i++){if(&quot;&quot;==unique[i]){notuniques[notuniques.length]=cites[i];}}this._generateWarning(&quot;WARNING_MULTIPLE_ENTRIES&quot;,implode(&quot;,&quot;,notuniques));}}if(valid){this.content=&quot;&quot;;return true;}else{return this.raiseError(&quot;Unbalanced parenthesis&quot;);}},_parseEntry:function(entry){var entrycopy=&quot;&quot;;if(this._options.validate){entrycopy=entry;}var ret={};if(&quot;@string&quot;==strtolower(substr(entry,0,7))){if(this._options.validate){this._generateWarning(&quot;STRING_ENTRY_NOT_YET_SUPPORTED&quot;,&quot;&quot;,entry+&quot;}&quot;);}}else{if(&quot;@preamble&quot;==strtolower(substr(entry,0,9))){if(this._options.validate){this._generateWarning(&quot;PREAMBLE_ENTRY_NOT_YET_SUPPORTED&quot;,&quot;&quot;,entry+&quot;}&quot;);}}else{while(strrpos(entry,&quot;=&quot;)!==false){position=strrpos(entry,&quot;=&quot;);proceed=true;if(substr(entry,position-1,1)==&quot;\\&quot;){proceed=false;}if(proceed){proceed=this._checkEqualSign(entry,position);}while(!proceed){substring=substr(entry,0,position);position=strrpos(substring,&quot;=&quot;);proceed=true;if(substr(entry,position-1,1)==&quot;\\&quot;){proceed=false;}if(proceed){proceed=this._checkEqualSign(entry,position);}}value=trim(substr(entry,position+1));entry=substr(entry,0,position);if(&quot;,&quot;==substr(value,strlen(value)-1,1)){value=substr(value,0,-1);}if(this._options.validate){this._validateValue(value,entrycopy);}if(this._options.stripDelimiter){value=this._stripDelimiter(value);}if(this._options.unwrap){value=this._unwrap(value);}if(this._options.removeCurlyBraces){value=this._removeCurlyBraces(value);}position=strrpos(entry,&quot;,&quot;);field=strtolower(trim(substr(entry,position+1)));ret[field]=value;entry=substr(entry,0,position);}var arr=entry.split(&quot;{&quot;);ret.cite=trim(arr[1]);ret.entryType=strtolower(trim(arr[0]));if(&quot;@&quot;==ret.entryType.substring(0,1)){ret.entryType=substr(ret.entryType,1);}if(this._options.validate){if(!this._checkAllowedEntryType(ret.entryType)){this._generateWarning(&quot;WARNING_NOT_ALLOWED_ENTRY_TYPE&quot;,ret.entryType,entry+&quot;}&quot;);}}if(in_array(&quot;author&quot;,array_keys(ret))&amp;&amp;this._options.extractAuthors){ret.author=this._extractAuthors(ret.author);}if(in_array(&quot;editor&quot;,array_keys(ret))&amp;&amp;this._options.extractAuthors){ret.editor=this._extractAuthors(ret.editor);}}}return ret;},_checkEqualSign:function(entry,position){var ret=true;var length=strlen(entry);var open=0;for(var i=length-1;i&gt;=position;i--){precedingchar=substr(entry,i-1,1);charv=substr(entry,i,1);if((&quot;{&quot;==charv)&amp;&amp;(&quot;\\&quot;!=precedingchar)){open++;}if((&quot;}&quot;==charv)&amp;&amp;(&quot;\\&quot;!=precedingchar)){open--;}}if(0!=open){ret=false;}if(ret){entrycopy=trim(entry);lastchar=substr(entrycopy,strlen(entrycopy)-1,1);if(&quot;,&quot;==lastchar){lastchar=substr(entrycopy,strlen(entrycopy)-2,1);}if(&#39;&quot;&#39;==lastchar){ret=false;found=0;for(var i=length;i&gt;=position;i--){precedingchar=substr(entry,i-1,1);charv=substr(entry,i,1);if((&#39;&quot;&#39;==charv)&amp;&amp;(&quot;\\&quot;!=precedingchar)){found++;}if(2==found){ret=true;break;}}}}return ret;},_checkAllowedEntryType:function(entry){return in_array(entry,this.allowedEntryTypes);},_checkAt:function(entry){var ret=false;var opening=array_keys(this._delimiters);var closing=array_values(this._delimiters);if(strrpos(entry,&quot;=&quot;)!==false){position=strrpos(entry,&quot;=&quot;);proceed=true;if(substr(entry,position-1,1)==&quot;\\&quot;){proceed=false;}while(!proceed){substring=substr(entry,0,position);position=strrpos(substring,&quot;=&quot;);proceed=true;if(substr(entry,position-1,1)==&quot;\\&quot;){proceed=false;}}value=trim(substr(entry,position+1));open=0;charv=&quot;&quot;;lastchar=&quot;&quot;;for(var i=0;i&lt;strlen(value);i++){charv=substr(this.content,i,1);if(in_array(charv,opening)&amp;&amp;(&quot;\\&quot;!=lastchar)){open++;}else{if(in_array(charv,closing)&amp;&amp;(&quot;\\&quot;!=lastchar)){open--;}}lastchar=charv;}if(open&gt;0){ret=true;}}return ret;},_stripDelimiter:function(entry){var beginningdels=array_keys(this._delimiters);var ength=strlen(entry);var firstchar=substr(entry,0,1);var lastchar=substr(entry,-1,1);while(in_array(firstchar,beginningdels)){if(lastchar==this._delimiters[firstchar]){entry=substr(entry,1,-1);}else{break;}firstchar=substr(entry,0,1);lastchar=substr(entry,-1,1);}return entry;},_unwrap:function(entry){entry=entry.replace(/\s+/,&quot; &quot;);return trim(entry);},_wordwrap:function(entry){if((&quot;&quot;!=entry)&amp;&amp;(is_string(entry))){entry=wordwrap(entry,this._options.wordWrapWidth,this._options.wordWrapBreak,this._options.wordWrapCut);}return entry;},_extractAuthors:function(entry){entry=this._unwrap(entry);var authorarray=entry.split(&quot; and &quot;);for(var i=0;i&lt;authorarray.length;i++){var author=trim(authorarray[i]);var first=&quot;&quot;;var von=&quot;&quot;;var last=&quot;&quot;;var jr=&quot;&quot;;if(strpos(author,&quot;,&quot;)===false){var tmparray=author.split(&quot; |~&quot;);var size=tmparray.length;if(1==size){last=tmparray[0];}else{if(2==size){first=tmparray[0];last=tmparray[1];}else{var invon=false;var inlast=false;for(var j=0;j&lt;(size-1);j++){if(inlast){last+=&quot; &quot;+tmparray[j];}else{if(invon){casev=this._determineCase(tmparray[j]);if(this.isError(casev)){}else{if((0==casev)||(-1==casev)){islast=true;for(var k=(j+1);k&lt;(size-1);k++){futurecase=this._determineCase(tmparray[k]);if(this.isError(casev)){}else{if(0==futurecase){islast=false;}}}if(islast){inlast=true;if(-1==casev){last+=&quot; &quot;+tmparray[j];}else{von+=&quot; &quot;+tmparray[j];}}else{von+=&quot; &quot;+tmparray[j];}}else{von+=&quot; &quot;+tmparray[j];}}}else{var casev=this._determineCase(tmparray[j]);if(this.isError(casev)){}else{if(0==casev){invon=true;von+=&quot; &quot;+tmparray[j];}else{first+=&quot; &quot;+tmparray[j];}}}}}last+=&quot; &quot;+tmparray[size-1];}}}else{var tmparray=[];tmparray=explode(&quot;,&quot;,author);vonlastarray=[];vonlastarray=explode(&quot; &quot;,tmparray[0]);size=sizeof(vonlastarray);if(1==size){last=vonlastarray[0];}else{inlast=false;for(var j=0;j&lt;(size-1);j++){if(inlast){last+=&quot; &quot;+vonlastarray[j];}else{if(0!=(this._determineCase(vonlastarray[j]))){islast=true;for(var k=(j+1);k&lt;(size-1);k++){this._determineCase(vonlastarray[k]);casev=this._determineCase(vonlastarray[k]);if(this.isError(casev)){}else{if(0==casev){islast=false;}}}if(islast){inlast=true;last+=&quot; &quot;+vonlastarray[j];}else{von+=&quot; &quot;+vonlastarray[j];}}else{von+=&quot; &quot;+vonlastarray[j];}}}last+=&quot; &quot;+vonlastarray[size-1];}if(3==tmparray.length){jr=tmparray[1];}first=tmparray[tmparray.length-1];}authorarray[i]={first:trim(first),von:trim(von),last:trim(last),jr:trim(jr)};}return authorarray;},_determineCase:function(word){var ret=-1;var trimmedword=trim(word);if(is_string(word)&amp;&amp;(strlen(trimmedword)&gt;0)){var i=0;var found=false;var openbrace=0;while(!found&amp;&amp;(i&lt;=strlen(word))){var letter=substr(trimmedword,i,1);var ordv=ord(letter);if(ordv==123){openbrace++;}if(ordv==125){openbrace--;}if((ordv&gt;=65)&amp;&amp;(ordv&lt;=90)&amp;&amp;(0==openbrace)){ret=1;found=true;}else{if((ordv&gt;=97)&amp;&amp;(ordv&lt;=122)&amp;&amp;(0==openbrace)){ret=0;found=true;}else{i++;}}}}else{ret=this.raiseError(&quot;Could not determine case on word: &quot;+word);}return ret;},isError:function(obj){return(typeof(obj)==&quot;Object&quot;&amp;&amp;obj.isError==1);},_validateValue:function(entry,wholeentry){if(entry.match(/^{.*@.*}/)){this._generateWarning(&quot;WARNING_AT_IN_BRACES&quot;,entry,wholeentry);}if(entry.match(/^\&quot;.*\\&quot;.*\&quot;/)){this._generateWarning(&quot;WARNING_ESCAPED_DOUBLE_QUOTE_INSIDE_DOUBLE_QUOTES&quot;,entry,wholeentry);}var open=0;var lastchar=&quot;&quot;;var charv=&quot;&quot;;for(var i=0;i&lt;strlen(entry);i++){charv=substr(entry,i,1);if((&quot;{&quot;==charv)&amp;&amp;(&quot;\\&quot;!=lastchar)){open++;}if((&quot;}&quot;==charv)&amp;&amp;(&quot;\\&quot;!=lastchar)){open--;}lastchar=charv;}if(0!=open){this._generateWarning(&quot;WARNING_UNBALANCED_AMOUNT_OF_BRACES&quot;,entry,wholeentry);}},_removeCurlyBraces:function(value){var beginningdels=array_keys(this._delimiters);var firstchar=substr(value,0,1);var lastchar=substr(value,-1,1);var begin=&quot;&quot;;var end=&quot;&quot;;while(in_array(firstchar,beginningdels)){if(lastchar==this._delimiters[firstchar]){begin+=firstchar;end+=lastchar;value=substr(value,1,-1);}else{break;}firstchar=substr(value,0,1);lastchar=substr(value,-1,1);}var pattern=&quot;/([^\\\\]){(+*?[^\\\\])}/&quot;;var replacement=&quot;12&quot;;value=value.replace(/([^\\\\])\{(.*?[^\\\\])\}/,replacement);value=begin+value+end;return value;},_generateWarning:function(type,entry,wholeentry){if(typeof wholeentry==&quot;undefined&quot;){wholeentry=&quot;&quot;;}var warning={};warning.warning=type;warning.entry=entry;warning.wholeentry=wholeentry;this.warnings[this.warnings.length]=warning;},clearWarnings:function(){this.warnings=array();},hasWarning:function(){if(sizeof(this.warnings)&gt;0){return true;}else{return false;}},amount:function(){return sizeof(this.data);},_formatAuthor:function(array){if(!array_key_exists(&quot;von&quot;,array)){array.von=&quot;&quot;;}else{array.von=trim(array.von);}if(!array_key_exists(&quot;last&quot;,array)){array.last=&quot;&quot;;}else{array.last=trim(array.last);}if(!array_key_exists(&quot;jr&quot;,array)){array.jr=&quot;&quot;;}else{array.jr=trim(array.jr);}if(!array_key_exists(&quot;first&quot;,array)){array.first=&quot;&quot;;}else{array.first=trim(array.first);}ret=this.authorstring;ret=str_replace(&quot;VON&quot;,array.von,ret);ret=str_replace(&quot;LAST&quot;,array.last,ret);ret=str_replace(&quot;JR&quot;,array.jr,ret);ret=str_replace(&quot;FIRST&quot;,array.first,ret);return trim(ret);},bibTex:function(){var bibtex=&quot;&quot;;for(var i=0;i&lt;this.data.length;i++){var entry=this.data[i];bibtex+=&quot;@&quot;+strtolower(entry.entryType)+&quot; { &quot;+entry.cite+&quot;,\n&quot;;for(key in entry){var val=entry[key];if(this._options.wordWrapWidth&gt;0){val=this._wordWrap(val);}if(!in_array(key,array(&quot;cite&quot;,&quot;entryType&quot;,&quot;author&quot;))){bibtex+=&quot;\t&quot;+key+&quot; = {&quot;+val+&quot;},\n&quot;;}}if(array_key_exists(&quot;author&quot;,entry)){if(this._options.extractAuthors){tmparray=[];for(j in entry.author){var authorentry=entry.author[j];tmparray[tmparray.length]=this._formatAuthor(authorentry);}author=join(&quot; and &quot;,tmparray);}else{author=entry.author;}}else{author=&quot;&quot;;}bibtex+=&quot;\tauthor = {&quot;+author+&quot;}\n&quot;;bibtex+=&quot;}\n\n&quot;;}return bibtex;},addEntry:function(newentry){this.data[this.data.length]=newentry;},getStatistic:function(){var ret=array();for(var i=0;i&lt;this.data.length;i++){var entry=this.data[i];if(array_key_exists(entry.entryType,ret)){ret[entry.entryType]++;}else{ret[entry.entryType]=1;}}return ret;},rtf:function(){var ret=&quot;{\\rtf\n&quot;;for(var i=0;i&lt;this.data.length;i++){var entry=this.data[i];line=this.rtfstring;title=&quot;&quot;;journal=&quot;&quot;;year=&quot;&quot;;authors=&quot;&quot;;if(array_key_exists(&quot;title&quot;,entry)){title=this._unwrap(entry.title);}if(array_key_exists(&quot;journal&quot;,entry)){journal=this._unwrap(entry.journal);}if(array_key_exists(&quot;year&quot;,entry)){year=this._unwrap(entry.year);}if(array_key_exists(&quot;author&quot;,entry)){if(this._options.extractAuthors){tmparray=[];for(var j in entry.author){var authorentry=entry.author[j];tmparray[tmparray.length]=this._formatAuthor(authorentry);}authors=join(&quot;, &quot;,tmparray);}else{authors=entry.author;}}if((&quot;&quot;!=title)||(&quot;&quot;!=journal)||(&quot;&quot;!=year)||(&quot;&quot;!=authors)){line=str_replace(&quot;TITLE&quot;,title,line);line=str_replace(&quot;JOURNAL&quot;,journal,line);line=str_replace(&quot;YEAR&quot;,year,line);line=str_replace(&quot;AUTHORS&quot;,authors,line);line+=&quot;\n\\par\n&quot;;ret+=line;}else{this._generateWarning(&quot;WARNING_LINE_WAS_NOT_CONVERTED&quot;,&quot;&quot;,print_r(entry,1));}}ret+=&quot;}&quot;;return ret;},html:function(min,max){if(typeof min==&quot;undefined&quot;){min=0;}if(typeof max==&quot;undefined&quot;){max=this.data.length;}var ret=&quot;&lt;p&gt;\n&quot;;for(var i=min;i&lt;max;i++){var entry=this.data[i];var line=this.htmlstring;var title=&quot;&quot;;var journal=&quot;&quot;;var year=&quot;&quot;;var authors=&quot;&quot;;if(array_key_exists(&quot;title&quot;,entry)){title=this._unwrap(entry.title);}if(array_key_exists(&quot;journal&quot;,entry)){journal=this._unwrap(entry.journal);}if(array_key_exists(&quot;year&quot;,entry)){year=this._unwrap(entry.year);}if(array_key_exists(&quot;author&quot;,entry)){if(this._options.extractAuthors){tmparray=[];for(j in entry.author){var authorentry=entry.author[j];tmparray[tmparray.length]=this._formatAuthor(authorentry);}authors=join(&quot;, &quot;,tmparray);}else{authors=entry.author;}}if((&quot;&quot;!=title)||(&quot;&quot;!=journal)||(&quot;&quot;!=year)||(&quot;&quot;!=authors)){line=str_replace(&quot;TITLE&quot;,title,line);line=str_replace(&quot;JOURNAL&quot;,journal,line);line=str_replace(&quot;YEAR&quot;,year,line);line=str_replace(&quot;AUTHORS&quot;,authors,line);line+=&quot;\n&quot;;ret+=line;}else{this._generateWarning(&quot;WARNING_LINE_WAS_NOT_CONVERTED&quot;,&quot;&quot;,print_r(entry,1));}}ret+=&quot;&lt;/p&gt;\n&quot;;return ret;}};</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line"><span class="pl-c"><span class="pl-c">/*</span>!</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * File:        jquery.dataTables.min.js</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Version:     1.6.2</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Author:      Allan Jardine (www.sprymedia.co.uk)</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Info:        www.datatables.net</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * Copyright 2008-2010 Allan Jardine, all rights reserved.</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> *</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This source file is free software, under either the GPL v2 license or a</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * BSD style license, as supplied with this software.</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * </span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * This source file is distributed in the hope that it will be useful, but </span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY </span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line"><span class="pl-c"> <span class="pl-c">*/</span></span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">(function($){$.fn.dataTableSettings=[];var _aoSettings=$.fn.dataTableSettings;$.fn.dataTableExt={};var _oExt=$.fn.dataTableExt;_oExt.sVersion=&quot;1.6.2&quot;;_oExt.iApiIndex=0;_oExt.oApi={};_oExt.afnFiltering=[];_oExt.aoFeatures=[];_oExt.ofnSearch={};_oExt.afnSortData=[];_oExt.oStdClasses={sPagePrevEnabled:&quot;paginate_enabled_previous&quot;,sPagePrevDisabled:&quot;paginate_disabled_previous&quot;,sPageNextEnabled:&quot;paginate_enabled_next&quot;,sPageNextDisabled:&quot;paginate_disabled_next&quot;,sPageJUINext:&quot;&quot;,sPageJUIPrev:&quot;&quot;,sPageButton:&quot;paginate_button&quot;,sPageButtonActive:&quot;paginate_active&quot;,sPageButtonStaticDisabled:&quot;paginate_button&quot;,sPageFirst:&quot;first&quot;,sPagePrevious:&quot;previous&quot;,sPageNext:&quot;next&quot;,sPageLast:&quot;last&quot;,sStripOdd:&quot;odd&quot;,sStripEven:&quot;even&quot;,sRowEmpty:&quot;dataTables_empty&quot;,sWrapper:&quot;dataTables_wrapper&quot;,sFilter:&quot;dataTables_filter&quot;,sInfo:&quot;dataTables_info&quot;,sPaging:&quot;dataTables_paginate paging_&quot;,sLength:&quot;dataTables_length&quot;,sProcessing:&quot;dataTables_processing&quot;,sSortAsc:&quot;sorting_asc&quot;,sSortDesc:&quot;sorting_desc&quot;,sSortable:&quot;sorting&quot;,sSortableAsc:&quot;sorting_asc_disabled&quot;,sSortableDesc:&quot;sorting_desc_disabled&quot;,sSortableNone:&quot;sorting_disabled&quot;,sSortColumn:&quot;sorting_&quot;,sSortJUIAsc:&quot;&quot;,sSortJUIDesc:&quot;&quot;,sSortJUI:&quot;&quot;,sSortJUIAscAllowed:&quot;&quot;,sSortJUIDescAllowed:&quot;&quot;};_oExt.oJUIClasses={sPagePrevEnabled:&quot;fg-button ui-state-default ui-corner-left&quot;,sPagePrevDisabled:&quot;fg-button ui-state-default ui-corner-left ui-state-disabled&quot;,sPageNextEnabled:&quot;fg-button ui-state-default ui-corner-right&quot;,sPageNextDisabled:&quot;fg-button ui-state-default ui-corner-right ui-state-disabled&quot;,sPageJUINext:&quot;ui-icon ui-icon-circle-arrow-e&quot;,sPageJUIPrev:&quot;ui-icon ui-icon-circle-arrow-w&quot;,sPageButton:&quot;fg-button ui-state-default&quot;,sPageButtonActive:&quot;fg-button ui-state-default ui-state-disabled&quot;,sPageButtonStaticDisabled:&quot;fg-button ui-state-default ui-state-disabled&quot;,sPageFirst:&quot;first ui-corner-tl ui-corner-bl&quot;,sPagePrevious:&quot;previous&quot;,sPageNext:&quot;next&quot;,sPageLast:&quot;last ui-corner-tr ui-corner-br&quot;,sStripOdd:&quot;odd&quot;,sStripEven:&quot;even&quot;,sRowEmpty:&quot;dataTables_empty&quot;,sWrapper:&quot;dataTables_wrapper&quot;,sFilter:&quot;dataTables_filter&quot;,sInfo:&quot;dataTables_info&quot;,sPaging:&quot;dataTables_paginate fg-buttonset fg-buttonset-multi paging_&quot;,sLength:&quot;dataTables_length&quot;,sProcessing:&quot;dataTables_processing&quot;,sSortAsc:&quot;ui-state-default&quot;,sSortDesc:&quot;ui-state-default&quot;,sSortable:&quot;ui-state-default&quot;,sSortableAsc:&quot;ui-state-default&quot;,sSortableDesc:&quot;ui-state-default&quot;,sSortableNone:&quot;ui-state-default&quot;,sSortColumn:&quot;sorting_&quot;,sSortJUIAsc:&quot;css_right ui-icon ui-icon-triangle-1-n&quot;,sSortJUIDesc:&quot;css_right ui-icon ui-icon-triangle-1-s&quot;,sSortJUI:&quot;css_right ui-icon ui-icon-carat-2-n-s&quot;,sSortJUIAscAllowed:&quot;css_right ui-icon ui-icon-carat-1-n&quot;,sSortJUIDescAllowed:&quot;css_right ui-icon ui-icon-carat-1-s&quot;};_oExt.oPagination={two_button:{fnInit:function(oSettings,nPaging,fnCallbackDraw){var nPrevious,nNext,nPreviousInner,nNextInner;if(!oSettings.bJUI){nPrevious=document.createElement(&quot;div&quot;);nNext=document.createElement(&quot;div&quot;);}else{nPrevious=document.createElement(&quot;a&quot;);nNext=document.createElement(&quot;a&quot;);nNextInner=document.createElement(&quot;span&quot;);nNextInner.className=oSettings.oClasses.sPageJUINext;nNext.appendChild(nNextInner);nPreviousInner=document.createElement(&quot;span&quot;);nPreviousInner.className=oSettings.oClasses.sPageJUIPrev;nPrevious.appendChild(nPreviousInner);}nPrevious.className=oSettings.oClasses.sPagePrevDisabled;nNext.className=oSettings.oClasses.sPageNextDisabled;nPrevious.title=oSettings.oLanguage.oPaginate.sPrevious;nNext.title=oSettings.oLanguage.oPaginate.sNext;nPaging.appendChild(nPrevious);nPaging.appendChild(nNext);$(nPrevious).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;previous&quot;)){fnCallbackDraw(oSettings);}});$(nNext).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;next&quot;)){fnCallbackDraw(oSettings);}});$(nPrevious).bind(&quot;selectstart&quot;,function(){return false;});$(nNext).bind(&quot;selectstart&quot;,function(){return false;});if(oSettings.sTableId!==&quot;&quot;&amp;&amp;typeof oSettings.aanFeatures.p==&quot;undefined&quot;){nPaging.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_paginate&quot;);nPrevious.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_previous&quot;);nNext.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_next&quot;);}},fnUpdate:function(oSettings,fnCallbackDraw){if(!oSettings.aanFeatures.p){return;}var an=oSettings.aanFeatures.p;for(var i=0,iLen=an.length;i&lt;iLen;i++){if(an[i].childNodes.length!==0){an[i].childNodes[0].className=(oSettings._iDisplayStart===0)?oSettings.oClasses.sPagePrevDisabled:oSettings.oClasses.sPagePrevEnabled;an[i].childNodes[1].className=(oSettings.fnDisplayEnd()==oSettings.fnRecordsDisplay())?oSettings.oClasses.sPageNextDisabled:oSettings.oClasses.sPageNextEnabled;}}}},iFullNumbersShowPages:5,full_numbers:{fnInit:function(oSettings,nPaging,fnCallbackDraw){var nFirst=document.createElement(&quot;span&quot;);var nPrevious=document.createElement(&quot;span&quot;);var nList=document.createElement(&quot;span&quot;);var nNext=document.createElement(&quot;span&quot;);var nLast=document.createElement(&quot;span&quot;);nFirst.innerHTML=oSettings.oLanguage.oPaginate.sFirst;nPrevious.innerHTML=oSettings.oLanguage.oPaginate.sPrevious;nNext.innerHTML=oSettings.oLanguage.oPaginate.sNext;nLast.innerHTML=oSettings.oLanguage.oPaginate.sLast;var oClasses=oSettings.oClasses;nFirst.className=oClasses.sPageButton+&quot; &quot;+oClasses.sPageFirst;nPrevious.className=oClasses.sPageButton+&quot; &quot;+oClasses.sPagePrevious;nNext.className=oClasses.sPageButton+&quot; &quot;+oClasses.sPageNext;nLast.className=oClasses.sPageButton+&quot; &quot;+oClasses.sPageLast;nPaging.appendChild(nFirst);nPaging.appendChild(nPrevious);nPaging.appendChild(nList);nPaging.appendChild(nNext);nPaging.appendChild(nLast);$(nFirst).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;first&quot;)){fnCallbackDraw(oSettings);}});$(nPrevious).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;previous&quot;)){fnCallbackDraw(oSettings);}});$(nNext).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;next&quot;)){fnCallbackDraw(oSettings);}});$(nLast).click(function(){if(oSettings.oApi._fnPageChange(oSettings,&quot;last&quot;)){fnCallbackDraw(oSettings);}});$(&quot;span&quot;,nPaging).bind(&quot;mousedown&quot;,function(){return false;}).bind(&quot;selectstart&quot;,function(){return false;});if(oSettings.sTableId!==&quot;&quot;&amp;&amp;typeof oSettings.aanFeatures.p==&quot;undefined&quot;){nPaging.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_paginate&quot;);nFirst.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_first&quot;);nPrevious.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_previous&quot;);nNext.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_next&quot;);nLast.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_last&quot;);}},fnUpdate:function(oSettings,fnCallbackDraw){if(!oSettings.aanFeatures.p){return;}var iPageCount=_oExt.oPagination.iFullNumbersShowPages;var iPageCountHalf=Math.floor(iPageCount/2);var iPages=Math.ceil((oSettings.fnRecordsDisplay())/oSettings._iDisplayLength);var iCurrentPage=Math.ceil(oSettings._iDisplayStart/oSettings._iDisplayLength)+1;var sList=&quot;&quot;;var iStartButton,iEndButton,i,iLen;var oClasses=oSettings.oClasses;if(iPages&lt;iPageCount){iStartButton=1;iEndButton=iPages;}else{if(iCurrentPage&lt;=iPageCountHalf){iStartButton=1;iEndButton=iPageCount;}else{if(iCurrentPage&gt;=(iPages-iPageCountHalf)){iStartButton=iPages-iPageCount+1;iEndButton=iPages;}else{iStartButton=iCurrentPage-Math.ceil(iPageCount/2)+1;iEndButton=iStartButton+iPageCount-1;}}}for(i=iStartButton;i&lt;=iEndButton;i++){if(iCurrentPage!=i){sList+=&#39;&lt;span class=&quot;&#39;+oClasses.sPageButton+&#39;&quot;&gt;&#39;+i+&quot;&lt;/span&gt;&quot;;}else{sList+=&#39;&lt;span class=&quot;&#39;+oClasses.sPageButtonActive+&#39;&quot;&gt;&#39;+i+&quot;&lt;/span&gt;&quot;;}}var an=oSettings.aanFeatures.p;var anButtons,anStatic,nPaginateList;var fnClick=function(){var iTarget=(this.innerHTML*1)-1;oSettings._iDisplayStart=iTarget*oSettings._iDisplayLength;fnCallbackDraw(oSettings);return false;};var fnFalse=function(){return false;};for(i=0,iLen=an.length;i&lt;iLen;i++){if(an[i].childNodes.length===0){continue;}nPaginateList=an[i].childNodes[2];nPaginateList.innerHTML=sList;$(&quot;span&quot;,nPaginateList).click(fnClick).bind(&quot;mousedown&quot;,fnFalse).bind(&quot;selectstart&quot;,fnFalse);anButtons=an[i].getElementsByTagName(&quot;span&quot;);anStatic=[anButtons[0],anButtons[1],anButtons[anButtons.length-2],anButtons[anButtons.length-1]];$(anStatic).removeClass(oClasses.sPageButton+&quot; &quot;+oClasses.sPageButtonActive+&quot; &quot;+oClasses.sPageButtonStaticDisabled);if(iCurrentPage==1){anStatic[0].className+=&quot; &quot;+oClasses.sPageButtonStaticDisabled;anStatic[1].className+=&quot; &quot;+oClasses.sPageButtonStaticDisabled;}else{anStatic[0].className+=&quot; &quot;+oClasses.sPageButton;anStatic[1].className+=&quot; &quot;+oClasses.sPageButton;}if(iPages===0||iCurrentPage==iPages||oSettings._iDisplayLength==-1){anStatic[2].className+=&quot; &quot;+oClasses.sPageButtonStaticDisabled;anStatic[3].className+=&quot; &quot;+oClasses.sPageButtonStaticDisabled;}else{anStatic[2].className+=&quot; &quot;+oClasses.sPageButton;anStatic[3].className+=&quot; &quot;+oClasses.sPageButton;}}}}};_oExt.oSort={&quot;string-asc&quot;:function(a,b){var x=a.toLowerCase();var y=b.toLowerCase();return((x&lt;y)?-1:((x&gt;y)?1:0));},&quot;string-desc&quot;:function(a,b){var x=a.toLowerCase();var y=b.toLowerCase();return((x&lt;y)?1:((x&gt;y)?-1:0));},&quot;html-asc&quot;:function(a,b){var x=a.replace(/&lt;.*?&gt;/g,&quot;&quot;).toLowerCase();var y=b.replace(/&lt;.*?&gt;/g,&quot;&quot;).toLowerCase();return((x&lt;y)?-1:((x&gt;y)?1:0));},&quot;html-desc&quot;:function(a,b){var x=a.replace(/&lt;.*?&gt;/g,&quot;&quot;).toLowerCase();var y=b.replace(/&lt;.*?&gt;/g,&quot;&quot;).toLowerCase();return((x&lt;y)?1:((x&gt;y)?-1:0));},&quot;date-asc&quot;:function(a,b){var x=Date.parse(a);var y=Date.parse(b);if(isNaN(x)){x=Date.parse(&quot;01/01/1970 00:00:00&quot;);}if(isNaN(y)){y=Date.parse(&quot;01/01/1970 00:00:00&quot;);}return x-y;},&quot;date-desc&quot;:function(a,b){var x=Date.parse(a);var y=Date.parse(b);if(isNaN(x)){x=Date.parse(&quot;01/01/1970 00:00:00&quot;);}if(isNaN(y)){y=Date.parse(&quot;01/01/1970 00:00:00&quot;);}return y-x;},&quot;numeric-asc&quot;:function(a,b){var x=a==&quot;-&quot;?0:a;var y=b==&quot;-&quot;?0:b;return x-y;},&quot;numeric-desc&quot;:function(a,b){var x=a==&quot;-&quot;?0:a;var y=b==&quot;-&quot;?0:b;return y-x;}};_oExt.aTypes=[function(sData){if(typeof sData==&quot;number&quot;){return&quot;numeric&quot;;}else{if(typeof sData.charAt!=&quot;function&quot;){return null;}}var sValidFirstChars=&quot;0123456789-&quot;;var sValidChars=&quot;0123456789.&quot;;var Char;var bDecimal=false;Char=sData.charAt(0);if(sValidFirstChars.indexOf(Char)==-1){return null;}for(var i=1;i&lt;sData.length;i++){Char=sData.charAt(i);if(sValidChars.indexOf(Char)==-1){return null;}if(Char==&quot;.&quot;){if(bDecimal){return null;}bDecimal=true;}}return&quot;numeric&quot;;},function(sData){var iParse=Date.parse(sData);if(iParse!==null&amp;&amp;!isNaN(iParse)){return&quot;date&quot;;}return null;}];_oExt._oExternConfig={iNextUnique:0};$.fn.dataTable=function(oInit){function classSettings(){this.fnRecordsTotal=function(){if(this.oFeatures.bServerSide){return this._iRecordsTotal;}else{return this.aiDisplayMaster.length;}};this.fnRecordsDisplay=function(){if(this.oFeatures.bServerSide){return this._iRecordsDisplay;}else{return this.aiDisplay.length;}};this.fnDisplayEnd=function(){if(this.oFeatures.bServerSide){return this._iDisplayStart+this.aiDisplay.length;}else{return this._iDisplayEnd;}};this.sInstance=null;this.oFeatures={bPaginate:true,bLengthChange:true,bFilter:true,bSort:true,bInfo:true,bAutoWidth:true,bProcessing:false,bSortClasses:true,bStateSave:false,bServerSide:false};this.aanFeatures=[];this.oLanguage={sProcessing:&quot;Processing...&quot;,sLengthMenu:&quot;Show _MENU_ entries&quot;,sZeroRecords:&quot;No matching records found&quot;,sInfo:&quot;Showing _START_ to _END_ of _TOTAL_ entries&quot;,sInfoEmpty:&quot;Showing 0 to 0 of 0 entries&quot;,sInfoFiltered:&quot;(filtered from _MAX_ total entries)&quot;,sInfoPostFix:&quot;&quot;,sSearch:&quot;Search:&quot;,sUrl:&quot;&quot;,oPaginate:{sFirst:&quot;First&quot;,sPrevious:&quot;Previous&quot;,sNext:&quot;Next&quot;,sLast:&quot;Last&quot;}};this.aoData=[];this.aiDisplay=[];this.aiDisplayMaster=[];this.aoColumns=[];this.iNextId=0;this.asDataSearch=[];this.oPreviousSearch={sSearch:&quot;&quot;,bEscapeRegex:true};this.aoPreSearchCols=[];this.aaSorting=[[0,&quot;asc&quot;,0]];this.aaSortingFixed=null;this.asStripClasses=[];this.fnRowCallback=null;this.fnHeaderCallback=null;this.fnFooterCallback=null;this.aoDrawCallback=[];this.fnInitComplete=null;this.sTableId=&quot;&quot;;this.nTable=null;this.iDefaultSortIndex=0;this.bInitialised=false;this.aoOpenRows=[];this.sDom=&quot;lfrtip&quot;;this.sPaginationType=&quot;two_button&quot;;this.iCookieDuration=60*60*2;this.sAjaxSource=null;this.bAjaxDataGet=true;this.fnServerData=$.getJSON;this.iServerDraw=0;this._iDisplayLength=10;this._iDisplayStart=0;this._iDisplayEnd=10;this._iRecordsTotal=0;this._iRecordsDisplay=0;this.bJUI=false;this.oClasses=_oExt.oStdClasses;this.bFiltered=false;this.bSorted=false;}this.oApi={};this.fnDraw=function(bComplete){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof bComplete!=&quot;undefined&quot;&amp;&amp;bComplete===false){_fnCalculateEnd(oSettings);_fnDraw(oSettings);}else{_fnReDraw(oSettings);}};this.fnFilter=function(sInput,iColumn,bEscapeRegex){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof bEscapeRegex==&quot;undefined&quot;){bEscapeRegex=true;}if(typeof iColumn==&quot;undefined&quot;||iColumn===null){_fnFilterComplete(oSettings,{sSearch:sInput,bEscapeRegex:bEscapeRegex},1);}else{oSettings.aoPreSearchCols[iColumn].sSearch=sInput;oSettings.aoPreSearchCols[iColumn].bEscapeRegex=bEscapeRegex;_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}};this.fnSettings=function(nNode){return _fnSettingsFromNode(this[_oExt.iApiIndex]);};this.fnVersionCheck=function(sVersion){var fnZPad=function(Zpad,count){while(Zpad.length&lt;count){Zpad+=&quot;0&quot;;}return Zpad;};var aThis=_oExt.sVersion.split(&quot;.&quot;);var aThat=sVersion.split(&quot;.&quot;);var sThis=&quot;&quot;,sThat=&quot;&quot;;for(var i=0,iLen=aThat.length;i&lt;iLen;i++){sThis+=fnZPad(aThis[i],3);sThat+=fnZPad(aThat[i],3);}return parseInt(sThis,10)&gt;=parseInt(sThat,10);};this.fnSort=function(aaSort){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);oSettings.aaSorting=aaSort;_fnSort(oSettings);};this.fnSortListener=function(nNode,iColumn,fnCallback){_fnSortAttachListener(_fnSettingsFromNode(this[_oExt.iApiIndex]),nNode,iColumn,fnCallback);};this.fnAddData=function(mData,bRedraw){if(mData.length===0){return[];}var aiReturn=[];var iTest;var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof mData[0]==&quot;object&quot;){for(var i=0;i&lt;mData.length;i++){iTest=_fnAddData(oSettings,mData[i]);if(iTest==-1){return aiReturn;}aiReturn.push(iTest);}}else{iTest=_fnAddData(oSettings,mData);if(iTest==-1){return aiReturn;}aiReturn.push(iTest);}oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnBuildSearchArray(oSettings,1);if(typeof bRedraw==&quot;undefined&quot;||bRedraw){_fnReDraw(oSettings);}return aiReturn;};this.fnDeleteRow=function(mTarget,fnCallBack,bNullRow){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i,iAODataIndex;iAODataIndex=(typeof mTarget==&quot;object&quot;)?_fnNodeToDataIndex(oSettings,mTarget):mTarget;for(i=0;i&lt;oSettings.aiDisplayMaster.length;i++){if(oSettings.aiDisplayMaster[i]==iAODataIndex){oSettings.aiDisplayMaster.splice(i,1);break;}}for(i=0;i&lt;oSettings.aiDisplay.length;i++){if(oSettings.aiDisplay[i]==iAODataIndex){oSettings.aiDisplay.splice(i,1);break;}}_fnBuildSearchArray(oSettings,1);if(typeof fnCallBack==&quot;function&quot;){fnCallBack.call(this);}if(oSettings._iDisplayStart&gt;=oSettings.aiDisplay.length){oSettings._iDisplayStart-=oSettings._iDisplayLength;if(oSettings._iDisplayStart&lt;0){oSettings._iDisplayStart=0;}}_fnCalculateEnd(oSettings);_fnDraw(oSettings);var aData=oSettings.aoData[iAODataIndex]._aData.slice();if(typeof bNullRow!=&quot;undefined&quot;&amp;&amp;bNullRow===true){oSettings.aoData[iAODataIndex]=null;}return aData;};this.fnClearTable=function(bRedraw){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);_fnClearTable(oSettings);if(typeof bRedraw==&quot;undefined&quot;||bRedraw){_fnDraw(oSettings);}};this.fnOpen=function(nTr,sHtml,sClass){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);this.fnClose(nTr);var nNewRow=document.createElement(&quot;tr&quot;);var nNewCell=document.createElement(&quot;td&quot;);nNewRow.appendChild(nNewCell);nNewCell.className=sClass;nNewCell.colSpan=_fnVisbleColumns(oSettings);nNewCell.innerHTML=sHtml;var nTrs=$(&quot;tbody tr&quot;,oSettings.nTable);if($.inArray(nTr,nTrs)!=-1){$(nNewRow).insertAfter(nTr);}if(!oSettings.oFeatures.bServerSide){oSettings.aoOpenRows.push({nTr:nNewRow,nParent:nTr});}return nNewRow;};this.fnClose=function(nTr){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);for(var i=0;i&lt;oSettings.aoOpenRows.length;i++){if(oSettings.aoOpenRows[i].nParent==nTr){var nTrParent=oSettings.aoOpenRows[i].nTr.parentNode;if(nTrParent){nTrParent.removeChild(oSettings.aoOpenRows[i].nTr);}oSettings.aoOpenRows.splice(i,1);return 0;}}return 1;};this.fnGetData=function(mRow){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof mRow!=&quot;undefined&quot;){var iRow=(typeof mRow==&quot;object&quot;)?_fnNodeToDataIndex(oSettings,mRow):mRow;return oSettings.aoData[iRow]._aData;}return _fnGetDataMaster(oSettings);};this.fnGetNodes=function(iRow){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);if(typeof iRow!=&quot;undefined&quot;){return oSettings.aoData[iRow].nTr;}return _fnGetTrNodes(oSettings);};this.fnGetPosition=function(nNode){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i;if(nNode.nodeName==&quot;TR&quot;){return _fnNodeToDataIndex(oSettings,nNode);}else{if(nNode.nodeName==&quot;TD&quot;){var iDataIndex=_fnNodeToDataIndex(oSettings,nNode.parentNode);var iCorrector=0;for(var j=0;j&lt;oSettings.aoColumns.length;j++){if(oSettings.aoColumns[j].bVisible){if(oSettings.aoData[iDataIndex].nTr.getElementsByTagName(&quot;td&quot;)[j-iCorrector]==nNode){return[iDataIndex,j-iCorrector,j];}}else{iCorrector++;}}}}return null;};this.fnUpdate=function(mData,mRow,iColumn,bRedraw){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var iVisibleColumn;var sDisplay;var iRow=(typeof mRow==&quot;object&quot;)?_fnNodeToDataIndex(oSettings,mRow):mRow;if(typeof mData!=&quot;object&quot;){sDisplay=mData;oSettings.aoData[iRow]._aData[iColumn]=sDisplay;if(oSettings.aoColumns[iColumn].fnRender!==null){sDisplay=oSettings.aoColumns[iColumn].fnRender({iDataRow:iRow,iDataColumn:iColumn,aData:oSettings.aoData[iRow]._aData,oSettings:oSettings});if(oSettings.aoColumns[iColumn].bUseRendered){oSettings.aoData[iRow]._aData[iColumn]=sDisplay;}}iVisibleColumn=_fnColumnIndexToVisible(oSettings,iColumn);if(iVisibleColumn!==null){oSettings.aoData[iRow].nTr.getElementsByTagName(&quot;td&quot;)[iVisibleColumn].innerHTML=sDisplay;}}else{if(mData.length!=oSettings.aoColumns.length){alert(&quot;DataTables warning: An array passed to fnUpdate must have the same number of columns as the table in question - in this case &quot;+oSettings.aoColumns.length);return 1;}for(var i=0;i&lt;mData.length;i++){sDisplay=mData[i];oSettings.aoData[iRow]._aData[i]=sDisplay;if(oSettings.aoColumns[i].fnRender!==null){sDisplay=oSettings.aoColumns[i].fnRender({iDataRow:iRow,iDataColumn:i,aData:oSettings.aoData[iRow]._aData,oSettings:oSettings});if(oSettings.aoColumns[i].bUseRendered){oSettings.aoData[iRow]._aData[i]=sDisplay;}}iVisibleColumn=_fnColumnIndexToVisible(oSettings,i);if(iVisibleColumn!==null){oSettings.aoData[iRow].nTr.getElementsByTagName(&quot;td&quot;)[iVisibleColumn].innerHTML=sDisplay;}}}_fnBuildSearchArray(oSettings,1);if(typeof bRedraw!=&quot;undefined&quot;&amp;&amp;bRedraw){_fnReDraw(oSettings);}return 0;};this.fnSetColumnVis=function(iCol,bShow){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);var i,iLen;var iColumns=oSettings.aoColumns.length;var nTd,anTds;if(oSettings.aoColumns[iCol].bVisible==bShow){return;}var nTrHead=$(&quot;thead:eq(0)&gt;tr&quot;,oSettings.nTable)[0];var nTrFoot=$(&quot;tfoot:eq(0)&gt;tr&quot;,oSettings.nTable)[0];var anTheadTh=[];var anTfootTh=[];for(i=0;i&lt;iColumns;i++){anTheadTh.push(oSettings.aoColumns[i].nTh);anTfootTh.push(oSettings.aoColumns[i].nTf);}if(bShow){var iInsert=0;for(i=0;i&lt;iCol;i++){if(oSettings.aoColumns[i].bVisible){iInsert++;}}if(iInsert&gt;=_fnVisbleColumns(oSettings)){nTrHead.appendChild(anTheadTh[iCol]);if(nTrFoot){nTrFoot.appendChild(anTfootTh[iCol]);}for(i=0,iLen=oSettings.aoData.length;i&lt;iLen;i++){nTd=oSettings.aoData[i]._anHidden[iCol];oSettings.aoData[i].nTr.appendChild(nTd);}}else{var iBefore;for(i=iCol;i&lt;iColumns;i++){iBefore=_fnColumnIndexToVisible(oSettings,i);if(iBefore!==null){break;}}nTrHead.insertBefore(anTheadTh[iCol],nTrHead.getElementsByTagName(&quot;th&quot;)[iBefore]);if(nTrFoot){nTrFoot.insertBefore(anTfootTh[iCol],nTrFoot.getElementsByTagName(&quot;th&quot;)[iBefore]);}anTds=_fnGetTdNodes(oSettings);for(i=0,iLen=oSettings.aoData.length;i&lt;iLen;i++){nTd=oSettings.aoData[i]._anHidden[iCol];oSettings.aoData[i].nTr.insertBefore(nTd,$(&quot;&gt;td:eq(&quot;+iBefore+&quot;)&quot;,oSettings.aoData[i].nTr)[0]);}}oSettings.aoColumns[iCol].bVisible=true;}else{nTrHead.removeChild(anTheadTh[iCol]);if(nTrFoot){nTrFoot.removeChild(anTfootTh[iCol]);}anTds=_fnGetTdNodes(oSettings);for(i=0,iLen=oSettings.aoData.length;i&lt;iLen;i++){nTd=anTds[(i*oSettings.aoColumns.length)+iCol];oSettings.aoData[i]._anHidden[iCol]=nTd;nTd.parentNode.removeChild(nTd);}oSettings.aoColumns[iCol].bVisible=false;}for(i=0,iLen=oSettings.aoOpenRows.length;i&lt;iLen;i++){oSettings.aoOpenRows[i].nTr.colSpan=_fnVisbleColumns(oSettings);}_fnSaveState(oSettings);};this.fnPageChange=function(sAction,bRedraw){var oSettings=_fnSettingsFromNode(this[_oExt.iApiIndex]);_fnPageChange(oSettings,sAction);_fnCalculateEnd(oSettings);if(typeof bRedraw==&quot;undefined&quot;||bRedraw){_fnDraw(oSettings);}};function _fnExternApiFunc(sFunc){return function(){var aArgs=[_fnSettingsFromNode(this[_oExt.iApiIndex])].concat(Array.prototype.slice.call(arguments));return _oExt.oApi[sFunc].apply(this,aArgs);};}for(var sFunc in _oExt.oApi){if(sFunc){this[sFunc]=_fnExternApiFunc(sFunc);}}function _fnInitalise(oSettings){if(oSettings.bInitialised===false){setTimeout(function(){_fnInitalise(oSettings);},200);return;}_fnAddOptionsHtml(oSettings);_fnDrawHead(oSettings);if(oSettings.oFeatures.bSort){_fnSort(oSettings,false);_fnSortingClasses(oSettings);}else{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}if(oSettings.sAjaxSource!==null&amp;&amp;!oSettings.oFeatures.bServerSide){_fnProcessingDisplay(oSettings,true);oSettings.fnServerData(oSettings.sAjaxSource,null,function(json){for(var i=0;i&lt;json.aaData.length;i++){_fnAddData(oSettings,json.aaData[i]);}oSettings.iInitDisplayStart=oSettings._iDisplayStart;if(oSettings.oFeatures.bSort){_fnSort(oSettings);}else{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();_fnCalculateEnd(oSettings);_fnDraw(oSettings);}_fnProcessingDisplay(oSettings,false);if(typeof oSettings.fnInitComplete==&quot;function&quot;){oSettings.fnInitComplete(oSettings,json);}});return;}if(typeof oSettings.fnInitComplete==&quot;function&quot;){oSettings.fnInitComplete(oSettings);}if(!oSettings.oFeatures.bServerSide){_fnProcessingDisplay(oSettings,false);}}function _fnLanguageProcess(oSettings,oLanguage,bInit){_fnMap(oSettings.oLanguage,oLanguage,&quot;sProcessing&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sLengthMenu&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sZeroRecords&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sInfo&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sInfoEmpty&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sInfoFiltered&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sInfoPostFix&quot;);_fnMap(oSettings.oLanguage,oLanguage,&quot;sSearch&quot;);if(typeof oLanguage.oPaginate!=&quot;undefined&quot;){_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,&quot;sFirst&quot;);_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,&quot;sPrevious&quot;);_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,&quot;sNext&quot;);_fnMap(oSettings.oLanguage.oPaginate,oLanguage.oPaginate,&quot;sLast&quot;);}if(bInit){_fnInitalise(oSettings);}}function _fnAddColumn(oSettings,oOptions,nTh){oSettings.aoColumns[oSettings.aoColumns.length++]={sType:null,_bAutoType:true,bVisible:true,bSearchable:true,bSortable:true,asSorting:[&quot;asc&quot;,&quot;desc&quot;],sSortingClass:oSettings.oClasses.sSortable,sSortingClassJUI:oSettings.oClasses.sSortJUI,sTitle:nTh?nTh.innerHTML:&quot;&quot;,sName:&quot;&quot;,sWidth:null,sClass:null,fnRender:null,bUseRendered:true,iDataSort:oSettings.aoColumns.length-1,sSortDataType:&quot;std&quot;,nTh:nTh?nTh:document.createElement(&quot;th&quot;),nTf:null};var iLength=oSettings.aoColumns.length-1;var oCol=oSettings.aoColumns[iLength];if(typeof oOptions!=&quot;undefined&quot;&amp;&amp;oOptions!==null){if(typeof oOptions.sType!=&quot;undefined&quot;){oCol.sType=oOptions.sType;oCol._bAutoType=false;}_fnMap(oCol,oOptions,&quot;bVisible&quot;);_fnMap(oCol,oOptions,&quot;bSearchable&quot;);_fnMap(oCol,oOptions,&quot;bSortable&quot;);_fnMap(oCol,oOptions,&quot;sTitle&quot;);_fnMap(oCol,oOptions,&quot;sName&quot;);_fnMap(oCol,oOptions,&quot;sWidth&quot;);_fnMap(oCol,oOptions,&quot;sClass&quot;);_fnMap(oCol,oOptions,&quot;fnRender&quot;);_fnMap(oCol,oOptions,&quot;bUseRendered&quot;);_fnMap(oCol,oOptions,&quot;iDataSort&quot;);_fnMap(oCol,oOptions,&quot;asSorting&quot;);_fnMap(oCol,oOptions,&quot;sSortDataType&quot;);}if(!oSettings.oFeatures.bSort){oCol.bSortable=false;}if(!oCol.bSortable||($.inArray(&quot;asc&quot;,oCol.asSorting)==-1&amp;&amp;$.inArray(&quot;desc&quot;,oCol.asSorting)==-1)){oCol.sSortingClass=oSettings.oClasses.sSortableNone;oCol.sSortingClassJUI=&quot;&quot;;}else{if($.inArray(&quot;asc&quot;,oCol.asSorting)!=-1&amp;&amp;$.inArray(&quot;desc&quot;,oCol.asSorting)==-1){oCol.sSortingClass=oSettings.oClasses.sSortableAsc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIAscAllowed;}else{if($.inArray(&quot;asc&quot;,oCol.asSorting)==-1&amp;&amp;$.inArray(&quot;desc&quot;,oCol.asSorting)!=-1){oCol.sSortingClass=oSettings.oClasses.sSortableDesc;oCol.sSortingClassJUI=oSettings.oClasses.sSortJUIDescAllowed;}}}if(typeof oSettings.aoPreSearchCols[iLength]==&quot;undefined&quot;||oSettings.aoPreSearchCols[iLength]===null){oSettings.aoPreSearchCols[iLength]={sSearch:&quot;&quot;,bEscapeRegex:true};}else{if(typeof oSettings.aoPreSearchCols[iLength].bEscapeRegex==&quot;undefined&quot;){oSettings.aoPreSearchCols[iLength].bEscapeRegex=true;}}}function _fnAddData(oSettings,aData){if(aData.length!=oSettings.aoColumns.length){alert(&quot;DataTables warning: Added data does not match known number of columns&quot;);return -1;}var iThisIndex=oSettings.aoData.length;oSettings.aoData.push({nTr:document.createElement(&quot;tr&quot;),_iId:oSettings.iNextId++,_aData:aData.slice(),_anHidden:[],_sRowStripe:&quot;&quot;});var nTd,sThisType;for(var i=0;i&lt;aData.length;i++){nTd=document.createElement(&quot;td&quot;);if(typeof oSettings.aoColumns[i].fnRender==&quot;function&quot;){var sRendered=oSettings.aoColumns[i].fnRender({iDataRow:iThisIndex,iDataColumn:i,aData:aData,oSettings:oSettings});nTd.innerHTML=sRendered;if(oSettings.aoColumns[i].bUseRendered){oSettings.aoData[iThisIndex]._aData[i]=sRendered;}}else{nTd.innerHTML=aData[i];}if(oSettings.aoColumns[i].sClass!==null){nTd.className=oSettings.aoColumns[i].sClass;}if(oSettings.aoColumns[i]._bAutoType&amp;&amp;oSettings.aoColumns[i].sType!=&quot;string&quot;){sThisType=_fnDetectType(oSettings.aoData[iThisIndex]._aData[i]);if(oSettings.aoColumns[i].sType===null){oSettings.aoColumns[i].sType=sThisType;}else{if(oSettings.aoColumns[i].sType!=sThisType){oSettings.aoColumns[i].sType=&quot;string&quot;;}}}if(oSettings.aoColumns[i].bVisible){oSettings.aoData[iThisIndex].nTr.appendChild(nTd);}else{oSettings.aoData[iThisIndex]._anHidden[i]=nTd;}}oSettings.aiDisplayMaster.push(iThisIndex);return iThisIndex;}function _fnGatherData(oSettings){var iLoop,i,iLen,j,jLen,jInner,nTds,nTrs,nTd,aLocalData,iThisIndex,iRow,iRows,iColumn,iColumns;if(oSettings.sAjaxSource===null){nTrs=oSettings.nTable.getElementsByTagName(&quot;tbody&quot;)[0].childNodes;for(i=0,iLen=nTrs.length;i&lt;iLen;i++){if(nTrs[i].nodeName==&quot;TR&quot;){iThisIndex=oSettings.aoData.length;oSettings.aoData.push({nTr:nTrs[i],_iId:oSettings.iNextId++,_aData:[],_anHidden:[],_sRowStripe:&quot;&quot;});oSettings.aiDisplayMaster.push(iThisIndex);aLocalData=oSettings.aoData[iThisIndex]._aData;nTds=nTrs[i].childNodes;jInner=0;for(j=0,jLen=nTds.length;j&lt;jLen;j++){if(nTds[j].nodeName==&quot;TD&quot;){aLocalData[jInner]=nTds[j].innerHTML;jInner++;}}}}}nTrs=_fnGetTrNodes(oSettings);nTds=[];for(i=0,iLen=nTrs.length;i&lt;iLen;i++){for(j=0,jLen=nTrs[i].childNodes.length;j&lt;jLen;j++){nTd=nTrs[i].childNodes[j];if(nTd.nodeName==&quot;TD&quot;){nTds.push(nTd);}}}if(nTds.length!=nTrs.length*oSettings.aoColumns.length){alert(&quot;DataTables warning: Unexpected number of TD elements. Expected &quot;+(nTrs.length*oSettings.aoColumns.length)+&quot; and got &quot;+nTds.length+&quot;. DataTables does not support rowspan / colspan in the table body, and there must be one cell for each row/column combination.&quot;);}for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn&lt;iColumns;iColumn++){if(oSettings.aoColumns[iColumn].sTitle===null){oSettings.aoColumns[iColumn].sTitle=oSettings.aoColumns[iColumn].nTh.innerHTML;}var bAutoType=oSettings.aoColumns[iColumn]._bAutoType,bRender=typeof oSettings.aoColumns[iColumn].fnRender==&quot;function&quot;,bClass=oSettings.aoColumns[iColumn].sClass!==null,bVisible=oSettings.aoColumns[iColumn].bVisible,nCell,sThisType,sRendered;if(bAutoType||bRender||bClass||!bVisible){for(iRow=0,iRows=oSettings.aoData.length;iRow&lt;iRows;iRow++){nCell=nTds[(iRow*iColumns)+iColumn];if(bAutoType){if(oSettings.aoColumns[iColumn].sType!=&quot;string&quot;){sThisType=_fnDetectType(oSettings.aoData[iRow]._aData[iColumn]);if(oSettings.aoColumns[iColumn].sType===null){oSettings.aoColumns[iColumn].sType=sThisType;}else{if(oSettings.aoColumns[iColumn].sType!=sThisType){oSettings.aoColumns[iColumn].sType=&quot;string&quot;;}}}}if(bRender){sRendered=oSettings.aoColumns[iColumn].fnRender({iDataRow:iRow,iDataColumn:iColumn,aData:oSettings.aoData[iRow]._aData,oSettings:oSettings});nCell.innerHTML=sRendered;if(oSettings.aoColumns[iColumn].bUseRendered){oSettings.aoData[iRow]._aData[iColumn]=sRendered;}}if(bClass){nCell.className+=&quot; &quot;+oSettings.aoColumns[iColumn].sClass;}if(!bVisible){oSettings.aoData[iRow]._anHidden[iColumn]=nCell;nCell.parentNode.removeChild(nCell);}}}}}function _fnDrawHead(oSettings){var i,nTh,iLen;var iThs=oSettings.nTable.getElementsByTagName(&quot;thead&quot;)[0].getElementsByTagName(&quot;th&quot;).length;var iCorrector=0;if(iThs!==0){for(i=0,iLen=oSettings.aoColumns.length;i&lt;iLen;i++){nTh=oSettings.aoColumns[i].nTh;if(oSettings.aoColumns[i].bVisible){if(oSettings.aoColumns[i].sWidth!==null){nTh.style.width=oSettings.aoColumns[i].sWidth;}if(oSettings.aoColumns[i].sTitle!=nTh.innerHTML){nTh.innerHTML=oSettings.aoColumns[i].sTitle;}}else{nTh.parentNode.removeChild(nTh);iCorrector++;}}}else{var nTr=document.createElement(&quot;tr&quot;);for(i=0,iLen=oSettings.aoColumns.length;i&lt;iLen;i++){nTh=oSettings.aoColumns[i].nTh;nTh.innerHTML=oSettings.aoColumns[i].sTitle;if(oSettings.aoColumns[i].bVisible){if(oSettings.aoColumns[i].sClass!==null){nTh.className=oSettings.aoColumns[i].sClass;}if(oSettings.aoColumns[i].sWidth!==null){nTh.style.width=oSettings.aoColumns[i].sWidth;}nTr.appendChild(nTh);}}$(&quot;thead:eq(0)&quot;,oSettings.nTable).html(&quot;&quot;)[0].appendChild(nTr);}if(oSettings.bJUI){for(i=0,iLen=oSettings.aoColumns.length;i&lt;iLen;i++){oSettings.aoColumns[i].nTh.insertBefore(document.createElement(&quot;span&quot;),oSettings.aoColumns[i].nTh.firstChild);}}if(oSettings.oFeatures.bSort){for(i=0;i&lt;oSettings.aoColumns.length;i++){if(oSettings.aoColumns[i].bSortable!==false){_fnSortAttachListener(oSettings,oSettings.aoColumns[i].nTh,i);}else{$(oSettings.aoColumns[i].nTh).addClass(oSettings.oClasses.sSortableNone);}}$(&quot;thead:eq(0) th&quot;,oSettings.nTable).mousedown(function(e){if(e.shiftKey){this.onselectstart=function(){return false;};return false;}});}var nTfoot=oSettings.nTable.getElementsByTagName(&quot;tfoot&quot;);if(nTfoot.length!==0){iCorrector=0;var nTfs=nTfoot[0].getElementsByTagName(&quot;th&quot;);for(i=0,iLen=nTfs.length;i&lt;iLen;i++){oSettings.aoColumns[i].nTf=nTfs[i-iCorrector];if(!oSettings.aoColumns[i].bVisible){nTfs[i-iCorrector].parentNode.removeChild(nTfs[i-iCorrector]);iCorrector++;}}}}function _fnDraw(oSettings){var i,iLen;var anRows=[];var iRowCount=0;var bRowError=false;var iStrips=oSettings.asStripClasses.length;var iOpenRows=oSettings.aoOpenRows.length;if(oSettings.oFeatures.bServerSide&amp;&amp;!_fnAjaxUpdate(oSettings)){return;}if(typeof oSettings.iInitDisplayStart!=&quot;undefined&quot;&amp;&amp;oSettings.iInitDisplayStart!=-1){oSettings._iDisplayStart=(oSettings.iInitDisplayStart&gt;=oSettings.fnRecordsDisplay())?0:oSettings.iInitDisplayStart;oSettings.iInitDisplayStart=-1;_fnCalculateEnd(oSettings);}if(oSettings.aiDisplay.length!==0){var iStart=oSettings._iDisplayStart;var iEnd=oSettings._iDisplayEnd;if(oSettings.oFeatures.bServerSide){iStart=0;iEnd=oSettings.aoData.length;}for(var j=iStart;j&lt;iEnd;j++){var aoData=oSettings.aoData[oSettings.aiDisplay[j]];var nRow=aoData.nTr;if(iStrips!==0){var sStrip=oSettings.asStripClasses[iRowCount%iStrips];if(aoData._sRowStripe!=sStrip){$(nRow).removeClass(aoData._sRowStripe).addClass(sStrip);aoData._sRowStripe=sStrip;}}if(typeof oSettings.fnRowCallback==&quot;function&quot;){nRow=oSettings.fnRowCallback(nRow,oSettings.aoData[oSettings.aiDisplay[j]]._aData,iRowCount,j);if(!nRow&amp;&amp;!bRowError){alert(&quot;DataTables warning: A node was not returned by fnRowCallback&quot;);bRowError=true;}}anRows.push(nRow);iRowCount++;if(iOpenRows!==0){for(var k=0;k&lt;iOpenRows;k++){if(nRow==oSettings.aoOpenRows[k].nParent){anRows.push(oSettings.aoOpenRows[k].nTr);}}}}}else{anRows[0]=document.createElement(&quot;tr&quot;);if(typeof oSettings.asStripClasses[0]!=&quot;undefined&quot;){anRows[0].className=oSettings.asStripClasses[0];}var nTd=document.createElement(&quot;td&quot;);nTd.setAttribute(&quot;valign&quot;,&quot;top&quot;);nTd.colSpan=oSettings.aoColumns.length;nTd.className=oSettings.oClasses.sRowEmpty;nTd.innerHTML=oSettings.oLanguage.sZeroRecords;anRows[iRowCount].appendChild(nTd);}if(typeof oSettings.fnHeaderCallback==&quot;function&quot;){oSettings.fnHeaderCallback($(&quot;thead:eq(0)&gt;tr&quot;,oSettings.nTable)[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay);}if(typeof oSettings.fnFooterCallback==&quot;function&quot;){oSettings.fnFooterCallback($(&quot;tfoot:eq(0)&gt;tr&quot;,oSettings.nTable)[0],_fnGetDataMaster(oSettings),oSettings._iDisplayStart,oSettings.fnDisplayEnd(),oSettings.aiDisplay);}var nBody=oSettings.nTable.getElementsByTagName(&quot;tbody&quot;);if(nBody[0]){var nTrs=nBody[0].childNodes;for(i=nTrs.length-1;i&gt;=0;i--){nTrs[i].parentNode.removeChild(nTrs[i]);}for(i=0,iLen=anRows.length;i&lt;iLen;i++){nBody[0].appendChild(anRows[i]);}}for(i=0,iLen=oSettings.aoDrawCallback.length;i&lt;iLen;i++){oSettings.aoDrawCallback[i].fn(oSettings);}oSettings.bSorted=false;oSettings.bFiltered=false;if(typeof oSettings._bInitComplete==&quot;undefined&quot;){oSettings._bInitComplete=true;if(oSettings.oFeatures.bAutoWidth&amp;&amp;oSettings.nTable.offsetWidth!==0){oSettings.nTable.style.width=oSettings.nTable.offsetWidth+&quot;px&quot;;}}}function _fnReDraw(oSettings){if(oSettings.oFeatures.bSort){_fnSort(oSettings,oSettings.oPreviousSearch);}else{if(oSettings.oFeatures.bFilter){_fnFilterComplete(oSettings,oSettings.oPreviousSearch);}else{_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}}function _fnAjaxUpdate(oSettings){if(oSettings.bAjaxDataGet){_fnProcessingDisplay(oSettings,true);var iColumns=oSettings.aoColumns.length;var aoData=[];var i;oSettings.iServerDraw++;aoData.push({name:&quot;sEcho&quot;,value:oSettings.iServerDraw});aoData.push({name:&quot;iColumns&quot;,value:iColumns});aoData.push({name:&quot;sColumns&quot;,value:_fnColumnOrdering(oSettings)});aoData.push({name:&quot;iDisplayStart&quot;,value:oSettings._iDisplayStart});aoData.push({name:&quot;iDisplayLength&quot;,value:oSettings.oFeatures.bPaginate!==false?oSettings._iDisplayLength:-1});if(oSettings.oFeatures.bFilter!==false){aoData.push({name:&quot;sSearch&quot;,value:oSettings.oPreviousSearch.sSearch});aoData.push({name:&quot;bEscapeRegex&quot;,value:oSettings.oPreviousSearch.bEscapeRegex});for(i=0;i&lt;iColumns;i++){aoData.push({name:&quot;sSearch_&quot;+i,value:oSettings.aoPreSearchCols[i].sSearch});aoData.push({name:&quot;bEscapeRegex_&quot;+i,value:oSettings.aoPreSearchCols[i].bEscapeRegex});aoData.push({name:&quot;bSearchable_&quot;+i,value:oSettings.aoColumns[i].bSearchable});}}if(oSettings.oFeatures.bSort!==false){var iFixed=oSettings.aaSortingFixed!==null?oSettings.aaSortingFixed.length:0;var iUser=oSettings.aaSorting.length;aoData.push({name:&quot;iSortingCols&quot;,value:iFixed+iUser});for(i=0;i&lt;iFixed;i++){aoData.push({name:&quot;iSortCol_&quot;+i,value:oSettings.aaSortingFixed[i][0]});aoData.push({name:&quot;sSortDir_&quot;+i,value:oSettings.aaSortingFixed[i][1]});}for(i=0;i&lt;iUser;i++){aoData.push({name:&quot;iSortCol_&quot;+(i+iFixed),value:oSettings.aaSorting[i][0]});aoData.push({name:&quot;sSortDir_&quot;+(i+iFixed),value:oSettings.aaSorting[i][1]});}for(i=0;i&lt;iColumns;i++){aoData.push({name:&quot;bSortable_&quot;+i,value:oSettings.aoColumns[i].bSortable});}}oSettings.fnServerData(oSettings.sAjaxSource,aoData,function(json){_fnAjaxUpdateDraw(oSettings,json);});return false;}else{return true;}}function _fnAjaxUpdateDraw(oSettings,json){if(typeof json.sEcho!=&quot;undefined&quot;){if(json.sEcho*1&lt;oSettings.iServerDraw){return;}else{oSettings.iServerDraw=json.sEcho*1;}}_fnClearTable(oSettings);oSettings._iRecordsTotal=json.iTotalRecords;oSettings._iRecordsDisplay=json.iTotalDisplayRecords;var sOrdering=_fnColumnOrdering(oSettings);var bReOrder=(typeof json.sColumns!=&quot;undefined&quot;&amp;&amp;sOrdering!==&quot;&quot;&amp;&amp;json.sColumns!=sOrdering);if(bReOrder){var aiIndex=_fnReOrderIndex(oSettings,json.sColumns);}for(var i=0,iLen=json.aaData.length;i&lt;iLen;i++){if(bReOrder){var aData=[];for(var j=0,jLen=oSettings.aoColumns.length;j&lt;jLen;j++){aData.push(json.aaData[i][aiIndex[j]]);}_fnAddData(oSettings,aData);}else{_fnAddData(oSettings,json.aaData[i]);}}oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings.bAjaxDataGet=false;_fnDraw(oSettings);oSettings.bAjaxDataGet=true;_fnProcessingDisplay(oSettings,false);}function _fnAddOptionsHtml(oSettings){var nHolding=document.createElement(&quot;div&quot;);oSettings.nTable.parentNode.insertBefore(nHolding,oSettings.nTable);var nWrapper=document.createElement(&quot;div&quot;);nWrapper.className=oSettings.oClasses.sWrapper;if(oSettings.sTableId!==&quot;&quot;){nWrapper.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_wrapper&quot;);}var nInsertNode=nWrapper;var sDom=oSettings.sDom.replace(&quot;H&quot;,&quot;fg-toolbar ui-widget-header ui-corner-tl ui-corner-tr ui-helper-clearfix&quot;);sDom=sDom.replace(&quot;F&quot;,&quot;fg-toolbar ui-widget-header ui-corner-bl ui-corner-br ui-helper-clearfix&quot;);var aDom=sDom.split(&quot;&quot;);var nTmp,iPushFeature,cOption,nNewNode,cNext,sClass,j;for(var i=0;i&lt;aDom.length;i++){iPushFeature=0;cOption=aDom[i];if(cOption==&quot;&lt;&quot;){nNewNode=document.createElement(&quot;div&quot;);cNext=aDom[i+1];if(cNext==&quot;&#39;&quot;||cNext==&#39;&quot;&#39;){sClass=&quot;&quot;;j=2;while(aDom[i+j]!=cNext){sClass+=aDom[i+j];j++;}nNewNode.className=sClass;i+=j;}nInsertNode.appendChild(nNewNode);nInsertNode=nNewNode;}else{if(cOption==&quot;&gt;&quot;){nInsertNode=nInsertNode.parentNode;}else{if(cOption==&quot;l&quot;&amp;&amp;oSettings.oFeatures.bPaginate&amp;&amp;oSettings.oFeatures.bLengthChange){nTmp=_fnFeatureHtmlLength(oSettings);iPushFeature=1;}else{if(cOption==&quot;f&quot;&amp;&amp;oSettings.oFeatures.bFilter){nTmp=_fnFeatureHtmlFilter(oSettings);iPushFeature=1;}else{if(cOption==&quot;r&quot;&amp;&amp;oSettings.oFeatures.bProcessing){nTmp=_fnFeatureHtmlProcessing(oSettings);iPushFeature=1;}else{if(cOption==&quot;t&quot;){nTmp=oSettings.nTable;iPushFeature=1;}else{if(cOption==&quot;i&quot;&amp;&amp;oSettings.oFeatures.bInfo){nTmp=_fnFeatureHtmlInfo(oSettings);iPushFeature=1;}else{if(cOption==&quot;p&quot;&amp;&amp;oSettings.oFeatures.bPaginate){nTmp=_fnFeatureHtmlPaginate(oSettings);iPushFeature=1;}else{if(_oExt.aoFeatures.length!==0){var aoFeatures=_oExt.aoFeatures;for(var k=0,kLen=aoFeatures.length;k&lt;kLen;k++){if(cOption==aoFeatures[k].cFeature){nTmp=aoFeatures[k].fnInit(oSettings);if(nTmp){iPushFeature=1;}break;}}}}}}}}}}}if(iPushFeature==1){if(typeof oSettings.aanFeatures[cOption]!=&quot;object&quot;){oSettings.aanFeatures[cOption]=[];}oSettings.aanFeatures[cOption].push(nTmp);nInsertNode.appendChild(nTmp);}}nHolding.parentNode.replaceChild(nWrapper,nHolding);}function _fnFeatureHtmlFilter(oSettings){var nFilter=document.createElement(&quot;div&quot;);if(oSettings.sTableId!==&quot;&quot;&amp;&amp;typeof oSettings.aanFeatures.f==&quot;undefined&quot;){nFilter.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_filter&quot;);}nFilter.className=oSettings.oClasses.sFilter;var sSpace=oSettings.oLanguage.sSearch===&quot;&quot;?&quot;&quot;:&quot; &quot;;nFilter.innerHTML=oSettings.oLanguage.sSearch+sSpace+&#39;&lt;input type=&quot;text&quot; /&gt;&#39;;var jqFilter=$(&quot;input&quot;,nFilter);jqFilter.val(oSettings.oPreviousSearch.sSearch.replace(&#39;&quot;&#39;,&quot;&amp;quot;&quot;));jqFilter.keyup(function(e){var n=oSettings.aanFeatures.f;for(var i=0,iLen=n.length;i&lt;iLen;i++){if(n[i]!=this.parentNode){$(&quot;input&quot;,n[i]).val(this.value);}}_fnFilterComplete(oSettings,{sSearch:this.value,bEscapeRegex:oSettings.oPreviousSearch.bEscapeRegex});});jqFilter.keypress(function(e){if(e.keyCode==13){return false;}});return nFilter;}function _fnFilterComplete(oSettings,oInput,iForce){_fnFilter(oSettings,oInput.sSearch,iForce,oInput.bEscapeRegex);for(var i=0;i&lt;oSettings.aoPreSearchCols.length;i++){_fnFilterColumn(oSettings,oSettings.aoPreSearchCols[i].sSearch,i,oSettings.aoPreSearchCols[i].bEscapeRegex);}if(_oExt.afnFiltering.length!==0){_fnFilterCustom(oSettings);}oSettings.bFiltered=true;oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);_fnBuildSearchArray(oSettings,0);}function _fnFilterCustom(oSettings){var afnFilters=_oExt.afnFiltering;for(var i=0,iLen=afnFilters.length;i&lt;iLen;i++){var iCorrector=0;for(var j=0,jLen=oSettings.aiDisplay.length;j&lt;jLen;j++){var iDisIndex=oSettings.aiDisplay[j-iCorrector];if(!afnFilters[i](oSettings,oSettings.aoData[iDisIndex]._aData,iDisIndex)){oSettings.aiDisplay.splice(j-iCorrector,1);iCorrector++;}}}}function _fnFilterColumn(oSettings,sInput,iColumn,bEscapeRegex){if(sInput===&quot;&quot;){return;}var iIndexCorrector=0;var sRegexMatch=bEscapeRegex?_fnEscapeRegex(sInput):sInput;var rpSearch=new RegExp(sRegexMatch,&quot;i&quot;);for(var i=oSettings.aiDisplay.length-1;i&gt;=0;i--){var sData=_fnDataToSearch(oSettings.aoData[oSettings.aiDisplay[i]]._aData[iColumn],oSettings.aoColumns[iColumn].sType);if(!rpSearch.test(sData)){oSettings.aiDisplay.splice(i,1);iIndexCorrector++;}}}function _fnFilter(oSettings,sInput,iForce,bEscapeRegex){var i;if(typeof iForce==&quot;undefined&quot;||iForce===null){iForce=0;}if(_oExt.afnFiltering.length!==0){iForce=1;}var asSearch=bEscapeRegex?_fnEscapeRegex(sInput).split(&quot; &quot;):sInput.split(&quot; &quot;);var sRegExpString=&quot;^(?=.*?&quot;+asSearch.join(&quot;)(?=.*?&quot;)+&quot;).*$&quot;;var rpSearch=new RegExp(sRegExpString,&quot;i&quot;);if(sInput.length&lt;=0){oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();}else{if(oSettings.aiDisplay.length==oSettings.aiDisplayMaster.length||oSettings.oPreviousSearch.sSearch.length&gt;sInput.length||iForce==1||sInput.indexOf(oSettings.oPreviousSearch.sSearch)!==0){oSettings.aiDisplay.splice(0,oSettings.aiDisplay.length);_fnBuildSearchArray(oSettings,1);for(i=0;i&lt;oSettings.aiDisplayMaster.length;i++){if(rpSearch.test(oSettings.asDataSearch[i])){oSettings.aiDisplay.push(oSettings.aiDisplayMaster[i]);}}}else{var iIndexCorrector=0;for(i=0;i&lt;oSettings.asDataSearch.length;i++){if(!rpSearch.test(oSettings.asDataSearch[i])){oSettings.aiDisplay.splice(i-iIndexCorrector,1);iIndexCorrector++;}}}}oSettings.oPreviousSearch.sSearch=sInput;oSettings.oPreviousSearch.bEscapeRegex=bEscapeRegex;}function _fnBuildSearchArray(oSettings,iMaster){oSettings.asDataSearch.splice(0,oSettings.asDataSearch.length);var aArray=(typeof iMaster!=&quot;undefined&quot;&amp;&amp;iMaster==1)?oSettings.aiDisplayMaster:oSettings.aiDisplay;for(var i=0,iLen=aArray.length;i&lt;iLen;i++){oSettings.asDataSearch[i]=&quot;&quot;;for(var j=0,jLen=oSettings.aoColumns.length;j&lt;jLen;j++){if(oSettings.aoColumns[j].bSearchable){var sData=oSettings.aoData[aArray[i]]._aData[j];oSettings.asDataSearch[i]+=_fnDataToSearch(sData,oSettings.aoColumns[j].sType)+&quot; &quot;;}}}}function _fnDataToSearch(sData,sType){if(typeof _oExt.ofnSearch[sType]==&quot;function&quot;){return _oExt.ofnSearch[sType](sData);}else{if(sType==&quot;html&quot;){return sData.replace(/\n/g,&quot; &quot;).replace(/&lt;.*?&gt;/g,&quot;&quot;);}else{if(typeof sData==&quot;string&quot;){return sData.replace(/\n/g,&quot; &quot;);}}}return sData;}function _fnSort(oSettings,bApplyClasses){var aaSort=[];var oSort=_oExt.oSort;var aoData=oSettings.aoData;var iDataSort;var iDataType;var i,j,jLen;if(!oSettings.oFeatures.bServerSide&amp;&amp;(oSettings.aaSorting.length!==0||oSettings.aaSortingFixed!==null)){if(oSettings.aaSortingFixed!==null){aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}else{aaSort=oSettings.aaSorting.slice();}for(i=0;i&lt;aaSort.length;i++){var iColumn=aaSort[i][0];var sDataType=oSettings.aoColumns[iColumn].sSortDataType;if(typeof _oExt.afnSortData[sDataType]!=&quot;undefined&quot;){var iCorrector=0;var aData=_oExt.afnSortData[sDataType](oSettings,iColumn);for(j=0,jLen=aoData.length;j&lt;jLen;j++){if(aoData[j]!==null){aoData[j]._aData[iColumn]=aData[iCorrector];iCorrector++;}}}}if(!window.runtime){var fnLocalSorting;var sDynamicSort=&quot;fnLocalSorting = function(a,b){var iTest;&quot;;for(i=0;i&lt;aaSort.length-1;i++){iDataSort=oSettings.aoColumns[aaSort[i][0]].iDataSort;iDataType=oSettings.aoColumns[iDataSort].sType;sDynamicSort+=&quot;iTest = oSort[&#39;&quot;+iDataType+&quot;-&quot;+aaSort[i][1]+&quot;&#39;]( aoData[a]._aData[&quot;+iDataSort+&quot;], aoData[b]._aData[&quot;+iDataSort+&quot;] ); if ( iTest === 0 )&quot;;}iDataSort=oSettings.aoColumns[aaSort[aaSort.length-1][0]].iDataSort;iDataType=oSettings.aoColumns[iDataSort].sType;sDynamicSort+=&quot;iTest = oSort[&#39;&quot;+iDataType+&quot;-&quot;+aaSort[aaSort.length-1][1]+&quot;&#39;]( aoData[a]._aData[&quot;+iDataSort+&quot;], aoData[b]._aData[&quot;+iDataSort+&quot;] );if (iTest===0) return oSort[&#39;numeric-&quot;+aaSort[aaSort.length-1][1]+&quot;&#39;](a, b); return iTest;}&quot;;eval(sDynamicSort);oSettings.aiDisplayMaster.sort(fnLocalSorting);}else{var aAirSort=[];var iLen=aaSort.length;for(i=0;i&lt;iLen;i++){iDataSort=oSettings.aoColumns[aaSort[i][0]].iDataSort;aAirSort.push([iDataSort,oSettings.aoColumns[iDataSort].sType+&quot;-&quot;+aaSort[i][1]]);}oSettings.aiDisplayMaster.sort(function(a,b){var iTest;for(var i=0;i&lt;iLen;i++){iTest=oSort[aAirSort[i][1]](aoData[a]._aData[aAirSort[i][0]],aoData[b]._aData[aAirSort[i][0]]);if(iTest!==0){return iTest;}}return 0;});}}if(typeof bApplyClasses==&quot;undefined&quot;||bApplyClasses){_fnSortingClasses(oSettings);}oSettings.bSorted=true;if(oSettings.oFeatures.bFilter){_fnFilterComplete(oSettings,oSettings.oPreviousSearch,1);}else{oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();oSettings._iDisplayStart=0;_fnCalculateEnd(oSettings);_fnDraw(oSettings);}}function _fnSortAttachListener(oSettings,nNode,iDataIndex,fnCallback){$(nNode).click(function(e){if(oSettings.aoColumns[iDataIndex].bSortable===false){return;}var fnInnerSorting=function(){var iColumn,iNextSort;if(e.shiftKey){var bFound=false;for(var i=0;i&lt;oSettings.aaSorting.length;i++){if(oSettings.aaSorting[i][0]==iDataIndex){bFound=true;iColumn=oSettings.aaSorting[i][0];iNextSort=oSettings.aaSorting[i][2]+1;if(typeof oSettings.aoColumns[iColumn].asSorting[iNextSort]==&quot;undefined&quot;){oSettings.aaSorting.splice(i,1);}else{oSettings.aaSorting[i][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[i][2]=iNextSort;}break;}}if(bFound===false){oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}else{if(oSettings.aaSorting.length==1&amp;&amp;oSettings.aaSorting[0][0]==iDataIndex){iColumn=oSettings.aaSorting[0][0];iNextSort=oSettings.aaSorting[0][2]+1;if(typeof oSettings.aoColumns[iColumn].asSorting[iNextSort]==&quot;undefined&quot;){iNextSort=0;}oSettings.aaSorting[0][1]=oSettings.aoColumns[iColumn].asSorting[iNextSort];oSettings.aaSorting[0][2]=iNextSort;}else{oSettings.aaSorting.splice(0,oSettings.aaSorting.length);oSettings.aaSorting.push([iDataIndex,oSettings.aoColumns[iDataIndex].asSorting[0],0]);}}_fnSort(oSettings);};if(!oSettings.oFeatures.bProcessing){fnInnerSorting();}else{_fnProcessingDisplay(oSettings,true);setTimeout(function(){fnInnerSorting();if(!oSettings.oFeatures.bServerSide){_fnProcessingDisplay(oSettings,false);}},0);}if(typeof fnCallback==&quot;function&quot;){fnCallback(oSettings);}});}function _fnSortingClasses(oSettings){var i,iLen,j,jLen,iFound;var aaSort,sClass;var iColumns=oSettings.aoColumns.length;var oClasses=oSettings.oClasses;for(i=0;i&lt;iColumns;i++){if(oSettings.aoColumns[i].bSortable){$(oSettings.aoColumns[i].nTh).removeClass(oClasses.sSortAsc+&quot; &quot;+oClasses.sSortDesc+&quot; &quot;+oSettings.aoColumns[i].sSortingClass);}}if(oSettings.aaSortingFixed!==null){aaSort=oSettings.aaSortingFixed.concat(oSettings.aaSorting);}else{aaSort=oSettings.aaSorting.slice();}for(i=0;i&lt;oSettings.aoColumns.length;i++){if(oSettings.aoColumns[i].bSortable){sClass=oSettings.aoColumns[i].sSortingClass;iFound=-1;for(j=0;j&lt;aaSort.length;j++){if(aaSort[j][0]==i){sClass=(aaSort[j][1]==&quot;asc&quot;)?oClasses.sSortAsc:oClasses.sSortDesc;iFound=j;break;}}$(oSettings.aoColumns[i].nTh).addClass(sClass);if(oSettings.bJUI){var jqSpan=$(&quot;span&quot;,oSettings.aoColumns[i].nTh);jqSpan.removeClass(oClasses.sSortJUIAsc+&quot; &quot;+oClasses.sSortJUIDesc+&quot; &quot;+oClasses.sSortJUI+&quot; &quot;+oClasses.sSortJUIAscAllowed+&quot; &quot;+oClasses.sSortJUIDescAllowed);var sSpanClass;if(iFound==-1){sSpanClass=oSettings.aoColumns[i].sSortingClassJUI;}else{if(aaSort[iFound][1]==&quot;asc&quot;){sSpanClass=oClasses.sSortJUIAsc;}else{sSpanClass=oClasses.sSortJUIDesc;}}jqSpan.addClass(sSpanClass);}}else{$(oSettings.aoColumns[i].nTh).addClass(oSettings.aoColumns[i].sSortingClass);}}sClass=oClasses.sSortColumn;if(oSettings.oFeatures.bSort&amp;&amp;oSettings.oFeatures.bSortClasses){var nTds=_fnGetTdNodes(oSettings);if(nTds.length&gt;=iColumns){for(i=0;i&lt;iColumns;i++){if(nTds[i].className.indexOf(sClass+&quot;1&quot;)!=-1){for(j=0,jLen=(nTds.length/iColumns);j&lt;jLen;j++){nTds[(iColumns*j)+i].className=nTds[(iColumns*j)+i].className.replace(&quot; &quot;+sClass+&quot;1&quot;,&quot;&quot;);}}else{if(nTds[i].className.indexOf(sClass+&quot;2&quot;)!=-1){for(j=0,jLen=(nTds.length/iColumns);j&lt;jLen;j++){nTds[(iColumns*j)+i].className=nTds[(iColumns*j)+i].className.replace(&quot; &quot;+sClass+&quot;2&quot;,&quot;&quot;);}}else{if(nTds[i].className.indexOf(sClass+&quot;3&quot;)!=-1){for(j=0,jLen=(nTds.length/iColumns);j&lt;jLen;j++){nTds[(iColumns*j)+i].className=nTds[(iColumns*j)+i].className.replace(&quot; &quot;+sClass+&quot;3&quot;,&quot;&quot;);}}}}}}var iClass=1,iTargetCol;for(i=0;i&lt;aaSort.length;i++){iTargetCol=parseInt(aaSort[i][0],10);for(j=0,jLen=(nTds.length/iColumns);j&lt;jLen;j++){nTds[(iColumns*j)+iTargetCol].className+=&quot; &quot;+sClass+iClass;}if(iClass&lt;3){iClass++;}}}}function _fnFeatureHtmlPaginate(oSettings){var nPaginate=document.createElement(&quot;div&quot;);nPaginate.className=oSettings.oClasses.sPaging+oSettings.sPaginationType;_oExt.oPagination[oSettings.sPaginationType].fnInit(oSettings,nPaginate,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});if(typeof oSettings.aanFeatures.p==&quot;undefined&quot;){oSettings.aoDrawCallback.push({fn:function(oSettings){_oExt.oPagination[oSettings.sPaginationType].fnUpdate(oSettings,function(oSettings){_fnCalculateEnd(oSettings);_fnDraw(oSettings);});},sName:&quot;pagination&quot;});}return nPaginate;}function _fnPageChange(oSettings,sAction){var iOldStart=oSettings._iDisplayStart;if(sAction==&quot;first&quot;){oSettings._iDisplayStart=0;}else{if(sAction==&quot;previous&quot;){oSettings._iDisplayStart=oSettings._iDisplayLength&gt;=0?oSettings._iDisplayStart-oSettings._iDisplayLength:0;if(oSettings._iDisplayStart&lt;0){oSettings._iDisplayStart=0;}}else{if(sAction==&quot;next&quot;){if(oSettings._iDisplayLength&gt;=0){if(oSettings._iDisplayStart+oSettings._iDisplayLength&lt;oSettings.fnRecordsDisplay()){oSettings._iDisplayStart+=oSettings._iDisplayLength;}}else{oSettings._iDisplayStart=0;}}else{if(sAction==&quot;last&quot;){if(oSettings._iDisplayLength&gt;=0){var iPages=parseInt((oSettings.fnRecordsDisplay()-1)/oSettings._iDisplayLength,10)+1;oSettings._iDisplayStart=(iPages-1)*oSettings._iDisplayLength;}else{oSettings._iDisplayStart=0;}}else{alert(&quot;DataTables warning: unknown paging action: &quot;+sAction);}}}}return iOldStart!=oSettings._iDisplayStart;}function _fnFeatureHtmlInfo(oSettings){var nInfo=document.createElement(&quot;div&quot;);nInfo.className=oSettings.oClasses.sInfo;if(typeof oSettings.aanFeatures.i==&quot;undefined&quot;){oSettings.aoDrawCallback.push({fn:_fnUpdateInfo,sName:&quot;information&quot;});if(oSettings.sTableId!==&quot;&quot;){nInfo.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_info&quot;);}}return nInfo;}function _fnUpdateInfo(oSettings){if(!oSettings.oFeatures.bInfo||oSettings.aanFeatures.i.length===0){return;}var nFirst=oSettings.aanFeatures.i[0];if(oSettings.fnRecordsDisplay()===0&amp;&amp;oSettings.fnRecordsDisplay()==oSettings.fnRecordsTotal()){nFirst.innerHTML=oSettings.oLanguage.sInfoEmpty+oSettings.oLanguage.sInfoPostFix;}else{if(oSettings.fnRecordsDisplay()===0){nFirst.innerHTML=oSettings.oLanguage.sInfoEmpty+&quot; &quot;+oSettings.oLanguage.sInfoFiltered.replace(&quot;_MAX_&quot;,oSettings.fnRecordsTotal())+oSettings.oLanguage.sInfoPostFix;}else{if(oSettings.fnRecordsDisplay()==oSettings.fnRecordsTotal()){nFirst.innerHTML=oSettings.oLanguage.sInfo.replace(&quot;_START_&quot;,oSettings._iDisplayStart+1).replace(&quot;_END_&quot;,oSettings.fnDisplayEnd()).replace(&quot;_TOTAL_&quot;,oSettings.fnRecordsDisplay())+oSettings.oLanguage.sInfoPostFix;}else{nFirst.innerHTML=oSettings.oLanguage.sInfo.replace(&quot;_START_&quot;,oSettings._iDisplayStart+1).replace(&quot;_END_&quot;,oSettings.fnDisplayEnd()).replace(&quot;_TOTAL_&quot;,oSettings.fnRecordsDisplay())+&quot; &quot;+oSettings.oLanguage.sInfoFiltered.replace(&quot;_MAX_&quot;,oSettings.fnRecordsTotal())+oSettings.oLanguage.sInfoPostFix;}}}var n=oSettings.aanFeatures.i;if(n.length&gt;1){var sInfo=nFirst.innerHTML;for(var i=1,iLen=n.length;i&lt;iLen;i++){n[i].innerHTML=sInfo;}}}function _fnFeatureHtmlLength(oSettings){var sName=(oSettings.sTableId===&quot;&quot;)?&quot;&quot;:&#39;name=&quot;&#39;+oSettings.sTableId+&#39;_length&quot;&#39;;var sStdMenu=&#39;&lt;select size=&quot;1&quot; &#39;+sName+&#39;&gt;&lt;option value=&quot;10&quot;&gt;10&lt;/option&gt;&lt;option value=&quot;25&quot;&gt;25&lt;/option&gt;&lt;option value=&quot;50&quot;&gt;50&lt;/option&gt;&lt;option value=&quot;100&quot;&gt;100&lt;/option&gt;&lt;/select&gt;&#39;;var nLength=document.createElement(&quot;div&quot;);if(oSettings.sTableId!==&quot;&quot;&amp;&amp;typeof oSettings.aanFeatures.l==&quot;undefined&quot;){nLength.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_length&quot;);}nLength.className=oSettings.oClasses.sLength;nLength.innerHTML=oSettings.oLanguage.sLengthMenu.replace(&quot;_MENU_&quot;,sStdMenu);$(&#39;select option[value=&quot;&#39;+oSettings._iDisplayLength+&#39;&quot;]&#39;,nLength).attr(&quot;selected&quot;,true);$(&quot;select&quot;,nLength).change(function(e){var iVal=$(this).val();var n=oSettings.aanFeatures.l;for(var i=0,iLen=n.length;i&lt;iLen;i++){if(n[i]!=this.parentNode){$(&quot;select&quot;,n[i]).val(iVal);}}oSettings._iDisplayLength=parseInt(iVal,10);_fnCalculateEnd(oSettings);if(oSettings._iDisplayEnd==oSettings.aiDisplay.length){oSettings._iDisplayStart=oSettings._iDisplayEnd-oSettings._iDisplayLength;if(oSettings._iDisplayStart&lt;0){oSettings._iDisplayStart=0;}}if(oSettings._iDisplayLength==-1){oSettings._iDisplayStart=0;}_fnDraw(oSettings);});return nLength;}function _fnFeatureHtmlProcessing(oSettings){var nProcessing=document.createElement(&quot;div&quot;);if(oSettings.sTableId!==&quot;&quot;&amp;&amp;typeof oSettings.aanFeatures.r==&quot;undefined&quot;){nProcessing.setAttribute(&quot;id&quot;,oSettings.sTableId+&quot;_processing&quot;);}nProcessing.innerHTML=oSettings.oLanguage.sProcessing;nProcessing.className=oSettings.oClasses.sProcessing;oSettings.nTable.parentNode.insertBefore(nProcessing,oSettings.nTable);return nProcessing;}function _fnProcessingDisplay(oSettings,bShow){if(oSettings.oFeatures.bProcessing){var an=oSettings.aanFeatures.r;for(var i=0,iLen=an.length;i&lt;iLen;i++){an[i].style.visibility=bShow?&quot;visible&quot;:&quot;hidden&quot;;}}}function _fnVisibleToColumnIndex(oSettings,iMatch){var iColumn=-1;for(var i=0;i&lt;oSettings.aoColumns.length;i++){if(oSettings.aoColumns[i].bVisible===true){iColumn++;}if(iColumn==iMatch){return i;}}return null;}function _fnColumnIndexToVisible(oSettings,iMatch){var iVisible=-1;for(var i=0;i&lt;oSettings.aoColumns.length;i++){if(oSettings.aoColumns[i].bVisible===true){iVisible++;}if(i==iMatch){return oSettings.aoColumns[i].bVisible===true?iVisible:null;}}return null;}function _fnNodeToDataIndex(s,n){for(var i=0,iLen=s.aoData.length;i&lt;iLen;i++){if(s.aoData[i]!==null&amp;&amp;s.aoData[i].nTr==n){return i;}}return null;}function _fnVisbleColumns(oS){var iVis=0;for(var i=0;i&lt;oS.aoColumns.length;i++){if(oS.aoColumns[i].bVisible===true){iVis++;}}return iVis;}function _fnCalculateEnd(oSettings){if(oSettings.oFeatures.bPaginate===false){oSettings._iDisplayEnd=oSettings.aiDisplay.length;}else{if(oSettings._iDisplayStart+oSettings._iDisplayLength&gt;oSettings.aiDisplay.length||oSettings._iDisplayLength==-1){oSettings._iDisplayEnd=oSettings.aiDisplay.length;}else{oSettings._iDisplayEnd=oSettings._iDisplayStart+oSettings._iDisplayLength;}}}function _fnConvertToWidth(sWidth,nParent){if(!sWidth||sWidth===null||sWidth===&quot;&quot;){return 0;}if(typeof nParent==&quot;undefined&quot;){nParent=document.getElementsByTagName(&quot;body&quot;)[0];}var iWidth;var nTmp=document.createElement(&quot;div&quot;);nTmp.style.width=sWidth;nParent.appendChild(nTmp);iWidth=nTmp.offsetWidth;nParent.removeChild(nTmp);return(iWidth);}function _fnCalculateColumnWidths(oSettings){var iTableWidth=oSettings.nTable.offsetWidth;var iTotalUserIpSize=0;var iTmpWidth;var iVisibleColumns=0;var iColums=oSettings.aoColumns.length;var i;var oHeaders=$(&quot;thead:eq(0)&gt;th&quot;,oSettings.nTable);for(i=0;i&lt;iColums;i++){if(oSettings.aoColumns[i].bVisible){iVisibleColumns++;if(oSettings.aoColumns[i].sWidth!==null){iTmpWidth=_fnConvertToWidth(oSettings.aoColumns[i].sWidth,oSettings.nTable.parentNode);iTotalUserIpSize+=iTmpWidth;oSettings.aoColumns[i].sWidth=iTmpWidth+&quot;px&quot;;}}}if(iColums==oHeaders.length&amp;&amp;iTotalUserIpSize===0&amp;&amp;iVisibleColumns==iColums){for(i=0;i&lt;oSettings.aoColumns.length;i++){oSettings.aoColumns[i].sWidth=oHeaders[i].offsetWidth+&quot;px&quot;;}}else{var nCalcTmp=oSettings.nTable.cloneNode(false);nCalcTmp.setAttribute(&quot;id&quot;,&quot;&quot;);var sTableTmp=&#39;&lt;table class=&quot;&#39;+nCalcTmp.className+&#39;&quot;&gt;&#39;;var sCalcHead=&quot;&lt;tr&gt;&quot;;var sCalcHtml=&quot;&lt;tr&gt;&quot;;for(i=0;i&lt;iColums;i++){if(oSettings.aoColumns[i].bVisible){sCalcHead+=&quot;&lt;th&gt;&quot;+oSettings.aoColumns[i].sTitle+&quot;&lt;/th&gt;&quot;;if(oSettings.aoColumns[i].sWidth!==null){var sWidth=&quot;&quot;;if(oSettings.aoColumns[i].sWidth!==null){sWidth=&#39; style=&quot;width:&#39;+oSettings.aoColumns[i].sWidth+&#39;;&quot;&#39;;}sCalcHtml+=&quot;&lt;td&quot;+sWidth+&#39; tag_index=&quot;&#39;+i+&#39;&quot;&gt;&#39;+fnGetMaxLenString(oSettings,i)+&quot;&lt;/td&gt;&quot;;}else{sCalcHtml+=&#39;&lt;td tag_index=&quot;&#39;+i+&#39;&quot;&gt;&#39;+fnGetMaxLenString(oSettings,i)+&quot;&lt;/td&gt;&quot;;}}}sCalcHead+=&quot;&lt;/tr&gt;&quot;;sCalcHtml+=&quot;&lt;/tr&gt;&quot;;nCalcTmp=$(sTableTmp+sCalcHead+sCalcHtml+&quot;&lt;/table&gt;&quot;)[0];nCalcTmp.style.width=iTableWidth+&quot;px&quot;;nCalcTmp.style.visibility=&quot;hidden&quot;;nCalcTmp.style.position=&quot;absolute&quot;;oSettings.nTable.parentNode.appendChild(nCalcTmp);var oNodes=$(&quot;tr:eq(1)&gt;td&quot;,nCalcTmp);var iIndex;for(i=0;i&lt;oNodes.length;i++){iIndex=oNodes[i].getAttribute(&quot;tag_index&quot;);var iContentWidth=$(&quot;td&quot;,nCalcTmp).eq(i).width();var iSetWidth=oSettings.aoColumns[i].sWidth?oSettings.aoColumns[i].sWidth.slice(0,-2):0;oSettings.aoColumns[iIndex].sWidth=Math.max(iContentWidth,iSetWidth)+&quot;px&quot;;}oSettings.nTable.parentNode.removeChild(nCalcTmp);}}function fnGetMaxLenString(oSettings,iCol){var iMax=0;var iMaxIndex=-1;for(var i=0;i&lt;oSettings.aoData.length;i++){if(oSettings.aoData[i]._aData[iCol].length&gt;iMax){iMax=oSettings.aoData[i]._aData[iCol].length;iMaxIndex=i;}}if(iMaxIndex&gt;=0){return oSettings.aoData[iMaxIndex]._aData[iCol];}return&quot;&quot;;}function _fnArrayCmp(aArray1,aArray2){if(aArray1.length!=aArray2.length){return 1;}for(var i=0;i&lt;aArray1.length;i++){if(aArray1[i]!=aArray2[i]){return 2;}}return 0;}function _fnDetectType(sData){var aTypes=_oExt.aTypes;var iLen=aTypes.length;for(var i=0;i&lt;iLen;i++){var sType=aTypes[i](sData);if(sType!==null){return sType;}}return&quot;string&quot;;}function _fnSettingsFromNode(nTable){for(var i=0;i&lt;_aoSettings.length;i++){if(_aoSettings[i].nTable==nTable){return _aoSettings[i];}}return null;}function _fnGetDataMaster(oSettings){var aData=[];var iLen=oSettings.aoData.length;for(var i=0;i&lt;iLen;i++){if(oSettings.aoData[i]===null){aData.push(null);}else{aData.push(oSettings.aoData[i]._aData);}}return aData;}function _fnGetTrNodes(oSettings){var aNodes=[];var iLen=oSettings.aoData.length;for(var i=0;i&lt;iLen;i++){if(oSettings.aoData[i]===null){aNodes.push(null);}else{aNodes.push(oSettings.aoData[i].nTr);}}return aNodes;}function _fnGetTdNodes(oSettings){var nTrs=_fnGetTrNodes(oSettings);var nTds=[],nTd;var anReturn=[];var iCorrector;var iRow,iRows,iColumn,iColumns;for(iRow=0,iRows=nTrs.length;iRow&lt;iRows;iRow++){nTds=[];for(iColumn=0,iColumns=nTrs[iRow].childNodes.length;iColumn&lt;iColumns;iColumn++){nTd=nTrs[iRow].childNodes[iColumn];if(nTd.nodeName==&quot;TD&quot;){nTds.push(nTd);}}iCorrector=0;for(iColumn=0,iColumns=oSettings.aoColumns.length;iColumn&lt;iColumns;iColumn++){if(oSettings.aoColumns[iColumn].bVisible){anReturn.push(nTds[iColumn-iCorrector]);}else{anReturn.push(oSettings.aoData[iRow]._anHidden[iColumn]);iCorrector++;}}}return anReturn;}function _fnEscapeRegex(sVal){var acEscape=[&quot;/&quot;,&quot;.&quot;,&quot;*&quot;,&quot;+&quot;,&quot;?&quot;,&quot;|&quot;,&quot;(&quot;,&quot;)&quot;,&quot;[&quot;,&quot;]&quot;,&quot;{&quot;,&quot;}&quot;,&quot;\\&quot;,&quot;$&quot;,&quot;^&quot;];var reReplace=new RegExp(&quot;(\\&quot;+acEscape.join(&quot;|\\&quot;)+&quot;)&quot;,&quot;g&quot;);return sVal.replace(reReplace,&quot;\\$1&quot;);}function _fnReOrderIndex(oSettings,sColumns){var aColumns=sColumns.split(&quot;,&quot;);var aiReturn=[];for(var i=0,iLen=oSettings.aoColumns.length;i&lt;iLen;i++){for(var j=0;j&lt;iLen;j++){if(oSettings.aoColumns[i].sName==aColumns[j]){aiReturn.push(j);break;}}}return aiReturn;}function _fnColumnOrdering(oSettings){var sNames=&quot;&quot;;for(var i=0,iLen=oSettings.aoColumns.length;i&lt;iLen;i++){sNames+=oSettings.aoColumns[i].sName+&quot;,&quot;;}if(sNames.length==iLen){return&quot;&quot;;}return sNames.slice(0,-1);}function _fnClearTable(oSettings){oSettings.aoData.length=0;oSettings.aiDisplayMaster.length=0;oSettings.aiDisplay.length=0;_fnCalculateEnd(oSettings);}function _fnSaveState(oSettings){if(!oSettings.oFeatures.bStateSave){return;}var i;var sValue=&quot;{&quot;;sValue+=&#39;&quot;iStart&quot;: &#39;+oSettings._iDisplayStart+&quot;,&quot;;sValue+=&#39;&quot;iEnd&quot;: &#39;+oSettings._iDisplayEnd+&quot;,&quot;;sValue+=&#39;&quot;iLength&quot;: &#39;+oSettings._iDisplayLength+&quot;,&quot;;sValue+=&#39;&quot;sFilter&quot;: &quot;&#39;+oSettings.oPreviousSearch.sSearch.replace(&#39;&quot;&#39;,&#39;\\&quot;&#39;)+&#39;&quot;,&#39;;sValue+=&#39;&quot;sFilterEsc&quot;: &#39;+oSettings.oPreviousSearch.bEscapeRegex+&quot;,&quot;;sValue+=&#39;&quot;aaSorting&quot;: [ &#39;;for(i=0;i&lt;oSettings.aaSorting.length;i++){sValue+=&quot;[&quot;+oSettings.aaSorting[i][0]+&quot;,&#39;&quot;+oSettings.aaSorting[i][1]+&quot;&#39;],&quot;;}sValue=sValue.substring(0,sValue.length-1);sValue+=&quot;],&quot;;sValue+=&#39;&quot;aaSearchCols&quot;: [ &#39;;for(i=0;i&lt;oSettings.aoPreSearchCols.length;i++){sValue+=&quot;[&#39;&quot;+oSettings.aoPreSearchCols[i].sSearch.replace(&quot;&#39;&quot;,&quot;&#39;&quot;)+&quot;&#39;,&quot;+oSettings.aoPreSearchCols[i].bEscapeRegex+&quot;],&quot;;}sValue=sValue.substring(0,sValue.length-1);sValue+=&quot;],&quot;;sValue+=&#39;&quot;abVisCols&quot;: [ &#39;;for(i=0;i&lt;oSettings.aoColumns.length;i++){sValue+=oSettings.aoColumns[i].bVisible+&quot;,&quot;;}sValue=sValue.substring(0,sValue.length-1);sValue+=&quot;]&quot;;sValue+=&quot;}&quot;;_fnCreateCookie(&quot;SpryMedia_DataTables_&quot;+oSettings.sInstance,sValue,oSettings.iCookieDuration);}function _fnLoadState(oSettings,oInit){if(!oSettings.oFeatures.bStateSave){return;}var oData;var sData=_fnReadCookie(&quot;SpryMedia_DataTables_&quot;+oSettings.sInstance);if(sData!==null&amp;&amp;sData!==&quot;&quot;){try{if(typeof JSON==&quot;object&quot;&amp;&amp;typeof JSON.parse==&quot;function&quot;){oData=JSON.parse(sData.replace(/&#39;/g,&#39;&quot;&#39;));}else{oData=eval(&quot;(&quot;+sData+&quot;)&quot;);}}catch(e){return;}oSettings._iDisplayStart=oData.iStart;oSettings.iInitDisplayStart=oData.iStart;oSettings._iDisplayEnd=oData.iEnd;oSettings._iDisplayLength=oData.iLength;oSettings.oPreviousSearch.sSearch=oData.sFilter;oSettings.aaSorting=oData.aaSorting.slice();oSettings.saved_aaSorting=oData.aaSorting.slice();if(typeof oData.sFilterEsc!=&quot;undefined&quot;){oSettings.oPreviousSearch.bEscapeRegex=oData.sFilterEsc;}if(typeof oData.aaSearchCols!=&quot;undefined&quot;){for(var i=0;i&lt;oData.aaSearchCols.length;i++){oSettings.aoPreSearchCols[i]={sSearch:oData.aaSearchCols[i][0],bEscapeRegex:oData.aaSearchCols[i][1]};}}if(typeof oData.abVisCols!=&quot;undefined&quot;){oInit.saved_aoColumns=[];for(i=0;i&lt;oData.abVisCols.length;i++){oInit.saved_aoColumns[i]={};oInit.saved_aoColumns[i].bVisible=oData.abVisCols[i];}}}}function _fnCreateCookie(sName,sValue,iSecs){var date=new Date();date.setTime(date.getTime()+(iSecs*1000));sName+=&quot;_&quot;+window.location.pathname.replace(/[\/:]/g,&quot;&quot;).toLowerCase();document.cookie=sName+&quot;=&quot;+encodeURIComponent(sValue)+&quot;; expires=&quot;+date.toGMTString()+&quot;; path=/&quot;;}function _fnReadCookie(sName){var sNameEQ=sName+&quot;_&quot;+window.location.pathname.replace(/[\/:]/g,&quot;&quot;).toLowerCase()+&quot;=&quot;;var sCookieContents=document.cookie.split(&quot;;&quot;);for(var i=0;i&lt;sCookieContents.length;i++){var c=sCookieContents[i];while(c.charAt(0)==&quot; &quot;){c=c.substring(1,c.length);}if(c.indexOf(sNameEQ)===0){return decodeURIComponent(c.substring(sNameEQ.length,c.length));}}return null;}function _fnGetUniqueThs(nThead){var nTrs=nThead.getElementsByTagName(&quot;tr&quot;);if(nTrs.length==1){return nTrs[0].getElementsByTagName(&quot;th&quot;);}var aLayout=[],aReturn=[];var ROWSPAN=2,COLSPAN=3,TDELEM=4;var i,j,k,iLen,jLen,iColumnShifted;var fnShiftCol=function(a,i,j){while(typeof a[i][j]!=&quot;undefined&quot;){j++;}return j;};var fnAddRow=function(i){if(typeof aLayout[i]==&quot;undefined&quot;){aLayout[i]=[];}};for(i=0,iLen=nTrs.length;i&lt;iLen;i++){fnAddRow(i);var iColumn=0;var nTds=[];for(j=0,jLen=nTrs[i].childNodes.length;j&lt;jLen;j++){if(nTrs[i].childNodes[j].nodeName==&quot;TD&quot;||nTrs[i].childNodes[j].nodeName==&quot;TH&quot;){nTds.push(nTrs[i].childNodes[j]);}}for(j=0,jLen=nTds.length;j&lt;jLen;j++){var iColspan=nTds[j].getAttribute(&quot;colspan&quot;)*1;var iRowspan=nTds[j].getAttribute(&quot;rowspan&quot;)*1;if(!iColspan||iColspan===0||iColspan===1){iColumnShifted=fnShiftCol(aLayout,i,iColumn);aLayout[i][iColumnShifted]=(nTds[j].nodeName==&quot;TD&quot;)?TDELEM:nTds[j];if(iRowspan||iRowspan===0||iRowspan===1){for(k=1;k&lt;iRowspan;k++){fnAddRow(i+k);aLayout[i+k][iColumnShifted]=ROWSPAN;}}iColumn++;}else{iColumnShifted=fnShiftCol(aLayout,i,iColumn);for(k=0;k&lt;iColspan;k++){aLayout[i][iColumnShifted+k]=COLSPAN;}iColumn+=iColspan;}}}for(i=0,iLen=aLayout[0].length;i&lt;iLen;i++){for(j=0,jLen=aLayout.length;j&lt;jLen;j++){if(typeof aLayout[j][i]==&quot;object&quot;){aReturn.push(aLayout[j][i]);}}}return aReturn;}function _fnMap(oRet,oSrc,sName,sMappedName){if(typeof sMappedName==&quot;undefined&quot;){sMappedName=sName;}if(typeof oSrc[sName]!=&quot;undefined&quot;){oRet[sMappedName]=oSrc[sName];}}this.oApi._fnInitalise=_fnInitalise;this.oApi._fnLanguageProcess=_fnLanguageProcess;this.oApi._fnAddColumn=_fnAddColumn;this.oApi._fnAddData=_fnAddData;this.oApi._fnGatherData=_fnGatherData;this.oApi._fnDrawHead=_fnDrawHead;this.oApi._fnDraw=_fnDraw;this.oApi._fnAjaxUpdate=_fnAjaxUpdate;this.oApi._fnAddOptionsHtml=_fnAddOptionsHtml;this.oApi._fnFeatureHtmlFilter=_fnFeatureHtmlFilter;this.oApi._fnFeatureHtmlInfo=_fnFeatureHtmlInfo;this.oApi._fnFeatureHtmlPaginate=_fnFeatureHtmlPaginate;this.oApi._fnPageChange=_fnPageChange;this.oApi._fnFeatureHtmlLength=_fnFeatureHtmlLength;this.oApi._fnFeatureHtmlProcessing=_fnFeatureHtmlProcessing;this.oApi._fnProcessingDisplay=_fnProcessingDisplay;this.oApi._fnFilterComplete=_fnFilterComplete;this.oApi._fnFilterColumn=_fnFilterColumn;this.oApi._fnFilter=_fnFilter;this.oApi._fnSortingClasses=_fnSortingClasses;this.oApi._fnVisibleToColumnIndex=_fnVisibleToColumnIndex;this.oApi._fnColumnIndexToVisible=_fnColumnIndexToVisible;this.oApi._fnNodeToDataIndex=_fnNodeToDataIndex;this.oApi._fnVisbleColumns=_fnVisbleColumns;this.oApi._fnBuildSearchArray=_fnBuildSearchArray;this.oApi._fnDataToSearch=_fnDataToSearch;this.oApi._fnCalculateEnd=_fnCalculateEnd;this.oApi._fnConvertToWidth=_fnConvertToWidth;this.oApi._fnCalculateColumnWidths=_fnCalculateColumnWidths;this.oApi._fnArrayCmp=_fnArrayCmp;this.oApi._fnDetectType=_fnDetectType;this.oApi._fnGetDataMaster=_fnGetDataMaster;this.oApi._fnGetTrNodes=_fnGetTrNodes;this.oApi._fnGetTdNodes=_fnGetTdNodes;this.oApi._fnEscapeRegex=_fnEscapeRegex;this.oApi._fnReOrderIndex=_fnReOrderIndex;this.oApi._fnColumnOrdering=_fnColumnOrdering;this.oApi._fnClearTable=_fnClearTable;this.oApi._fnSaveState=_fnSaveState;this.oApi._fnLoadState=_fnLoadState;this.oApi._fnCreateCookie=_fnCreateCookie;this.oApi._fnReadCookie=_fnReadCookie;this.oApi._fnGetUniqueThs=_fnGetUniqueThs;this.oApi._fnReDraw=_fnReDraw;var _that=this;return this.each(function(){var i=0,iLen,j,jLen;for(i=0,iLen=_aoSettings.length;i&lt;iLen;i++){if(_aoSettings[i].nTable==this){alert(&quot;DataTables warning: Unable to re-initialise DataTable. Please use the API to make any configuration changes required.&quot;);return _aoSettings[i];}}var oSettings=new classSettings();_aoSettings.push(oSettings);var bInitHandedOff=false;var bUsePassedData=false;var sId=this.getAttribute(&quot;id&quot;);if(sId!==null){oSettings.sTableId=sId;oSettings.sInstance=sId;}else{oSettings.sInstance=_oExt._oExternConfig.iNextUnique++;}oSettings.nTable=this;oSettings.oApi=_that.oApi;if(typeof oInit!=&quot;undefined&quot;&amp;&amp;oInit!==null){_fnMap(oSettings.oFeatures,oInit,&quot;bPaginate&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bLengthChange&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bFilter&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bSort&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bInfo&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bProcessing&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bAutoWidth&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bSortClasses&quot;);_fnMap(oSettings.oFeatures,oInit,&quot;bServerSide&quot;);_fnMap(oSettings,oInit,&quot;asStripClasses&quot;);_fnMap(oSettings,oInit,&quot;fnRowCallback&quot;);_fnMap(oSettings,oInit,&quot;fnHeaderCallback&quot;);_fnMap(oSettings,oInit,&quot;fnFooterCallback&quot;);_fnMap(oSettings,oInit,&quot;fnInitComplete&quot;);_fnMap(oSettings,oInit,&quot;fnServerData&quot;);_fnMap(oSettings,oInit,&quot;aaSorting&quot;);_fnMap(oSettings,oInit,&quot;aaSortingFixed&quot;);_fnMap(oSettings,oInit,&quot;sPaginationType&quot;);_fnMap(oSettings,oInit,&quot;sAjaxSource&quot;);_fnMap(oSettings,oInit,&quot;iCookieDuration&quot;);_fnMap(oSettings,oInit,&quot;sDom&quot;);_fnMap(oSettings,oInit,&quot;oSearch&quot;,&quot;oPreviousSearch&quot;);_fnMap(oSettings,oInit,&quot;aoSearchCols&quot;,&quot;aoPreSearchCols&quot;);_fnMap(oSettings,oInit,&quot;iDisplayLength&quot;,&quot;_iDisplayLength&quot;);_fnMap(oSettings,oInit,&quot;bJQueryUI&quot;,&quot;bJUI&quot;);if(typeof oInit.fnDrawCallback==&quot;function&quot;){oSettings.aoDrawCallback.push({fn:oInit.fnDrawCallback,sName:&quot;user&quot;});}if(oSettings.oFeatures.bServerSide&amp;&amp;oSettings.oFeatures.bSort&amp;&amp;oSettings.oFeatures.bSortClasses){oSettings.aoDrawCallback.push({fn:_fnSortingClasses,sName:&quot;server_side_sort_classes&quot;});}if(typeof oInit.bJQueryUI!=&quot;undefined&quot;&amp;&amp;oInit.bJQueryUI){oSettings.oClasses=_oExt.oJUIClasses;if(typeof oInit.sDom==&quot;undefined&quot;){oSettings.sDom=&#39;&lt;&quot;H&quot;lfr&gt;t&lt;&quot;F&quot;ip&gt;&#39;;}}if(typeof oInit.iDisplayStart!=&quot;undefined&quot;&amp;&amp;typeof oSettings.iInitDisplayStart==&quot;undefined&quot;){oSettings.iInitDisplayStart=oInit.iDisplayStart;oSettings._iDisplayStart=oInit.iDisplayStart;}if(typeof oInit.bStateSave!=&quot;undefined&quot;){oSettings.oFeatures.bStateSave=oInit.bStateSave;_fnLoadState(oSettings,oInit);oSettings.aoDrawCallback.push({fn:_fnSaveState,sName:&quot;state_save&quot;});}if(typeof oInit.aaData!=&quot;undefined&quot;){bUsePassedData=true;}if(typeof oInit!=&quot;undefined&quot;&amp;&amp;typeof oInit.aoData!=&quot;undefined&quot;){oInit.aoColumns=oInit.aoData;}if(typeof oInit.oLanguage!=&quot;undefined&quot;){if(typeof oInit.oLanguage.sUrl!=&quot;undefined&quot;&amp;&amp;oInit.oLanguage.sUrl!==&quot;&quot;){oSettings.oLanguage.sUrl=oInit.oLanguage.sUrl;$.getJSON(oSettings.oLanguage.sUrl,null,function(json){_fnLanguageProcess(oSettings,json,true);});bInitHandedOff=true;}else{_fnLanguageProcess(oSettings,oInit.oLanguage,false);}}}else{oInit={};}if(typeof oInit.asStripClasses==&quot;undefined&quot;){oSettings.asStripClasses.push(oSettings.oClasses.sStripOdd);oSettings.asStripClasses.push(oSettings.oClasses.sStripEven);}var nThead=this.getElementsByTagName(&quot;thead&quot;);var nThs=nThead.length===0?null:_fnGetUniqueThs(nThead[0]);var bUseCols=typeof oInit.aoColumns!=&quot;undefined&quot;;for(i=0,iLen=bUseCols?oInit.aoColumns.length:nThs.length;i&lt;iLen;i++){var oCol=bUseCols?oInit.aoColumns[i]:null;var nTh=nThs?nThs[i]:null;if(typeof oInit.saved_aoColumns!=&quot;undefined&quot;&amp;&amp;oInit.saved_aoColumns.length==iLen){if(oCol===null){oCol={};}oCol.bVisible=oInit.saved_aoColumns[i].bVisible;}_fnAddColumn(oSettings,oCol,nTh);}for(i=0,iLen=oSettings.aaSorting.length;i&lt;iLen;i++){var oColumn=oSettings.aoColumns[oSettings.aaSorting[i][0]];if(typeof oSettings.aaSorting[i][2]==&quot;undefined&quot;){oSettings.aaSorting[i][2]=0;}if(typeof oInit.aaSorting==&quot;undefined&quot;&amp;&amp;typeof oSettings.saved_aaSorting==&quot;undefined&quot;){oSettings.aaSorting[i][1]=oColumn.asSorting[0];}for(j=0,jLen=oColumn.asSorting.length;j&lt;jLen;j++){if(oSettings.aaSorting[i][1]==oColumn.asSorting[j]){oSettings.aaSorting[i][2]=j;break;}}}if(this.getElementsByTagName(&quot;thead&quot;).length===0){this.appendChild(document.createElement(&quot;thead&quot;));}if(this.getElementsByTagName(&quot;tbody&quot;).length===0){this.appendChild(document.createElement(&quot;tbody&quot;));}if(bUsePassedData){for(i=0;i&lt;oInit.aaData.length;i++){_fnAddData(oSettings,oInit.aaData[i]);}}else{_fnGatherData(oSettings);}oSettings.aiDisplay=oSettings.aiDisplayMaster.slice();if(oSettings.oFeatures.bAutoWidth){_fnCalculateColumnWidths(oSettings);}oSettings.bInitialised=true;if(bInitHandedOff===false){_fnInitalise(oSettings);}});};})(jQuery);var bibtexify=(function($){var htmlify=function(str){if(!str){return&quot;&quot;;}str=str.replace(/\\&quot;\{a\}/g,&quot;&amp;auml;&quot;).replace(/\{\\aa\}/g,&quot;&amp;aring;&quot;).replace(/\\aa\{\}/g,&quot;&amp;aring;&quot;).replace(/\\&quot;a/g,&quot;&amp;auml;&quot;).replace(/\\&quot;\{o\}/g,&quot;&amp;ouml;&quot;).replace(/\\&#39;e/g,&quot;&amp;eacute;&quot;).replace(/\\&#39;\{e\}/g,&quot;&amp;eacute;&quot;).replace(/\\&#39;a/g,&quot;&amp;aacute;&quot;).replace(/\\&#39;A/g,&quot;&amp;Aacute;&quot;).replace(/\\&quot;o/g,&quot;&amp;ouml;&quot;).replace(/\\&quot;u/g,&quot;&amp;uuml;&quot;).replace(/\\ss\{\}/g,&quot;&amp;szlig;&quot;).replace(/\{/g,&quot;&quot;).replace(/\}/g,&quot;&quot;).replace(/\\&amp;/g,&quot;&amp;&quot;).replace(/--/g,&quot;&amp;ndash;&quot;);return str;};var uriencode=function(str){if(!str){return&quot;&quot;;}str=str.replace(/\\&quot;\{a\}/g,&quot;%C3%A4&quot;).replace(/\{\\aa\}/g,&quot;%C3%A5&quot;).replace(/\\aa\{\}/g,&quot;%C3%A5&quot;).replace(/\\&quot;a/g,&quot;%C3%A4&quot;).replace(/\\&quot;\{o\}/g,&quot;%C3%B6&quot;).replace(/\\&#39;e/g,&quot;%C3%A9&quot;).replace(/\\&#39;\{e\}/g,&quot;%C3%A9&quot;).replace(/\\&#39;a/g,&quot;%C3%A1&quot;).replace(/\\&#39;A/g,&quot;%C3%81&quot;).replace(/\\&quot;o/g,&quot;%C3%B6&quot;).replace(/\\&quot;u/g,&quot;%C3%BC&quot;).replace(/\\ss\{\}/g,&quot;%C3%9F&quot;).replace(/\{/g,&quot;&quot;).replace(/\}/g,&quot;&quot;).replace(/\\&amp;/g,&quot;%26&quot;).replace(/--/g,&quot;%E2%80%93&quot;);return str;};var bib2html={entry2html:function(entryData,bib){var type=entryData.entryType.toLowerCase();if(array_keys(bib2html).indexOf(type)===-1){type=&quot;misc&quot;;entryData.entryType=type;}var itemStr=htmlify(bib2html[type](entryData));itemStr+=bib2html.links(entryData);itemStr+=bib2html.bibtex(entryData);if(bib.options.tweet&amp;&amp;entryData.url){itemStr+=bib2html.tweet(entryData,bib);}return itemStr.replace(/undefined[,.]?/g,&#39;&lt;span class=&quot;undefined&quot;&gt;missing&lt;/span&gt;&#39;);},authors2html:function(authorData){var authorsStr=&quot;&quot;;if(!authorData){return authorsStr;}for(var index=0;index&lt;authorData.length;index++){if(index&gt;0){authorsStr+=&quot;, &quot;;}authorsStr+=authorData[index].last;}return htmlify(authorsStr);},links:function(entryData){var itemStr=&quot;&quot;;if(entryData.url&amp;&amp;entryData.url.match(/.*\.pdf/)){itemStr+=&#39; (&lt;a title=&quot;PDF-version of this article&quot;  target=&quot;_blank&quot; href=&quot;&#39;+entryData.url+&#39;&quot;&gt;pdf&lt;/a&gt;)&#39;;}else{if(entryData.url){itemStr+=&#39; (&lt;a title=&quot;This article online&quot; target=&quot;_blank&quot; href=&quot;&#39;+entryData.url+&#39;&quot;&gt;link&lt;/a&gt;)&#39;;}}return itemStr;},bibtex:function(entryData){var itemStr=&quot;&quot;;itemStr+=&#39; (&lt;a title=&quot;This article as BibTeX&quot; href=&quot;#&quot; class=&quot;biblink&quot;&gt;bib&lt;/a&gt;)&lt;div class=&quot;bibinfo hidden&quot;&gt;&#39;;itemStr+=&#39;&lt;a href=&quot;#&quot; class=&quot;bibclose&quot; title=&quot;Close&quot;&gt;x&lt;/a&gt;&lt;pre&gt;&#39;;itemStr+=&quot;@&quot;+entryData.entryType+&quot;{&quot;+entryData.cite+&quot;,\n&quot;;$.each(entryData,function(key,value){if(key==&quot;author&quot;){itemStr+=&quot;  author = { &quot;;for(var index=0;index&lt;value.length;index++){if(index&gt;0){itemStr+=&quot; and &quot;;}itemStr+=value[index].last;}itemStr+=&quot; },\n&quot;;}else{if(key!=&quot;entryType&quot;&amp;&amp;key!=&quot;cite&quot;){itemStr+=&quot;  &quot;+key+&quot; = { &quot;+value+&quot; },\n&quot;;}}});itemStr+=&quot;}&lt;/pre&gt;&lt;/div&gt;&quot;;return itemStr;},tweet:function(entryData,bib){var itemStr=&#39; (&lt;a title=&quot;Tweet this article&quot; href=&quot;http://twitter.com/share?url=&#39;;itemStr+=entryData.url;itemStr+=&quot;&amp;via=&quot;+bib.options.tweet;itemStr+=&quot;&amp;text=&quot;;var splitName=function(wholeName){var spl=wholeName.split(&quot; &quot;);return spl[spl.length-1];};var auth=entryData.author;if(!auth){}else{if(auth.length==1){itemStr+=uriencode(splitName(auth[0].last));}else{if(auth.length==2){itemStr+=uriencode(splitName(auth[0].last)+&quot;%26&quot;+splitName(auth[1].last));}else{itemStr+=uriencode(splitName(auth[0].last)+&quot; et al&quot;);}}}itemStr+=&quot;: &quot;+uriencode(entryData.title);itemStr+=&#39;&quot; target=&quot;_blank&quot;&gt;tweet&lt;/a&gt;)&#39;;return itemStr;},inproceedings:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.title+&quot;. In &lt;em&gt;&quot;+entryData.booktitle+&quot;, pp. &quot;+entryData.pages+((entryData.address)?&quot;, &quot;+entryData.address:&quot;&quot;)+&quot;.&lt;/em&gt;&quot;;},article:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.title+&quot;. &lt;em&gt;&quot;+entryData.journal+&quot;, &quot;+entryData.volume+((entryData.number)?&quot;(&quot;+entryData.number+&quot;)&quot;:&quot;&quot;)+&quot;, pp. &quot;+entryData.pages+&quot;. &quot;+((entryData.address)?entryData.address+&quot;.&quot;:&quot;&quot;)+&quot;&lt;/em&gt;&quot;;},misc:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.title+&quot;. &quot;+((entryData.howpublished)?entryData.howpublished+&quot;. &quot;:&quot;&quot;)+((entryData.note)?entryData.note+&quot;.&quot;:&quot;&quot;);},mastersthesis:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.title+&quot;. &quot;+entryData.type+&quot;. &quot;+entryData.organization+&quot;, &quot;+entryData.school+&quot;.&quot;;},techreport:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.title+&quot;. &quot;+entryData.institution+&quot;. &quot;+entryData.number+&quot;. &quot;+entryData.type+&quot;.&quot;;},book:function(entryData){return this.authors2html(entryData.author||entryData.editor)+&quot; (&quot;+entryData.year+&quot;).  &lt;em&gt;&quot;+entryData.title+&quot;&lt;/em&gt;, &quot;+entryData.publisher+&quot;, &quot;+entryData.year+((entryData.issn)?&quot;, ISBN: &quot;+entryData.issn+&quot;.&quot;:&quot;.&quot;);},inbook:function(entryData){return this.authors2html(entryData.author)+&quot; (&quot;+entryData.year+&quot;). &quot;+entryData.chapter+&quot; in &lt;em&gt;&quot;+entryData.title+&quot;&lt;/em&gt;, &quot;+((entryData.editor)?&quot; Edited by &quot;+entryData.editor+&quot;, &quot;:&quot;&quot;)+entryData.publisher+&quot;, pp. &quot;+entryData.pages+&quot;&quot;+((entryData.series)?&quot;, &lt;em&gt;&quot;+entryData.series+&quot;&lt;/em&gt;&quot;:&quot;&quot;)+((entryData.volume)?&quot;, Vol. &quot;+entryData.volume+&quot;&quot;:&quot;&quot;)+((entryData.issn)?&quot;, ISBN: &quot;+entryData.issn+&quot;&quot;:&quot;&quot;)+&quot;.&quot;;},proceedings:function(entryData){return this.authors2html(entryData.editor)+&quot;, editor(s) (&quot;+entryData.year+&quot;).  &lt;em&gt;&quot;+entryData.title+&quot;.&lt;/em&gt;&quot;+((entryData.volume)?&quot;, Vol. &quot;+entryData.volume+&quot;&quot;:&quot;&quot;)+((entryData.address)?&quot;, &quot;+entryData.address:&quot;&quot;)+&quot;. &quot;+((entryData.organization)?+entryData.organization:&quot;&quot;)+((entryData.organization&amp;&amp;entryData.publisher)?&quot;, &quot;:&quot;&quot;)+(entryData.publisher?entryData.publisher+&quot;. &quot;:&quot;&quot;)+(entryData.note?entryData.note:&quot;&quot;);},importance:{TITLE:9999,misc:0,manual:10,techreport:20,mastersthesis:30,inproceedings:40,incollection:50,proceedings:60,conference:70,article:80,phdthesis:90,inbook:100,proceedings:105,book:110,unpublished:120},labels:{article:&quot;Journal&quot;,book:&quot;Book&quot;,conference:&quot;Conference&quot;,inbook:&quot;Book chapter&quot;,incollection:&quot;&quot;,inproceedings:&quot;Conference&quot;,manual:&quot;Manual&quot;,mastersthesis:&quot;Thesis&quot;,misc:&quot;Misc&quot;,phdthesis:&quot;PhD Thesis&quot;,proceedings:&quot;Conference proceeding&quot;,techreport:&quot;Technical report&quot;,unpublished:&quot;Unpublished&quot;}};bib2html.phdthesis=bib2html.mastersthesis;bib2html.conference=bib2html.inproceedings;var EventHandlers={showbib:function showbib(event){$(this).next(&quot;.bibinfo&quot;).removeClass(&quot;hidden&quot;).addClass(&quot;open&quot;);$(&quot;#shutter&quot;).show();event.preventDefault();},hidebib:function hidebib(event){$(&quot;#shutter&quot;).hide();$(&quot;.bibinfo.open&quot;).removeClass(&quot;open&quot;).addClass(&quot;hidden&quot;);event.preventDefault();}};var Bib2HTML=function(data,$pubTable,options){this.options=options;this.$pubTable=$pubTable;this.stats={};this.initialize(data);};var bibproto=Bib2HTML.prototype;bibproto.initialize=function initialize(data){var bibtex=new BibTex();bibtex.content=data;bibtex.parse();var bibentries=[],len=bibtex.data.length;var entryTypes={};jQuery.extend(true,bib2html,this.options.bib2html);for(var index=0;index&lt;len;index++){var item=bibtex.data[index];if(!item.year){item.year=this.options.defaultYear||&quot;To Appear&quot;;}try{var html=bib2html.entry2html(item,this);bibentries.push([item.year,bib2html.labels[item.entryType],html]);entryTypes[bib2html.labels[item.entryType]]=item.entryType;this.updateStats(item);}catch(e){console.error(&quot;Failed to process entry: &quot;,item);}}jQuery.fn.dataTableExt.oSort[&quot;type-sort-asc&quot;]=function(x,y){var item1=bib2html.importance[entryTypes[x]],item2=bib2html.importance[entryTypes[y]];return((item1&lt;item2)?-1:((item1&gt;item2)?1:0));};jQuery.fn.dataTableExt.oSort[&quot;type-sort-desc&quot;]=function(x,y){var item1=bib2html.importance[entryTypes[x]],item2=bib2html.importance[entryTypes[y]];return((item1&lt;item2)?1:((item1&gt;item2)?-1:0));};var table=this.$pubTable.dataTable($.extend({aaData:bibentries,aaSorting:this.options.sorting,aoColumns:[{sTitle:&quot;Year&quot;},{sTitle:&quot;Type&quot;,sType:&quot;type-sort&quot;,asSorting:[&quot;desc&quot;,&quot;asc&quot;]},{sTitle:&quot;Publication&quot;,bSortable:false}],bPaginate:false},this.options.datatable));if(this.options.visualization){this.addBarChart();}$(&quot;th&quot;,this.$pubTable).unbind(&quot;click&quot;).click(function(e){var $this=$(this),$thElems=$this.parent().find(&quot;th&quot;),index=$thElems.index($this);if($this.hasClass(&quot;sorting_disabled&quot;)){return;}$this.toggleClass(&quot;sorting_asc&quot;).toggleClass(&quot;sorting_desc&quot;);if(index===0){table.fnSort([[0,$thElems.eq(0).hasClass(&quot;sorting_asc&quot;)?&quot;asc&quot;:&quot;desc&quot;],[1,$thElems.eq(1).hasClass(&quot;sorting_asc&quot;)?&quot;asc&quot;:&quot;desc&quot;]]);}else{table.fnSort([[1,$thElems.eq(1).hasClass(&quot;sorting_asc&quot;)?&quot;asc&quot;:&quot;desc&quot;],[0,$thElems.eq(0).hasClass(&quot;sorting_asc&quot;)?&quot;asc&quot;:&quot;desc&quot;]]);}});$(&quot;.biblink&quot;,this.$pubTable).on(&quot;click&quot;,EventHandlers.showbib);$(&quot;.bibclose&quot;,this.$pubTable).on(&quot;click&quot;,EventHandlers.hidebib);};bibproto.updateStats=function updateStats(item){if(!this.stats[item.year]){this.stats[item.year]={count:1,types:{}};this.stats[item.year].types[item.entryType]=1;}else{this.stats[item.year].count+=1;if(this.stats[item.year].types[item.entryType]){this.stats[item.year].types[item.entryType]+=1;}else{this.stats[item.year].types[item.entryType]=1;}}};bibproto.addBarChart=function addBarChart(){var yearstats=[],max=0;$.each(this.stats,function(key,value){max=Math.max(max,value.count);yearstats.push({year:key,count:value.count,item:value,types:value.types});});yearstats.sort(function(a,b){var diff=a.year-b.year;if(!isNaN(diff)){return diff;}else{if(a.year&lt;b.year){return -1;}else{if(a.year&gt;b.year){return 1;}}}return 0;});var chartIdSelector=&quot;#&quot;+this.$pubTable[0].id+&quot;pubchart&quot;;var pubHeight=$(chartIdSelector).height()/max-2;var styleStr=chartIdSelector+&quot; .year { width: &quot;+(100/yearstats.length)+&quot;%; }&quot;+chartIdSelector+&quot; .pub { height: &quot;+pubHeight+&quot;px; }&quot;;var legendTypes=[];var stats2html=function(item){var types=[],str=&#39;&lt;div class=&quot;year&quot;&gt;&#39;,sum=0;$.each(item.types,function(type,value){types.push(type);sum+=value;});types.sort(function(x,y){return bib2html.importance[y]-bib2html.importance[x];});str+=&#39;&lt;div class=&quot;filler&quot; style=&quot;height:&#39;+((pubHeight+2)*(max-sum))+&#39;px;&quot;&gt;&lt;/div&gt;&#39;;for(var i=0;i&lt;types.length;i++){var type=types[i];if(legendTypes.indexOf(type)===-1){legendTypes.push(type);}for(var j=0;j&lt;item.types[type];j++){str+=&#39;&lt;div class=&quot;pub &#39;+type+&#39;&quot;&gt;&lt;/div&gt;&#39;;}}return str+&#39;&lt;div class=&quot;yearlabel&quot;&gt;&#39;+item.year+&quot;&lt;/div&gt;&lt;/div&gt;&quot;;};var statsHtml=&quot;&lt;style&gt;&quot;+styleStr+&quot;&lt;/style&gt;&quot;;yearstats.forEach(function(item){statsHtml+=stats2html(item);});var legendHtml=&#39;&lt;div class=&quot;legend&quot;&gt;&#39;;for(var i=0,l=legendTypes.length;i&lt;l;i++){var legend=legendTypes[i];legendHtml+=&#39;&lt;span class=&quot;pub &#39;+legend+&#39;&quot;&gt;&lt;/span&gt;&#39;+bib2html.labels[legend];}legendHtml+=&quot;&lt;/div&gt;&quot;;$(chartIdSelector).html(statsHtml).after(legendHtml);};return function(bibsrc,bibElemId,opts){var options=$.extend({},{visualization:true,sorting:[[0,&quot;desc&quot;],[1,&quot;desc&quot;]]},opts);var $pubTable=$(&quot;#&quot;+bibElemId).addClass(&quot;bibtable&quot;);if($(&quot;#shutter&quot;).length===0){$pubTable.before(&#39;&lt;div id=&quot;shutter&quot; class=&quot;hidden&quot;&gt;&lt;/div&gt;&#39;);$(&quot;#shutter&quot;).click(EventHandlers.hidebib);}if(options.visualization){$pubTable.before(&#39;&lt;div id=&quot;&#39;+bibElemId+&#39;pubchart&quot; class=&quot;bibchart&quot;&gt;&lt;/div&gt;&#39;);}var $bibSrc;if(bibsrc.indexOf(&quot;/&quot;)===-1){$bibSrc=$(bibsrc);}if($bibSrc&amp;&amp;$bibSrc.length){new Bib2HTML($bibSrc.html(),$pubTable,options);$bibSrc.hide();}else{var callbackHandler=function(data){new Bib2HTML(data,$pubTable,options);};$.get(bibsrc,callbackHandler,&quot;text&quot;);}};})(jQuery);</td>
      </tr>
</table>

  <div class="BlobToolbar position-absolute js-file-line-actions dropdown js-menu-container js-select-menu d-none" aria-hidden="true">
    <button class="btn-octicon ml-0 px-2 p-0 bg-white border border-gray-dark rounded-1 dropdown-toggle js-menu-target" id="js-file-line-action-button" type="button" aria-expanded="false" aria-haspopup="true" aria-label="Inline file action toolbar" aria-controls="inline-file-actions">
      <svg aria-hidden="true" class="octicon" height="16" version="1.1" viewBox="0 0 13 4" width="14">
        <g stroke="none" stroke-width="1" fill-rule="evenodd">
            <g transform="translate(-1.000000, -6.000000)">
                <path d="M2.5,9.5 C1.67157288,9.5 1,8.82842712 1,8 C1,7.17157288 1.67157288,6.5 2.5,6.5 C3.32842712,6.5 4,7.17157288 4,8 C4,8.82842712 3.32842712,9.5 2.5,9.5 Z M7.5,9.5 C6.67157288,9.5 6,8.82842712 6,8 C6,7.17157288 6.67157288,6.5 7.5,6.5 C8.32842712,6.5 9,7.17157288 9,8 C9,8.82842712 8.32842712,9.5 7.5,9.5 Z M12.5,9.5 C11.6715729,9.5 11,8.82842712 11,8 C11,7.17157288 11.6715729,6.5 12.5,6.5 C13.3284271,6.5 14,7.17157288 14,8 C14,8.82842712 13.3284271,9.5 12.5,9.5 Z"></path>
            </g>
        </g>
      </svg>
    </button>
    <div class="dropdown-menu-content js-menu-content" id="inline-file-actions">
      <ul class="BlobToolbar-dropdown dropdown-menu dropdown-menu-se mt-2">
        <li><a class="js-zeroclipboard dropdown-item" style="cursor:pointer;" id="js-copy-lines" data-original-text="Copy lines">Copy lines</a></li>
        <li><a class="js-zeroclipboard dropdown-item" id= "js-copy-permalink" style="cursor:pointer;" data-original-text="Copy permalink">Copy permalink</a></li>
        <li><a href="/vkaravir/bib-publication-list/blame/17d3122649f377fd549effc02f17ab7417bc6135/build/bib-list-min.js" class="dropdown-item js-update-url-with-hash" id="js-view-git-blame">View git blame</a></li>
          <li><a href="/vkaravir/bib-publication-list/issues/new" class="dropdown-item" id="js-new-issue">Open new issue</a></li>
      </ul>
    </div>
  </div>

  </div>

  </div>

  <button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
  <div id="jump-to-line" style="display:none">
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
      <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
      <button type="submit" class="btn">Go</button>
</form>  </div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="footer container-lg px-3" role="contentinfo">
  <div class="position-relative d-flex flex-justify-between py-6 mt-6 f6 text-gray border-top border-gray-light ">
    <ul class="list-style-none d-flex flex-wrap ">
      <li class="mr-3">&copy; 2017 <span title="0.23441s from unicorn-475173184-k0lls">GitHub</span>, Inc.</li>
        <li class="mr-3"><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li class="mr-3"><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li class="mr-3"><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li class="mr-3"><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>

    <a href="https://github.com" aria-label="Homepage" class="footer-octicon" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="list-style-none d-flex flex-wrap ">
        <li class="mr-3"><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li class="mr-3"><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li class="mr-3"><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li class="mr-3"><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li class="mr-3"><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" integrity="sha256-Sxs+Reu4luxVVaYLalcHLGmPG0uGt2qgtP4QZ/RAsfM=" src="https://assets-cdn.github.com/assets/frameworks-4b1b3e45ebb896ec5555a60b6a57072c698f1b4b86b76aa0b4fe1067f440b1f3.js"></script>
    
    <script async="async" crossorigin="anonymous" integrity="sha256-VwuLlgXAnUjpmdO+ThQ9FrjxCTXzOAUhDbv0jRB2hbA=" src="https://assets-cdn.github.com/assets/github-570b8b9605c09d48e999d3be4e143d16b8f10935f33805210dbbf48d107685b0.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

