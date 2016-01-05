#Rippleria

A jQuery Plugin for a wave effect in touch or click inspired by Google Material Design.

[DEMO PAGE](http://nsept.github.io/rippleria/)

##Installation

```bash
$ bower i -S rippleria
```

##Basic Usage

1. Include the required jQuery Rippleria stylesheet.
    ```html
    <link rel="stylesheet" href="bower_components/rippleria/dist/jquery.rippleria.min.css">
    ```

2. Include jQuery and jQuery-Rippleria.
    ```html
    <script src="bower_components/jquery/dist/jquery.min.js"></script>
    <script src="bower_components/rippleria/dist/jquery.rippleria.min.js"></script>
    ```

3. Call the plugin

    ```js
    <script>
        $(function() {
            $('.btn').rippleria();
        });
    </script>
    ```

    or just create an element with the `[data-rippleria]` data attribute defined.

    ```html
    <button class="btn btn-primary btn-lg" data-rippleria>Click me</button>
    ```

##Customization
Plugin options:

```js
<script>
    $(function() {
        $('.btn').rippleria({
            color: 'yellow', // Wave color
            easing: 'ease-in', // CSS3 Timing Function
            duration: 1000 // Wave lifetime
        });
    });
</script>
```

You can also define their via data attribures like this:

```html
<button class="btn btn-primary btn-lg" data-rippleria 
    data-rippleria-color="red" 
    data-rippleria-easing="ease-in" 
    data-rippleria-duration="1000">Click me</button>
```

You can also use the following css classes:

* ```.rippleria-dark``` for lighten backgrounds

* ```.rippleria-blured``` for smoothing wave

##Methods
```js
<script>
    $(function() {
        $('.btn').rippleria("changeColor", "blue");
        $('.btn').rippleria("changeEasing", "ease-in-out");
        $('.btn').rippleria("changeDuration", "500");
    });
</script>
```

##Browsers

I am tested her on the following browsers:
IE10, Firefox 43, Google Chrome 47

##License
MIT license.
