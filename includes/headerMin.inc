        <header id="globalHeader" class="compact">
          <div id="globalHeaderContent">
            <h1 class="logo"><a href="/index.html" title="link to university of denver home page"><img src="/_resources/images/nav/logo2.gif" alt="University of Denver" width="140" height="40"/></a></h1>
            <section class="searchContainer">
              <ol class="headerSearchNav">
                <li><a rel="search" id="duSearch" href="#" onclick='DoDUSearch(document.getElementById("q").value); return false;'>Search DU</a></li>
                <li><a rel="search" id="otherSearch" href="#" onclick='DoOtherSearch(document.getElementById("q").value); return false;'>Search <span><script type="text/javascript">if(typeof(glbSearch) != "undefined")document.write(glbSearch);</script></span></a></li>
              </ol>
              <div class="headerSearch">
                <input name="q" type="search" id="q" placeholder="Search" title="Search" maxlength="255" dir="ltr" required="required" onKeyPress="return HandleSearch(event,this.value);" onKeyDown="return HandleSearch(event,this.value);" />
              </div>
              <nav id="globalUtilities">
                <ol>
                  <li><a href="/directory/" title="link to university directory">Directory</a>&nbsp;|</li>
                  <li><a href="/utilities/az/index.html" title="link to a-z directory">A-Z</a>&nbsp;|</li>
                  <li><a href="/utilities/sitemap/index.html" title="link to site map">Site Map</a></li>
                </ol>
              </nav>
            </section>
            <div class="clear">&nbsp;</div>
          </div>
        </header>
