<!DOCTYPE html>
<html>
  <head>
    <title>Aurelia</title>
    <link rel="stylesheet" type="text/css" href="/css/app.css">
    <link rel="stylesheet" type="text/css" href="/css/reset.css">
  </head>
  <body aurelia-app="src/main">
    <script src="scripts/system.js"></script>
    <script src="scripts/config-esnext.js"></script>
    <script src="scripts/aurelia-core.min.js"></script>
    <script>
        var systemLocate = System.locate;

        <!-- キャッシュを無効にする -->
        System.locate = function(load) {
            var System = this;
            return Promise.resolve(systemLocate.call(this, load)).then(function(address) {
                if(address.lastIndexOf("html.js") > -1) return address;
                if(address.lastIndexOf("css.js") > -1) return address;
                return address + System.cacheBust;
            });
        };
        System.cacheBust = '?bust=' + Date.now();

        System.import('aurelia-bootstrapper');
    </script>
  </body>
</html>
