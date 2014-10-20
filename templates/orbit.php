<!doctype html>
<!--[if IE 9]>
<html class="lt-ie10" lang="en"> <![endif]-->
<html class="no-js" lang="en" data-useragent="Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Foundation Template | Orbit Home</title>
  <meta name="description" content="Documentation and reference library for ZURB Foundation. JavaScript, CSS, components, grid and more."/>
  <meta name="author" content="ZURB, inc. ZURB network also includes zurb.com"/>
  <meta name="copyright" content="ZURB, inc. Copyright (c) 2013"/>
  <link rel="stylesheet" href="../assets/css/templates/foundation.css"/>
  <script src="../assets/js/modernizr.js"></script>
</head>
<body>
<div class="row">
  <div class="large-3 columns">
    <h1><img src="http://placehold.it/400x100&text=Logo"/></h1>
  </div>
  <div class="large-9 columns">
    <ul class="right button-group">
      <li><a href="#" class="button">Link 1</a></li>
      <li><a href="#" class="button">Link 2</a></li>
      <li><a href="#" class="button">Link 3</a></li>
      <li><a href="#" class="button">Link 4</a></li>
    </ul>
  </div>
</div>


<div class="row">
  <div class="large-12 columns">
    <ul class="example-orbit" data-orbit>
      <li><img src="http://placehold.it/1000x400&amp;text=[%20img%201%20]"></li>
      <li><img src="http://placehold.it/1000x400&amp;text=[%20img%202%20]"></li>
      <li><img src="http://placehold.it/1000x400&amp;text=[%20img%203%20]"></li>
    </ul>
  </div>
</div>
<hr/>

<div class="row">
  <div class="large-4 columns">
    <img src="http://placehold.it/400x300&text=[img]"/>
    <h4>This is a content section.</h4>

    <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in
      reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit
      culpa. Boudin aliqua adipisicing rump corned beef.</p>
  </div>
  <div class="large-4 columns">
    <img src="http://placehold.it/400x300&text=[img]"/>
    <h4>This is a content section.</h4>

    <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in
      reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit
      culpa. Boudin aliqua adipisicing rump corned beef.</p>
  </div>
  <div class="large-4 columns">
    <img src="http://placehold.it/400x300&text=[img]"/>
    <h4>This is a content section.</h4>

    <p>Bacon ipsum dolor sit amet nulla ham qui sint exercitation eiusmod commodo, chuck duis velit. Aute in
      reprehenderit, dolore aliqua non est magna in labore pig pork biltong. Eiusmod swine spare ribs reprehenderit
      culpa. Boudin aliqua adipisicing rump corned beef.</p>
  </div>
</div>

<div class="row">
  <div class="large-12 columns">
    <div class="panel">
      <h4>Get in touch!</h4>

      <div class="row">
        <div class="large-9 columns">
          <p>We'd love to hear from you, you attractive person you.</p>
        </div>
        <div class="large-3 columns">
          <a href="#" class="radius button right">Contact Us</a>
        </div>
      </div>
    </div>
  </div>
</div>

<footer class="row">
  <div class="large-12 columns">
    <hr/>
    <div class="row">
      <div class="large-6 columns">
        <p>&copy; Copyright no one at all. Go to town.</p>
      </div>
      <div class="large-6 columns">
        <ul class="inline-list right">
          <li><a href="#">Link 1</a></li>
          <li><a href="#">Link 2</a></li>
          <li><a href="#">Link 3</a></li>
          <li><a href="#">Link 4</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<script src="../assets/js/jquery.js"></script>
<script src="../assets/js/templates/foundation.js"></script>
<script>
  $(document).foundation();

  var doc = document.documentElement;
  doc.setAttribute('data-useragent', navigator.userAgent);
</script>
</body>
</html>